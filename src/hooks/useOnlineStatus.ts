import { toast } from 'modules/toast'
import { useEffect, useState } from 'react'

const getOnlineStatus = () => {
    return typeof navigator !== 'undefined' && typeof navigator.onLine === 'boolean' ? navigator.onLine : true
}

const refreshPage = () => {
    window.location.reload()
}

export const useOnlineStatus = (): boolean => {
    const [onlineStatus, setOnlineStatus] = useState(getOnlineStatus())

    const goOnline = () => {
        setOnlineStatus(true)
        refreshPage()
    }

    const goOffline = () => {
        setOnlineStatus(false)
        toast.error('Aplikace je offline')
    }

    useEffect(() => {
        window.addEventListener('online', goOnline)
        window.addEventListener('offline', goOffline)

        return () => {
            window.removeEventListener('online', goOnline)
            window.removeEventListener('offline', goOffline)
        }
    }, [])

    return onlineStatus
}
