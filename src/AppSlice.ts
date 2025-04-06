import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface AppSliceInterface {
  accessToken: string;
}
const initialState = {
  accessToken: "",
};

const AppSlice = createSlice({
  name: "App",
  reducerPath: "AppSliceReducer",
  initialState,
  reducers: {
    setAppConfigs: (_state, action: PayloadAction<AppSliceInterface>) => ({
      ...action.payload,
    }),
  },
  selectors: {
    getAppConfigs: (sliceState) => sliceState,
  },
});

export const { getAppConfigs } = AppSlice.selectors;
export const { setAppConfigs } = AppSlice.actions;
export default AppSlice.reducer;
