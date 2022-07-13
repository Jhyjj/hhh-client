import React, { useState } from 'react';
import { BackTop, Form, Divider, Input, InputNumber, Button, Upload } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import TextArea from 'antd/lib/input/TextArea';
import { AiOutlineArrowUp } from 'react-icons/ai';

const Sugso = () => {
    const [ number, setNember ] = useState(0);
    const onIncrease = () => {
        console.log('+1');
        setNember(number + 1);
    }
    const onDecrease = () => {
        console.log('-1');
        setNember(number - 1);
    }

    return (
        <div id='sugso'>
            <BackTop>
                <div id='scroll'><AiOutlineArrowUp size={30}/></div>
            </BackTop>
            <h1>숙소 등록하기</h1>
            <Form>
                <Form.Item
                label={<div>숙소 사진</div>}>
                    <Upload id='poto'>
                        <div id='upload_img'>
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
                        </div>
                        <div id='upload_img'>
                            <img src='./image/camera.png' alt=''></img>
                            <span>이미지를 업로드 해주세요.</span>
                        </div>
                    </Upload>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>숙소 이름</div>}>
                    <Input></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>숙소 위치</div>}>
                    <Input></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>숙소 소개</div>}>
                    <TextArea></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>객실 정보</div>}>
                    <Input
                    placeholder='침실 1, 화장실 1, 파우더룸 1'
                    ></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>투숙가능인원</div>}>
                    <Button id='number' onClick={onDecrease}>-</Button>
                    <Input id='input_number' value={number}></Input>
                    <Button id='number' onClick={onIncrease}>+</Button>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>숙소 편의시설</div>}>
                    <TextArea
                    placeholder='아침식사, 무선인터넷, 헤어드라이어'
                    ></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>CHECK-IN/CHECK-OUT</div>}>
                    CHECK-IN : <Input id='check_input'></Input>
                    CHECK-OUT : <Input id='check_input'></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>어메니티</div>}>
                    <TextArea>
                    </TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item>
                    <Button id='btn'>등록하기</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Sugso;