import { useStore } from '@/store/user'
import { Description } from './description'
import { FC } from 'react'

export const Education: FC = () => {
	const { education } = useStore()
	return (
		<div className='w-[60vw] flex justify-between'>
			Образование
			<Description title={education} />
		</div>
	)
}
