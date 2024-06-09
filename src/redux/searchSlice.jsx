import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name : "search",
    initialState : {},
    reducers : {
        cacheResults : (state, action)=>{   
            state = Object.assign(state, action.payload);
        }

        /**
            OR
            cacheResults : (state, action)=>{
                return {
                    ...state,...action.payload  // return because we are creating a new state 
                }
            }

            OR
            cacheResults : (state, action)=>{
                state = {...state,...action.payload}
                return state;
            }

         */
    }
})

export const {cacheResults} = searchSlice.actions;

export default searchSlice.reducer;