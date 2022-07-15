import React, { useEffect, useState, useRef } from "react";
import axios from "axios";

const SugsoImg = () => {
    
  const onSubmit = async (e) => {
    e.preventDefault();
    e.persist();

    let files = e.target.profile_files.files;
    let formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }

    let dataSet = {
      name: "Hong gil dong",
      phone: "010-1234-1234",
      birth: "2001-09-11",
    };

    formData.append("data", JSON.stringify(dataSet));
    console.log(formData);

    // const postSurvey = await axios({
    //   method: "POST",
    //   url: 'http://localhost:3001/img',
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "multipart/form-data",
    //   },
    //   data: formData,
    // });

    // console.log(postSurvey);
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="file"
        name="profile_files"
        multiple="multiple"
      />

      <button type="submit">제출</button>
    </form>
  );
};

export default SugsoImg;