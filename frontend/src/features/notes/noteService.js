import axios from 'axios'

const API_URL = '/api/projects/'

//Get project notes

// Get project notes
const getNotes = async (projectId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL + projectId + '/notes', config)

  return response.data
}

const noteService = {
    getNotes,
}

export default noteService