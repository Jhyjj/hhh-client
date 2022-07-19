// import React, { useEffect, useState, useRef } from "react";
// import axios from "axios";

// const SugsoImg = () => {
    
//   const onSubmit = async (e) => {
//     e.preventDefault();
//     e.persist();

//     let files = e.target.profile_files.files;
//     let formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append("files", files[i]);
//     }

//     let dataSet = {
//       name: "Hong gil dong",
//       phone: "010-1234-1234",
//       birth: "2001-09-11",
//     };

//     formData.append("data", JSON.stringify(dataSet));
//     console.log(formData);

//     // const postSurvey = await axios({
//     //   method: "POST",
//     //   url: 'http://localhost:3001/img',
//     //   mode: "cors",
//     //   headers: {
//     //     "Content-Type": "multipart/form-data",
//     //   },
//     //   data: formData,
//     // });

//     // console.log(postSurvey);
//   };

//   return (
//     <form onSubmit={(e) => onSubmit(e)}>
//       <input
//         type="file"
//         name="profile_files"
//         multiple="multiple"
//       />

//       <button type="submit">제출</button>
//     </form>
//   );
// };

// export default SugsoImg;


import { useState } from "react";


const Images = () => {
  const [showImages, setShowImages] = useState([]);

  // 이미지 상대경로 저장
  const handleAddImages = (event) => {
    const imageLists = event.target.files;
    let imageUrlLists = [...showImages];

    for (let i = 0; i < imageLists.length; i++) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setShowImages(imageUrlLists);
    console.log(imageLists);
  };

  // X버튼 클릭 시 이미지 삭제
  const handleDeleteImage = (id) => {
    setShowImages(showImages.filter((_, index) => index !== id));
  };

  return (
    <div className>
      <label htmlFor="input-file" onChange={handleAddImages}>
        <input type="file" id="input-file" multiple />
        {/* <Plus fill="#646F7C" /> */}
        <span>사진추가</span>
      </label>

      {/* // 저장해둔 이미지들을 순회하면서 화면에 이미지 출력 */}
      {showImages.map((image, id) => (
        <div key={id}>
          <img src={image} alt={`${image}-${id}`} />
          {/* <Delete onClick={() => handleDeleteImage(id)} /> */}
        </div>
      ))}
    </div>
  );
};

export default Images;