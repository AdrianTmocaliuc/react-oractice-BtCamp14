import { createSlice } from "@reduxjs/toolkit";
// import { actions } from 'redux/tutors/tutorsReducer';

const TUTORS = [];

const tutorsReducer = (state = TUTORS, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.initTutors:
      return payload;
    case types.addTutor:
      return [...state, payload];
    default:
      return state;
  }
};

const initialState = [];

const tutorSlice = createSlice({
  name: "tutor",
  initialState: initialState,
  reducers: {
    actionInitTutors(_, action) {
      return action.payload;
    },
    actionAddTutor(state, action) {
      return [...state, action.payload];
    },
  },
});

const types = {
  initTutors: "initTutors",
  addTutor: "addTutor",
};

const actions = {
  init: (payload) => ({ type: types.initTutors, payload }),
  add: (payload) => ({ type: types.addTutor, payload }),
};

export default tutorSlice;

export { tutorsReducer, actions };
