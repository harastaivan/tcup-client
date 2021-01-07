import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavLink, NavItem } from 'reactstrap';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import getCountryCode from '../utils/countryCode';

const Flag = (props) => (
    <ReactCountryFlag
        countryCode={props.language}
        svg
        cdnUrl="https://cdn.staticaly.com/gh/hjnilsson/country-flags/master/svg/"
        cdnSuffix="svg"
        style={{
            height: 'auto',
            width: '1.5em',
            border: '1px solid #222',
            borderRadius: '2px',
            objectFit: 'cover'
        }}
    />
);

Flag.propTypes = {
    language: PropTypes.string.isRequired
};

export default function SelectLanguage() {
    const { i18n } = useTranslation();

    return (
        <UncontrolledDropdown nav inNavbar className="bg-light mr-4">
            <DropdownToggle nav caret>
                <Flag language={getCountryCode(i18n.language)} />
            </DropdownToggle>
            <DropdownMenu right className="bg-light">
                <DropdownItem className="bg-light">
                    <NavLink onClick={() => i18n.changeLanguage('cs')}>
                        <Flag language={'cz'} /> česky
                    </NavLink>
                </DropdownItem>
                <DropdownItem className="bg-light">
                    <NavItem>
                        <NavLink onClick={() => i18n.changeLanguage('en')}>
                            <Flag language={'gb'} /> english
                        </NavLink>
                    </NavItem>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );
}
