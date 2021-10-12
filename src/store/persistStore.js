import { persistStore } from "redux-persist"
import store from "./configureStore"

export default persistStore(store)