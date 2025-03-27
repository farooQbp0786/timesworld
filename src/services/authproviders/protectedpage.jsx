import React from 'react'
import { Outlet } from 'react-router-dom'

const ProtectedPae = () => localStorage.getItem('token') ? <Outlet /> : <h5>You are not allowed to view this page</h5>

export default ProtectedPae