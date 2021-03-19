import { AxiosRequestConfig } from 'axios'

export const tokenConfig = (token: string | null, contentType = 'application/json'): AxiosRequestConfig => {
    // Headers
    const config: AxiosRequestConfig = {
        headers: {
            'Content-Type': contentType,
        },
    }

    if (token) config.headers['x-auth-token'] = token

    return config
}
