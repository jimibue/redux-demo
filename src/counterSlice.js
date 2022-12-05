import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    value: 0,
}

const counterSlice = createSlice({
    name:'counter',
    initialState,

    reducers:{
        // you can't mutate state with redux, but toolkit makes so 
        // we 'can', behind it doesn't mutate state
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if(state.value ===0){
                state.value = 0
                return 
            }
            state.value -= 1
        },
        incrementByAmount: (state, action) =>{
            state.value += parseInt(action.payload)
        }
    }

})

// this be how we change our counter state
export const { increment,decrement, incrementByAmount }  = counterSlice.actions

//selector
export const selectCount = (state) => state.counter.value

export default counterSlice.reducer