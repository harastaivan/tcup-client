import { useTranslation } from 'react-i18next'
import type { Control } from 'react-hook-form'

import { LabelInput, Row, SelectLabelInput, SwitchLabelInput } from 'modules/form'
import type { TKey } from 'translations'
import type {
    AccomodationType,
    CompetitionClass,
    FormDataResponse,
    GliderType,
    Region,
} from 'modules/registration/types'

export enum Values {
    NAME = 'name',
    SURNAME = 'surname',
    EMAIL = 'email',
    BIRTH_DATE = 'birthDate',
    PHONE = 'phone',
    AEROCLUB = 'aeroclub',
    REGION = 'region',
    GLIDER_TYPE = 'gliderType',
    REGISTRATION_NUMBER = 'registrationNumber',
    START_NUMBER = 'startNumber',
    HAS_ENGINE = 'hasEngine',
    COMPETITION_CLASS = 'competitionClass',
    LOGGER = 'logger',
    ACCOMODATION_TYPE = 'accomodationType',
    QUANTITY = 'quantity',
    MEALS = 'meals',
    NOTE = 'note',
}

export interface UserRegistrationFormValues {
    _id: string
    [Values.BIRTH_DATE]: string
    [Values.PHONE]: string
    [Values.AEROCLUB]: string
    [Values.REGION]: Region['_id']
    [Values.GLIDER_TYPE]: GliderType['_id']
    [Values.REGISTRATION_NUMBER]: string
    [Values.START_NUMBER]: string
    [Values.HAS_ENGINE]: boolean
    [Values.COMPETITION_CLASS]: CompetitionClass['_id']
    [Values.LOGGER]: string
    [Values.ACCOMODATION_TYPE]: AccomodationType['_id']
    [Values.QUANTITY]: number
    [Values.MEALS]: string
    [Values.NOTE]: string
}

export interface FormValues extends UserRegistrationFormValues {
    [Values.NAME]: string
    [Values.SURNAME]: string
    [Values.EMAIL]: string
}

export interface FormFieldsProps {
    control: Control<FormValues>
    selectData: FormDataResponse
}

export const FormFields = ({ control, selectData }: FormFieldsProps) => {
    const { t } = useTranslation()
    return (
        <>
            <Row>
                <LabelInput
                    name={Values.NAME}
                    control={control}
                    label={t(`form.registration.${Values.NAME}.label` as const)}
                    required
                    disabled
                />
                <LabelInput
                    name={Values.SURNAME}
                    control={control}
                    label={t(`form.registration.${Values.SURNAME}.label` as const)}
                    required
                    disabled
                />
            </Row>
            <LabelInput
                name={Values.EMAIL}
                type="email"
                control={control}
                label={t(`form.registration.${Values.EMAIL}.label` as const)}
                required
                disabled
            />
            <Row>
                <LabelInput
                    name={Values.BIRTH_DATE}
                    type="date"
                    control={control}
                    label={t(`form.registration.${Values.BIRTH_DATE}.label` as const)}
                />

                <LabelInput
                    name={Values.PHONE}
                    control={control}
                    label={t(`form.registration.${Values.PHONE}.label` as const)}
                    required
                />
            </Row>
            <Row>
                <LabelInput
                    name={Values.AEROCLUB}
                    control={control}
                    label={t(`form.registration.${Values.AEROCLUB}.label` as const)}
                    required
                />

                <SelectLabelInput
                    name={Values.REGION}
                    type="select"
                    control={control}
                    label={t(`form.registration.${Values.REGION}.label` as const)}
                    required
                    selectData={selectData.regions}
                    translate={(region: Region) => t(`region.${region.name}` as TKey)}
                />
            </Row>
            <Row>
                <SelectLabelInput
                    name={Values.GLIDER_TYPE}
                    type="select"
                    control={control}
                    label={t(`form.registration.${Values.GLIDER_TYPE}.label` as const)}
                    required
                    selectData={selectData.gliderTypes}
                    translate={({ name, index }: GliderType) => `${name} (${index})`}
                />

                <LabelInput
                    name={Values.REGISTRATION_NUMBER}
                    control={control}
                    label={t(`form.registration.${Values.REGISTRATION_NUMBER}.label` as const)}
                    required
                />

                <LabelInput
                    name={Values.START_NUMBER}
                    control={control}
                    label={t(`form.registration.${Values.START_NUMBER}.label` as const)}
                    required
                />
            </Row>
            <Row>
                <SwitchLabelInput
                    name={Values.HAS_ENGINE}
                    control={control}
                    label={t(`form.registration.${Values.HAS_ENGINE}.label` as const)}
                    required
                />
            </Row>
            <Row>
                <SelectLabelInput
                    name={Values.COMPETITION_CLASS}
                    type="select"
                    control={control}
                    label={t(`form.registration.${Values.COMPETITION_CLASS}.label` as const)}
                    required
                    selectData={selectData.competitionClasses}
                    translate={({ type }) => t(`competitionClass.${type}` as const)}
                />

                <LabelInput
                    name={Values.LOGGER}
                    control={control}
                    label={t(`form.registration.${Values.LOGGER}.label` as const)}
                    required
                />
            </Row>
            <Row>
                <SelectLabelInput
                    name={Values.ACCOMODATION_TYPE}
                    type="select"
                    control={control}
                    label={t(`form.registration.${Values.ACCOMODATION_TYPE}.label` as const)}
                    required
                    selectData={selectData.accomodationTypes}
                    translate={({ name }: AccomodationType) => t(`accomodationType.${name}` as TKey)}
                />

                <LabelInput
                    name={Values.QUANTITY}
                    control={control}
                    label={t(`form.registration.${Values.QUANTITY}.label` as const)}
                    required
                />
            </Row>
            <Row>
                <LabelInput
                    name={Values.MEALS}
                    control={control}
                    label={t(`form.registration.${Values.MEALS}.label` as const)}
                    required
                />
            </Row>
            <Row>
                <LabelInput
                    name={Values.NOTE}
                    control={control}
                    label={t(`form.registration.${Values.NOTE}.label` as const)}
                    required
                />
            </Row>
        </>
    )
}
