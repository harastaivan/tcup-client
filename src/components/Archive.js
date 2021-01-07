import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { useTranslation } from 'react-i18next';

export default function Archive() {
    const { t } = useTranslation();

    return (
        <div>
            <h1>{t('Archiv předchozích ročníků')}</h1>
            <ListGroup>
                <ListGroupItem tag="a" href="http://2020.tcup.cz">
                    tcup 2020
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2019/tcup">
                    TCUP 2019
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2018/tcup">
                    TCUP 2018
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2017/tcup">
                    TCUP 2017
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2016/tcup">
                    TCUP 2016
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2015/tcup">
                    TCUP 2015
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2014/tcup">
                    TCUP 2014
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2013/tcup">
                    TCUP EUREGIO 2013
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2012/tcup">
                    Toužim Cup 2012
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2011/tcup">
                    T Cup 2011
                </ListGroupItem>
                <ListGroupItem tag="a" href="http://www.gliding.cz/souteze/2009/tcup">
                    T Cup 2009
                </ListGroupItem>
            </ListGroup>
        </div>
    );
}
