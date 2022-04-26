const TUTORS = [];

const reducer = (state = TUTORS, action) => {
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

const types = {
  initTutors: "initTutors",
  addTutor: "addTutor",
};

const actions = {
  init: (payload) => ({ type: types.initTutors, payload }),
  add: (payload) => ({ type: types.addTutor, payload }),
};

export { reducer, actions };
