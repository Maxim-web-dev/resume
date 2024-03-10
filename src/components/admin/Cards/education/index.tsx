import { FC } from 'react'
import { AddButton } from './buttons/addButton'
import { useStore } from '@/main'
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/shadcn/card'
import { ControlPanel } from './controlPanel'
import { CalendarIcon } from '@radix-ui/react-icons'

export const Education: FC = () => {
	const { education } = useStore()

	return (
		<Card>
			<CardHeader>
				<CardTitle>
					Обучение <AddButton />
				</CardTitle>
			</CardHeader>
			{education.map((value, index) => (
				<CardContent className='flex flex-col gap-8' key={index}>
					<div
						key={index}
						className='mb-0 grid grid-cols-[25px_1fr] items-center pb-4 last:mb-0 last:pb-0'
					>
						<span className='flex h-2 w-2 rounded-full bg-sky-500' />
						<ControlPanel text={value} id={index} />
						<CalendarIcon className='ml-6' />
						<p className='ml-5'>09.2022 - 01.2023</p>
					</div>
				</CardContent>
			))}
		</Card>
	)
}
