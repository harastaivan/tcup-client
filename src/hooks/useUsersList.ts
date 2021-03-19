import axios from "axios"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { getIsAdmin } from "../store/auth/selectors"

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

const useUsersList = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const isAdmin = useSelector(getIsAdmin)

    const getUsers = async () => {
        const res = await axios.get(`${API_ENDPOINT}/api/auth/user`, tokenConfig(getState))
    }

    useEffect(() => {
        effect
    }, [])
}
