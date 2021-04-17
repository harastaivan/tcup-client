import { useTranslation } from 'react-i18next'
import { NavLink } from 'reactstrap'

type Props = {
    children: string
}
const ResultsTitle = ({ children }: Props) => {
    const { t } = useTranslation()

    const soaringSpotUrl = process.env.REACT_APP_SOARING_SPOT_URL

    return (
        <div>
            <h3>{children}</h3>
            {soaringSpotUrl && (
                <NavLink href={soaringSpotUrl} target="_blank" style={{ padding: '0' }}>
                    {t('Přejít na SoaringSpot')}
                </NavLink>
            )}
        </div>
    )
}

export default ResultsTitle
