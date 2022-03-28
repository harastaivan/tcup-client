import type { SuccessState } from './types'

export enum successActionTypes {
    GET_SUCCESS = 'GET_SUCCESS',
    CLEAR_SUCCESS = 'CLEAR_SUCCESS',
}

export type ReturnSuccessAction = {
    type: typeof successActionTypes.GET_SUCCESS
    payload: SuccessState
}

export type ClearSuccessAction = {
    type: typeof successActionTypes.CLEAR_SUCCESS
}

export type SuccessAction = ReturnSuccessAction | ClearSuccessAction

export const returnSuccess = (msg: string, id: string | null = null): ReturnSuccessAction => {
    return {
        type: successActionTypes.GET_SUCCESS,
        payload: { msg, id },
    }
}

export const clearSuccess = (): ClearSuccessAction => {
    return {
        type: successActionTypes.CLEAR_SUCCESS,
    }
}
