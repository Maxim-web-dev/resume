import { useStore } from '@/main'
import { FC } from 'react'
import { Card, CardTitle } from '@/shared/shadcn/card'
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/main'

export const ViewSkills: FC = () => {
	const { viewSkills } = useStore()

	return (
		<>
			{viewSkills.length ? (
				<Card className='flex flex-col gap-7 p-6'>
					<div className='flex items-center'>
						<CardTitle>Навыки и технологии</CardTitle>
					</div>
					<div className='flex gap-2 flex-wrap'>
						{viewSkills?.map((_, indexOfSkill) => (
							<TooltipProvider delayDuration={0} key={indexOfSkill}>
								<Tooltip>
									<TooltipTrigger asChild>
										{viewSkills[indexOfSkill]?.name && (
											<div className='relative inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer'>
												{viewSkills[indexOfSkill]?.name}
											</div>
										)}
									</TooltipTrigger>
									<TooltipContent>
										<p>
											Владение навыком: {viewSkills[indexOfSkill]?.level}/100
										</p>
									</TooltipContent>
								</Tooltip>
							</TooltipProvider>
						))}
					</div>
				</Card>
			) : ''}
		</>
	)
}
