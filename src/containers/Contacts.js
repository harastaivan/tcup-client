import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
    const { t } = useTranslation();
    const contacts = [
        {
            heading: t('Pořadatel'),
            lines: [
                'AK Toužim',
                'www.lkto.cz',
                'E-mail: aktouzim@volny.cz',
                'Tel.: +420 353 312 447',
                t('předchozí stránka') + ': www.gliding.cz/souteze/2019/tcup'
            ]
        },
        {
            heading: t('Ředitel soutěže'),
            lines: ['Karel Beníšek ml.', '+420 724 235 210', 'karel.benisek@seznam.cz']
        },
        {
            heading: t('Pole'),
            lines: [t('Bude doplněno'), '+420 ... ... ...']
        },
        {
            heading: t('Přihlášky'),
            lines: ['E-mail: aktouzim@volny.cz', 'Tel.: +420 602 213 207']
        }
    ];

    const formatLine = (line) => {
        return <p key={line}>{line}</p>;
    };

    return (
        <div>
            <h1>Kontakty</h1>
            {contacts.map((contact) => {
                return (
                    <Fragment key={contact.heading}>
                        <h2>{contact.heading}</h2>
                        {contact.lines.map((line) => formatLine(line))}
                    </Fragment>
                );
            })}
        </div>
    );
};

export default Contacts;