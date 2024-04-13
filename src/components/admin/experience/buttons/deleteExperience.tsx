import { FC } from 'react'
import { Trash } from 'lucide-react'
import { useStore } from '@/app/store'
import { Button } from '@/shared/shadcn'

interface props {
	indexOfCard: number
}

export const DeleteExperience: FC<props> = ({ indexOfCard }) => {
	const { deleteExperience } = useStore()

	return (
		<Button
			onClick={() => deleteExperience(indexOfCard)}
			variant='destructive'
			size='icon'
			className='absolute top-2 right-2'
		>
			<Trash size={17} />
		</Button>
	)
}
