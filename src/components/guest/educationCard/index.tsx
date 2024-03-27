import { useStore } from '@/main'
import { FC } from 'react'
import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn/card'
import { DateCard } from './DateCard'

export const ViewEducation: FC = () => {
	const { viewEducation } = useStore()

	return (
		<>
			{viewEducation.length ? (
				<Card className='flex flex-col gap-7 p-6'>
					<CardTitle>Обучение</CardTitle>
					{viewEducation.map((_, indexOfCard) => (
						<Card key={indexOfCard} className='flex flex-col gap-6 relative'>
							<CardHeader>
								<div className='flex items-center gap-2 flex-wrap'>
									<p className='max-w-[100%] break-words'>
										{viewEducation[indexOfCard]?.text ? (
											viewEducation[indexOfCard]?.text
										) : (
											<>-</>
										)}
									</p>
								</div>
							</CardHeader>

							<CardFooter>
								<DateCard indexOfEducation={indexOfCard} />
							</CardFooter>
						</Card>
					))}
				</Card>
			) : (
				''
			)}
		</>
	)
}
