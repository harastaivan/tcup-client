import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import type { TKey } from 'translations'
import type { StartingListByClass as StartingListByClassType } from '../types'
import { RegistrationTable } from './RegistrationTable/RegistrationTable'

interface StartingListByClassProps extends StartingListByClassType {}

export const StartingListByClass = ({ _id, name, registrations }: StartingListByClassProps) => {
    const { t } = useTranslation()

    return (
        <Fragment key={_id}>
            <h2>
                {t(name as TKey)} {registrations.length ? `(${registrations.length})` : null}
            </h2>
            {registrations.length ? (
                <RegistrationTable registrations={registrations} />
            ) : (
                <p style={{ margin: '1.5rem 0', color: '#323232' }}>
                    {t('Nikdo z této třídy nemá podanou přihlášku.')}
                </p>
            )}
        </Fragment>
    )
}
