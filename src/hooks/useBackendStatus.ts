import { getVersion } from 'api/api'
import { toast } from 'modules/toast'
import { useEffect, useState } from 'react'

export const useBackendStatus = () => {
    const [unavailable, setUnavailable] = useState(false)

    const getBackendStatus = async () => {
        try {
            const version = await getVersion()
            console.log(version)
        } catch (err) {
            setUnavailable(true)
        }
    }

    useEffect(() => {
        void getBackendStatus()
    }, [])

    useEffect(() => {
        if (unavailable) {
            toast.error('backend.unavailable')
        }
    }, [unavailable])
}
