import { TypeUser } from '@/main'
import axios from 'axios'

export const getUser = async () => {
	try {
		const id: string | null = localStorage.getItem('id')
		if (!id) {
			throw new Error('Id not found in localStorage')
		}
		const response = await axios.get<TypeUser[]>(
			`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?id=${id}`
		)
		return response.data[0]
	} catch (error) {
		console.error(error)
	}
}