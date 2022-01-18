import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    email: '',
    PRIVATE_TOKEN:'',
}
const user = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setCurrentUser : (state,action) => {
            state = action.payload;
            return state;
        }

    }

});

const {actions,reducer} = user;
export const {setCurrentUser} = actions;
export default reducer;