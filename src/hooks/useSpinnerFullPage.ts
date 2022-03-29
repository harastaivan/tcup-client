import { SPINNER_TIMEOUT } from 'config/constants'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { getAuth } from 'store/auth/selectors'

export const useSpinnerFullPage = () => {
    const { isLoading } = useSelector(getAuth)
    const isLogin = useRouteMatch('/login')?.isExact || false
    const [show, setShow] = useState(true)
    const [mounted, setMounted] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, SPINNER_TIMEOUT)
    }, [])

    useEffect(() => {
        setTimeout(() => {
            if (!show) {
                setMounted(false)
            }
        }, 300)
    }, [show])

    return {
        showSpinner: show || (isLoading && !isLogin),
        mounted,
    }
}
