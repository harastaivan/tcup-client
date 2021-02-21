import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const useSendEmail = () => {
    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false)
    const [error, setError] = useState('')
    const [email, setEmail] = useState('')

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDone(false)
        setError('')
        setEmail(event.target.value)
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        setDone(false)
        setError('')
        try {
            await axios.post(`${API_ENDPOINT}/api/auth/reset-password`, { email })
            setDone(true)
        } catch (err) {
            setError((err as AxiosError).response?.data?.msg || 'error')
        }
        setLoading(false)
    }

    return { email, onChangeEmail, done, loading, error, submit }
}

export const useResetPassword = (token: string) => {
    const [loading, setLoading] = useState(false)
    const [tokenValid, setTokenValid] = useState(false)
    const [passwordChanged, setPasswordChanged] = useState(false)
    const [error, setError] = useState('')

    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordChanged(false)
        setError('')
        setPassword(event.target.value)
    }

    const onChangePasswordCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordChanged(false)
        setError('')
        setPasswordCheck(event.target.value)
    }

    const isTokenValid = async (token: string) => {
        setLoading(true)
        setTokenValid(false)
        setError('')
        try {
            await axios.post(`${API_ENDPOINT}/api/auth/reset-password/valid`, { token })
            setTokenValid(true)
        } catch (err) {
            setError((err as AxiosError).response?.data?.msg || 'error')
        }
        setLoading(false)
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        setPasswordChanged(false)
        if (password !== passwordCheck) {
            setError('Hesla se neshodují')
            setLoading(false)
            return
        }
        setError('')
        try {
            await axios.post(`${API_ENDPOINT}/api/auth/reset-password/reset`, { token, password })
            setPasswordChanged(true)
        } catch (err) {
            setError((err as AxiosError).response?.data?.msg || 'error')
        }
        setLoading(false)
    }

    useEffect(() => {
        void isTokenValid(token)
    }, [token])

    return {
        loading,
        tokenValid,
        passwordChanged,
        error,
        password,
        onChangePassword,
        passwordCheck,
        onChangePasswordCheck,
        submit,
    }
}
