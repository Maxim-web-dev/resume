import { TypeStore } from '../types/types'
import { create } from 'zustand'

export const useStore = create<TypeStore>(set => ({
	name: '',
	setName: (name) => {
		set({ name });
		localStorage.setItem('name', name)
	},
	job: [],
	setJob: (newJob) => set(state => {
		return {
			job: [...state.job, newJob]
		}
	}),
	changeJob: (prevJob, newJob) => set(state => {
		const index = state.job.indexOf(prevJob)
		const updatedJobs = [...state.job]
		updatedJobs[index] = newJob
		return {
			job: updatedJobs
		}
	}),
	deleteJob: (job) => set(state => {
		const filteredJobs = state.job.filter(el => el !== job)
		return {
			job: filteredJobs
		}
	})
}))