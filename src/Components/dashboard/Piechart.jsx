import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Piechart = () => {

    const data = {
        
        datasets: [
          {
            // label: '# of Votes',
            data: [3, 3, 3],
            backgroundColor: [
              '#FFC6AF',
              '#86FFCF',
              '#F16A77',
             
            ],
            borderColor: [
,
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      

  return (
    <>

    <div className="w-[227px] h-[223px] flex flex-row justify-center">
      <Pie data={data} className=" "/>
      </div>
    </>
  )
}

export default Piechart
