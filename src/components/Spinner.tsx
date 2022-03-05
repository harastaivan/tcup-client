import React from 'react'
import { Spinner as RSSpinner } from 'reactstrap'

export interface SpinnerProps {
    withoutMargin?: boolean
}

export default function Spinner({ withoutMargin }: SpinnerProps) {
    return <RSSpinner type="grow" color="secondary" className={withoutMargin ? '' : 'm-3'} />
}
