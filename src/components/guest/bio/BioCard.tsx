import { FC } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn'
import { useStore } from '@/app/store'
import style from './bioCard.module.css'

export const GuestBioCard: FC = () => {
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
			<CardContent className={` ${viewMail || viewLocation ? '' : 'p-0'} flex gap-5 flex-wrap justify-between`}>
				<p>{viewLocation}</p>
				<p>{viewMail}</p>
			</CardContent>
		</Card>
	)
}
