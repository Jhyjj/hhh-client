import React, { useState } from 'react';
import { BackTop, Form, Divider, Input, InputNumber, Button, Upload } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import TextArea from 'antd/lib/input/TextArea';
import { AiOutlineArrowUp } from 'react-icons/ai';
import axios from 'axios';


const Sugso = () => {

    
    const [content, setContent] = useState("");
    const [uploadedImg, setUploadedImg] = useState({
        fileName: "",
        fillPath: ""
    });
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
        imgurl : ""
    })
    
    const onChangeImg = (e) => {
        setContent(e.file);
        // console.log(e.file)
        if(content){
            // console.log(content.name)
        onSubmitimg(e);
    }
    };
    
    const onSubmitimg = (e) => {

        // e.preventDefault();
        const formData1 = new FormData();
        formData1.append("img", content);
        for (const value of formData1.values()) {
            console.log(value);
          }
        axios
            .post("https://hhh-server.herokuapp.com/upload", formData1)
            .then(res => {
                console.log(res);
                const { fileName } = res.data;
                // console.log();
                // setUploadedImg({ fileName });
                // onSubmit(formData1);
                setFormData({ 
                    ...formData,
                    imgurl : fileName })
            })
            .catch(err => {
                console.error(err);
            });
    };

  

    const onChange=(e)=>{
        // console.log(formData);
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value
        })

    }

    const onSubmit =(e)=>{
        
        console.log(formData);
        // console.log(formData);
        insertRooms();
        console.log()
    }

    function insertRooms(){
        axios.post('https://hhh-server.herokuapp.com/addroom',formData)
        .then(result=>{
            // console.log(result);
        })
        .catch(e=>{
            console.log(e);
        })
    }

    

    //????????????/???????????? ????????????
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

    // ????????? ????????? onchange ??????
    

    return (
        <div id='sugso'>
            <BackTop>
                <div id='scroll'><AiOutlineArrowUp size={30}/></div>
            </BackTop>
            <h1>?????? ????????????</h1>
            <Form onFinish={onSubmit} encType='multipart/form-data'>
                <Form.Item
                label={<div className='upload-label'>?????? ??????</div>}>
                    <Upload id='fileAdd' action="https://hhh-server.herokuapp.com/upload" onChange={onChangeImg} listType="picture" 
                    showUploadList={false} name="img"> 
                        <div id='upload_img' >
                            <img src='./image/camera.png' alt=''></img>
                            <span>???????????? ????????? ????????????.</span>
                        </div>
                    </Upload>
                </Form.Item>
                <Divider></Divider>


                <Form.Item
                label={<div id='upload_text'>?????? ??????</div>}>
                    <Input name="rname" onChange={onChange}></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>?????? ??????</div>}>
                    <Input name="radd" onChange={onChange}></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>?????? ??????</div>}>
                    <TextArea name="info" onChange={onChange}></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>?????? ??????</div>}>
                    <Input name="badtype" onChange={onChange}
                    placeholder='?????? 1, ????????? 1, ???????????? 1'
                    ></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>?????? ??????</div>}>
                    <Input name="price" onChange={onChange}
                    placeholder='1??? ?????? ????????????'
                    ></Input>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>??????????????????</div>}>
                    ????????????
                    <Button id='number' onClick={onDecrease}>-</Button>
                    <Input id='input_number' value={number} name="minp" onChange={onChange}></Input>
                    <Button id='number' onClick={onIncrease}>+</Button>

                    ????????????
                    <Button id='number' onClick={onDecrease2}>-</Button>
                    <Input id='input_number' value={number2} name="maxp" onChange={onChange} ></Input>
                    <Button id='number' onClick={onIncrease2}>+</Button>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>?????? ????????????</div>}>
                    <TextArea name="soffer" onChange={onChange}
                    placeholder='????????????, ???????????????, ??????????????????'
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
                label={<div id='upload_text'>????????????</div>}>
                    <TextArea name="amenity" onChange={onChange}></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item
                label={<div id='upload_text'>?????????</div>}>
                    <TextArea name="sns" onChange={onChange}></TextArea>
                </Form.Item>
                <Divider></Divider>

                <Form.Item>
                    <Button id='btn' htmlType='submit'>????????????</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Sugso;