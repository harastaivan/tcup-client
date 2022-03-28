import { APP_TITLE } from 'config/constants'
import Spinner from './Spinner'

const SpinnerFullPage = () => {
    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                height: '100vh',
            }}>
            <h1 style={{ fontSize: '5rem', marginBottom: '1rem', textAlign: 'center' }}>{APP_TITLE}</h1>
            <Spinner />
        </div>
    )
}

export default SpinnerFullPage
