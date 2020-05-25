import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import News from './News';
import Footer from './Footer';
import { Container, Button } from 'reactstrap';

const Home = () => {
    const { t } = useTranslation();
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
                        <Button outline color="secondary" size="lg" tag={NavLink} to="/registration">
                            přihláška
                        </Button>{' '}
                        <Button color="primary" size="lg" tag={NavLink} to="/igc" disabled>
                            odeslat IGC
                        </Button>
                    </div>
                    <News />
                    <Footer />
                </Container>
            </div>
        </div>
    );
};

export default Home;
