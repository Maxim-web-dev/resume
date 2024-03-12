import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
	useStore,
} from '@/main'
import { FC } from 'react'
interface props {
	indexOfSkill: number
}
export const TooltipItem: FC<props> = ({ indexOfSkill }) => {
	const { skills } = useStore()
	return (
		<TooltipProvider delayDuration={0}>
			<Tooltip>
				<TooltipTrigger asChild>
					{skills[indexOfSkill]?.name && (
						<div className='relative inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer'>
							{skills[indexOfSkill]?.name}
						</div>
					)}
				</TooltipTrigger>
				<TooltipContent>
					<p>Владение навыком: {skills[indexOfSkill]?.level}/100</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
