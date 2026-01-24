import { ListGroup, ListGroupItem } from 'reactstrap'
import { useTranslation } from 'react-i18next'
import { Domain, domainConfig } from 'config/domainConfig'

const competitions = Object.values(Domain).map((domain) => ({
    name: domainConfig[domain].title,
    url: `https://${domain}`,
}))
const legacyCompetitions = [2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2009].map((year) => ({
    name: `tcup ${year}`,
    url: `http://www.gliding.cz/souteze/${year}/tcup`,
}))

export const Archive = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h1>{t('archive.title')}</h1>
            <ListGroup>
                {competitions.map((competition) => (
                    <ListGroupItem tag="a" href={competition.url} key={competition.name}>
                        {competition.name}
                    </ListGroupItem>
                ))}
                {legacyCompetitions.map((competition) => (
                    <ListGroupItem tag="a" href={competition.url} key={competition.name}>
                        {competition.name}
                    </ListGroupItem>
                ))}
            </ListGroup>
        </div>
    )
}
