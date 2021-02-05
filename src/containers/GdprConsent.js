import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next'

export default function GdprConsent(props) {
    const { t } = useTranslation()

    return (
        <Fragment>
            <div>
                {t(props.action)}:
                <ul>
                    <li>{t('se zpracováním osobních údajů se vztahem k soutěži')},</li>
                    <li>
                        {t('se zveřejňováním těchto osobních údajů na')} <a href="/">{t('této')}</a>{' '}
                        {t('a jiných stránkách')} (<a href="https://www.soaringspot.com/">soaringspot.com</a>),
                    </li>
                    <li>
                        {t('se zasíláním informačních e-mailů týkajících se soutěže na uvedenou e-mailovou adresu')},
                    </li>
                    <li>
                        {t('s dalšími podmínkami uvedenými v propozicích soutěže (sekce')}{' '}
                        <a href="/documents">{t('Dokumenty')}</a>).
                    </li>
                </ul>
            </div>
            <p>{t('Správcem osobních údajů je Aeroklub Toužim')}.</p>
        </Fragment>
    )
}

GdprConsent.propTypes = {
    action: PropTypes.string.isRequired,
}
