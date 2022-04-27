import { configureStore, combineReducers } from "@reduxjs/toolkit";
import tutorSlice from "./tutors/tutorsReducer";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const tutorsPersistConfig = {
  key: "tutor",
  storage,
};

const rootReducer = combineReducers({ tutors: tutorSlice.reducer });

const persistTutors = persistReducer(tutorsPersistConfig, rootReducer);

const store = configureStore({
  reducer: { tutors: persistTutors },
  middleware: (func) =>
    func({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistTutorsStore = persistStore(store);

export default store;
