import { useEffect } from 'react'
import type { UseFormResetField, UseFormWatch } from 'react-hook-form'
import { AdminFormValues, FormValues, Values } from '../components'
import type { FormDataResponse } from '../types'

export const useFilterSelectData = (
    watch: UseFormWatch<FormValues | AdminFormValues>,
    resetField: UseFormResetField<FormValues | AdminFormValues>
) => {
    const competitionClassId = watch(Values.COMPETITION_CLASS)

    useEffect(() => {
        resetField(Values.GLIDER_TYPE)
    }, [resetField, competitionClassId])

    const filterSelectData = (selectData: FormDataResponse): FormDataResponse => {
        const competitionClass = selectData.competitionClasses.find(
            (competitionClass) => competitionClass._id === competitionClassId
        )
        if (!competitionClass) {
            return {
                ...selectData,
                gliderTypes: [],
            }
        }

        return {
            ...selectData,
            gliderTypes: selectData.gliderTypes.filter(
                (gliderType) => gliderType.competitionClassType === competitionClass.type
            ),
        }
    }

    return { filterSelectData }
}
