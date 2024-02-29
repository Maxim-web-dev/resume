import { FC } from 'react'
import {
	useStore,
} from '@/main'

export const AddButton: FC = () => {
	const { addExperience } = useStore()

	const onClick = () => addExperience()
	return (
		<button
			onClick={onClick}
			className='bg-[#242634] p-2 rounded-xl inline-flex items-center'
		>
			+
		</button>
	)
}
