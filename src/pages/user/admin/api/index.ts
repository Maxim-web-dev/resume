// import axios from 'axios'

// import { useStore } from '@/app/store/user'
// import { TypeUser } from '@/app/types/user'


// export const getUser = async () => {
// 	try {
// 		const id: string | null = localStorage.getItem('id')
// 		if (!id) {
// 			throw new Error('Id not found in localStorage')
// 		}
// 		const response = await axios.get<TypeUser[]>(
// 			`https://65a02bdf7310aa1f8144b77c.mockapi.io/users?id=${id}`
// 		)
// 		set(response.data[0])
// 	} catch (error) {
// 		console.warn(error)
// 	}
// }