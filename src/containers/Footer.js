import React from 'react';
import { Container } from 'reactstrap';
import { useTranslation } from 'react-i18next';

import { version } from '../../package.json';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <Container className="transparent-background">
            <footer className={`p-5 py-4 text-center text-small`}>
                <p>
                    © {process.env.REACT_APP_TITLE}{' '}
                    <b>
                        {t('verze')} {version}
                    </b>
                </p>
                <p>
                    by{' '}
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/harastaivan">
                        @harastaivan
                    </a>
                </p>
            </footer>
        </Container>
    );
};

export default Footer;