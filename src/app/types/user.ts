import { TypeEducationElement, TypeExperienceElement, TypeProjectElement, TypeSkillElement } from './elementsOfUser'


export type TypeUser = {
	id: number,
	name: string,
	password: string,
	about: {
		job: string[],
		location: string,
		mail: string
	},
	education: TypeEducationElement[],
	experience: TypeExperienceElement[],
	projects: TypeProjectElement[],
	skills: TypeSkillElement[]
}