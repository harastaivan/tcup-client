import { useState } from 'react'
import TopResults from 'components/results/TopResults'
import SeeYouCloudVisualisation from 'components/results/SeeYouCloudVisualisation'
import ResultsWrapper from 'components/results/ResultsWrapper'
import TotalResults from 'components/results/TotalResults'
import DailyResults from 'components/results/DailyResults'

enum Page {
    topResults,
    totalResults,
    dailyResults,
}
const Results = () => {
    const [page, setPage] = useState(Page.topResults)
    const [competitionClass, setCompetitionClass] = useState<{ _id: string; name: string } | null>(null)
    const [visualisationMaximised, setVisualisationMaximised] = useState(false)

    const [flightId, setFlightId] = useState<number | null>(null)

    const playFlight = (flightId: number) => {
        setFlightId(flightId)
        setVisualisationMaximised(true)
    }

    const goToTopResults = () => {
        setPage(Page.topResults)
    }

    const goToTotalResults = (classId: { _id: string; name: string }) => () => {
        setPage(Page.totalResults)
        setCompetitionClass(classId)
    }

    const goToDailyResults = (classId: { _id: string; name: string }) => () => {
        setPage(Page.dailyResults)
        setCompetitionClass(classId)
    }

    return (
        <>
            <SeeYouCloudVisualisation
                contestId={3190}
                flightId={flightId}
                maximised={visualisationMaximised}
                setMaximised={setVisualisationMaximised}
            />
            <ResultsWrapper maximised={!visualisationMaximised}>
                {page === Page.topResults && (
                    <TopResults goToTotalResults={goToTotalResults} goToDailyResults={goToDailyResults} />
                )}
                {page === Page.totalResults && (
                    <TotalResults
                        competitionClass={competitionClass as { _id: string; name: string }}
                        goToTopResults={goToTopResults}
                        goToDailyResults={goToDailyResults}
                    />
                )}
                {page === Page.dailyResults && (
                    <DailyResults
                        competitionClass={competitionClass as { _id: string; name: string }}
                        playFlight={playFlight}
                        goToTopResults={goToTopResults}
                        goToTotalResults={goToTotalResults}
                    />
                )}
            </ResultsWrapper>
        </>
    )
}

export default Results
