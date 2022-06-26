import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
    name: "theme",
    initialState: {
        bgColor: "96, 171, 201",
        darkMode: false,
        workExperience: []
    },
    reducers: {
        setBgColor: (state: any, action: any) => {
            state.bgColor = action.payload;
        },
        setDarkMode: (state: any, action: any) => {
            state.darkMode = action.payload;
        }, 
        setWorkExperience: (state: any, action: any) => {
            state.workExperience = action.payload;
        }
    }
});

export const { setBgColor, setDarkMode, setWorkExperience } = themeSlice.actions;
export default themeSlice.reducer;