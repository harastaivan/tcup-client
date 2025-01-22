import { ListGroup, ListGroupItem } from 'reactstrap'
import { useTranslation } from 'react-i18next'

export const Archive = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h1>{t('archive.title')}</h1>
            <ListGroup>
                <ListGroupItem tag="a" href="http://2024.tcup.cz">
                    tcup 2024
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://2023.tcup.cz">
                    tcup 2023
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://2022.tcup.cz">
                    tcup 2022
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://2021.tcup.cz">
                    tcup 2021
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://2020.tcup.cz">
                    tcup 2020
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2019/tcup">
                    tcup 2019
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2018/tcup">
                    tcup 2018
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2017/tcup">
                    tcup 2017
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2016/tcup">
                    tcup 2016
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2015/tcup">
                    tcup 2015
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2014/tcup">
                    tcup 2014
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2013/tcup">
                    TCUP EUREGIO 2013
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2012/tcup">
                    tcup 2012
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2011/tcup">
                    tcup 2011
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2009/tcup">
                    tcup 2009
                </ListGroupItem>
            </ListGroup>
        </div>
    )
}
