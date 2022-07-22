import React from 'react';

const ShowBooking = ({data}) => {
    console.log(data)
    const book = data
    console.log(book)

    return (
        
       <>
       {book.map(book=>(
        <div id="Booking">
        <div className='left_img'>
                          <img src={`${book.imgurl}`} alt=''></img></div><div className='right_text'>
                              <table classNa='left'>
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
     
    </div>))}
    </>
      );
    
};

export default ShowBooking;