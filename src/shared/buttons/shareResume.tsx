import { Check, Copy } from 'lucide-react'
import { FC, useState } from 'react'
import {
	Button,
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/shared/shadcn'

export const ShareResumeButton: FC = () => {
	const [isClicked, setClicked] = useState(false)
	const handleClick = () => {
		navigator.clipboard.writeText(
			`https://maxim-web-dev.github.io/resume/#/user/view/${localStorage.getItem(
				'id'
			)}`
		)
		setClicked(true)
		const timeout = setTimeout(() => {
			setClicked(false)
			clearTimeout(timeout)
		}, 1000)
	}
	return (
		<TooltipProvider>
			<Tooltip delayDuration={0}>
				<TooltipTrigger asChild>
					<Button
						className='flex justify-center items-center gap-1'
						size='icon'
						variant='outline'
						onClick={handleClick}
					>
						{isClicked ? <Check size={17} color='green' /> : <Copy size={17} />}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Скопировать ссылку на резюме</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}
