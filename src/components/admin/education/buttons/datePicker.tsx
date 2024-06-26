import { format } from 'date-fns'
import { DateRange } from 'react-day-picker'
import { FC, useState } from 'react'
import { CalendarIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import {
	Button,
	Calendar,
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/shared/shadcn'
import { useStore } from '@/app/store'

interface props extends React.HTMLAttributes<HTMLDivElement> {
	indexOfEducation: number
}
export const DatePicker: FC<props> = ({ className, indexOfEducation }) => {
	const { education, setDateEducation } = useStore()

	const fromDate = education[indexOfEducation]?.date?.from
		? new Date(education[indexOfEducation].date.from)
		: new Date()
	const toDate = education[indexOfEducation]?.date?.to
		? new Date(education[indexOfEducation].date.to)
		: new Date()

	const [date, setDate] = useState<DateRange | undefined>({
		from: fromDate,
		to: toDate,
	})

	const onSelect = (date: any) => {
		setDate(date)
		setDateEducation(indexOfEducation, date)
	}

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover>
				<PopoverTrigger asChild>
					<Button
						id='date'
						variant={'outline'}
						className={cn(
							'w-full justify-start text-left font-normal',
							!date && 'text-muted-foreground'
						)}
					>
						<CalendarIcon className='mr-2 h-4 w-4' />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, 'LLL dd, y')} -{' '}
									{format(date.to, 'LLL dd, y')}
								</>
							) : (
								format(date.from, 'LLL dd, y')
							)
						) : (
							<span>Выберите даты</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent className='w-auto p-0' align='start'>
					<Calendar
						initialFocus
						mode='range'
						defaultMonth={date?.from}
						selected={date}
						onSelect={onSelect}
						numberOfMonths={2}
					/>
				</PopoverContent>
			</Popover>
		</div>
	)
}
