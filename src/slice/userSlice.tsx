import { createSlice } from '@reduxjs/toolkit'
import type { UserSlice } from './types'

const initialState: UserSlice = {
  name: localStorage.getItem('name') || null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState,
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
