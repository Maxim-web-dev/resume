import axios from 'axios'
import { useEffect } from 'react'
import { useStore } from '@/app/store'
import { TypeUser } from '@/app/types'

export const useAdminUserRequest = () => {
	const { setAdminUser } = useStore()
	const id: string | null = localStorage.getItem('id')

	const getUserAndSetData = async () => {
		try {
			const response = await axios.get<TypeUser[]>(
				`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?id=${id}`
			)
			response && setAdminUser(response.data[0])
		} catch (error) {
			console.error(error)
		}
	}

	useEffect(() => {
		getUserAndSetData()
	}, [])
}
