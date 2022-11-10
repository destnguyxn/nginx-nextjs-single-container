// /* eslint-disable no-param-reassign */
// import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'
// import { RootState } from '@redux/store'
// import CounterState from './type'

// // Define the initial state using that type
// export const initialState: CounterState = {
//   value: 0
// }

// export const counterSlice = createSlice({
//   name: 'counter',
//   // `createSlice` will infer the state type from the `initialState` argument
//   initialState,
//   reducers: {
//     increment: state => {
//       state.value += 1
//     },
//     decrement: state => {
//       state.value -= 1
//     },
//     // Use the PayloadAction type to declare the contents of `action.payload`
//     incrementByAmount: (state, action: PayloadAction<number>) => {
//       state.value += action.payload
//     }
//   }
// })

// export const { increment, decrement, incrementByAmount } = counterSlice.actions

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value

// export default counterSlice.reducer

// // usage

// // import React, { useState } from 'react'

// // import { useAppSelector, useAppDispatch } from ' redux/hooks'

// // import { decrement, increment } from './counterSlice'

// // export function Counter() {
// //   // The `state` arg is correctly typed as `RootState` already
// //   const count = useAppSelector((state) => state.counter.value)
// //   const dispatch = useAppDispatch()

// //   // omit rendering logic
// // }
