import { useTranslation } from 'react-i18next'
import { Button, Card, CardTitle, Col, Row } from 'reactstrap'

import Spinner from 'components/Spinner'
import ResultsTitle from './ResultsTitle'
import { useTopResults } from 'hooks'

type Props = {
    goToTotalResults: (classId: { _id: string; name: string }) => () => void
    goToDailyResults: (classId: { _id: string; name: string }) => () => void
}

const TopResults = ({ goToTotalResults, goToDailyResults }: Props) => {
    const { t } = useTranslation()

    const { results, loaded, error } = useTopResults()

    const getColor = (position: number) => {
        switch (position) {
            case 1:
                return '#FFD700'
            case 2:
                return '#C0C0C0'
            case 3:
                return '#CD7F32'
        }
    }

    return (
        <div style={{ marginTop: '2rem' }}>
            <ResultsTitle>{t('Výsledky')}</ResultsTitle>
            <Row style={{ marginTop: '2rem' }}>
                {error && t('Došlo k chybě')}
                {!loaded && !error && <Spinner />}
                {loaded &&
                    results &&
                    results.classes.map(({ _id, name, results }) => (
                        <Col md="6" key={_id}>
                            <Card body>
                                <CardTitle tag="h5">{`${name} ${t('třída')}`}</CardTitle>

                                {results.length === 0 && (
                                    <p style={{ marginTop: '1em' }}>{t('results.class.noResults')}</p>
                                )}
                                {results.map(({ position, name, aeroclub, glider, points }, index) => (
                                    <div
                                        style={{
                                            borderLeft: `7px solid ${getColor(position)}`,
                                            padding: '5px 10px',
                                            margin: '10px 0px',
                                            maxWidth: '300px',
                                        }}
                                        key={index}>
                                        <div>
                                            <span
                                                style={{
                                                    color: `${getColor(position)}`,
                                                    fontWeight: 'bold',
                                                    fontSize: '0.9em',
                                                }}>
                                                {position}. {t('místo')}
                                            </span>
                                        </div>
                                        <div>
                                            <span style={{ fontWeight: 'bold' }}>{name}</span>{' '}
                                        </div>
                                        <div style={{ fontSize: '0.9em' }}>
                                            <span> {aeroclub}</span>{' '}
                                            <span style={{ opacity: 0.6, marginLeft: '3px' }}>{glider} </span>
                                        </div>
                                        <div
                                            style={{
                                                marginTop: '10px',
                                                fontSize: '0.9em',
                                                fontWeight: 'bold',
                                            }}>
                                            <span>
                                                {points} {t('bodů')}{' '}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                                {results.length > 0 && (
                                    <Row style={{ marginTop: '1em' }}>
                                        <Col md="6">
                                            <Button
                                                style={{ width: '100%', marginBottom: '10px' }}
                                                color="secondary"
                                                onClick={goToTotalResults({ _id, name })}>
                                                {t('Celkové výsledky')}
                                            </Button>
                                        </Col>
                                        <Col md="6">
                                            <Button
                                                style={{ width: '100%', marginBottom: '10px' }}
                                                color="secondary"
                                                outline
                                                onClick={goToDailyResults({ _id, name })}>
                                                {t('Denní výsledky')}
                                            </Button>
                                        </Col>
                                    </Row>
                                )}
                            </Card>
                        </Col>
                    ))}
            </Row>
        </div>
    )
}

export default TopResults
