import React, { Fragment } from 'react';

const Contacts = (): JSX.Element => {
    const contacts = [
        {
            heading: 'Pořadatel',
            lines: [
                'AK Toužim',
                'www.lkto.cz',
                'E-mail: aktouzim@volny.cz',
                'Tel.: +420 353 312 447',
                'předchozí stránka: www.gliding.cz/souteze/2019/tcup'
            ]
        },
        {
            heading: 'Ředitel soutěže',
            lines: ['Karel Beníšek ml.', '+420 724 235 210', 'karel.benisek@seznam.cz']
        },
        {
            heading: 'Pole - outlanding',
            lines: ['Bude doplněno', '+420 ... ... ...']
        },
        {
            heading: 'Přihlášky',
            lines: ['E-mail: aktouzim@volny.cz', 'Tel.: +420 602 213 207']
        }
    ];

    const formatLine = (line: string): JSX.Element => {
        return <p key={line}>{line}</p>;
    };

    return (
        <div>
            <h1>Kontakty</h1>
            {contacts.map(
                (contact): JSX.Element => {
                    return (
                        <Fragment key={contact.heading}>
                            <h2>{contact.heading}</h2>
                            {contact.lines.map((line): JSX.Element => formatLine(line))}
                        </Fragment>
                    );
                }
            )}
        </div>
    );
};

export default Contacts;
