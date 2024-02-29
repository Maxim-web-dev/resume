import { create } from 'zustand'
import { TypeStore } from '../types/store'

export const useStore = create<TypeStore>(set => ({
	set: (data) => set({
		name: data.name,
		job: data.about?.job,
		location: data.about?.location,
		mail: data.about?.mail,
		education: data.education,
		experience: data.experience
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
	changeEducation: (id, text) => set(state => {
		const education = [...state.education]
		education[id] = text
		return {
			education: education
		}
	}),
	deleteEducation: (id) => set(state => {
		const education = state.education.filter((_, index) => index !== id)
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
	deleteExperience: (id) => set(state => {
		const filteredExperience = state.experience.filter((_, index) =>
			index !== id
		)
		return {
			experience: filteredExperience
		}
	}),
	addPlace: (place, id) => set(state => {
		const experience = [...state.experience]
		experience[id].place = place
		return {
			experience: experience
		}
	}),
	changePlace: (place, id) => set(state => {
		const experience = [...state.experience]
		experience[id].place = place
		return {
			experience: experience
		}
	}),
	deletePlace: (id) => set(state => {
		const experience = [...state.experience]
		experience[id].place = ''
		return {
			experience: experience
		}
	}),
	addTool: (id, tool) => set(state => {
		const experience = [...state.experience]
		experience[id].tools = [...experience[id].tools, tool]
		console.log(experience)

		return {
			experience: experience
		}
	}),
	changeTool: (id, tool, index) => set(state => {
		const experience = [...state.experience]
		experience[id].tools[index] = tool
		return {
			experience: experience
		}
	}),
	deleteTool: (id, index) => set(state => {
		const experience = [...state.experience]
		experience[id].tools.splice(index, 1)
		return {
			experience: experience
		}
	}),
	addProblem: (id, problem) => set(state => {
		const experience = [...state.experience]
		experience[id].description = [...experience[id].description, problem]
		console.log(experience)
		return {
			experience: experience
		}
	}),
	changeProblem: (id, problem, index) => set(state => {
		const experience = [...state.experience]
		experience[id].description[index] = problem
		console.log(experience)
		console.log(problem)

		return {
			experience: experience
		}
	}),
	deleteProblem: (id, index) => set(state => {
		const experience = [...state.experience]
		experience[id].description.splice(index, 1)
		console.log(experience)
		return {
			experience: experience
		}
	}),
}))