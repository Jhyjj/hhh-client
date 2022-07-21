import { combineReducers } from "redux";
import booking from "./booking";
import searchroom from "./rooms";
//rootReducer 만들기~~~~~
 //검색했을때 조건에 맞게 room list를 출력해주는 리듀서
const rootReducer = combineReducers({ searchroom, booking  })
export default rootReducer;


