import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap'

export const Photogallery = () => {
    const { t } = useTranslation()
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const toggle = () => setDropdownOpen((prevState) => !prevState)
    return (
        <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            direction="down"
            style={{ display: 'inline-block', margin: '0.5rem' }}>
            <DropdownToggle caret size="lg" color="primary">
                {t('homepage.photos')}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>tcup 2024</DropdownItem>
                <DropdownItem href="https://eu.zonerama.com/eraa/Album/11735429" target="_blank">
                    Grid
                </DropdownItem>
                <DropdownItem href="https://eu.zonerama.com/eraa/Album/11720304" target="_blank">
                    6. - 8. 7. 2024
                </DropdownItem>
                <DropdownItem href="https://eu.zonerama.com/eraa/Album/11741759" target="_blank">
                    přílety pondělí
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem href="https://lipty.rajce.idnes.cz" target="_blank">
                    tcup 2022-2018
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}
