import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'

import { API_ENDPOINT } from 'config/constants'
import { toast } from 'modules/toast'

export const useSendEmail = () => {
    const [loading, setLoading] = useState(false)
    const [email, setEmail] = useState('')

    const onChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        try {
            await axios.post(`${API_ENDPOINT}/api/auth/reset-password`, { email })
            toast.success(
                'Na váš email by Vám měl přijít obnovovací odkaz. Pokud nepřijde, kontaktujte administrátora prosím.'
            )
        } catch (err) {
            toast.apiError(err as AxiosError)
        }
        setLoading(false)
    }

    useEffect(() => {
        toast('Na váš email Vám přijde obnovovací odkaz.')
    }, [])

    return { email, onChangeEmail, loading: loading, submit }
}

export const useResetPassword = (token: string) => {
    const [loading, setLoading] = useState(false)
    const [tokenValid, setTokenValid] = useState(false)
    const [passwordChanged, setPasswordChanged] = useState(false)

    const [password, setPassword] = useState('')
    const [passwordCheck, setPasswordCheck] = useState('')

    const onChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordChanged(false)
        setPassword(event.target.value)
    }

    const onChangePasswordCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPasswordChanged(false)
        setPasswordCheck(event.target.value)
    }

    const isTokenValid = async (token: string) => {
        setLoading(true)
        setTokenValid(false)
        try {
            await axios.post(`${API_ENDPOINT}/api/auth/reset-password/valid`, { token })
            setTokenValid(true)
            toast('Vytvořte si nové heslo.')
        } catch (err) {
            toast.apiError(err as AxiosError)
        }
        setLoading(false)
    }

    const submit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setLoading(true)
        setPasswordChanged(false)
        if (password !== passwordCheck) {
            toast.error('Hesla se neshodují')
            setLoading(false)
            return
        }
        try {
            await axios.post(`${API_ENDPOINT}/api/auth/reset-password/reset`, { token, password })
            setPasswordChanged(true)
            toast.success('Vaše heslo bylo úspěšně změněno. Můžete se přihlásit.')
        } catch (err) {
            toast.apiError(err as AxiosError)
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
        password,
        onChangePassword,
        passwordCheck,
        onChangePasswordCheck,
        submit,
    }
}
