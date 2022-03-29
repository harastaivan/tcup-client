import { APP_TITLE } from 'config/constants'
import { useSpinnerFullPage } from 'hooks/useSpinnerFullPage'
import Spinner from './Spinner'

const SpinnerFullPage = () => {
    const { showSpinner, mounted } = useSpinnerFullPage()

    if (!mounted) {
        return null
    }

    return (
        <div
            style={{
                width: '100vw',
                height: '100vh',
                position: 'sticky',
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                zIndex: 1000,
                opacity: 1,
                animationDuration: '0.3s',
                animationName: showSpinner ? 'none' : 'absoluteFadeOut',
            }}>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                    height: '100vh',
                    background: '#f8f9fa',
                }}>
                <h1 style={{ fontSize: '5rem', marginBottom: '1rem', textAlign: 'center' }}>{APP_TITLE}</h1>
                <Spinner />
            </div>
        </div>
    )
}

export default SpinnerFullPage
