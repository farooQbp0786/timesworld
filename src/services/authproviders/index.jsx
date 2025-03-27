import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('Please Login')
    }
    return context
}

const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();

    const login = (tokenValue) => {
        localStorage.setItem('token', tokenValue)
        setToken(tokenValue)
        navigate('/')
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null)
        navigate('/login')
    }

    useEffect(() => {
        if (!token) {
            logout()
        } else navigate('/')
    }, [token, navigate])

    const contextValue = useMemo(() => ({ login, logout, token }), [token])
  return (
    <AuthContext.Provider value={contextValue} >
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider