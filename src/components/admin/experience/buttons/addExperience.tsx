import { FC } from 'react'
import { useStore } from '@/main'

export const AddExperience: FC = () => {
	const { experience, addExperience } = useStore()

	const onClick = () => addExperience()
	return (
		<>
			{experience.length < 4 && (
				<div
					onClick={onClick}
					className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'
				>
					Добавить
				</div>
			)}
		</>
	)
}
