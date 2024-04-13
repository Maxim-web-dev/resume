import axios from 'axios'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useStore } from '@/app/store'
import { TypeUser } from '@/app/types'

export const useGuestUserRequest = () => {
	const { id } = useParams()
	const { setViewUser } = useStore()

	useEffect(() => {
		const getUserById = async () => {
			try {
				const response = await axios.get<TypeUser[]>(
					`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?id=${id}`
				)
				response && setViewUser(response.data[0])
			} catch (error) {
				console.error(error)
			}
		}
		getUserById()
	}, [id])
}