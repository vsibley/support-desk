import axios from "axios";

const API_URL = "/api/projects/";

//Create a new project

const createProject = async (projectData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, projectData, config);

  return response.data;
};

//Get users tickets

const getProjects = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
}

//Get SINGLE tickets

const getProject = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL + projectId, config);

  return response.data;
};

const projectService = {
  createProject,
  getProjects,
  getProject
};
export default projectService;
