import React from 'react'
import { Table, Badge, ButtonGroup } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import useUsersList, { User } from '../hooks/useUsersList'
import Spinner from '../components/Spinner'

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

    return (
        <div>
            <h1>{t('Seznam uživatelů')}</h1>
            <p style={{ margin: '2em 0' }}>
                Soutěž spravuje {adminCount} administrátorů. Soutěže se účastní{' '}
                <strong>{usersCount + adminCount} závodníků</strong>.
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
