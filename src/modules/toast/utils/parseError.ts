import type { AxiosError } from 'axios'
import type { TKey } from 'translations'

export const parseError = (error: AxiosError) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            msg: getMessage(error.response.data.msg),
            status: error.response.status as number,
        }
    }

    if (error.request) {
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return {
            msg: getMessage(error.message),
            status: error.request.status as number,
        }
    }

    return {
        msg: getMessage(error.message),
        status: 500,
    }
}

export const getMessage = (message?: string): TKey => {
    if (message) {
        return message as TKey
    }

    return 'error.generic'
}
