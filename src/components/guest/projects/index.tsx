import { useStore } from '@/main'
import { FC } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn/card'
import { Link2Icon } from '@radix-ui/react-icons'

export const ViewProjects: FC = () => {
	const { viewProjects } = useStore()

	return (
		<Card className='flex flex-col gap-7 p-6'>
			<CardTitle>Проекты</CardTitle>
			{viewProjects.map((_, indexOfCard) => (
				<Card key={indexOfCard} className='flex flex-col gap-6 relative'>
					<CardHeader>
						<div
							className={`flex items-center ${
								viewProjects[indexOfCard]?.name ? 'gap-3' : ''
							} `}
						>
							<CardDescription>Название</CardDescription>
							{viewProjects[indexOfCard]?.name}
						</div>
					</CardHeader>
					<CardContent className='flex flex-col'>
						<div className='flex flex-col gap-3'>
							<CardDescription>Описание</CardDescription>
							{viewProjects[indexOfCard]?.description}
						</div>
					</CardContent>
					<CardContent>
						<div className='flex items-center gap-3'>
							<CardDescription>Ссылка</CardDescription>
							<div className='flex items-center gap-1'>
								<Link2Icon />
								<a href={viewProjects[indexOfCard]?.link} target='_blank'>
									<p className='text-sm bg-gradient-to-r from-[#D8AE5E] to-[#3A82F7] bg-no-repeat bg-[length:85%_4px] bg-left-bottom'>
										{viewProjects[indexOfCard]?.link}
									</p>
								</a>
							</div>
						</div>
					</CardContent>
				</Card>
			))}
		</Card>
	)
}
