import { useTranslation } from 'react-i18next'
import type { Control } from 'react-hook-form'

import { LabelInput, Row, SwitchLabelInput } from 'modules/form'
import type { FormDataResponse } from 'modules/registration/types'
import { FormFields, FormValues } from '../RegistrationFormAsUser'

export enum AdminValues {
    REGISTRATION_COMPLETED = 'registrationCompleted',
    IGC_ID = 'igcId',
}

export interface AdminFormValues extends FormValues {
    [AdminValues.REGISTRATION_COMPLETED]: boolean
    [AdminValues.IGC_ID]: number
}

export interface AdminFormFieldsProps {
    control: Control<AdminFormValues>
    selectData: FormDataResponse
}

export const AdminFormFields = ({ control, selectData }: AdminFormFieldsProps) => {
    const { t } = useTranslation()
    return (
        <>
            {/* @ts-ignore */}
            <FormFields control={control} selectData={selectData} />
            <Row>
                <LabelInput
                    name={AdminValues.IGC_ID}
                    control={control}
                    label={t(`form.registration.${AdminValues.IGC_ID}.label` as const)}
                    required
                />
            </Row>
            <Row>
                <SwitchLabelInput
                    name={AdminValues.REGISTRATION_COMPLETED}
                    control={control}
                    label={t(`form.registration.${AdminValues.REGISTRATION_COMPLETED}.label` as const)}
                    required
                />
            </Row>
        </>
    )
}
