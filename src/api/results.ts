import { dailyResults, topResults, totalResults } from './mockData'

type TopResult = {
    position: number
    startNumber: string
    name: string
    aeroclub: string
    glider: string
    points: number
}

export type TotalResult = {
    gainedPosition: number
    handicap: number
} & TopResult

export type DailyResult = {
    flightId: number | null
} & TotalResult

type ClassTopResult = {
    id: string
    name: string
    results: TopResult[]
}

export type Filters = {
    classes: {
        id: string
        name: string
        days: {
            id: string
            name: string
            date: string
        }[]
    }[]
}

export type TopResults = {
    classes: ClassTopResult[]
}

export const getTopResults = (): Promise<TopResults> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(topResults())
        }, 500)
    })
}

export const getTotalResults = (classId: string): Promise<TotalResult[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const results = totalResults().classes.find((c) => c.id === classId)?.results
            resolve(results || [])
        }, 1000)
    })
}

export const getFilters = (): Promise<Filters> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const classes = dailyResults().classes.map((c) => ({
                id: c.id,
                name: c.name,
                days: c.days.map((day) => ({ id: day.id, name: day.name, date: day.date })),
            }))
            const filters = { classes }
            resolve(filters)
        }, 500)
    })
}

export const getDailyResults = (classId: string, dayId: string): Promise<DailyResult[]> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const days = dailyResults().classes.find((c) => c.id === classId)?.days
            const results = days?.find((d) => d.id === dayId)?.results

            resolve(results || [])
        }, 500)
    })
}
