import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
function header() {
    const [searchInput, setsearchInput]= useState("");
    const [startDate, setStartDate]= useState(new Date());
    const [endDate, setEndDate]= useState(new Date());
    const handleSelect= (ranges)=>{
      setStartDate(ranges.selection.startDtae);
      setEndDate(ranges.selection.endDate);
}
const selectionRange={
      startDate:startDate,
      endDate:endDate,
      key:"selection",
}
 console.log(searchInput)
  return (
    <header>
    <div>
        <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
            <input className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-500"
            value={searchInput}
            onChange={(e)=>setsearchInput(e.target.value)}
            type="text"
            placeholder='start your search'
            />
            </div>
</div>
{searchInput && (
        <div>
          <DateRangePicker
          ranges={[selectionRange]}
          minDate={new Date()}
          onChange={handleSelect}
/>




            

        
        </div>
    )}
    </header>
  )
}

export default header
