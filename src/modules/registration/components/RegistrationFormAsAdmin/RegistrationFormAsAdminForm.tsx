import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import * as yup from 'yup'

import { SubmitButton, useYupValidationResolver } from 'modules/form'
import type { TFunction } from 'translations'
import type { FormDataResponse } from 'modules/registration/types'

import { AdminFormFields, AdminFormValues, AdminValues } from './FormFields'
import { validationSchema as baseValidationSchema } from '../RegistrationFormAsUser'

const validationSchema = (t: TFunction) =>
    baseValidationSchema(t).shape({
        [AdminValues.IGC_ID]: yup.number().required(t('form.field.required')).typeError(t('form.field.number')),
        [AdminValues.REGISTRATION_COMPLETED]: yup.boolean().required(t('form.field.required')),
    })

interface RegistrationFormAsAdminProps {
    defaultValues: AdminFormValues
    selectData: FormDataResponse
    submitData: (data: AdminFormValues) => Promise<void>
}

export const RegistrationFormAsAdminForm = ({
    defaultValues,
    selectData,
    submitData,
}: RegistrationFormAsAdminProps) => {
    const { t } = useTranslation()
    const resolver = useYupValidationResolver(validationSchema(t))
    const { handleSubmit, formState, control } = useForm<AdminFormValues>({
        mode: 'all',
        resolver,
        defaultValues,
    })

    const onSubmit = handleSubmit(async (data) => {
        await submitData(data)
    })

    return (
        <form onSubmit={onSubmit}>
            <AdminFormFields control={control} selectData={selectData} />

            <SubmitButton loading={formState.isSubmitting}>{t('form.registration.submit')}</SubmitButton>
        </form>
    )
}
