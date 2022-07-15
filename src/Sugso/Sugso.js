import React, { useState } from 'react';
import { BackTop, Form, Divider, Input, InputNumber, Button, Upload } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import TextArea from 'antd/lib/input/TextArea';
import { AiOutlineArrowUp } from 'react-icons/ai';
import axios from 'axios';
import SugsoImg from './SugsoImg';

const Sugso = () => {

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
    })

    const onChange=(e)=>{
        console.log(formData);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })

    }

    const onSubmit =(e)=>{
        console.log(formData);
        insertRooms();
    }

    function insertRooms(){
        axios.post('http://localhost:3001/addroom',formData)
        .then(result=>{
            console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    }

    const onChangeImg = (info)=>{
        if(info.file.status === "uploading"){
            return;
        }
        if(info.file.status === "done"){
            console.log(info.file);
        }
    }

    

    //최대인원/최소인원 상태관리
    const [ number, setNember ] = useState(2);
    const [ number2, setNember2 ] = useState(2);
    const onIncrease = (e) => {
        console.log('+1');
        setNember(number + 1);
        setFormData({
            ...formData,
            minp: number+1
        })
    }
    const onDecrease = (e) => {
        console.log('-1');
        setNember(number - 1);
        setFormData({
            ...formData,
            minp: number-1
        })
    }
    const onIncrease2 = (e) => {
        console.log('+1');
        setNember2(number2 + 1);
        setFormData({
            ...formData,
            maxp: number+1
        })
    }
    const onDecrease2 = (e) => {
        console.log('-1');
        setNember2(number2 - 1);
        setFormData({
            ...formData,
            maxp: number-1
        })
    }

    // 이미지 업로드 onchange 함수
    

    return (
        <div id='sugso'>
            <BackTop>
                <div id='scroll'><AiOutlineArrowUp size={30}/></div>
            </BackTop>
            <h1>숙소 등록하기</h1>
            <Form onFinish={onSubmit}>
                <Form.Item
                label={<div className='upload-label'>숙소 사진</div>}>
                    <Upload id='poto' onChange={onChangeImg} listType="picture" showUploadList={false} name="image"> 
                        <div id='upload_img'>
                            <img src='./image/camera.png' alt=''></img>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>
                        {/* <div id='upload_img'>
                            <img src='./image/camera.png' alt=''></img>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>
                        <div id='upload_img'>
                            <img src='./image/camera.png' alt=''></img>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>
                        <div id='upload_img'>
                            <img src='./image/camera.png' alt=''></img>
                            <span>이미지를 업로드 해주세요.</span>
                        </div> */}
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

export default Sugso;