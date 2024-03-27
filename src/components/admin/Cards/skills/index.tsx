import { useStore } from '@/main'
import { FC } from 'react'
import { Card, CardTitle } from '@/shared/shadcn/card'
import { AddSkillButton } from './buttons/addSkill'
import { SkillItem } from './items/item'

export const Skills: FC = () => {
	const { skills } = useStore()

	return (
		<Card className='flex flex-col  p-6'>
			<div className='flex items-center'>
				<CardTitle>Навыки и технологии</CardTitle>
				<AddSkillButton />
			</div>
			<div className='flex gap-2 flex-wrap'>
				{skills?.map((_, index) => (
					<div className='mt-3' key={index}>
						<SkillItem key={index} indexOfSkill={index} />
					</div>
				))}
			</div>
		</Card>
	)
}
