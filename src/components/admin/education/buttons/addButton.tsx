import { ChangeEvent, FC, useState } from 'react'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	Textarea,
	Label,
	Button,
	//custom
	useStore,
	Badge,
} from '@/main'

export const AddButton: FC = () => {
	const { addEducation } = useStore()
	const [text, setText] = useState<string>('')

	const onChange = (e: ChangeEvent<HTMLTextAreaElement>) =>
		setText(e.target.value)

	const onSubmit = () => {
		addEducation(text)
		setText('')
	}
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Badge variant='outline' className='inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:bg-secondary/80 cursor-pointer ml-2'>
					Добавить
				</Badge>
			</DialogTrigger>
			<DialogContent className='sm:max-w-[425px]'>
				<DialogHeader>
					<DialogTitle>Добавить</DialogTitle>
				</DialogHeader>
				<div className='grid gap-4 py-4'>
					<div className='grid grid-cols-4 items-center gap-4'>
						<Label htmlFor='text' className='text-right'>
							Обучение
						</Label>
						<Textarea
							id='text'
							className='col-span-3'
							placeholder='Пример: прошел курсы от Яндекс.'
							value={text}
							onChange={onChange}
							maxLength={90}
						/>
					</div>
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button onClick={onSubmit}>Сохранить</Button>
					</DialogClose>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
