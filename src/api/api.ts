import axios from 'axios'
import { API_ENDPOINT } from 'config/constants'

export const getVersion = async () => {
    const res = await axios.get(`${API_ENDPOINT}`)

    return res.data
}
