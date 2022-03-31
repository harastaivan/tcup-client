import InitiateResetPassword from 'components/InitiateResetPassword'
import TokenResetPassword from 'components/TokenResetPassword'
import { useQuery } from 'hooks'

const ResetPassword = () => {
    const query = useQuery()

    const token = query.get('token')

    return (
        <>
            {!token && <InitiateResetPassword />}
            {token && <TokenResetPassword token={token} />}
        </>
    )
}

export default ResetPassword
