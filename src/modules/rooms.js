
import axios from "axios";

//초기값 지정
const initialState = {
    rooms:{
        loading:false,
        data : null,
        error : null
    },
    room:{
        loading: false,
        data : null,
        error : null
    }
}

//액션타입 지정하기
//검색한 키워드와 room이 가지고 있는 키워드가 같은 것들만 출력하기
const GET_ROOMS = "GET_ROOMS";
const GET_ROOMS_SUCCESS = "GET_ROOMS_SUCCESS";
const GET_ROOMS_ERROR = "GET_ROOMS_ERROR";

//아이디를 눌러서 해당 room만 조회하기
const GET_ROOM = "GET_ROOM";
const GET_ROOM_SUCCESS = "GET_ROOM_SUCCESS";
const GET_ROOM_ERROR = "GET_ROOM_ERROR";


//액션생성함수 만들기
export const getRooms = () => async dispatch => {
    dispatch({type:GET_ROOMS}) //요청 시작하기
    try{
        //여기서 검색결과 불러오기
        // const response = await axios.get('http://localhost:3001/getRooms')
        const response = await axios.get('http://localhost:3001/search')
        const result = response.data
        console.log(result);
        dispatch({type:GET_ROOMS_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_ROOMS_ERROR, error:e}) //실패했을때~~
    }
}

//하나만 조회하는 함수
//좀있다 만들기..

//리듀서
export default function searchRoom(state=initialState,action){
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
        default:
            return state;
    }
}

