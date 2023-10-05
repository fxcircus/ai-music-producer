import { sendRequest } from "../sendRequest";
const BASE_URL = 'http://localhost:8000/api/project'

interface ProjectData {
    result: string;
    notes: string;
    rootEl: string;
    scaleEl: string;
    tonesEl: string;
    bpmEl: string;
    soundEl: string;
  }
  
  export async function uploadProjectToMongo(projectData: ProjectData) {
    return sendRequest(`${BASE_URL}`, 'POST', projectData);
  }