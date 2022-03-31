import type { AxiosError } from 'axios'
import { parseError } from 'modules/toast'
import type { ErrorState } from './types'

export enum errorActionTypes {
    GET_ERRORS = 'GET_ERRORS',
    CLEAR_ERRORS = 'CLEAR_ERRORS',
}

export type ReturnErrorsAction = {
    type: typeof errorActionTypes.GET_ERRORS
    payload: ErrorState
}

export type ClearErrorsAction = {
    type: typeof errorActionTypes.CLEAR_ERRORS
}

export type ErrorAction = ReturnErrorsAction | ClearErrorsAction

export const returnErrors = (error: AxiosError, id: string | null = null): ReturnErrorsAction => {
    const { msg = null, status = null } = parseError(error)
    return {
        type: errorActionTypes.GET_ERRORS,
        payload: { msg, status, id },
    }
}

export const clearErrors = (): ClearErrorsAction => {
    return {
        type: errorActionTypes.CLEAR_ERRORS,
    }
}
