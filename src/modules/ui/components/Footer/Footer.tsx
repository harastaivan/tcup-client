import React from 'react'
import { Container } from 'reactstrap'
import { useTranslation } from 'react-i18next'

import { APP_TITLE, APP_VERSION } from 'config/constants'

export const Footer = () => {
    const { t } = useTranslation()

    return (
        <Container className="transparent-background">
            <footer className={`p-5 py-4 text-center text-small`}>
                <span className="text">
                    <p>
                        © {APP_TITLE}{' '}
                        <b>
                            {t('verze')} {APP_VERSION}
                        </b>
                    </p>
                    <p style={{ fontWeight: 500 }}>
                        <span style={{ marginRight: 6 }}>
                            Made with<span style={{ marginRight: 2 }}> ❤️ </span> by
                        </span>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.harasta.dev">
                            @harastaivan
                        </a>
                    </p>
                </span>
            </footer>
        </Container>
    )
}
