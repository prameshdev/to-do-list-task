
export class TaskListModel {
  constructor(
  public title?: string,
  public description?: string,
  public status = TaskStatus,
  public created = new Date()
  ) {

  }
}

export enum TaskStatus {
  Open = 'Open' ,
  InProgress = 'In-Progress',
  Completed = 'Completed'
}
