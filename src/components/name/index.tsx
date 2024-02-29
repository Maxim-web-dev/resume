import { FC } from 'react'
import { useStore } from '@/main'
import style from './name.module.css'

export const NameDialog: FC = () => {
	const { name } = useStore()
	return <h1 className={style.name}>{name}</h1>
}