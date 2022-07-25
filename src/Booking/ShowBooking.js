import React from 'react';
import { API_URL } from '../config/amuguna';

const ShowBooking = ({data}) => {
    console.log(data)
    const book = data
    // console.log(book.length)
    // console.log(book[0].imgurl.split(","))
    // var imgs = []
    // for(let i=0; i<book.length; i++){
    //     imgs.push(book[i].imgurl.split(","))    
    //     }


    // for(let i=0; i<book.length; i++){
    //     book[i].imgurl = imgs[i][0]
    // }
    // console.log(book[3].imgurl);
    if(!book.imgurl) {alert('예약내역이 없습니다.')
                        document.location.href ='/'}
    return (
        
       <>
       {book.map(book=>(
        <div id="Booking">
        <div className='left_img'>
                          <img src={`${API_URL}/img/${book.imgurl}`} alt=''></img></div><div className='right_text'>
                              <table className='left'>
                                  <tr>
                                      <th>Name</th>
                                      <td>{book.rname}</td>
                                  </tr>
                                  <tr>
                                      <th>Address</th>
                                      <td>{book.radd}</td>
                                  </tr>
                                  <tr>
                                      <th>Date</th>
                                      <td>{book.rsdate.substring(0,10)} ~ {book.edate.substring(0,10)}</td>
                                  </tr>
                              </table>
                              <table>
                                  <tr>
                                      <th>Booker</th>
                                      <td>{book.rbooker}</td>
                                  </tr>
                                  <tr>
                                      <th>Phone</th>
                                      <td>{book.rphone}</td>
                                  </tr>
                                  <tr>
                                      <th>Price</th>
                                      <td>{book.rprice}</td>
                                  </tr>
                              </table>

                          </div>
     
    </div>
    ))}
    </>
    
      );
    
};

export default ShowBooking;