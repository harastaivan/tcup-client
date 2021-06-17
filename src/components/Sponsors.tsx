import React from 'react'
import { useTranslation } from 'react-i18next'
import useSponsors, { Sponsor as SponsorType } from '../hooks/useSponsors'
import styled from 'styled-components'

const SponsorImage = styled.img`
    width: 100%;
    max-width: 250px;
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
        return <a href={url}>{img}</a>
    }

    return img
}

const Sponsors = () => {
    const { t } = useTranslation()
    const sponsors = useSponsors()

    return (
        <div>
            <h2>{t('Sponzoři')}</h2>
            <SponsorsWrapper>
                {sponsors.map((sponsor) => (
                    <Sponsor {...sponsor} />
                ))}
            </SponsorsWrapper>
        </div>
    )
}

export default Sponsors
