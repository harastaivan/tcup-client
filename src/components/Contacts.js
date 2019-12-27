import React, { Component, Fragment } from 'react';

export default class Contacts extends Component {
    contacts = [
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

    formatLine(line) {
        return <p key={line}>{line}</p>;
    }

    render() {
        return (
            <div>
                <h1>Kontakty</h1>
                {this.contacts.map((contact) => {
                    return (
                        <Fragment key={contact.heading}>
                            <h2>{contact.heading}</h2>
                            {contact.lines.map((line) => this.formatLine(line))}
                        </Fragment>
                    );
                })}
            </div>
        );
    }
}
