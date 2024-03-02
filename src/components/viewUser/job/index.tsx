import { useStore } from '@/main'
import { FC } from 'react'

import style from './job.module.css'
export const ViewJob: FC = () => {
	const { viewJob } = useStore()

	return (
		<div className={style.div}>
			{viewJob.map((value, index) => (
				<h1 key={index} className={style.h1}>{value}</h1>
			))}
		</div>
	)
}
