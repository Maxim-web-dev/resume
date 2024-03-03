import { useStore } from '@/main'
import { FC } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/shadcn/card'
import { CalendarIcon } from '@radix-ui/react-icons'

export const ViewEducation: FC = () => {
	const { viewEducation } = useStore()

	return (
		<Card>
			<CardHeader>
				<CardTitle>Обучение</CardTitle>
			</CardHeader>
			<CardContent className='flex flex-col gap-8'>
				{viewEducation.map((value, index) => (
					<div
						key={index}
						className='mb-0 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0'
					>
						<span className='flex h-2 w-2 rounded-full bg-sky-500' />
						<p>{value}</p>

						<CalendarIcon className='ml-6' />
						<p className='ml-5'>09.2022 - 01.2023</p>
					</div>
				))}
			</CardContent>
		</Card>
	)
}