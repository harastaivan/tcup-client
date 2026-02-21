import { NavLink as Link } from 'react-router-dom'
import { Badge, Button } from 'reactstrap'
import type { StartingListRegistration } from '../../types'
import { useSelector } from 'react-redux'
import { getIsAdmin } from 'store/auth/selectors'
import { useTranslation } from 'react-i18next'
import { useUpdateRegistrationQuickActionMutation } from 'modules/startingList/services/api'
import { RegistrationQuickAction } from 'modules/registration/types'
import { LoadingButton } from 'modules/form'

interface RegistrationRowProps extends StartingListRegistration {}

export const RegistrationRow = ({
    _id,
    fullName,
    birthDate,
    aeroclub,
    startNumber,
    gliderType,
    registrationNumber,
    rankingPosition,
    igcId,
    ...registration
}: RegistrationRowProps) => {
    const isAdmin = useSelector(getIsAdmin)
    const { t } = useTranslation()

    const [updateRegistrationQuickAction, { isLoading }] = useUpdateRegistrationQuickActionMutation()

    const onQuickAction = (quickAction: RegistrationQuickAction) => () => {
        updateRegistrationQuickAction({
            id: _id,
            body: { [quickAction]: !registration[quickAction] },
        })
    }

    const { paid, isWildcard } = registration

    return (
        <tr key={_id}>
            <td>{fullName}</td>
            <td>{aeroclub}</td>
            <td>{startNumber}</td>
            <td>{gliderType}</td>
            <td>{registrationNumber}</td>
            <td>
                {rankingPosition ? (
                    rankingPosition
                ) : (
                    <Badge color="warning" className="ml-2">
                        {t('nedostupné')}
                    </Badge>
                )}
            </td>
            <td>
                {!paid && (
                    <Badge color="danger" className="ml-2">
                        {t('nezaplaceno')}
                    </Badge>
                )}
                {isWildcard && (
                    <Badge color="warning" className="ml-2">
                        {t('WC')}
                    </Badge>
                )}
                {isAdmin && !igcId && (
                    <Badge color="warning" className="ml-2">
                        {t('Chybí IGC ID')}
                    </Badge>
                )}
            </td>
            {isAdmin && (
                <>
                    <td>
                        <LoadingButton
                            color={isWildcard ? 'secondary' : 'warning'}
                            className="mb-1"
                            onClick={onQuickAction(RegistrationQuickAction.isWildcard)}
                            loading={isLoading}
                            size="sm">
                            {isWildcard ? t('zrušit WC') : t('nastavit WC')}
                        </LoadingButton>
                    </td>
                    <td>
                        <LoadingButton
                            color={paid ? 'secondary' : 'success'}
                            className="mb-1"
                            onClick={onQuickAction(RegistrationQuickAction.paid)}
                            loading={isLoading}
                            size="sm">
                            {paid ? t('zrušit zaplaceno') : t('nastavit zaplaceno')}
                        </LoadingButton>
                    </td>
                    <td>
                        <Button
                            outline
                            color={'primary'}
                            className="mb-1"
                            onClick={() => {}}
                            size="sm"
                            tag={Link}
                            to={`/registration/${_id}`}>
                            {t('úprava')}
                        </Button>
                    </td>
                </>
            )}
        </tr>
    )
}
