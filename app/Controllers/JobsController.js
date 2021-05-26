import { ProxyState } from "../AppState.js";
import { jobsService } from "../Services/JobsService.js";



export class JobsController {
  constructor() {
    ProxyState.on('jobs', this.drawJobs)
    jobsService.getJobs()
  }
  drawJobs() {
    let template = ''
    ProxyState.jobs.forEach(j => {
      template += j.postTemplate
    })
    document.getElementById('listings').innerHTML = template
  }
  toggleForm() {
    let template = ''
    template += ` <form class="card p-3 shadow" id="job-form" onsubmit="app.jobsController.addJob(event)">
 <div class="form-group">
     <label for="title" class="sr-only">Title:</label>
     <input class="form-control" placeholder="title" type="text" id="jobTitle" required />
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
    document.getElementById('forms').innerHTML = template
  }
  addJob(event) {
    try {
      event.preventDefault()
      console.log(event)
      let form = event.target
      let formData = {
        jobTitle: form.jobTitle.value,
        description: form.description.value,
        rate: form.rate.value,
        hours: form.hours.value,
        company: form.company.value
      }
      // debugger
      if (form.jobId.value) {
        formData.id = form.jobId.value
        jobsService.editJob(formData)
      }
      else {
        jobsService.addJob(formData)
      }
      form.reset()
      document.getElementById('forms').classList.toggle('d-none')
    } catch (error) {
      console.error(error.message)

    }
  }
  deleteJob(id) {
    console.log(id)
    // debugger
    try {
      if (window.confirm("are you sure?")) {
        jobsService.deleteJob(id)
      }
    } catch (error) {
      console.log(e.message)
    }
  }
  editJob(id) {
    let job = ProxyState.jobs.find(j => j.id == id)
    console.log(job)
    let form = document.getElementById('job-form')
    // debugger
    form.jobTitle.value = job.jobTitle
    form.company.value = job.company
    form.rate.value = job.rate
    form.hours.value = job.hours
    form.description.value = job.description
    form.jobId.value = job.id
  }

}