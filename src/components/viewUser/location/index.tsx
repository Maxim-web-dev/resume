import { useStore } from '@/main'
import { FC } from 'react'
import style from './location.module.css'
export const ViewLocation: FC = () => {
	const { viewLocation } = useStore()
	return <h3 className={style.h3}>{viewLocation}</h3>
}
