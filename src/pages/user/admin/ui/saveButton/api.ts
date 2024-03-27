import axios from 'axios'
import { toast } from 'sonner'
import {
	TypeEducationElement,
	TypeExperienceElement,
	TypeProjectElement,
	TypeSkillElement,
} from '@/app/types/elementsOfUser'

type filteredEducationFunc = () => TypeEducationElement[]
type filteredExperienceFunc = () => TypeExperienceElement[]
type filteredProjectFunc = () => TypeProjectElement[]

interface props {
	job: string[],
	location: string,
	mail: string,
	education: TypeEducationElement[],
	experience: TypeExperienceElement[],
	projects: TypeProjectElement[],
	skills: TypeSkillElement[]
}
export const sendUser = async (props: props) => {

	const { job, location, mail, education, experience, projects, skills } = props

	const filteredEducationData: filteredEducationFunc = () => {
		return education.filter(
			education =>
				education.text.length ||
				education.date.from ||
				education.date.to
		)
	}

	const filteredExperienceData: filteredExperienceFunc = () => {
		return experience.filter(
			experience =>
				experience.place.length ||
				experience.tools.length ||
				experience.description.length ||
				experience.date.from ||
				experience.date.to
		)
	}

	const filteredProjectData: filteredProjectFunc = () => {
		return projects.filter(
			project =>
				project.name.length ||
				project.description.length ||
				project.link.length
		)
	}
	const udpateUser = async () => {
		const id: string | null = localStorage.getItem('id')
		try {
			await axios.put(
				`https://65a02bdf7310aa1f8144b77c.mockapi.io/users/${id}`,
				{
					about: {
						job,
						location,
						mail,
					},
					education: filteredEducationData(),
					experience: filteredExperienceData(),
					projects: filteredProjectData(),
					skills,
				}
			)
			toast.success('Резюме успешно сохранено', { duration: 3000 })
		} catch (error) {
			console.error(error)
			toast.error('Не удалось сохранить резюме', { duration: 3000 })
		}
	}

	udpateUser()
}