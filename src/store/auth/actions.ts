import type { AxiosError, AxiosRequestConfig } from 'axios'
import type { ThunkAction } from 'redux-thunk'

import {
    getLoggedInUser,
    updateUser,
    changeUserPassword,
    createUser,
    loginUser,
    UpdateUserBody,
    ChangePasswordBody,
    SignupBody,
    LoginBody,
} from '../../api/auth'
import { errorActionTypes, returnErrors } from '../error/actions'
import { returnSuccess, successActionTypes } from '../success/actions'
import type { AppState } from '../types'
import type { User } from './types'

export enum authActionTypes {
    USER_LOADING = 'USER_LOADING',
    USER_LOADED = 'USER_LOADED',
    AUTH_ERROR = 'AUTH_ERROR',
    REGISTER_SUCCESS = 'REGISTER_SUCCESS',
    REGISTER_FAIL = 'REGISTER_FAIL',
    LOGOUT_SUCCESS = 'LOGOUT_SUCCESS',
    LOGIN_SUCCESS = 'LOGIN_SUCCESS',
    LOGIN_FAIL = 'LOGIN_FAIL',
    USER_CHANGED = 'USER_CHANGED',
    USER_CHANGE_ERROR = 'USER_CHANGE_ERROR',
    USER_PASSWORD_CHANGED = 'USER_PASSWORD_CHANGED',
    USER_PASSWORD_CHANGE_ERROR = 'USER_PASSWORD_CHANGE_ERROR',
    TIMEOUT_LOGOUT_SUCCESS = 'TIMEOUT_LOGOUT_SUCCESS',
}

export type UserLoadedAction = {
    type: authActionTypes.USER_LOADED
    payload: User
}

export type LoadUserAction =
    | {
          type: authActionTypes.USER_LOADING | authActionTypes.AUTH_ERROR
      }
    | UserLoadedAction

export type UserInfoChangedAction = {
    type: authActionTypes.USER_CHANGED
    payload: {
        user: User
        admin: boolean
    }
}

export type ChangeUserInfoAction =
    | {
          type: authActionTypes.USER_CHANGE_ERROR | errorActionTypes.GET_ERRORS
      }
    | UserInfoChangedAction

export type UserPasswordChangedAction = {
    type: authActionTypes.USER_PASSWORD_CHANGED
    payload: {
        token: string
    }
}

export type ChangePasswordAction =
    | {
          type:
              | authActionTypes.USER_PASSWORD_CHANGE_ERROR
              | successActionTypes.GET_SUCCESS
              | errorActionTypes.GET_ERRORS
      }
    | UserPasswordChangedAction

export type UserAuthenticatedAction = {
    type: authActionTypes.REGISTER_SUCCESS | authActionTypes.LOGIN_SUCCESS
    payload: {
        token: string
        user: User
    }
}

export type RegisterUserAction =
    | {
          type: authActionTypes.REGISTER_FAIL | errorActionTypes.GET_ERRORS
      }
    | UserAuthenticatedAction

export type LoginAction =
    | {
          type:
              | authActionTypes.USER_LOADING
              | authActionTypes.LOGIN_FAIL
              | authActionTypes.TIMEOUT_LOGOUT_SUCCESS
              | errorActionTypes.GET_ERRORS
      }
    | UserAuthenticatedAction

export type LogoutAction = {
    type: authActionTypes.LOGOUT_SUCCESS
}

export type AuthAction =
    | LoadUserAction
    | ChangeUserInfoAction
    | ChangePasswordAction
    | RegisterUserAction
    | LoginAction
    | LogoutAction

let logoutTimer: NodeJS.Timeout | null = null

// Check token & load user
export const loadUser = (): ThunkAction<void, AppState, null, LoadUserAction> => async (dispatch, getState) => {
    try {
        // User loading
        dispatch({ type: authActionTypes.USER_LOADING })
        const user = await getLoggedInUser(tokenConfig(getState))
        dispatch({ type: authActionTypes.USER_LOADED, payload: user })
    } catch {
        // dispatch(returnErrors(err));
        dispatch({ type: authActionTypes.AUTH_ERROR })
    }
}

export const changeUserInfo = (body: UpdateUserBody): ThunkAction<void, AppState, null, ChangeUserInfoAction> => async (
    dispatch,
    getState
) => {
    try {
        const user = await updateUser(body, tokenConfig(getState))
        dispatch({ type: authActionTypes.USER_CHANGED, payload: user })
    } catch (err) {
        dispatch(returnErrors(err as AxiosError))
        dispatch({ type: authActionTypes.USER_CHANGE_ERROR })
    }
}

export const changePassword = (
    body: ChangePasswordBody
): ThunkAction<void, AppState, null, ChangePasswordAction> => async (dispatch, getState) => {
    try {
        const res = await changeUserPassword(body, tokenConfig(getState))
        dispatch({ type: authActionTypes.USER_PASSWORD_CHANGED, payload: res })
        dispatch(returnSuccess('Heslo bylo změněno', authActionTypes.USER_PASSWORD_CHANGED))
    } catch (err) {
        dispatch(returnErrors(err as AxiosError, authActionTypes.USER_PASSWORD_CHANGE_ERROR))
        dispatch({ type: authActionTypes.USER_PASSWORD_CHANGE_ERROR })
    }
}

export const register = (body: SignupBody): ThunkAction<void, AppState, null, RegisterUserAction> => async (
    dispatch
) => {
    const config: AxiosRequestConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    try {
        const res = await createUser(body, config)
        dispatch({ type: authActionTypes.REGISTER_SUCCESS, payload: res })
    } catch (err) {
        dispatch({
            type: authActionTypes.REGISTER_FAIL,
        })
        dispatch(returnErrors(err as AxiosError, authActionTypes.REGISTER_FAIL))
    }
}

export const login = (body: LoginBody): ThunkAction<void, AppState, null, LoginAction> => async (dispatch) => {
    // Headers
    const config = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    dispatch({ type: authActionTypes.USER_LOADING })
    try {
        const res = await loginUser(body, config)
        dispatch({ type: authActionTypes.LOGIN_SUCCESS, payload: res })
        logoutTimer = setTimeout(() => {
            dispatch({ type: authActionTypes.TIMEOUT_LOGOUT_SUCCESS })
        }, 59 * 60 * 1000)
    } catch (err) {
        dispatch({
            type: authActionTypes.LOGIN_FAIL,
        })
        dispatch(returnErrors(err as AxiosError, authActionTypes.LOGIN_FAIL))
    }
}

export const logout = (): LogoutAction => {
    if (logoutTimer) {
        clearTimeout(logoutTimer)
        logoutTimer = null
    }

    return {
        type: authActionTypes.LOGOUT_SUCCESS,
    }
}

// Setup config/headers and token
export const tokenConfig = (getState: () => AppState, contentType = 'application/json'): AxiosRequestConfig => {
    // Get token from sessionStorage
    const token = getState().auth.token

    // Headers
    const config: AxiosRequestConfig = {
        headers: {
            'Content-Type': contentType,
        },
    }

    if (token) config.headers['Authorization'] = `Bearer ${token}`

    return config
}
