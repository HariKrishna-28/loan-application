import React from 'react'

interface Props {
    variant: ['success', 'error', 'warning']
    message: string
}

const Alert: React.FC<Props> = ({ variant = 'successs', message }) => {
    return (
        <div>
            <div className={`alert alert-${variant}`}>
                <span>{message}</span>
            </div>
        </div>
    )
}

export default Alert