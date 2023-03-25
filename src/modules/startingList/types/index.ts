import type { CompetitionClass } from 'modules/registration/types'

export interface StartingListRegistration {
    _id: string
    birthDate?: string
    aeroclub: string
    fullName: string
    startNumber: string
    gliderType: string
    registrationNumber: string
    paid: boolean
    accepted: boolean
    isReserve: boolean
    registrationCompleted: boolean
    competitionClass: string
}

export interface StartingListByClass extends Pick<CompetitionClass, '_id' | 'name'> {
    registrations: StartingListRegistration[]
}

export type StartingListResponse = StartingListByClass[]

export type SeeYouExportArgs = {
    competitionClassId: CompetitionClass['_id']
}
