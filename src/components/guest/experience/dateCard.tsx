import { CalendarIcon } from '@radix-ui/react-icons'
import { FC } from 'react'
import { useStore } from '@/app/store'

interface props {
	indexOfExperience: number
}

export const DateCard: FC<props> = ({ indexOfExperience }) => {
	const { viewExperience } = useStore()
	if (
		viewExperience[indexOfExperience]?.date?.from &&
		viewExperience[indexOfExperience]?.date?.to
	) {
		const dateFrom = new Date(viewExperience[indexOfExperience]?.date?.from)
		const dateTo = new Date(viewExperience[indexOfExperience]?.date?.to)

		return (
			<div className='flex gap-1 items-center'>
				<CalendarIcon />
				<p>
					{dateFrom.toLocaleString('default', {
						month: 'short',
					})}
				</p>
				<p>{dateFrom.getFullYear()}</p>
				<p>-</p>
				<p>{dateTo.toLocaleString('default', { month: 'short' })}</p>
				<p>{dateTo.getFullYear()}</p>
			</div>
		)
	} else {
		return <p>-</p>
	}
}
