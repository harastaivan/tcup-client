import type { AxiosRequestConfig } from 'axios'

export const tokenConfig = (token: string | null, contentType = 'application/json'): AxiosRequestConfig => {
    // Headers
    const config: AxiosRequestConfig = {
        headers: {
            'Content-Type': contentType,
        },
    }

    if (token) config.headers['Authorization'] = `Bearer ${token}`

    return config
}
