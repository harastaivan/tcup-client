import React, { Fragment } from 'react';
import { useTranslation } from 'react-i18next';

const Contacts = () => {
    const { t } = useTranslation();
    const contacts = [
        {
            heading: t('Pořadatel'),
            lines: ['AK Toužim', 'www.lkto.cz', 'E-mail: aktouzim@volny.cz', 'Tel.: +420 353 312 447']
        },
        {
            heading: t('Ředitel soutěže'),
            lines: ['Karel Beníšek ml.', 'Tel.: +420 724 235 210', 'E-mail: karel.benisek@seznam.cz']
        },
        {
            heading: t('Pole'),
            lines: ['Tel.: +420 722 628 006', 'Tel.: +420 353 312 447']
        },
        {
            heading: t('Přihlášky'),
            lines: ['E-mail: aktouzim@volny.cz', 'Tel.: +420 602 213 207']
        },
        {
            heading: t('Web a vyhodnocování'),
            lines: ['Ivan Harašta ml.', 'E-mail: ivan@harasta.dev', 'Tel.: +420 775 412 486']
        }
    ];

    const formatLine = (line) => {
        return <p key={line}>{line}</p>;
    };

    return (
        <div>
            <h1>{t('Kontakty')}</h1>
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
