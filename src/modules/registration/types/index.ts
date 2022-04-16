export interface AccomodationType {
    _id: string
    name: string
    updatedAt: string
    createdAt: string
}

enum CompetitionClassType {
    CLUB = 'club',
    KOMBI = '18_meter',
}

export interface CompetitionClass {
    _id: string
    name: string
    type: CompetitionClassType
    soaringSpotId: number
    updatedAt: string
    createdAt: string
}

export interface GliderType {
    _id: string
    name: string
    index: number
    handicap: number
    competitionClassType: CompetitionClassType
}

export interface Region {
    _id: string
    name: string
    updatedAt: string
    createdAt: string
}

export interface FormDataResponse {
    accomodationTypes: AccomodationType[]
    competitionClasses: CompetitionClass[]
    gliderTypes: GliderType[]
    regions: Region[]
}

export interface RegistrationResponseBody
    extends Omit<RegistrationRequestBody, 'region' | 'competitionClass' | 'glider' | 'accomodation'> {
    updatedAt: string
    createdAt: string
    region: Region
    competitionClass: CompetitionClass
    glider: {
        hasEngine: boolean
        gliderType: GliderType
        registrationNumber: string
        startNumber: string
    }
    accomodation: {
        quantity: number
        accomodationType: AccomodationType
    }
    user: {
        admin: boolean
        _id: string
        name: string
        surname: string
        email: string
        createdAt: string
        updatedAt: string
    }
}

export interface AdminRegistrationResponseBody extends RegistrationResponseBody {
    igcId: number
    registrationCompleted: boolean
}

export interface RegistrationRequestBody {
    _id: string
    birthDate: string
    phone: string
    aeroclub: string
    region: Region['_id']
    competitionClass: CompetitionClass['_id']
    logger: string
    note: string
    glider: {
        hasEngine: boolean
        gliderType: GliderType['_id']
        registrationNumber: string
        startNumber: string
    }
    accomodation: {
        quantity: number
        accomodationType: AccomodationType['_id']
    }
    meals: string
}

export interface AdminRegistrationRequestBody extends RegistrationRequestBody {
    igcId: number
    registrationCompleted: boolean
}

export type RegistrationAsAdminArgs = {
    id: string
}

export type CreateRegistrationArgs = {
    body: RegistrationRequestBody
}

export type UpdateRegistrationArgs = CreateRegistrationArgs

export type UpdateRegistrationAsAdminArgs = {
    id: string
    body: AdminRegistrationRequestBody
}

export enum RegistrationQuickAction {
    paid = 'paid',
    accepted = 'accepted',
}

export type UpdateRegistrationQuickActionArgs = {
    id: string
    body: {
        [RegistrationQuickAction.paid]?: boolean
        [RegistrationQuickAction.accepted]?: boolean
    }
}
