import { useStore } from '@/app/store'
import { Button } from '@/shared/shadcn'
import { FC } from 'react'
import { saveResume } from '@/processes/functions/saveResume'

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
	return <Button onClick={() => saveResume(props)}>Сохранить</Button>
}
