import { useTranslation } from 'react-i18next'
import { NavLink } from 'reactstrap'
import { SOARING_SPOT_URL } from '../../constants'

type Props = {
    children: string
}
const ResultsTitle = ({ children }: Props) => {
    const { t } = useTranslation()

    return (
        <div>
            <h3>{children}</h3>
            {SOARING_SPOT_URL && (
                <NavLink href={SOARING_SPOT_URL} target="_blank" style={{ padding: '0' }}>
                    {t('Přejít na SoaringSpot')}
                </NavLink>
            )}
        </div>
    )
}

export default ResultsTitle
