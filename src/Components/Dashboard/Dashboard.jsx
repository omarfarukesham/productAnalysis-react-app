import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const[charts, setCharts] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data => setCharts(data))

    },[])
   
console.log(charts);
    return ( 
        <div className='d-flex justify-content-center align-items-center gap-4'>
        
         <div className='m-3'>
             <h3 className='text-primary'>First Quarter</h3>
            <LineChart width={400} height={400} data={charts}>
                <Line  dataKey={"sell"} stroke="#8884d8" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip></Tooltip>
            </LineChart>
         </div>

         <div className='m-2'>
            <h3 className='text-primary'>Second Quarter</h3>
            <BarChart width={400} height={400} data={charts}>
                <XAxis dataKey="month"  />
                <YAxis />
                <Bar dataKey="revenue" barSize={25} fill="#8884d8" />
                <Tooltip></Tooltip>
             </BarChart>
         </div>
        
        </div>
        
    );
};

export default Dashboard;