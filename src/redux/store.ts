import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import CountReducer from './reducers/countReducer';
 
// const rootReducer = combineReducers({
//   count: CountReducer,
// });


export const store = configureStore({
    reducer: {
        counter: CountReducer,
    },    
});   
// return type of state store needed for typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;