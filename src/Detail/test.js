import React,{useState} from 'react';
import { DateRange } from 'react-date-range';
import { addDays } from "date-fns"

// const noid = document.querySelector('.rdrCalendarWrapper').parentElement;
// // noid.style.border='1px solid black';
// noid.classList.add('cal');

const Test = () => {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: "selection",
        },
      ])

      console.log(state);
    return (
        <div>
            <DateRange
                editableDateInputs={true}
                onChange={(item) => setState([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={state}
                months={1}
                direction="horizontal"
            />
            
        </div>
    );
};

export default Test;