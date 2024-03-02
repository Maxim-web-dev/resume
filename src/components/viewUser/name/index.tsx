import { useStore } from '@/main'
import { FC } from 'react'
import style from './name.module.css'

export const ViewName: FC = () => {

	const { viewName } = useStore()

	return <h1 className={style.name}>{viewName}</h1>
}
