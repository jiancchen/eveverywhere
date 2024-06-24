import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import LoginReducer from './reducers/loginReducer';
import ChargerReducer from './slice/charger';
 
// const rootReducer = combineReducers({
//   count: CountReducer,
// });


export const store = configureStore({
    reducer: {
        counter: LoginReducer,
        charger: ChargerReducer
    },
});   
// return type of state store needed for typescript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;