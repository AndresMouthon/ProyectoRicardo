import React from 'react'

export default function Container({ children }) {
    return (
        <div style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {children}
        </div>
    )
}
