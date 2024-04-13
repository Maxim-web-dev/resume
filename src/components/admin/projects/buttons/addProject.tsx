import { FC } from 'react'
import { useStore } from '@/app/store'

export const AddButton: FC = () => {
	const { projects, addProject } = useStore()
	
	return (
		<>
			{projects?.length < 4 || !projects ? (
				<div
					onClick={() => {
						addProject()
					}}
					className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'
				>
					Добавить
				</div>
			): ''}
		</>
	)
}
