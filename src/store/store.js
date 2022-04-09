// dependencies
import { configureStore } from "@reduxjs/toolkit";
// slices
import CommerceSlice from "../slices/commerceSlice";

export default configureStore({ reducer: { commerce: CommerceSlice } });
