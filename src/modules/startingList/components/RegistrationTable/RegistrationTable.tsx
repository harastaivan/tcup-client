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

    return (
        <div style={{ overflowX: 'scroll' }}>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>{t('jméno')}</th>
                        <th>{t('aeroklub')}</th>
                        <th>{t('startovní znak')}</th>
                        <th>{t('typ')}</th>
                        <th>{t('imatrikulace')}</th>
                        <th>{t('ranking pozice')}</th>
                        <th></th>
                        {isAdmin && (
                            <>
                                <th>akce</th>
                                <th></th>
                            </>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {registrations.map((registration) => (
                        <RegistrationRow {...registration} key={registration._id} />
                    ))}
                </tbody>
            </Table>
        </div>
    )
}
