import { useStore } from '@/main'
import { FC } from 'react'
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/shared/shadcn/card'
import { AddButton } from './buttons/addProject'
import { DeleteButton } from './buttons/deleteButton'
import { AddNameButton } from './buttons/addName'
import { AddDescriptionButton } from './buttons/addDescription'
import { AddLinkButton } from './buttons/addLink'
import { NameItem } from './items/name'
import { DescriptionItem } from './items/description'
import { LinkItem } from './items/link'

export const Projects: FC = () => {
	const { projects } = useStore()

	return (
		<Card className='flex flex-col gap-7 p-6'>
			<CardTitle>
				Проекты
				<AddButton />
			</CardTitle>
			{projects.map((_, indexOfCard) => (
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
