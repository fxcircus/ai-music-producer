import { sendRequest } from "../sendRequest";
const BASE_URL = 'http://localhost:8000/api/projects'

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
  console.log("Sending POST request to:", BASE_URL);
  console.log("Request Data:", projectData);

  return sendRequest(`${BASE_URL}`, 'POST', projectData)
    .then((response) => {
        console.log("Response Data:", response.data);
        return response.data;
    })
    .catch((error) => {
        console.error("Error:", error);
        throw error;
    });
}


export async function getProjects() {
    console.log("Sending GET request to:", BASE_URL);
  
    return sendRequest(`${BASE_URL}`, 'GET')
      .then((response) => {
          console.log("Response Data:", response);
          return response;
      })
      .catch((error) => {
          console.error("Error:", error);
          throw error;
      });
  }