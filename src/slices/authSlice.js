import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: false,
  },
  reducers: {
    signin: (state, action) => {
      state.status = true
      sessionStorage['token'] = action.payload['token']
      sessionStorage['username'] = action.payload['name']
    },
    signout: (state, action) => {
      state.status = false

      sessionStorage.removeItem('token')
      sessionStorage.removeItem('username')
    },
  },
})

export default authSlice.reducer

export const { signin, signout } = authSlice.actions
