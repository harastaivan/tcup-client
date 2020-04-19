import React, { Fragment, useState } from 'react';
import { NavLink as Link } from 'react-router-dom';
import {
    Badge,
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from 'reactstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import SelectLanguage from './SelectLanguage';

const AppNavbar = () => {
    const [open, setOpen] = useState(false);
    const { isAuthenticated, isAdmin, user } = useSelector((state) => state.auth);
    const { t } = useTranslation();

    const authLinks = (
        <Fragment>
            <UncontrolledDropdown nav inNavbar className="bg-dark mr-4">
                <DropdownToggle nav caret>
                    <strong>{user ? `${user.name} ${user.surname}` : ''}</strong>
                    {isAdmin ? (
                        <Badge color="danger" className="ml-2">
                            {t('Admin')}
                        </Badge>
                    ) : (
                        ''
                    )}
                </DropdownToggle>
                <DropdownMenu right className="bg-dark">
                    <DropdownItem className="bg-dark">
                        <NavItem>
                            <NavLink tag={Link} to="/user-profile" activeClassName="active">
                                {t('Profil')}
                            </NavLink>
                        </NavItem>
                    </DropdownItem>
                    <DropdownItem className="bg-dark">
                        <NavItem>
                            <NavLink tag={Link} to="/change-password" activeClassName="active">
                                {t('Změnit heslo')}
                            </NavLink>
                        </NavItem>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink tag={Link} to="/logout" activeClassName="active">
                    {t('Odhlásit se')}
                </NavLink>
            </NavItem>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <NavItem>
                <NavLink tag={Link} to="/login" activeClassName="active">
                    {t('Přihlásit se')}
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/signup" activeClassName="active">
                    {t('Registrace')}
                </NavLink>
            </NavItem>
        </Fragment>
    );
    return (
        <Fragment>
            <Navbar color="dark" dark expand="lg">
                <NavbarBrand tag={Link} to="/">
                    {process.env.REACT_APP_TITLE}
                </NavbarBrand>
                <NavbarToggler onClick={() => setOpen(!open)} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/news" activeClassName="active">
                                {t('Novinky')}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/statuses" activeClassName="active" disabled>
                                {t('Statusy soutěžících')}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/starting-list" activeClassName="active">
                                {t('Startovní listina')}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/results" activeClassName="active" disabled>
                                {t('Úlohy a výsledky')}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/registration" activeClassName="active" exact>
                                {t('Přihláška')}
                            </NavLink>
                        </NavItem>
                        <NavItem />
                        <NavItem>
                            <NavLink tag={Link} to="/igc" activeClassName="active" disabled>
                                {t('Odeslat IGC')}
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="bg-dark mr-4">
                            <DropdownToggle nav caret>
                                {t('Další')}
                            </DropdownToggle>
                            <DropdownMenu right className="bg-dark">
                                <DropdownItem className="bg-dark">
                                    <NavLink tag={Link} to="/documents" activeClassName="active">
                                        {t('Dokumenty')}
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem className="bg-dark">
                                    <NavItem>
                                        <NavLink tag={Link} to="/contacts" activeClassName="active">
                                            {t('Kontakty')}
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem className="bg-dark">
                                    <NavItem>
                                        <NavLink tag={Link} to="/archive" activeClassName="active">
                                            {t('Archiv')}
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {isAuthenticated ? authLinks : guestLinks}
                        <SelectLanguage />
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    );
};

export default AppNavbar;
