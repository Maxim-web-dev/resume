import { FC } from 'react'
import { JobCard, LocationCard, MailCard } from '@/components/admin'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/shadcn'
import { useStore } from '@/app/store'
import style from './bioCard.module.css'

export const BioCard: FC = () => {
	const { name } = useStore()
	return (
		<Card>
			<CardHeader>
				<CardTitle className={style.viewName}>
					<>{name}</>
				</CardTitle>
				<JobCard />
			</CardHeader>
			<CardContent className='flex gap-5 flex-wrap justify-between'>
				<LocationCard />
				<MailCard />
			</CardContent>
		</Card>
	)
}
