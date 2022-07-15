// //초기값 만들기

// import axios from "axios";

// const initialState = {
//     members:{
//         loading: false,
//         data :null,
//         error : null
//     },
//     member:{
//         loading: false,
//         data :null,
//         error : null
//     }
// }

// //액션타입
// //멤버를 여러명 조회할때
// const GET_MEMBERS = "GET_MEMBERS";
// const GET_MEMBERS_SUCCESS = "GET_MEMBERS_SUCCESS";
// const GET_MEMBERS_ERROR = "GET_MEMBERS_ERROR";


// //멤버를 한명만 조회할때(아이디 값으로)
// const GET_MEMBER = "GET_MEMBER";
// const GET_MEMBER_SUCCESS = "GET_MEMBER_SUCCESS";
// const GET_MEMBER_ERROR = "GET_MEMBER_ERROR";

// //리듀서
// const getMembers = ()=> async dispatch=>{
//     dispatch({type:GET_MEMBERS}) // 요청 시작하기
//     try{
//         const members = await axios.post("http://localhost:3001");
//     }
//     catch{

//     }
// }
