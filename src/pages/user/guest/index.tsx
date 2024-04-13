import { FC } from 'react'
import { useGuestUserRequest } from '@/processes/hooks/guestRequest'
import {
	GuestBioCard,
	GuestEducationCard,
	GuestExperienceCard,
	GuestProjectsCard,
	GuestSkillsCard,
} from '@/components/guest'
import { ModeToggle, AccountButton } from '@/shared/buttons'
import style from './viewUser.module.css'

export const GuestUserPage: FC = () => {
	useGuestUserRequest()

	return (
		<div className={style.wrapper}>
			<div className={style.commandCenter}>
				<ModeToggle />
				<AccountButton />
			</div>
			<GuestBioCard />
			<div className='flex gap-6 w-full'>
				<div className='flex flex-col w-[50%] gap-6'>
					<GuestEducationCard />
					<GuestProjectsCard />
				</div>
				<div className='flex flex-col w-[50%] gap-6'>
					<GuestExperienceCard />
					<GuestSkillsCard />
				</div>
			</div>
		</div>
	)
}
