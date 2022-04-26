import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./tutors/reducer";

const store = configureStore({ reducer: { tutors: reducer } });

export default store;
