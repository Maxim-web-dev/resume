import { FC } from 'react'
import { AddButton } from './buttons/addButton'
import { useStore } from '@/main'
import { ControlPanel } from './controlPanel'

export const Education: FC = () => {
	const { education } = useStore()

	return (
		<div className='text-white bg-[#1b1d27] rounded-[20px] min-h-[15vh] flex p-3 gap-3'>
			<h1 className='self-center'>Обучение</h1>
			{education.length < 4 && <AddButton />}
			<div className='flex gap-6'>
				{education &&
					education.map((el, index) => (
						<ControlPanel text={el} id={index} key={index} />
					))}
			</div>
		</div>
	)
}
