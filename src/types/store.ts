type exp = {
	place: string,
	tools: string[],
	description: string[]
}
export type TypeStore = {
	name: string,
	setName: (name: string) => void,

	job: string[],
	setJob: (newJob: string) => void,
	changeJob: (prevJob: string, newJob: string) => void,
	deleteJob: (job: string) => void,

	location: string,
	setLocation: (location: string) => void,
	deleteLocation: () => void,

	mail: string,
	setMail: (mail: string) => void,
	deleteMail: () => void,

	education: string,
	setEducation: (education: string) => void,
	deleteEducation: () => void,

	experience: exp[],
	setExperience: (place: string, tools: string[], description: string[]) => void,
	changeExperience: (id: number, place: string, tools: string[], description: string[]) => void,
	deleteExperience: (id: number) => void,
	addTool: (id: number, tool: string) => void,
	changeTool: (id: number, tool: string, index: number) => void,
	deleteTool: (id: number, index: number) => void,
	addProblem: (id: number, problem: string) => void,
	changeProblem: (id: number, problem: string, index: number) => void,
	deleteProblem: (id: number, index: number) => void,
}