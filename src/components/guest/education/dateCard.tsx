import { CalendarIcon } from '@radix-ui/react-icons'
import { FC } from 'react'
import { useStore } from '@/app/store'

interface props {
	indexOfEducation: number
}

export const DateCard: FC<props> = ({ indexOfEducation }) => {
	const { viewEducation } = useStore()
	if (
		viewEducation[indexOfEducation]?.date?.from &&
		viewEducation[indexOfEducation]?.date?.to
	) {
		const dateFrom = new Date(viewEducation[indexOfEducation]?.date?.from)
		const dateTo = new Date(viewEducation[indexOfEducation]?.date?.to)

		return (
			<div className='w-full flex gap-1 items-center'>
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
