import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Card, CardBody, CardFooter, CardHeader, CardText, Button } from 'reactstrap'
import Moment from 'react-moment'
import { useTranslation } from 'react-i18next'
import 'moment/locale/cs'

import { getNews as getNewsSelector } from '../store/news/selectors'
import { getNews, deleteNews, setNewsLoading } from '../store/news/actions'

import AddNews from './AddNews'
import Spinner from '../components/Spinner'
import { NewsId } from '../store/news/types'
import { getIsAdmin } from '../store/auth/selectors'

const News: React.FC = () => {
    const { t, i18n } = useTranslation()
    const dispatch = useDispatch()
    const { news, loading } = useSelector(getNewsSelector)
    const isAdmin = useSelector(getIsAdmin)

    const onDeleteClick = (id: NewsId) => () => {
        dispatch(deleteNews(id))
    }

    useEffect(() => {
        dispatch(setNewsLoading())
        dispatch(getNews())
    }, [dispatch])

    return (
        <div style={{ marginBottom: '2rem' }}>
            <h1>{t('Novinky')}</h1>
            <AddNews />
            {loading ? <Spinner /> : null}
            {news.length === 0 && <p style={{ marginTop: '1.6rem' }}>{t('Nejsou zde žádné novinky.')}</p>}
            {news.map((one) => (
                <Card className="mt-4" key={one._id}>
                    <CardHeader>
                        <h3>
                            {one.title}
                            {isAdmin ? (
                                <Button
                                    className="remove-btn float-right"
                                    color="danger"
                                    size="sm"
                                    onClick={onDeleteClick(one._id)}>
                                    {t('smazat novinku')}
                                </Button>
                            ) : null}
                        </h3>
                    </CardHeader>
                    <CardBody>
                        {one.body.split('\n').map((line, i) => {
                            return <CardText key={i}>{line}</CardText>
                        })}
                    </CardBody>
                    <CardFooter>
                        <strong>{`${one.author.name} ${one.author.surname} `}</strong>
                        <Moment format={'dddd D. M. YYYY HH:mm'} locale={i18n.language} className="float-right">
                            {one.updatedAt}
                        </Moment>
                    </CardFooter>
                </Card>
            ))}
        </div>
    )
}

export default News
