import { FC } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn/card'
import { useStore } from '@/main'
import style from './bioCard.module.css'

export const BioCard: FC = () => {
	const { viewName, viewJob, viewLocation, viewMail } = useStore()

	return (
		<Card>
			<CardHeader>
				<CardTitle className={style.viewName}>
					<>{viewName}</>
				</CardTitle>
				{viewJob.map((value, index) => (
					<CardDescription key={index}>{value}</CardDescription>
				))}
			</CardHeader>
			<CardContent className='flex gap-5 flex-wrap justify-between'>
				<p>{viewLocation}</p>
				<p>{viewMail}</p>
			</CardContent>
		</Card>
	)
}
