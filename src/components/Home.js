import React, { Component } from 'react';

class Home extends Component {
    render() {
        return (
            <div>
                <h1 className="mx-auto" style={{ fontSize: '6rem', textAlign: 'center' }}>
                    {process.env.REACT_APP_TITLE}
                </h1>
                {/*<img src='/img/homepage.jpg' alt='Společná fotka soutěžících' className='homepage'></img>*/}
                <h2 className="mt-5 mb-5" style={{ fontSize: '3rem', textAlign: 'center' }}>
                    Letošní tcup se bude konat <br />
                    11. 7. – 19. 7. 2020 v Toužimi.
                </h2>
            </div>
        );
    }
}

export default Home;
