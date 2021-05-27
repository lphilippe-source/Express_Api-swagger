import { TaskRepository } from "../repositories/taskRepository"
class TaskServices {
	private taskRepo = new TaskRepository()
	private nb
	public getNumberOfActiveTasks(user) {
		const tasks = this.taskRepo.getUserTasks(user)
		tasks.forEach((task) => {
			!task.isFinished() && this.nb++
		})
		return this.nb
	}
}
