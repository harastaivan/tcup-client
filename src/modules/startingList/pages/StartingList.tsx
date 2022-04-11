import { Container } from 'reactstrap'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import { getIsAdmin } from 'store/auth/selectors'
import { StartingList } from '../components/StartingList'
import { StartingListAsAdmin } from '../components/StartingListAsAdmin'

export const StartingListPage = () => {
    const isAdmin = useSelector(getIsAdmin)

    const { t } = useTranslation()

    return (
        <Container>
            <h1>{t('Startovní listina')}</h1>
            {isAdmin && <StartingListAsAdmin />}
            {!isAdmin && <StartingList />}
        </Container>
    )
}
