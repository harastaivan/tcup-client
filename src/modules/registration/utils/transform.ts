import type { AdminFormValues, UserRegistrationFormValues } from '../components'
import type {
    AdminRegistrationRequestBody,
    AdminRegistrationResponseBody,
    RegistrationRequestBody,
    RegistrationResponseBody,
} from '../types'

export const transformResponseToFormValues = (response: RegistrationResponseBody): UserRegistrationFormValues => ({
    _id: response._id,
    birthDate: response.birthDate,
    phone: response.phone,
    aeroclub: response.aeroclub,
    region: response.region._id,
    gliderType: response.glider.gliderType._id,
    registrationNumber: response.glider.registrationNumber,
    startNumber: response.glider.startNumber,
    hasEngine: response.glider.hasEngine,
    competitionClass: response.competitionClass._id,
    logger: response.logger,
    accomodationType: response.accomodation.accomodationType._id,
    quantity: response.accomodation.quantity,
    meals: response.meals,
    note: response.note,
})

export const transformResponseToAdminFormValues = (response: AdminRegistrationResponseBody): AdminFormValues => ({
    ...transformResponseToFormValues(response),
    registrationCompleted: response.registrationCompleted,
    igcId: response.igcId,
    name: response.user.name,
    surname: response.user.surname,
    email: response.user.email,
})

export const transformFormValuesToRequest = (values: UserRegistrationFormValues): RegistrationRequestBody => ({
    _id: values._id,
    birthDate: values.birthDate,
    phone: values.phone,
    aeroclub: values.aeroclub,
    region: values.region,
    glider: {
        gliderType: values.gliderType,
        registrationNumber: values.registrationNumber,
        startNumber: values.startNumber,
        hasEngine: values.hasEngine,
    },
    competitionClass: values.competitionClass,
    logger: values.logger,
    accomodation: {
        accomodationType: values.accomodationType,
        quantity: values.quantity,
    },
    meals: values.meals,
    note: values.note,
})

export const transformAdminFormValuesToRequest = (values: AdminFormValues): AdminRegistrationRequestBody => ({
    ...transformFormValuesToRequest(values),
    registrationCompleted: values.registrationCompleted,
    igcId: values.igcId,
})
