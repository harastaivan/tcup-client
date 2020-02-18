import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

export default function GdprConsent(props) {
    return (
        <Fragment>
            <p>
                {props.action} souhlasíte:
                <ul>
                    <li>se zpracováním osobních údajů se vztahem k soutěži,</li>
                    <li>
                        se zveřejňováním těchto osobních údajů na <a href="/">této</a> a jiných stránkách (
                        <a href="https://www.soaringspot.com/">soaringspot.com</a>),
                    </li>
                    <li>se zasíláním informačních e-mailů týkajících se soutěže na uvedenou e-mailovou adresu,</li>
                    <li>
                        s dalšími podmínkami uvedenými v propozicích soutěže (sekce <a href="/documents">Dokumenty</a>).
                    </li>
                </ul>
            </p>
            <p>Správcem osobních údajů je Aeroklub Toužim.</p>
        </Fragment>
    );
}

GdprConsent.propTypes = {
    action: PropTypes.string.isRequired
};
