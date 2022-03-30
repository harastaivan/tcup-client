import { useForm } from 'react-hook-form'

import * as yup from 'yup'

import { SubmitButton, useYupValidationResolver, phoneRegex } from 'modules/form'

import type { TFunction } from 'translations'
import type { FormDataResponse } from 'modules/registration/types'
import { FormFields, FormValues, Values } from './FormFields'
import { useTranslation } from 'react-i18next'

export const validationSchema = (t: TFunction) =>
    yup.object({
        [Values.NAME]: yup.string().required(t('form.field.required')),
        [Values.SURNAME]: yup.string().required(t('form.field.required')),
        [Values.EMAIL]: yup.string().required(t('form.field.required')),
        [Values.BIRTH_DATE]: yup.string(),
        [Values.PHONE]: yup
            .string()
            .required(t('form.field.required'))
            .matches(phoneRegex, t('form.registration.phone.error')),
        [Values.AEROCLUB]: yup.string().required(t('form.field.required')),
        [Values.REGION]: yup.string().required(t('form.field.required')),
        [Values.GLIDER_TYPE]: yup.string().required(t('form.field.required')),
        [Values.REGISTRATION_NUMBER]: yup.string().required(t('form.field.required')),
        [Values.START_NUMBER]: yup.string().required(t('form.field.required')),
        [Values.HAS_ENGINE]: yup.boolean().required(t('form.field.required')),
        [Values.COMPETITION_CLASS]: yup.string().required(t('form.field.required')),
        [Values.LOGGER]: yup.string().required(t('form.field.required')),
        [Values.ACCOMODATION_TYPE]: yup.string().required(t('form.field.required')),
        [Values.QUANTITY]: yup.number().required(t('form.field.required')).typeError(t('form.field.number')),
        [Values.MEALS]: yup.string().required(t('form.field.required')),
        [Values.NOTE]: yup.string(),
    })

interface RegistrationFormAsUserProps {
    defaultValues: Partial<FormValues>
    selectData: FormDataResponse
    submitData: (data: FormValues) => Promise<void>
    extend?: {}
}

export const RegistrationFormAsUserForm = ({ defaultValues, selectData, submitData }: RegistrationFormAsUserProps) => {
    const { t } = useTranslation()
    const resolver = useYupValidationResolver(validationSchema(t))
    const { handleSubmit, formState, control } = useForm<FormValues>({
        mode: 'all',
        resolver,
        defaultValues,
    })

    const onSubmit = handleSubmit(async (data) => {
        await submitData(data)
    })

    return (
        <form onSubmit={onSubmit}>
            <FormFields control={control} selectData={selectData} />

            <SubmitButton loading={formState.isSubmitting}>{t('form.registration.submit')}</SubmitButton>
        </form>
    )
}
