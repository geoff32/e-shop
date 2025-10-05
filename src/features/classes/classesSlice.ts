import { createSlice } from '@reduxjs/toolkit'
import classesData from '../../data/classes.json'
import type { RootState } from '../../app/store';

const initialState: string[] = classesData.classes

const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {},
})

export const selectClasses = (state: RootState) => state.classes;
export default classesSlice.reducer