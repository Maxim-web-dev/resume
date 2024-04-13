import { Trash } from 'lucide-react'
import { FC } from 'react'
import { useStore } from '@/app/store'
import { Button } from '@/shared/shadcn'

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
