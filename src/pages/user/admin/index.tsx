import { FC } from 'react'
import {
	EducationCard,
	ExperienceCard,
	ProjectsCard,
	SkillsCard,
	BioCard
} from '@/components/admin'
import { useAdminUserRequest } from '@/processes/hooks/adminRequest'
import { AccountButton, ModeToggle, SaveResumeButton, ShareResumeButton } from '@/shared/buttons'

import style from './user.module.css'

export const AdminUserPage: FC = () => {
	useAdminUserRequest()

	return (
		<div className={style.wrapper}>
			<div className={style.modeToggle}></div>
			<div className={style.account}></div>
			<BioCard />
			<div className='flex gap-6 w-full'>
				<div className='flex flex-col gap-6 w-[50%]'>
					<EducationCard />
					<ProjectsCard />
				</div>
				<div className='flex flex-col gap-6 w-[50%]'>
					<ExperienceCard />
					<SkillsCard />
				</div>
			</div>
			<div className={style.commandCenter}>
				<SaveResumeButton />
				<ShareResumeButton />
				<ModeToggle />
				<AccountButton />
			</div>
		</div>
	)
}
