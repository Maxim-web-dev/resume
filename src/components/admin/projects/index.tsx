import { FC } from 'react'
import { useStore } from '@/app/store'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn'
import { AddDescriptionButton } from './buttons/addDescription'
import { AddLinkButton } from './buttons/addLink'
import { AddNameButton } from './buttons/addName'
import { AddButton } from './buttons/addProject'
import { DeleteButton } from './buttons/deleteButton'
import { DescriptionItem } from './items/description'
import { LinkItem } from './items/link'
import { NameItem } from './items/name'

export const ProjectsCard: FC = () => {
	const { projects } = useStore()
	console.log(projects)

	return (
		<Card className='flex flex-col gap-7 p-6'>
			<CardTitle>
				Проекты
				<AddButton />
			</CardTitle>
			{projects?.map((_, indexOfCard) => (
				<Card key={indexOfCard} className='flex flex-col gap-6 relative'>
					<DeleteButton indexOfCard={indexOfCard} />
					<CardHeader>
						<div
							className={`flex items-center ${
								projects[indexOfCard]?.name ? 'gap-3' : ''
							} `}
						>
							<CardDescription>Название</CardDescription>
							<NameItem indexOfCard={indexOfCard} />
							<AddNameButton indexOfCard={indexOfCard} />
						</div>
					</CardHeader>
					<CardContent className='flex flex-col'>
						<div className='flex flex-col gap-3'>
							<div className='flex '>
								<CardDescription>Описание</CardDescription>
								<AddDescriptionButton indexOfCard={indexOfCard} />
							</div>
							<DescriptionItem indexOfCard={indexOfCard} />
						</div>
					</CardContent>
					<CardContent>
						<div
							className={`flex items-center ${
								projects[indexOfCard]?.link ? 'gap-3' : ''
							} `}
						>
							<CardDescription>Ссылка</CardDescription>
							<LinkItem indexOfCard={indexOfCard} />
							<AddLinkButton indexOfCard={indexOfCard} />
						</div>
					</CardContent>
				</Card>
			))}
		</Card>
	)
}
