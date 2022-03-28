import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { getAuth } from 'store/auth/selectors'

const TIMEOUT = 2000

export const useSpinnerFullPage = () => {
    const { isLoading } = useSelector(getAuth)
    const isLogin = useRouteMatch('/login')?.isExact || false
    const [show, setShow] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setShow(false)
        }, TIMEOUT)
    }, [])

    return {
        showSpinner: show || (isLoading && !isLogin),
    }
}
