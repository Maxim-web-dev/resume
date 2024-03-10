import { useStore } from '@/app/store/user'
import axios from 'axios'
import { FC } from 'react'
import style from './saveResume.module.css'
import { toast } from 'sonner'
import { Button } from '@/main'

export const SaveResumeButton: FC = () => {
	const { job, location, mail, education, experience, projects } = useStore()

	const udpateUser = async () => {
		const id: string | null = localStorage.getItem('id')
		try {
			await axios.put(
				`https://65a02bdf7310aa1f8144b77c.mockapi.io/users/${id}`,
				{
					about: {
						job,
						location,
						mail,
					},
					education,
					experience,
					projects,
				}
			)
			toast.success('Резюме успешно сохранено', { duration: 3000 })
		} catch (error) {
			console.error(error)
			toast.error('Не удалось сохранить резюме', { duration: 3000 })
		}
	}
	return (
		<Button onClick={udpateUser} className='absolute top-[30px] right-[120px]'>
			Сохранить
		</Button>
	)
}
