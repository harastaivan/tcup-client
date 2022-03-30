import { useSelector } from 'react-redux'
import { useRouteMatch } from 'react-router-dom'
import { getAuth } from 'store/auth/selectors'

export const useRegistrationPage = () => {
    const { isAuthenticated, isLoading, isAdmin, user } = useSelector(getAuth)

    const match = useRouteMatch()

    const { path } = match
    const adminPath = `${path}/:registrationId`

    console.log(match)

    return {
        loading: isLoading,
        isAuthenticated,
        path,
        adminPath,
        isAdmin,
        user,
    }
}
