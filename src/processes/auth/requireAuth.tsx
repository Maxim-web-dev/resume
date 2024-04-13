import { FC, ReactNode } from 'react'
import { Navigate } from 'react-router-dom'

interface props {
	children: ReactNode
}

export const RequireAuth: FC<props> = ({ children }) => {
	const id: null | string | undefined = localStorage.getItem('id')

	if (!id) return <Navigate to='/login' />
	
	return children
}