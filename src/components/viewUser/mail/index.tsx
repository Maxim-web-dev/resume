import { useStore } from '@/main'
import { FC } from 'react'
import style from './mail.module.css'

export const ViewMail: FC = () => {
	const { viewMail } = useStore()
	return <h3 className={style.h3}>{viewMail}</h3>
}