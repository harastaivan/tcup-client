import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, CardBody, CardFooter, CardHeader, CardText, Button } from 'reactstrap'
import Moment from 'react-moment'
import { withTranslation } from 'react-i18next'
import 'moment/locale/cs'

import { getNews, deleteNews, setNewsLoading } from '../store/news/actions'
import AddNews from './AddNews'
import Spinner from '../components/Spinner'

class News extends Component {
    static propTypes = {
        getNews: PropTypes.func.isRequired,
        setNewsLoading: PropTypes.func.isRequired,
        deleteNews: PropTypes.func.isRequired,
        news: PropTypes.object.isRequired,
        isAdmin: PropTypes.bool,
        t: PropTypes.func.isRequired,
        i18n: PropTypes.object.isRequired,
    }

    onDeleteClick = (id) => {
        this.props.deleteNews(id)
    }

    componentDidMount() {
        this.props.setNewsLoading()
        this.props.getNews()
    }

    render() {
        const { news, loading } = this.props.news
        const t = this.props.t
        const i18n = this.props.i18n
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
                                {this.props.isAdmin ? (
                                    <Button
                                        className="remove-btn float-right"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, one._id)}>
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
}

const mapStateToProps = (state) => ({
    news: state.news,
    isAdmin: state.auth.isAdmin,
})

export default connect(mapStateToProps, { getNews, deleteNews, setNewsLoading })(withTranslation()(News))
