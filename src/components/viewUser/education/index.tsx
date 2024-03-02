import { useStore } from '@/main'
import { FC } from 'react'
import style from './education.module.css'

export const ViewEducation: FC = () => {
	const { viewEducation } = useStore()

	return (
		<div className={style.div}>
			{viewEducation.map((value, index) => (
				<h1 className={style.h1} key={index}>{value}</h1>
			))}
		</div>
	)
}
