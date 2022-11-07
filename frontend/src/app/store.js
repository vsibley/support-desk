import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import projectReducer from "../features/projects/projectSlice";
import noteReducer from '../features/notes/noteSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    projects: projectReducer,
    notes: noteReducer,
  },
});
