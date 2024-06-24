import { ChargerItem } from "../../api/charger";
import { createSlice } from "@reduxjs/toolkit";

interface ChargerState {
    chargerId: number;
    chargeItem: ChargerItem
}

const chargerSlice = createSlice({
    name: "charger",
    initialState: {
        chargeItem: {} as ChargerItem
    } as ChargerState,
    reducers: {
        setCharger: (state, action) => {
            state.chargeItem = action.payload;
        }
    }
});

export const { setCharger } = chargerSlice.actions;

export default chargerSlice.reducer;