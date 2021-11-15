import React from 'react'
import { Line, defaults } from 'react-chartjs-2'


function LineChart() {

    const data = {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'Energy usuage for the week',
          data: [10390,9800,9750,10020,9700,0,0],
          borderColor: ['rgba(255, 206, 86, 0.2)'],
          backgroundColor: ['rgba(255, 206, 86, 0.2)'],
          pointBackgroundColor: 'rgba(255, 206, 86, 0.2)',
          pointBorderColor: 'rgba(255, 206, 86, 0.2)',
        }
      ]
    }

    return <Line data= {data} />

}

export default LineChart