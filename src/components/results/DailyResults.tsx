import { useTranslation } from 'react-i18next'
import { Button, Card, CardTitle, Col, ListGroup, ListGroupItem, Row, Table } from 'reactstrap'
import Moment from 'react-moment'

import ResultsTitle from './ResultsTitle'
import Spinner from '../Spinner'
import { DailyResult, Filters } from '../../api/results'
import { useDailyResults } from '../../hooks/useResults'

type FiltersProps = {
    filters: Filters | null
    loaded: boolean
    selectedDay: { classId: string | null; dayId: string | null }
    selectDay: (classId: string, dayId: string) => void
    goToTopResults: () => void
    goToTotalResults: (competitionClass: { _id: string; name: string }) => () => void
}

type Props = {
    competitionClass: { _id: string; name: string }
    playFlight: (flightId: number) => void
    goToTopResults: () => void
    goToTotalResults: (competitionClass: { _id: string; name: string }) => () => void
}

const FiltersCards = ({ filters, loaded, selectedDay, selectDay, goToTopResults, goToTotalResults }: FiltersProps) => {
    const { t } = useTranslation()

    const isActive = (classId: string, dayId: string): boolean => {
        return classId === selectedDay.classId && dayId === selectedDay.dayId
    }

    const onClick = (classId: string, dayId: string) => () => {
        selectDay(classId, dayId)
    }

    return (
        <Row style={{ marginTop: '2rem' }}>
            {loaded &&
                filters &&
                filters.classes.map(({ _id: classId, name: className, days }) => (
                    <Col md="6" style={{ marginBottom: '2em' }} key={classId}>
                        <Card body>
                            <CardTitle tag="h5">{`${className} ${t('třída')}`}</CardTitle>
                            <ListGroup flush>
                                {days.map(({ _id: dayId, name, date }) => (
                                    <ListGroupItem
                                        tag="a"
                                        href="#"
                                        key={dayId}
                                        active={isActive(classId, dayId)}
                                        onClick={onClick(classId, dayId)}>
                                        {`${name} - `}
                                        <Moment format={'DD. MM. YYYY'} locale="cs">
                                            {date}
                                        </Moment>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                            <Row style={{ marginTop: '1em' }}>
                                <Col md="6">
                                    <Button
                                        style={{ width: '100%', marginBottom: '10px' }}
                                        color="secondary"
                                        onClick={goToTopResults}>
                                        Zpět
                                    </Button>
                                </Col>
                                <Col md="6">
                                    <Button
                                        style={{ width: '100%', marginBottom: '10px' }}
                                        color="secondary"
                                        outline
                                        onClick={goToTotalResults({ _id: classId, name: className })}>
                                        Celkové výsledky
                                    </Button>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                ))}
        </Row>
    )
}

const DailyResults = ({ competitionClass, playFlight, goToTopResults, goToTotalResults }: Props) => {
    const { t } = useTranslation()

    const { filters, filtersLoaded, selectedDay, selectDay, results, loaded, error } = useDailyResults(
        competitionClass._id
    )

    return (
        <div style={{ marginTop: '2rem' }}>
            <ResultsTitle>{t('Denní výsledky')}</ResultsTitle>
            <FiltersCards
                filters={filters}
                loaded={filtersLoaded}
                selectedDay={selectedDay}
                selectDay={selectDay}
                goToTopResults={goToTopResults}
                goToTotalResults={goToTotalResults}
            />
            {error && t('Došlo k chybě')}
            {(!loaded || !filtersLoaded) && !error && (
                <div style={{ minHeight: '60vh' }}>
                    <Spinner />
                </div>
            )}
            {loaded && results && (
                <Table striped responsive>
                    <thead>
                        <tr>
                            <th>{t('#')}</th>
                            <th>{t('jméno')}</th>
                            <th>{t('aeroklub')}</th>
                            <th>{t('typ')}</th>
                            <th>{t('body')}</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result: DailyResult) => (
                            <tr key={result.position}>
                                <td>{result.position}</td>
                                <td>{result.name}</td>
                                <td>{result.aeroclub}</td>
                                <td>{`${result.glider} (${result.handicap})`}</td>
                                <td>{result.points}</td>
                                <td>
                                    {result.flightId !== null && (
                                        <Button
                                            outline
                                            color="primary"
                                            onClick={() => playFlight(result.flightId as number)}
                                            size="sm">
                                            {t('přehrát let')}
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    )
}

export default DailyResults
