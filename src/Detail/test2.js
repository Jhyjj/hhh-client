import React,{useState} from 'react';
import { Calendar } from 'react-date-range';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file 
import 'react-date-range/dist/theme/default.css'; // theme css file


const Test2 = () => {

     const handleSelect = (date)=>{
        console.log(date);
    }
    const [state, setState] = useState({
        startDate:new Date(),
        endDate: new Date(),
        key: 'selection'
    })
    const onRangeChange = (ranges)=>{
        console.log(ranges);
        setState({
            startDate: ranges['selection'].startDate,
            endDate: ranges['selection'].endDate,
            key:ranges['selection'].key
        })
    }
    return (
        <div>
            <DateRange 
            onChange={onRangeChange}
            editableDateInputs={true}
            moveRangeOnFirstSelection={false}
            ranges={[state]}
            />
        </div>
    );
};

export default Test2;