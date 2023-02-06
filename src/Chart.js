import React from 'react';
import Moment from 'react-moment';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bubble }  from 'react-chartjs-2';
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);


function Plot (props) {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  

  const data = {
    datasets: [
      {  
        label: 'Asteriods',
        data: [{
          //x: parseInt(<Moment format="HH">(props.obj.close_approach_date_full)</Moment>)-parseInt(props.currentTime),
          x:props.obj.relative_velocity_kmph/500,
          y: props.obj.miss_distance_kms/10000,
          r: props.obj.diameter_max_kms*230

        },
        {
          //x: parseInt(<Moment format="Hh">(props.obj.close_approach_date_full)</Moment>)-parseInt(props.currentTime),
          x:props.obj.relative_velocity_kmph/500,
          y: props.obj.miss_distance_kms/10000,
          r: props.obj.diameter_min_kms*230
        }
      ],
        backgroundColor: 'rgba(0, 127, 255, 0.5)'
      
      }
    ],
  }
return (
  <>
  parseInt(<Moment format="H">{props.obj.close_approach_date_full}</Moment>)
  <h1>{parseInt(props.obj.close_approach_date_full)}</h1>
 <Bubble className = "view" options={options} data={data} />

  </>
)
}

export default Plot;