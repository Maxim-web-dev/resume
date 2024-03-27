import { Button, useStore } from '@/main'
import { Trash } from 'lucide-react'
import { FC } from 'react'

interface props {
	indexOfCard: number
}

export const DeleteEducation: FC<props> = ({ indexOfCard }) => {
	const { deleteEducation } = useStore()

	return (
		<Button
			onClick={() => deleteEducation(indexOfCard)}
			variant='destructive'
			size='icon'
			className='absolute top-2 right-2'
		>
			<Trash size={17} />
		</Button>
	)
}
