import React, { useState, useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { Chart, Tooltip, Legend } from 'chart.js';

// Register Tooltip and Legend
Chart.register(Tooltip, Legend);

const RatingChart = () => {
  const [positiveCount, setPositiveCount] = useState(0);
  const [negativeCount, setNegativeCount] = useState(0);
  const [times, setTimes] = useState([getCurrentTime()]);
  const [positiveData, setPositiveData] = useState([0]);
  const [negativeData, setNegativeData] = useState([0]);
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [ratingsByDate, setRatingsByDate] = useState({});

  const chartRef = useRef(null);

  // Function to get the current time in HH:MM format
  function getCurrentTime() {
    const now = new Date();
    return now.toTimeString().split(' ')[0].slice(0, 5);
  }

  // Function to get the current date in YYYY-MM-DD format
  function getCurrentDate() {
    return new Date().toISOString().split('T')[0];
  }

  // Handler for thumbs-up button
  const handleThumbsUp = () => {
    const newCount = positiveCount + 1;
    setPositiveCount(newCount);
    updateChartData(newCount, negativeCount);
  };

  // Handler for thumbs-down button
  const handleThumbsDown = () => {
    const newCount = negativeCount + 1;
    setNegativeCount(newCount);
    updateChartData(positiveCount, newCount);
  };

  // Function to update chart data with the current time
  const updateChartData = (newPositive, newNegative) => {
    const currentTime = getCurrentTime();

    setTimes((prevTimes) => [...prevTimes, currentTime]);
    setPositiveData((prevData) => [...prevData, newPositive]);
    setNegativeData((prevData) => [...prevData, newNegative]);

    const updatedRatings = {
      times: [...times, currentTime],
      positiveData: [...positiveData, newPositive],
      negativeData: [...negativeData, newNegative],
    };

    setRatingsByDate((prev) => ({
      ...prev,
      [selectedDate]: updatedRatings,
    }));
  };

  // Handler for date selection
  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setSelectedDate(newDate);

    if (ratingsByDate[newDate]) {
      const { times, positiveData, negativeData } = ratingsByDate[newDate];
      setTimes(times);
      setPositiveData(positiveData);
      setNegativeData(negativeData);
      setPositiveCount(positiveData[positiveData.length - 1]);
      setNegativeCount(negativeData[negativeData.length - 1]);
    } else {
      setTimes([getCurrentTime()]);
      setPositiveData([0]);
      setNegativeData([0]);
      setPositiveCount(0);
      setNegativeCount(0);
    }
  };

  // Reset handler
  const handleReset = () => {
    setPositiveCount(0);
    setNegativeCount(0);
    setTimes([getCurrentTime()]);
    setPositiveData([0]);
    setNegativeData([0]);
    setRatingsByDate((prev) => ({
      ...prev,
      [selectedDate]: {
        times: [getCurrentTime()],
        positiveData: [0],
        negativeData: [0],
      },
    }));
  };

  // Chart data configuration
  const data = {
    labels: times,
    datasets: [
      {
        label: 'Positive Ratings',
        data: positiveData,
        borderColor: 'green',
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Negative Ratings',
        data: negativeData,
        borderColor: 'red',
        backgroundColor: 'rgba(239, 68, 68, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  // Chart options for interactivity
  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 1,
        },
      },
    },
    animation: {
      duration: 500,
    },
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Real-Time Ratings by Minute</h2>     

      <div className="flex justify-around mb-6">
        <div className="bg-green-100 text-green-800 font-bold text-2xl p-4 rounded-lg w-32 text-center">
          {positiveCount}
        </div>
        <div className="bg-red-100 text-red-800 font-bold text-2xl p-4 rounded-lg w-32 text-center">
          {negativeCount}
        </div>
      </div>

      {/* <div >
      </div> */}
      <Line data={data} options={options} ref={chartRef} />


      <div className="flex justify-center gap-4 mt-6 mb-6">
        <button
          onClick={handleThumbsUp}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          👍 Thumbs Up
        </button>
        <button
          onClick={handleThumbsDown}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg flex items-center"
        >
          👎 Thumbs Down
        </button>
      </div>

      <div className="flex justify-center gap-4 mb-4">
        <input
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <button
          onClick={handleReset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg"
        >
          Reset
        </button>
      </div>

    </div>
  );
};

export default RatingChart;
