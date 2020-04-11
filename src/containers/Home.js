import React from 'react';
import { useTranslation } from 'react-i18next';
const Home = () => {
    const { t } = useTranslation();
    return (
        <div>
            <h1 className="mx-auto" style={{ fontSize: '6rem', textAlign: 'center' }}>
                {process.env.REACT_APP_TITLE}
            </h1>
            <h2 className="mt-5 mb-5" style={{ fontSize: '3rem', textAlign: 'center' }}>
                {t('Letošní tcup se bude konat')} <br />
                {t('11. 7. – 19. 7. 2020 v Toužimi')}.
            </h2>
        </div>
    );
};

export default Home;
