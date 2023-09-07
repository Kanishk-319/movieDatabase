import React from 'react'

function Alert({ alert }) {
    return (
        <div style={{ margin: '0' }} className={`alert alert-${alert.type}`} role="alert">
            {alert.message}
        </div>
    )
}

export default Alert