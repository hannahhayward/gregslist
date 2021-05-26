import { ProxyState } from "../AppState.js"
import { Job } from "../Models/Job.js"

let url = 'https://bcw-sandbox.herokuapp.com/api/jobs/'
class JobsService {
  async getJobs() {
    let res = await axios.get(url)
    ProxyState.jobs = res.data.map(j => new Job(j))
    console.log(res)
  }
  async addJob(formData) {
    let res = await axios.post(url, formData)
    console.log(res)
    let newJob = new Job(res.data)
    ProxyState.jobs = [newJob, ...ProxyState.jobs]
  }
  async deleteJob(id){
    await axios.delete(url + id)
    ProxyState.jobs = ProxyState.jobs.filter(j=> j.id != id)
  }
  async editJob(formData){
    // debugger
let res = await axios.put(url + formData.id, formData)
let jobIndex = ProxyState.jobs.findIndex(j => j.id == res.data.id)
ProxyState.jobs.splice(jobIndex,1,new Job(res.data))
ProxyState.jobs = ProxyState.jobs
  }
}
export const jobsService = new JobsService()