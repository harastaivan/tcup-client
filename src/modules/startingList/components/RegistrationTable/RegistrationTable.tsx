import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { Table } from 'reactstrap'

import { getIsAdmin } from 'store/auth/selectors'

import type { StartingListRegistration } from '../../types'
import { RegistrationRow } from './RegistrationRow'

interface RegistrationTableProps {
    registrations: StartingListRegistration[]
}

export const RegistrationTable = ({ registrations }: RegistrationTableProps) => {
    const { t } = useTranslation()
    const isAdmin = useSelector(getIsAdmin)

    const nonReserveRegistrations = registrations.filter((registration) => !registration.isReserve)
    const reserveRegistrations = registrations.filter((registration) => registration.isReserve)

    return (
        <div style={{ overflowX: 'scroll' }}>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>{t('jméno')}</th>
                        <th>{t('aeroklub')}</th>
                        <th>{t('startovní číslo')}</th>
                        <th>{t('typ')}</th>
                        <th>{t('imatrikulace')}</th>
                        <th>{t('zaplaceno')}</th>
                        {isAdmin && (
                            <>
                                <th>schválit</th>
                                <th>{t('náhradník')}</th>
                                <th>placeno</th>
                            </>
                        )}
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {[...nonReserveRegistrations, ...reserveRegistrations].map((registration) => (
                        <RegistrationRow {...registration} />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
