import userReducer from "./user/userSlice";
import {configureStore} from '@reduxjs/toolkit'

export default configureStore({
  reducer: { user: userReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
