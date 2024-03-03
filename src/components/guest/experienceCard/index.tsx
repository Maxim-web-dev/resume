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
		<div className='flex flex-wrap gap-6'>
			{viewExperience.map((_, index) => (
				<Card key={index}>
					<CardHeader>
						<CardTitle>Опыт</CardTitle>
					</CardHeader>
					<CardContent className='flex flex-col gap-8'>
						<div className='flex items-center gap-2'>
							<CardDescription>Место работы</CardDescription>
							{viewExperience[index]?.place}
						</div>
						<div className='flex flex-wrap gap-2'>
							<CardDescription>Технологии</CardDescription>
							{viewExperience[index]?.tools.map((value, index) => (
								<p
									key={index}
									className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80'
								>
									{value}
								</p>
							))}
						</div>
						<div>
							<CardDescription>Задачи</CardDescription>
							{viewExperience[index]?.description.map((value, index) => (
								<div
									key={index}
									className='mb-0 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0'
								>
									<span className='flex h-2 w-2 rounded-full bg-sky-500' />
									<p>{value}</p>
								</div>
							))}
						</div>
					</CardContent>
					<CardFooter>
						<CalendarIcon />
						<p className='ml-1'>09.2022 - 01.2023</p>
					</CardFooter>
				</Card>
			))}
		</div>
	)
}
