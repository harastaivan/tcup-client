import axios from 'axios'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { getIsAdmin, getToken } from 'store/auth/selectors'
import { tokenConfig } from 'api/tokenConfig'
import { API_ENDPOINT } from 'config/constants'

export type User = {
    id: string
    name: string
    surname: string
    email: string
    admin: boolean
    passwordValid: boolean
}

const useUsersList = () => {
    const [users, setUsers] = useState<User[]>([])
    const [loading, setLoading] = useState(false)
    const isAdmin = useSelector(getIsAdmin)
    const token = useSelector(getToken)

    const getUsers = useCallback(async () => {
        setLoading(true)
        const res = await axios.get(`${API_ENDPOINT}/api/users`, tokenConfig(token))
        setUsers(res.data)
        setLoading(false)
    }, [token])

    const admins = users.filter((user: User) => user.admin)
    const others = users.filter((user: User) => !user.admin)

    useEffect(() => {
        if (isAdmin) {
            void getUsers()
        }
    }, [isAdmin, getUsers])

    return { users: { admins, others }, loading }
}

export default useUsersList
