import { Container } from 'reactstrap'
import Footer from '../../containers/Footer'

type Props = {
    maximised?: boolean
    children: React.ReactNode
}

const ResultsWrapper = ({ maximised, children }: Props) => {
    return (
        <div
            style={{
                height: `calc(100vh - 64px - ${maximised ? '40px' : '630px'})`,
                overflow: 'scroll',
                transition: 'height 0.75s ease',
            }}>
            <Container className="p-3 min-vh-container transparent-background">
                {children}
                <Footer />
            </Container>
        </div>
    )
}

export default ResultsWrapper
