import axios, { AxiosRequestConfig } from 'axios'
import { API_ENDPOINT } from 'config/constants'

export interface UpdateUserBody {
    name: string
    surname: string
    email: string
}

export interface ChangePasswordBody {
    oldPassword: string
    newPassword: string
}

export interface SignupBody {
    name: string
    surname: string
    email: string
    password: string
}

export interface LoginBody {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    user: {
        id: string
        name: string
        surname: string
        email: string
        admin: boolean
    }
}

export const getLoggedInUser = async (config: AxiosRequestConfig) => {
    const res = await axios.get(`${API_ENDPOINT}/api/auth/user`, config)

    return res.data
}

export const updateUser = async (body: UpdateUserBody, config: AxiosRequestConfig) => {
    const res = await axios.put(`${API_ENDPOINT}/api/users`, body, config)

    return res.data
}

export const changeUserPassword = async (body: ChangePasswordBody, config: AxiosRequestConfig) => {
    const res = await axios.post(`${API_ENDPOINT}/api/auth/change-password`, body, config)

    return res.data
}

export const createUser = async (body: SignupBody, config: AxiosRequestConfig) => {
    const res = await axios.post(`${API_ENDPOINT}/api/users`, body, config)

    return res.data
}

export const loginUser = async (body: LoginBody, config: AxiosRequestConfig) => {
    const res = await axios.post(`${API_ENDPOINT}/api/auth`, body, config)

    return res.data as LoginResponse
}
