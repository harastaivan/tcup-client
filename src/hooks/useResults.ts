import { useEffect, useState } from 'react'
import {
    Filters,
    getDailyResults,
    getFilters,
    getTopResults,
    getTotalResults,
    TopResults,
    TotalResult,
    DailyResult,
} from '../api/results'

type TopResultsState = {
    results: TopResults | null
    loaded: boolean
    error: string | null
}

type TotalResultsState = {
    results: TotalResult[] | null
    loaded: boolean
    error: string | null
}

type DailyResultsState = {
    filters: Filters | null
    filtersLoaded: boolean
    selectedDay: { classId: string | null; dayId: string | null }
    selectDay: (classId: string, dayId: string) => void
    results: DailyResult[] | null
    loaded: boolean
    error: string | null
}

export const useTopResults = (): TopResultsState => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [results, setResults] = useState<TopResults | null>(null)

    const fetchResults = async () => {
        try {
            const results = await getTopResults()
            setResults(results)
            setLoaded(true)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        void fetchResults()
    }, [])

    return {
        results,
        loaded,
        error,
    }
}

export const useTotalResults = (classId: string): TotalResultsState => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [results, setResults] = useState<TotalResult[] | null>(null)

    const fetchResults = async (classId: string) => {
        try {
            const results = await getTotalResults(classId)
            setResults(results)
            setLoaded(true)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        void fetchResults(classId)
    }, [classId])

    return {
        results,
        loaded,
        error,
    }
}

export const useDailyResults = (classId: string): DailyResultsState => {
    const [filters, setFilters] = useState<Filters | null>(null)
    const [filtersLoaded, setFiltersLoaded] = useState(false)
    const [selectedClassId, setSelectedClassId] = useState<string | null>(classId)
    const [selectedDayId, setSelectedDayId] = useState<string | null>(null)

    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [results, setResults] = useState<DailyResult[] | null>(null)

    const selectDay = (classId: string, dayId: string) => {
        setSelectedClassId(classId)
        setSelectedDayId(dayId)
    }

    const fetchFilters = async () => {
        try {
            const filters = await getFilters()
            setFilters(filters)
            setFiltersLoaded(true)
        } catch (err) {
            setError(err)
        }
    }

    const fetchResults = async (classId: string | null, dayId: string | null) => {
        if (!classId || !dayId) {
            return
        }
        setLoaded(false)
        try {
            const results = await getDailyResults(classId, dayId)
            setResults(results)
            setLoaded(true)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        void fetchFilters()
    }, [])

    useEffect(() => {
        if (!filters) {
            return
        }
        if (selectedClassId === null) {
            setSelectedClassId(filters.classes[0].id)
        }
        if (selectedDayId === null) {
            const days = filters.classes.find((c) => c.id === selectedClassId)?.days
            setSelectedDayId((days && days[0].id) || null)
        }
    }, [filters, selectedClassId, selectedDayId])

    useEffect(() => {
        void fetchResults(selectedClassId, selectedDayId)
    }, [selectedClassId, selectedDayId])

    return {
        filters,
        filtersLoaded,
        selectedDay: {
            classId: selectedClassId,
            dayId: selectedDayId,
        },
        selectDay,
        results,
        loaded,
        error,
    }
}
