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

    const soaringSpotUrl = '';

    const authLinks = (
        <Fragment>
            <UncontrolledDropdown nav inNavbar className="mr-4">
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
                <DropdownMenu right>
                    <DropdownItem>
                        <NavItem>
                            <NavLink tag={Link} to="/user-profile" activeClassName="active">
                                {t('Profil')}
                            </NavLink>
                        </NavItem>
                    </DropdownItem>
                    <DropdownItem>
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
            <Navbar color="light" light expand="lg">
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
                            <NavLink tag={Link} to="/statuses" activeClassName="active">
                                {t('Statusy soutěžících')}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/starting-list" activeClassName="active">
                                {t('Startovní listina')}
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href={soaringSpotUrl ? soaringSpotUrl : '#'} disabled={!soaringSpotUrl}>
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
                            <NavLink tag={Link} to="/igc" activeClassName="active">
                                {t('Odeslat IGC')}
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="mr-4">
                            <DropdownToggle nav caret>
                                {t('Další')}
                            </DropdownToggle>
                            <DropdownMenu right className="bg-light">
                                <DropdownItem className="bg-light">
                                    <NavLink tag={Link} to="/documents" activeClassName="active">
                                        {t('Dokumenty')}
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem className="bg-light">
                                    <NavItem>
                                        <NavLink tag={Link} to="/contacts" activeClassName="active">
                                            {t('Kontakty')}
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem className="bg-light">
                                    <NavItem>
                                        <NavLink tag={Link} to="/archive" activeClassName="active">
                                            {t('Archiv')}
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                                {isAdmin && (
                                    <DropdownItem>
                                        <NavItem>
                                            <NavLink tag={Link} to="/competition-days" activeClassName="active">
                                                {t('Soutěžní dny')}
                                            </NavLink>
                                        </NavItem>
                                    </DropdownItem>
                                )}
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
