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

    const { paid, accepted, isReserve } = registration

    return (
        <tr key={_id} className={isReserve ? 'table-warning' : ''}>
            <td>{fullName}</td>
            <td>{aeroclub}</td>
            <td>{startNumber}</td>
            <td>{gliderType}</td>
            <td>{registrationNumber}</td>
            {paid ? <td className="text-success">{t('ano')}</td> : <td className="text-danger">{t('ne')}</td>}
            {isAdmin && (
                <>
                    <td>
                        <LoadingButton
                            color={accepted ? 'secondary' : 'success'}
                            className="mb-1"
                            onClick={onQuickAction(RegistrationQuickAction.accepted)}
                            loading={isLoading}
                            size="sm">
                            {accepted ? t('zrušit') : t('schválit')}
                        </LoadingButton>
                    </td>
                    <td>
                        <LoadingButton
                            color={isReserve ? 'success' : 'warning'}
                            className="mb-1"
                            onClick={onQuickAction(RegistrationQuickAction.isReserve)}
                            loading={isLoading}
                            size="sm">
                            {isReserve ? t('není náhr.') : t('je náhr.')}
                        </LoadingButton>
                    </td>
                    <td>
                        <LoadingButton
                            color={paid ? 'secondary' : 'success'}
                            className="mb-1"
                            onClick={onQuickAction(RegistrationQuickAction.paid)}
                            loading={isLoading}
                            size="sm">
                            {paid ? t('nezaplaceno') : t('zaplaceno')}
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
            {!isAdmin && (
                <>
                    <td>
                        {isReserve && (
                            <Badge color="warning" className="ml-2">
                                {t('náhradník')}
                            </Badge>
                        )}
                    </td>
                </>
            )}
        </tr>
    )
}
