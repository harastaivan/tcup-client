import { Spinner as RSSpinner } from 'reactstrap'

export interface SpinnerProps {
    withoutMargin?: boolean
}

export const Spinner = ({ withoutMargin }: SpinnerProps) => {
    return <RSSpinner type="grow" color="secondary" className={withoutMargin ? '' : 'm-3'} />
}
