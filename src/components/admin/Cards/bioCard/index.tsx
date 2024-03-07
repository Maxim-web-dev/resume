import { FC } from 'react'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn/card'
import {
	JobDialog,
	// LocationDialog,
	MailDialog,
	useStore,
} from '@/main'
import style from './bioCard.module.css'
import { LocationDialog } from '../../location'

export const BioCard: FC = () => {
	const { name } = useStore()
	return (
		<Card>
			<CardHeader>
				<CardTitle className={style.viewName}>
					<>{name}</>
				</CardTitle>
				<JobDialog />
			</CardHeader>
			<CardContent className='flex gap-5 flex-wrap justify-between'>
				<LocationDialog />
				<MailDialog />
			</CardContent>
		</Card>
	)
}
