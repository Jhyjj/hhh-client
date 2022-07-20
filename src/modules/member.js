//초기값 만들기

import axios from "axios";

const initialState = {
    member:{
        loading: false,
        data :null,
        error : null
    }
}

//액션타입
//멤버를 한명만 조회할때(아이디 값으로)
const GET_MEMBER = "GET_MEMBER";
const GET_MEMBER_SUCCESS = "GET_MEMBER_SUCCESS";
const GET_MEMBER_ERROR = "GET_MEMBER_ERROR";

//함수
export const getmember = (memberid) => async dispatch => {
    dispatch({type:GET_MEMBER}) //요청 시작하기~!
    try{
        const response = await axios.get(`http://localhost:3001/member/${memberid}`)
        const result = response.data;
        dispatch({type:GET_MEMBER_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_MEMBER_ERROR, error:e})
    }
}

//리듀서
export default function getMembers(state=initialState, action){
    switch(action.type){
    case GET_MEMBER:
        return{
            ...state,
            mamber:{
                loading:true,
                data:null,
                error:null
            }
        }
    case GET_MEMBER_SUCCESS:
        return{
            ...state,
            mamber:{
                loading:false,
                data:action.result,
                error:null
            }
        }
    case GET_MEMBER_ERROR:
        return{
            ...state,
            mamber:{
                loading:false,
                data:null,
                error:action.error
            }
        }
    default:
        return state;
}
}
