import { ProblemItem, ToolItem, useStore } from '@/main'
import { FC } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn/card'
import { PlaceItem } from './items/place'
import { AddToolButton } from './buttons/addTool'
import { AddProblemButton } from './buttons/addProblem'
import { AddExperience } from './buttons/addExperience'
import { DeleteExperience } from './buttons/deleteExperience'
import { DatePicker } from './buttons/datePicker'

export const Experience: FC = () => {
	const { experience } = useStore()
	console.log(experience)

	return (
		<Card className='flex flex-col gap-7 p-6'>
			<CardTitle>
				Опыт
				<AddExperience />
			</CardTitle>
			{experience?.map((_, indexOfCard) => (
				<Card key={indexOfCard} className='flex flex-col gap-6 relative'>
					<DeleteExperience indexOfCard={indexOfCard} />
					<CardHeader>
						<div className='flex items-center gap-2'>
							<CardDescription>Место работы</CardDescription>
							<PlaceItem indexOfCard={indexOfCard} />
						</div>
					</CardHeader>
					<CardContent className='flex flex-col'>
						<div className='flex flex-col gap-3'>
							<div className='flex'>
								<CardDescription>Технологии</CardDescription>
								<AddToolButton id={indexOfCard} />
							</div>
							<div className='flex gap-2 flex-wrap'>
								{experience[indexOfCard]?.tools.map((_, indexOfElement) => (
									<ToolItem
										key={indexOfElement}
										index={indexOfElement}
										id={indexOfCard}
									/>
								))}
							</div>
						</div>
					</CardContent>
					<CardContent className='flex flex-col gap-2'>
						<div className='flex'>
							<CardDescription>Задачи</CardDescription>
							<AddProblemButton id={indexOfCard} />
						</div>
						{experience[indexOfCard]?.description.map((_, indexOfElement) => (
							<div
								key={indexOfElement}
								className='mb-0 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0'
							>
								<span className='flex h-2 w-2 rounded-full bg-sky-500' />
								<ProblemItem
									key={indexOfElement}
									id={indexOfCard}
									index={indexOfElement}
								/>
							</div>
						))}
					</CardContent>
					<CardFooter>
						<DatePicker indexOfExperience={indexOfCard}/>
					</CardFooter>
				</Card>
			))}
		</Card>
	)
}
