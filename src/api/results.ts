import axios from 'axios'

type TopResult = {
    position: number
    name: string
    aeroclub: string
    glider: string
    points: number
}

export type TotalResult = {
    handicap: number
} & TopResult

export type DailyResult = {
    flightId: number | null
} & TotalResult

type ClassTopResult = {
    _id: string
    name: string
    results: TopResult[]
}

export type Filters = {
    classes: {
        _id: string
        name: string
        days: {
            _id: string
            name: string
            date: string
        }[]
    }[]
}

export type TopResults = {
    classes: ClassTopResult[]
}

const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT

export const getTopResults = async (): Promise<TopResults> => {
    const res = await axios.get(`${API_ENDPOINT}/api/results/top`)
    return res.data
}

export const getTotalResults = async (classId: string): Promise<TotalResult[]> => {
    const res = await axios.get(`${API_ENDPOINT}/api/results/total/${classId}`)
    return res.data
}

export const getFilters = async (): Promise<Filters> => {
    const res = await axios.get(`${API_ENDPOINT}/api/results/daily/filters`)
    return res.data
}

export const getDailyResults = async (classId: string, dayId: string): Promise<DailyResult[]> => {
    const res = await axios.get(`${API_ENDPOINT}/api/results/daily/${classId}/${dayId}`)
    return res.data
}
