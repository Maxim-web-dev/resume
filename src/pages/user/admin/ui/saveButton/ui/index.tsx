import { FC } from 'react'
import { Button, useStore } from '@/main'
import { sendUser } from '../api'

export const SaveResumeButton: FC = () => {
	const { job, location, mail, education, experience, projects, skills } =
		useStore()

	const props = {
		job,
		location,
		mail,
		education,
		experience,
		projects,
		skills,
	}
	return (
		<Button
			onClick={() => sendUser(props)}
			className='absolute top-[30px] right-[120px]'
		>
			Сохранить
		</Button>
	)
}
