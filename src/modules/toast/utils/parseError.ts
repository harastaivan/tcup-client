import type { AxiosError } from 'axios'

export const parseError = (error: AxiosError) => {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return {
            msg: error.response.data.msg as string,
            status: error.response.status as number,
        }
    }

    if (error.request) {
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        return {
            msg: error.message, // .msg ?
            status: error.request.status as number,
        }
    }

    return {
        msg: error.message, // .msg ?
        status: 500,
    }
}
