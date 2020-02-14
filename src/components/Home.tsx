import React from 'react';

const Home = (): JSX.Element => {
    return (
        <div>
            <h1 className="mx-auto" style={{ fontSize: '6rem', textAlign: 'center' }}>
                {process.env.REACT_APP_TITLE}
            </h1>
            <h2 className="mt-5 mb-5" style={{ fontSize: '3rem', textAlign: 'center' }}>
                Letošní tcup se bude konat 11. 7. – 19. 7. 2020 v Toužimi.
            </h2>
        </div>
    );
};

export default Home;
