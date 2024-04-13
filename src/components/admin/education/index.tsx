import { FC } from 'react'
import { AddButton } from './buttons/addButton'
import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn'
import { ControlPanel } from './controlPanel'
import { DatePicker } from './buttons/datePicker'
import { DeleteEducation } from './buttons/deleteButton'
import { useStore } from '@/app/store'

export const EducationCard: FC = () => {
	const { education } = useStore()

	return (
		<Card className='flex flex-col gap-7 p-6'>
			<CardTitle>
				Обучение
				<AddButton />
			</CardTitle>
			{education?.map((_, indexOfCard) => (
				<Card key={indexOfCard} className='flex flex-col gap-6 relative'>
					<DeleteEducation indexOfCard={indexOfCard} />
					<CardHeader>
						<div className='flex items-center gap-2'>
							<ControlPanel indexOfCard={indexOfCard} />
						</div>
					</CardHeader>
					<CardFooter>
						<DatePicker indexOfEducation={indexOfCard} />
					</CardFooter>
				</Card>
			))}
		</Card>
	)
}
