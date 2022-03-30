import type { ReactNode } from 'react'

interface RowProps {
    children: ReactNode
}

export const Row = ({ children }: RowProps) => {
    return (
        <div
            style={{
                display: 'flex',
                gap: '1em',
            }}>
            {children}
        </div>
    )
}
