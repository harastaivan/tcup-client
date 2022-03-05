import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Tracking from './Tracking'
import Sponsors from '../components/Sponsors'
import News from './News'
import Footer from './Footer'
import { Container, Button, Row, Col } from 'reactstrap'
import { APP_TITLE } from '../constants'

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
                        {t('Letošní tcup se bude konat')} <br />
                        {t('10. 7. – 18. 7. 2021 v Toužimi')}.
                    </h2>
                    <div className="button-container">
                        <Button outline color="secondary" size="lg" tag={'a'} href="https://lipty.rajce.idnes.cz">
                            {t('fotogalerie')}
                        </Button>{' '}
                        <Button color="primary" size="lg" tag={NavLink} to="/igc">
                            {t('odeslat IGC')}
                        </Button>
                    </div>
                    <h2 className="sub-header-alert">
                        {'Dovolujeme si upozornit účastníky závodu, že provozní plocha letiště je'}
                        <br />
                        {'monitorována kamerovým systémem a během dne i noci ostrahu zabezpečuje agentura Securitas.'}
                        <br />
                        {'V případě dotazu se obraťte na ředitele závodu.'}
                    </h2>
                    <Row>
                        <Col md={8}>
                            <News />
                        </Col>
                        <Col md={4}>
                            <Tracking />
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
