import { useStore } from '@/main'
import { FC } from 'react'
import style from './experience.module.css'

export const ViewExperience: FC = () => {
	const { viewExperience } = useStore()

	return (
		<div className={style.div}>
			{viewExperience[0]?.description.map((value, index) => (
				<h1 key={index} className={style.h1}>{value}</h1>
			))}
		</div>
	)
}
