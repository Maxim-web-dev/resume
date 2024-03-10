import { TypeUser } from './user'

type experience = {
	place: string,
	tools: string[],
	description: string[]
}
type projects = {
	name: string,
	description: string,
	link: string
}
type TypeData = {
	name: string,
	about: {
		job: string[],
		location: string,
		mail: string,
	}
	education: string[],
	experience: experience[],
	projects: projects[]
}
export type TypeStore = {
	setAdminUser: (data: TypeUser) => void,
	setViewUser: (data: TypeData) => void,
	viewName: string,
	viewJob: string[],
	viewLocation: string,
	viewMail: string,
	viewEducation: string[],
	viewExperience: experience[],
	viewProjects: projects[]

	name: string,
	setName: (name: string) => void,

	job: string[],
	addJob: (newJob: string) => void,
	changeJob: (id: number, newJob: string) => void,
	deleteJob: (id: number) => void,

	location: string,
	setLocation: (location?: string) => void,
	deleteLocation: () => void,

	mail: string,
	setMail: (mail?: string) => void,
	deleteMail: () => void,

	education: string[],
	addEducation: (text: string) => void,
	changeEducation: (indexOfCard: number, text: string) => void
	deleteEducation: (indexOfCard: number) => void,

	experience: experience[],
	addExperience: () => void,
	deleteExperience: (indexOfCard: number) => void,
	addPlace: (place: string, indexOfCard: number) => void,
	changePlace: (place: string, indexOfCard: number) => void,
	deletePlace: (indexOfCard: number) => void,
	addTool: (indexOfCard: number, tool: string) => void,
	changeTool: (indexOfCard: number, tool: string, indexOfElement: number) => void,
	deleteTool: (indexOfCard: number, indexOfElement: number) => void,
	addProblem: (indexOfCard: number, problem: string) => void,
	changeProblem: (indexOfCard: number, problem: string, indexOfElement: number) => void,
	deleteProblem: (indexOfCard: number, indexOfElement: number) => void,

	projects: projects[],
	setNameOfProject: (name: string, indexOfCard: number) => void,
	deleteNameOfProject: (indexOfCard: number) => void,
	setDescriptionOfProject: (description: string, indexOfCard: number) => void,
	deleteDescriptionOfProject: (indexOfCard: number) => void,
	setLinkOfProject: (link: string, indexOfCard: number) => void,
	deleteLinkOfProject: (indexOfCard: number) => void,
	addProject: () => void,
	deleteProject: (indexOfCard: number) => void
}