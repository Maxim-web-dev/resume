import { FC } from 'react'
import Description from './description'
import { useStore } from '@/store/user'
import { Button } from '@/components/ui/button'
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Badge } from '../../ui/badge'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'

type TypeForm = {
	place: string
	tools: string[]
	description: string[]
}
export const Experience: FC = () => {
	const { handleSubmit, register } = useForm<TypeForm>({ mode: 'onBlur' })

	const { experience, setExperience } = useStore()

	const onSubmit = (data: TypeForm) => {
		setExperience(data.place, data.tools, data.description)
	}

	return (
		<div className='w-[60vw] flex justify-between'>
			Опыт
			<Dialog>
				<div className='w-full flex'>
					<div className='w-full flex flex-col'>
						{experience?.map((el, index) => (
							<Description id={index} key={el.place} />
						))}
					</div>
					<DialogTrigger asChild>
						<div>
							<Badge className='m-[5px]' variant='outline'>
								<h2 className='text-black cursor-pointer'>
									{experience.length > 0 ? 'Опыт' : 'Добавить'}
								</h2>
							</Badge>
						</div>
					</DialogTrigger>
				</div>
				<DialogContent className='sm:max-w-[425px]'>
					<DialogHeader>
						<DialogTitle>Добавить</DialogTitle>
					</DialogHeader>
					<form onSubmit={handleSubmit(onSubmit)}>
						<div className='grid gap-4 py-4'>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='place' className='text-right'>
									Место работы
								</Label>
								<Input
									id='place'
									className='col-span-3'
									placeholder='Пример: Яндекс'
									{...register('place', { required: true })}
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='tools' className='text-right'>
									Технологии
								</Label>
								<Input
									id='technologies'
									className='col-span-3'
									placeholder='Пример: JavaScript'
									{...register('tools', { required: true })}
								/>
							</div>
							<div className='grid grid-cols-4 items-center gap-4'>
								<Label htmlFor='do' className='text-right'>
									Что делали?
								</Label>

								<Input
									id='do'
									className='col-span-3'
									placeholder='Пример: поддерживал микросервисы'
									{...register('description', { required: true })}
								/>
							</div>
						</div>
						<DialogFooter className='sm:justify-between'>
							<DialogClose asChild>
								<Button type='submit'>Сохранить</Button>
							</DialogClose>
						</DialogFooter>
					</form>
				</DialogContent>
			</Dialog>
		</div>
	)
}
