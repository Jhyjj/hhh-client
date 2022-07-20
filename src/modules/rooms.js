
import axios from "axios";

//초기값 지정
const initialState = {
    rooms:{
        loading : false,
        data : null,
        error : null
    },
    room:{
        loading: false,
        data : null,
        error : null
    },
    // key : "바다"
}

//액션타입 지정하기
//검색한 키워드와 room이 가지고 있는 키워드가 같은 것들만 출력하기
const GET_ROOMS = "GET_ROOMS";
const CHANG_KEY = "CHANG_KEY";
const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
const GET_ROOMS_ERROR = "GET_ROOMS_ERROR";

//아이디를 눌러서 해당 room만 조회하기 -> 상세페이지 조회
const GET_ROOM = "GET_ROOM";
const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS";
const GET_ROOM_ERROR = "GET_ROOM_ERROR";


//액션생성함수 만들기
export const getRooms = () => async dispatch => {
    dispatch({type:GET_ROOMS}) //요청 시작하기
    try{
        //여기서 검색결과 불러오기
        const response = await axios.get('http://localhost:3001/search')
        const result = response.data;
        console.log(response)
        dispatch({type:GET_ROOMS_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_ROOMS_ERROR, error:e}) //실패했을때~~
    }
}

//input에 입력한 값으로 검색하는 함수 만들기~
export const getKeyword = (keyword) => async dispatch => {
    dispatch({type:GET_ROOMS}) //요청 시작하기~!
    try{
        const response = await axios.get(`http://localhost:3001/searchKeyword/${keyword}`)
        const result = response.data;
        dispatch({type:GET_ROOMS_SUCCESS, result})
    }
    catch(e){
        dispatch({type:GET_ROOMS_ERROR, error:e})
    }
}

export const getRoom = (id) => async dispatch => {
    dispatch({type:GET_ROOM})
    try{
        const res = await axios.get(`http://localhost:3001/detail/${id}`)
        const result = res.data;
        dispatch({type:GET_ROOM_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_ROOM_ERROR,error:e})
    }
}


//리듀서
export default function searchroom(state=initialState, action){
    switch(action.type){
        case GET_ROOMS:
            return{
                ...state,
                rooms:{
                    loading:true,
                    data:null,
                    error:null
                }
            }
        case GET_ROOMS_SUCCESS:
            return{
                ...state,
                rooms:{
                    loading:false,
                    data:action.result,
                    error:null
                }
            }
        case GET_ROOMS_ERROR:
            return{
                ...state,
                rooms:{
                    loading:false,
                    data:null,
                    error:action.error
                }
            }
        case CHANG_KEY:
            return {
                ...state,
                key: action.keyvalue
            }
            case GET_ROOM:
                return{
                    ...state,
                    room:{
                        loading:true,
                        data:null,
                        error:null
                    }
                }
            case GET_ROOM_SUCCESS:
                return{
                    ...state,
                    room:{
                        loading:false,
                        data:action.result,
                        error:null
                    }
                }
            case GET_ROOM_ERROR:
                return{
                    ...state,
                    room:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
        default:
            return state;
    }
}

