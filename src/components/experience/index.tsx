import { useStore } from '@/main'
import { FC } from 'react'
import { AddButton } from './buttons/addButton'
import { ControlPanel } from './controlPanel'

export const Experience: FC = () => {
	const { experience } = useStore()

	return (
		<div className='text-white bg-[#1b1d27] rounded-[20px] min-h-[15vh] flex p-3 gap-3'>
			<h1 className='self-center'>Опыт</h1>
			{experience.length < 4 && <AddButton />}
			<div className='flex gap-6 w-full flex-wrap'>
				{experience &&
					experience.map((_, index) => <ControlPanel id={index} key={index} />)}
			</div>
		</div>
	)
}
