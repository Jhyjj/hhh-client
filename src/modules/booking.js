
import axios from "axios";

//초기값 지정
const initialState = {
    book:{
        loading : false,
        data : null,
        error : null
    }
}

//액션타입 지정하기
//검색한 키워드와 room이 가지고 있는 키워드가 같은 것들만 출력하기
const GET_BOOKING = "GET_BOOKING";
const GET_BOOKING_SUCCESS = "GET_BOOKING_SUCCESS";
const GET_BOOKING_ERROR = "GET_BOOKING_ERROR";


//액션생성함수 만들기
export const getBook = (id) => async dispatch => {
    dispatch({type:GET_BOOKING})
    try{
        const res = await axios.get(`http://localhost:3001/booking/${id}`)
        const result = res.data;
        dispatch({type:GET_BOOKING_SUCCESS,result})
    }
    catch(e){
        dispatch({type:GET_BOOKING_ERROR,error:e})
    }
}


//리듀서
export default function booking(state=initialState, action){
    switch(action.type){
            case GET_BOOKING:
                return{
                    ...state,
                    book:{
                        loading:true,
                        data:null,
                        error:null
                    }
                }
            case GET_BOOKING_SUCCESS:
                return{
                    ...state,
                    book:{
                        loading:false,
                        data:action.result,
                        error:null
                    }
                }
            case GET_BOOKING_ERROR:
                return{
                    ...state,
                    book:{
                        loading:false,
                        data:null,
                        error:action.error
                    }
                }
        default:
            return state;
    }
}

