
//숙소 등록 이미지 등록 테스트

import React, { useState } from 'react';
import { BackTop, Form, Divider, Input, InputNumber, Button, Upload } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import TextArea from 'antd/lib/input/TextArea';
import { AiOutlineArrowUp } from 'react-icons/ai';
import axios from 'axios';


const Sugso2 = () => {

    const [formData, setFormData] = useState({
        rname: "",
        minp: 2,
        maxp: 2,
        price : "",
        soffer : "",
        amenity : "",
        badtype : "",
        radd : "",
        sns : "",
        info : "",
        imgurl : "" //초기 상태값 관리
    })

    const onChange=(e)=>{
        console.log(formData);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            imgurl:imgurl,
            [name]:value
        })

    }

    const onSubmit =(e)=>{
        
        console.log(formData);
        insertRooms();
        console.log()
    }

    function insertRooms(){
        axios.post('https://hhh-server.herokuapp.com/addroom',formData)
        .then(result=>{
            console.log(result);
            console.log(formData);
            alert('숙소등록이 완료되었습니다.')

        })
        .catch(e=>{
            console.log(e);
        })
    }



    //최대인원/최소인원 상태관리
    const [ number, setNumber ] = useState(2);
    const [ number2, setNumber2 ] = useState(2);
    const onIncrease = (e) => {
        console.log('+1');
        setNumber(number + 1);
        setFormData({
            ...formData,
            minp: number+1
        })
    }
    const onDecrease = (e) => {
        console.log('-1');
        setNumber(number - 1);
        setFormData({
            ...formData,
            minp: number-1
        })
    }
    const onIncrease2 = (e) => {
        console.log('+1');
        setNumber2(number2 + 1);
        setFormData({
            ...formData,
            maxp: number+1
        })
    }
    const onDecrease2 = (e) => {
        console.log('-1');
        setNumber2(number2 - 1);
        setFormData({
            ...formData,
            maxp: number-1
        })
    }

     //이미지 경로 상태관리하기
     const [imgurl, setImgurl] = useState([]); //배열로 변경해서 관리하기

     //이미지 처리 함수
     const onChangeImg2 = (info)=>{
         //파일 업로드 중일때
         if(info.file.status === 'uploading'){
            console.log(info);
             return;
         }
         //파일 업로드 완료되었을때
         if(info.file.status === 'done'){
             const res2 = info.fileList;
             console.log(res2);
            const imgs = []; //이미지 리스트 배열
            imgs.push(res2.map(data=>`${data.name}`))
            setImgurl(imgs.toString()) //배열을 다시 문자열로 변경
            console.log(imgurl);
             setFormData({
                 ...formData,
                 imgurl: imgurl
             })
         }
         
     }

    return (
        <div id='sugso'>
            <BackTop>
                <div id='scroll'><AiOutlineArrowUp size={30}/></div>
            </BackTop>
            <h1>숙소 등록하기</h1>
            <Form onFinish={onSubmit}>
                <Form.Item
                label={<div className='upload-label'>숙소 사진</div>}>
                    <Upload id='poto' onChange={onChangeImg2} listType="picture" showUploadList={false} name="image" action={'https://hhh-server.herokuapp.com/upload'} multiple> 
                        <div id='upload_img'>
                            <img src='./image/camera.png' alt=''></img>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>
                    </Upload>
                </Form.Item>
                <Divider></Divider>


                <Form.Item
                label={<div id='upload_text'>숙소 이름</div>}>
                    <Input name="rname" onChange={onChange}></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>숙소 위치</div>}>
                    <Input name="radd" onChange={onChange}></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>숙소 소개</div>}>
                    <TextArea name="info" onChange={onChange}></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>객실 정보</div>}>
                    <Input name="badtype" onChange={onChange}
                    placeholder='침실 1, 화장실 1, 파우더룸 1'
                    ></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>객실 금액</div>}>
                    <Input name="price" onChange={onChange}
                    placeholder='1박 기준 기본금액'
                    ></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>투숙가능인원</div>}>
                    최소인원
                    <Button id='number' onClick={onDecrease}>-</Button>
                    <Input id='input_number' value={number} name="minp" onChange={onChange}></Input>
                    <Button id='number' onClick={onIncrease}>+</Button>
                    <br/>

                    최대인원
                    <Button id='number' onClick={onDecrease2}>-</Button>
                    <Input id='input_number' value={number2} name="maxp" onChange={onChange} ></Input>
                    <Button id='number' onClick={onIncrease2}>+</Button>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>숙소 편의시설</div>}>
                    <TextArea name="soffer" onChange={onChange}
                    placeholder='아침식사, 무선인터넷, 헤어드라이어'
                    ></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>CHECK-IN/CHECK-OUT</div>}>
                    CHECK-IN : <span id='check_input'>15:00</span>
                    CHECK-OUT : <span id='check_input'>11:00</span>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>어메니티</div>}>
                    <TextArea name="amenity" onChange={onChange}></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>키워드</div>}>
                    <TextArea name="sns" onChange={onChange}></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item>
                    <Button id='btn' htmlType='submit'>등록하기</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Sugso2;