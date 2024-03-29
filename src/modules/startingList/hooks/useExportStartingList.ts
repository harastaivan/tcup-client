import { useEffect } from 'react'
import { saveAs } from 'file-saver'

import formatDate from 'utils/formatDate'
import { toast } from 'modules/toast'

import { useLazyGetStartingListExportQuery } from '../services/api'

export const useExportStartingList = () => {
    const [trigger, { isLoading, isError, error, data }] = useLazyGetStartingListExportQuery()

    useEffect(() => {
        if (isError) {
            toast.error('error.generic')
        }
        if (isLoading || !data) {
            return
        }

        saveData(data)
    }, [isLoading, isError, error, data])

    const saveData = (data: any) => {
        const encoded = new TextEncoder().encode(data)
        const filename = `export-${formatDate()}.csv`
        saveAs(new Blob([encoded], { type: 'text/csv; charset=utf-8' }), filename, {
            autoBom: true,
        })
        toast.success('startingList.export.success')
    }

    const exportStartingList = () => {
        trigger()
    }

    return { exportStartingList, isLoading }
}
