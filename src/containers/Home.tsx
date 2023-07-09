import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Container, Button, Row, Col } from 'reactstrap'

import Sponsors from 'components/Sponsors'
import { APP_TITLE, SIGNUP_DISABLED } from 'config/constants'
import { Footer } from 'modules/ui'

import News from './News'

const Home = () => {
    const { t } = useTranslation()

    return (
        <div className="homepage">
            <div className="homepage-highlight"></div>
            <div className="homepage-body">
                <Container>
                    <h1 className="header-box">
                        <span className="header-box-span">{APP_TITLE}</span>
                    </h1>
                    <h2 className="sub-header">
                        {t('homepage.subheader.1')} <br />
                        {t('homepage.subheader.2')}.
                    </h2>
                    <div className="button-container">
                        <Button outline color="secondary" size="lg" tag={'a'} href="https://lipty.rajce.idnes.cz">
                            {t('homepage.photos')}
                        </Button>{' '}
                        <Button color="primary" size="lg" tag={NavLink} to="/igc">
                            {t('homepage.sendIgc')}
                        </Button>
                    </div>
                    <h2 className="sub-header-signup">
                        {SIGNUP_DISABLED ? t('homepage.signup.disabled') : t('homepage.signup.enabled')}
                    </h2>
                    <h2 className="sub-header-alert">
                        {t('homepage.subheader.alert.1')}
                        <br />
                        {t('homepage.subheader.alert.2')}
                        <br />
                        {t('homepage.subheader.alert.3')}
                    </h2>
                    <Row>
                        <Col md={8}>
                            <News />
                        </Col>
                        <Col md={4}>
                            <Sponsors />
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </div>
        </div>
    )
}

export default Home
