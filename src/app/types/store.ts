type experience = {
	place: string,
	tools: string[],
	description: string[]
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
}
export type TypeStore = {
	setAdminUser: (data: TypeData) => void,
	setViewUser: (data: TypeData) => void,
	viewName: string,
	viewJob: string[],
	viewLocation: string,
	viewMail: string,
	viewEducation: string[],
	viewExperience: experience[],
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
	changeEducation: (id: number, text: string) => void
	deleteEducation: (id: number) => void,

	experience: experience[],
	addExperience: () => void,
	deleteExperience: (id: number) => void,
	addPlace: (place: string, id: number) => void,
	changePlace: (place: string, id: number) => void,
	deletePlace: (id: number) => void,
	addTool: (id: number, tool: string) => void,
	changeTool: (id: number, tool: string, index: number) => void,
	deleteTool: (id: number, index: number) => void,
	addProblem: (id: number, problem: string) => void,
	changeProblem: (id: number, problem: string, index: number) => void,
	deleteProblem: (id: number, index: number) => void,
}