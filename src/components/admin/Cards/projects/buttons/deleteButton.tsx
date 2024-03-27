import { Button, useStore } from '@/main'
import { Trash } from 'lucide-react'
import { FC } from 'react'

interface props {
	indexOfCard: number
}

export const DeleteButton: FC<props> = ({ indexOfCard }) => {
	const { deleteProject } = useStore()

	const onClick = () => deleteProject(indexOfCard)

	return (
		<Button
			variant='destructive'
			className='absolute top-2 right-2'
			onClick={onClick}
			size='icon'
		>
			<Trash size={17} />
		</Button>
	)
}
