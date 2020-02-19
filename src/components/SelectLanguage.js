import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, NavItem } from 'reactstrap';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';

export default function SelectLanguage() {
    const { i18n } = useTranslation();

    const getCountryCode = (lng) => {
        switch (lng) {
            case 'cs':
                return 'cz';
            case 'en':
                return 'gb';
            default:
                return 'cz';
        }
    };

    return (
        <UncontrolledDropdown nav inNavbar className="bg-dark mr-4">
            <DropdownToggle nav caret>
                <ReactCountryFlag countryCode={getCountryCode(i18n.language)} />
            </DropdownToggle>
            <DropdownMenu right className="bg-dark">
                <DropdownItem className="bg-dark">
                    <NavLink onClick={() => i18n.changeLanguage('cs')}>
                        <ReactCountryFlag countryCode="cz" /> česky
                    </NavLink>
                </DropdownItem>
                <DropdownItem className="bg-dark">
                    <NavItem>
                        <NavLink onClick={() => i18n.changeLanguage('en')}>
                            <ReactCountryFlag countryCode="gb" /> english
                        </NavLink>
                    </NavItem>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
