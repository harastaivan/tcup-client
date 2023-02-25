import { useTranslation } from 'react-i18next'
import { useSponsors } from 'hooks'
import type { Sponsor as SponsorType } from 'hooks'
import styled from 'styled-components'

const Divider = styled.div`
    max-width: 250px;
    padding-bottom: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid #00000025;

    &:last-of-type {
        border: none;
        margin: 0;
        padding: 0;
    }
`

const SponsorImage = styled.img`
    width: 100%;
`

const SponsorsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    @media (max-width: 768px) {
        align-items: center;
    }
`

const Sponsor = ({ name, image, url }: SponsorType) => {
    const img = <SponsorImage src={image} alt={name} />

    if (url) {
        return (
            <Divider>
                <a href={url}>{img}</a>
            </Divider>
        )
    }

    return <Divider>{img}</Divider>
}

const Sponsors = () => {
    const { t } = useTranslation()
    const sponsors = useSponsors()

    return (
        <div>
            <h2>{t('Sponzoři')}</h2>
            <SponsorsWrapper>
                {sponsors.map((sponsor, key) => (
                    <Sponsor {...sponsor} key={key} />
                ))}
            </SponsorsWrapper>
        </div>
    )
}

export default Sponsors
