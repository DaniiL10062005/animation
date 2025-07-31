import { createSlice } from '@reduxjs/toolkit'
import type { UserSlice } from './types'

const initalState: UserSlice = {
  name: localStorage.getItem('name') || null,
  setName: () => {},
  deleteName: () => {},
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initalState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    deleteName: (state) => {
      state.name = ''
    },
  },
})

export const { setName, deleteName } = userSlice.actions
export default userSlice.reducer
