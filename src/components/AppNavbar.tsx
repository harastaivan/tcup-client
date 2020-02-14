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

const AppNavbar = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    // @ts-ignore
    // eslint-disable-next-line
    const auth = useSelector((state): any => state.auth);

    const { isAuthenticated, isAdmin, user } = auth;

    const authLinks = (
        <Fragment>
            <UncontrolledDropdown nav inNavbar className="bg-dark mr-4">
                <DropdownToggle nav caret>
                    <strong>{user ? `${user.name} ${user.surname}` : ''}</strong>
                    {isAdmin ? (
                        <Badge color="danger" className="ml-2">
                            Admin
                        </Badge>
                    ) : (
                        ''
                    )}
                </DropdownToggle>
                <DropdownMenu right className="bg-dark">
                    <DropdownItem className="bg-dark">
                        <NavItem>
                            <NavLink tag={Link} to="/user-profile" activeClassName="active">
                                Profil
                            </NavLink>
                        </NavItem>
                    </DropdownItem>
                    <DropdownItem className="bg-dark">
                        <NavItem>
                            <NavLink tag={Link} to="/change-password" activeClassName="active">
                                Změnit heslo
                            </NavLink>
                        </NavItem>
                    </DropdownItem>
                </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
                <NavLink tag={Link} to="/logout" activeClassName="active">
                    Odhlásit se
                </NavLink>
            </NavItem>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
            <NavItem>
                <NavLink tag={Link} to="/login" activeClassName="active">
                    Přihlásit se
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to="/signup" activeClassName="active">
                    Registrace
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
                <NavbarToggler onClick={(): void => setOpen(!open)} />
                <Collapse isOpen={open} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/news" activeClassName="active">
                                Novinky
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/statuses" activeClassName="active" disabled>
                                Statusy soutěžících
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/starting-list" activeClassName="active">
                                Startovní listina
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/results" activeClassName="active" disabled>
                                Úlohy a výsledky
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/registration" activeClassName="active">
                                Přihláška
                            </NavLink>
                        </NavItem>
                        <NavItem />
                        <NavItem>
                            <NavLink tag={Link} to="/igc" activeClassName="active" disabled>
                                Odeslat IGC
                            </NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar className="bg-dark mr-4">
                            <DropdownToggle nav caret>
                                Další
                            </DropdownToggle>
                            <DropdownMenu right className="bg-dark">
                                <DropdownItem className="bg-dark">
                                    <NavLink tag={Link} to="/documents" activeClassName="active">
                                        Dokumenty
                                    </NavLink>
                                </DropdownItem>
                                <DropdownItem className="bg-dark">
                                    <NavItem>
                                        <NavLink tag={Link} to="/contacts" activeClassName="active">
                                            Kontakty
                                        </NavLink>
                                    </NavItem>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {isAuthenticated ? authLinks : guestLinks}
                    </Nav>
                </Collapse>
            </Navbar>
        </Fragment>
    );
};

export default AppNavbar;
