import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Tracking from './Tracking'
import News from './News'
import Footer from './Footer'
import { Container, Button, Row, Col } from 'reactstrap'

const Home = () => {
    const { t } = useTranslation()
    return (
        <div className="homepage">
            <div className="homepage-highlight"></div>
            <div className="homepage-body">
                <Container>
                    <h1 className="header-box">
                        <span className="header-box-span">{process.env.REACT_APP_TITLE}</span>
                    </h1>
                    <h2 className="sub-header">
                        {t('Letošní tcup se bude konat')} <br />
                        {t('11. 7. – 19. 7. 2020 v Toužimi')}.
                    </h2>
                    <div className="button-container">
                        <Button outline color="secondary" size="lg" tag={'a'} href="https://lipty.rajce.idnes.cz">
                            {t('fotogalerie')}
                        </Button>{' '}
                        <Button color="primary" size="lg" tag={NavLink} to="/igc">
                            {t('odeslat IGC')}
                        </Button>
                    </div>
                    <Row>
                        <Col md={8}>
                            <News />
                        </Col>
                        <Col md={4}>
                            <Tracking />
                        </Col>
                    </Row>
                    <Footer />
                </Container>
            </div>
        </div>
    )
}

export default Home
