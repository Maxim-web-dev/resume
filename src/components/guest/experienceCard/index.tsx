import { useStore } from '@/main'
import { FC } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn/card'
import { CalendarIcon } from '@radix-ui/react-icons'

export const ViewExperience: FC = () => {
	const { viewExperience } = useStore()

	return (
		<Card className='flex flex-col gap-7 p-6'>
			<CardTitle>Опыт</CardTitle>
			{viewExperience.map((_, indexOfCard) => (
				<Card key={indexOfCard} className='flex flex-col gap-6 relative'>
					<CardHeader>
						<div className='flex items-center gap-2'>
							<CardDescription>
								<p>Место работы</p>
							</CardDescription>
							{viewExperience[indexOfCard]?.place}
						</div>
					</CardHeader>
					<CardContent className='flex flex-col'>
						<div className='flex flex-col gap-3'>
							<CardDescription>Технологии</CardDescription>
							<div className='flex gap-2 flex-wrap'>
								{viewExperience[indexOfCard]?.tools.map((value, index) => (
									<p
										key={index}
										className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80'
									>
										{value}
									</p>
								))}
							</div>
						</div>
					</CardContent>
					<CardContent className='flex flex-col gap-2'>
						<CardDescription>Задачи</CardDescription>
						{viewExperience[indexOfCard]?.description.map((value, index) => (
							<div
								key={index}
								className='mb-0 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0'
							>
								<span className='flex h-2 w-2 rounded-full bg-sky-500' />
								<p>{value}</p>
							</div>
						))}
					</CardContent>
					<CardFooter>
						<CalendarIcon />
						<p className='ml-1'>09.2022 - 01.2023</p>
					</CardFooter>
				</Card>
			))}
		</Card>
	)
}
