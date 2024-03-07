import { create } from 'zustand'
import { TypeStore } from '../types/store'

export const useStore = create<TypeStore>(set => ({
	viewName: '',
	viewJob: [],
	viewLocation: '',
	viewMail: '',
	viewEducation: [],
	viewExperience: [],
	setAdminUser: (data) => set({
		name: data.name,
		job: data.about.job,
		location: data.about.location,
		mail: data.about.mail,
		education: data.education,
		experience: data.experience
	}),
	setViewUser: (data) => set({
		viewName: data.name,
		viewJob: data.about.job,
		viewLocation: data.about.location,
		viewMail: data.about.mail,
		viewEducation: data.education,
		viewExperience: data.experience
	}),
	name: '',
	setName: (name) => {
		set({ name })
		localStorage.setItem('name', name)
	},
	job: [],
	addJob: (text) => set(state => {
		return {
			job: [...state.job, text]
		}
	}),
	changeJob: (id, newJob) => set(state => {
		const updatedJobs = [...state.job]
		updatedJobs[id] = newJob
		return {
			job: updatedJobs
		}
	}),
	deleteJob: (id) => set(state => {
		const filteredJobs = state.job.filter((_, index) => index !== id)
		return {
			job: filteredJobs
		}
	}),

	location: '',
	setLocation: (location) => {
		set({ location })
	},
	deleteLocation: () => set({ location: '' }),

	mail: '',
	setMail: (mail) => set({ mail }),
	deleteMail: () => set({ mail: '' }),

	education: [],
	addEducation: (text) => set(state => {
		return {
			education: [...state.education, text]
		}
	}),
	changeEducation: (indexOfCard, text) => set(state => {
		const education = [...state.education]
		education[indexOfCard] = text
		return {
			education: education
		}
	}),
	deleteEducation: (indexOfCard) => set(state => {
		const education = state.education.filter((_, index) => index !== indexOfCard)
		return {
			education: education
		}
	}),

	experience: [
		{
			place: '',
			tools: [],
			description: []
		}
	],
	addExperience: () => set(state => {
		const newExperience = {
			place: '',
			tools: [],
			description: []
		}
		const experience = [...state.experience, newExperience]
		return {
			experience: experience
		}
	}),
	deleteExperience: (indexOfCard) => set(state => {
		const filteredExperience = state.experience.filter((_, index) => index !== indexOfCard)

		return {
			experience: filteredExperience
		}
	}),
	addPlace: (place, indexOfCard) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].place = place

		return {
			experience: experience
		}
	}),
	changePlace: (place, indexOfCard) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].place = place

		return {
			experience: experience
		}
	}),
	deletePlace: (indexOfCard) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].place = ''

		return {
			experience: experience
		}
	}),
	addTool: (indexOfCard, tool) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].tools = [...experience[indexOfCard].tools, tool]

		return {
			experience: experience
		}
	}),
	changeTool: (indexOfCard, tool, indexOfElement) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].tools[indexOfElement] = tool

		return {
			experience: experience
		}
	}),
	deleteTool: (indexOfCard, indexOfElement) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].tools.splice(indexOfElement, 1)

		return {
			experience: experience
		}
	}),
	addProblem: (indexOfCard, problem) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].description = [...experience[indexOfCard].description, problem]

		return {
			experience: experience
		}
	}),
	changeProblem: (indexOfCard, problem, indexOfElement) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].description[indexOfElement] = problem

		return {
			experience: experience
		}
	}),
	deleteProblem: (indexOfCard, indexOfElement) => set(state => {
		const experience = [...state.experience]
		experience[indexOfCard].description.splice(indexOfElement, 1)

		return {
			experience: experience
		}
	}),
}))