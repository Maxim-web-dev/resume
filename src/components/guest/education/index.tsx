import { FC } from 'react'
import { useStore } from '@/app/store'
import {
	Card,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn'
import { DateCard } from './dateCard'

export const GuestEducationCard: FC = () => {
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
