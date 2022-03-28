import { useTranslation } from 'react-i18next'
import { Alert, Container } from 'reactstrap'
import styled from 'styled-components'
import useOnlineStatus from 'hooks/useOnlineStatus'

const Wrapper = styled.div`
    margin-top: 1rem;
    position: fixed;
    display: flex;
    justify-content: center;
    width: 100%;
    z-index: 100;
`

const TestMode: React.FC = () => {
    const { t } = useTranslation()

    const isOnline = useOnlineStatus()

    if (!isOnline) {
        return (
            <Wrapper>
                <Container>
                    <Alert color="danger">{t('Aplikace je offline')}</Alert>
                </Container>
            </Wrapper>
        )
    }

    return null
}

export default TestMode
