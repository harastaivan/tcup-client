import { AxiosError } from "axios"
import { ErrorState } from "./types"

export enum errorActionTypes {
    GET_ERRORS = 'GET_ERRORS',
    CLEAR_ERRORS = 'CLEAR_ERRORS'
}

export type ReturnErrorsAction = {
    type: typeof errorActionTypes.GET_ERRORS
    payload: ErrorState
}

export type ClearErrorsAction = {
    type: typeof errorActionTypes.CLEAR_ERRORS
}

export type ErrorAction = ReturnErrorsAction | ClearErrorsAction

export const parseError = (error: AxiosError): Partial<ErrorState> => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            msg: error.response.data.msg,
            status: error.response.status,
        }
    } else if (error.request) {
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return {
            msg: error.message, // .msg ?
            status: error.request.status,
        }
    } else {
        return {
            msg: error.message, // .msg ?
            status: 500,
        }
    }
}

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
