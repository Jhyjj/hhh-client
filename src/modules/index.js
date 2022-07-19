import { combineReducers } from "redux";

//rootReducer 만들기~~~~~

import searchRoom from "./rooms"; //검색했을때 조건에 맞게 room list를 출력해주는 리듀서

const rootReducer = combineReducers({searchRoom})

export default rootReducer;


