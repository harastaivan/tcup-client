import type { FC, SetStateAction } from 'react'
import { useTranslation } from 'react-i18next'
import VisualisationMaximisedControl from './VisualisationMaximisedControl'

type ErrorProps = {
    maximised: boolean
    setMaximised: React.Dispatch<SetStateAction<boolean>>
    children: string
}

const SomeError: FC<ErrorProps> = ({ maximised, setMaximised, children }) => {
    return (
        <div style={{ position: 'relative', height: maximised ? '630px' : '40px', transition: 'height 0.75s ease' }}>
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0',
                    overflow: 'hidden',
                    background: '#eee',
                }}>
                <div
                    style={{
                        height: '630px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                    {children}
                </div>
            </div>
            <VisualisationMaximisedControl maximised={maximised} onToggle={(maximised) => setMaximised(maximised)} />
        </div>
    )
}

type Props = {
    contestId: string | number | null
    flightId: string | number | null
    maximised: boolean
    setMaximised: React.Dispatch<React.SetStateAction<boolean>>
}

const SeeYouCloudVisualisation: React.FC<Props> = ({ contestId, flightId, maximised, setMaximised }) => {
    const { t } = useTranslation()

    if (contestId === null) {
        return (
            <SomeError maximised={maximised} setMaximised={setMaximised}>
                {t('Něco se pokazilo')}
            </SomeError>
        )
    }

    if (flightId === null) {
        return (
            <SomeError maximised={maximised} setMaximised={setMaximised}>
                {t('Zde můžete přehrávat lety z denních výsledků.')}
            </SomeError>
        )
    }

    return (
        <div style={{ position: 'relative', height: maximised ? '630px' : '40px', transition: 'height 0.75s ease' }}>
            <iframe
                title="seeyou.cloud"
                src={`https://www.soaringspot.com/cs/download-contest-flight/${contestId}-${flightId}`}
                style={{
                    width: '100%',
                    height: '100%',
                    border: '0',
                    overflow: 'hidden',
                }}
            />
            <VisualisationMaximisedControl maximised={maximised} onToggle={(maximised) => setMaximised(maximised)} />
        </div>
    )
}

export default SeeYouCloudVisualisation
