import { Table, Badge, ButtonGroup } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { useUsersList } from 'hooks'
import type { User } from 'hooks'
import Spinner from 'components/Spinner'

const UsersList = () => {
    const { t } = useTranslation()

    const { users, loading } = useUsersList()

    const mapUser = (user: User) => (
        <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>
                <ButtonGroup>
                    {user.admin && (
                        <Badge color="danger" className="ml-2">
                            {t('Admin')}
                        </Badge>
                    )}
                    {!user.passwordValid && (
                        <Badge color="warning" className="ml-2">
                            {t('Neplatné heslo')}
                        </Badge>
                    )}
                </ButtonGroup>
            </td>
        </tr>
    )

    const adminCount = users.admins.length
    const usersCount = users.others.length

    const mailingList = [...users.admins, ...users.others]
        .map(({ name, surname, email }) => `${name} ${surname} <${email}>`)
        .join(', ')

    return (
        <div>
            <h1>{t('Seznam uživatelů')}</h1>
            <p style={{ marginTop: '2em' }}>
                Soutěž spravuje {adminCount} administrátorů. Soutěže se účastní{' '}
                <strong>{usersCount + adminCount} závodníků</strong>.
            </p>
            <p style={{ marginBottom: '2em' }}>
                <a href={`mailto:${mailingList}`}>{t('Poslat email všem')}</a>
            </p>
            <Table striped responsive>
                <thead>
                    <tr>
                        <th>{t('jméno')}</th>
                        <th>{t('příjmení')}</th>
                        <th>{t('email')}</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {loading && <Spinner />}
                    {users.admins.map(mapUser)}
                    {users.others.map(mapUser)}
                </tbody>
            </Table>
        </div>
    )
}

export default UsersList
