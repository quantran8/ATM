import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    atms: [],
    queue: [],
    processedClients:[],
}
const atm = createSlice({
    name: 'atm',
    initialState,
    reducers:{
        setAtm : (state,action) => {
            state = action.payload;
            return state;
        }

    }

});

const {actions,reducer} = atm;
export const {setAtm } = actions;
export default reducer;