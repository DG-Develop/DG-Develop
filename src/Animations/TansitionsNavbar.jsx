import React, { useEffect, useState } from 'react'
import Loading from '../components/Loading'

const TansitionsNavbar = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 3000)

        return () => clearTimeout(timer)
    }, [isLoading])

    return (
        <div>
            {isLoading ? <Loading isOpen={isLoading} /> : children}
        </div>
    )
}

export default TansitionsNavbar