import { useTranslation } from 'react-i18next'
import { Button, Col, Row, Table } from 'reactstrap'

import ResultsTitle from './ResultsTitle'
import Spinner from 'components/Spinner'
import { useTotalResults } from 'hooks'

type Props = {
    competitionClass: { _id: string; name: string }
    goToTopResults: () => void
    goToDailyResults: (competitionClass: { _id: string; name: string }) => () => void
}

const TotalResults = ({ competitionClass, goToTopResults, goToDailyResults }: Props) => {
    const { t } = useTranslation()

    const { results, loaded, error } = useTotalResults(competitionClass._id)

    return (
        <div style={{ marginTop: '2rem' }}>
            <ResultsTitle>{`${t('Celkové výsledky')} (${competitionClass.name})`}</ResultsTitle>
            {error && t('Došlo k chybě')}
            {!loaded && !error && (
                <div style={{ minHeight: '60vh' }}>
                    <Spinner />
                </div>
            )}
            {loaded && results && (
                <Table striped responsive style={{ marginTop: '2rem' }}>
                    <thead>
                        <tr>
                            <th>{t('#')}</th>
                            <th>{t('jméno')}</th>
                            <th>{t('aeroklub')}</th>
                            <th>{t('typ')}</th>
                            <th>{t('body')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr key={index}>
                                <td>{result.position}</td>
                                <td>{result.name}</td>
                                <td>{result.aeroclub}</td>
                                <td>{`${result.glider} (${result.handicap})`}</td>
                                <td>{result.points}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
            <Row style={{ marginTop: '2rem' }}>
                <Col md="6">
                    <Button style={{ width: '100%', marginBottom: '10px' }} color="secondary" onClick={goToTopResults}>
                        {t('Zpět')}
                    </Button>
                </Col>
                <Col md="6">
                    <Button
                        style={{ width: '100%', marginBottom: '10px' }}
                        color="secondary"
                        outline
                        onClick={goToDailyResults(competitionClass)}>
                        {t('Denní výsledky')}
                    </Button>
                </Col>
            </Row>
        </div>
    )
}

export default TotalResults
