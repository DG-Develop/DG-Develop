import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const TansitionsNavbar = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 6000)
    }, [isLoading])

    return (
        <div>
            {isLoading ? <Loading isOpen={isLoading} /> : children}
        </div>
    )
}

export default TansitionsNavbar