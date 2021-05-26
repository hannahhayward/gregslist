

export class Job{
  constructor(data){
    this.jobTitle = data.jobTitle
    this.company = data.company
    this.id = data.id
    this.rate = data.rate
    this.hours = data.hours
    this.description = data.description
  }
  get postTemplate(){
    return /*html*/ `
    <div class = 'col-4 listing my-'>
      <div class = "card">
        <div class = "card title text-center">
          <h3> ${this.jobTitle}</h3>
          <p> ${this.company} </p>
          <em> $${this.rate}/hour </em>
        </div>
        <div class="card body text-center">
          <p> ${this.description}</p>
          <p> ${this.hours} hrs/week </p>
        </div>
        <div class ="card-footer">
        <button class = "btn btn-block btn-secondary" onclick=" app.jobsController.toggleForm(), app.jobsController.editJob('${this.id}')">Edit <i class="mdi mdi-edit"></i></button>
        <button class ="btn btn-block btn-danger" onclick="app.jobsController.deleteJob('${this.id}')"> Delete <i class="mdi mdi-trash-can"></i></button>
        </div>
      </div>
    </div>
    `
  }
  get formTemplate(){
    return /*html*/ `
    <form class="card p-3 shadow" id="job-form" onsubmit="app.jobsController.addjob(event)">
    <div class="form-group">
        <label for="title" class="sr-only">Title:</label>
        <input class="form-control" placeholder="title" type="text" id="title" required />
    </div>
    <div class="form-group">
        <label for="company" class="sr-only">Company:</label>
        <input class="form-control" type="text" placeholder="company" id="company" required />
    </div>
    <div class="form-group">
        <label for="rate" class="sr-only">Rate:</label>
        <input class="form-control" placeholder="rate" type="number" min="0" id="rate" required />
    </div>
    <div class="form-group">
        <label for="hours" class="sr-only">Hours:</label>
        <input class="form-control" placeholder="hours" type="number" id="hours" />
    </div>
    <div class="form-group">
        <label for="description" class="sr-only">Description:</label>
        <input class="form-control" placeholder="description" type="text" id="description"/>
    </div>
    <div class="form-group d-none">
        <label for="jobId" class="sr-only">jobId:</label>
        <input class="form-control" placeholder="jobId" type="text" id="jobId"/>
    </div>
    <button type="submit">submit form</button>
</form>`
  }
}
