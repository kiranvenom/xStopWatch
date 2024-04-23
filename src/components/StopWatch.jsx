import React, { useState, useEffect } from 'react';

const StopWatch = () => {
	const [isRunning, setIsRunning] = useState(false);
	const [time, setTime] = useState(0);

	useEffect(() => {
		let timer;
		if (isRunning) {
			timer = setInterval(() => {
				setTime((prevTime) => prevTime + 1);
			}, 1000);
		} else {
			clearInterval(timer);
		}

		return () => clearInterval(timer);
	}, [isRunning]);

	const handleStartStop = () => {
		setIsRunning((prevIsRunning) => !prevIsRunning);
	};

	const handleReset = () => {
		setTime(0);
		setIsRunning(false);
	};

	const formatTime = (timeInSeconds) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	return (
		<div className='p-4'>
			<h1 className='font-bold text-4xl'>Stopwatch</h1>
			<h4 className='mt-6'>Time: {formatTime(time)}</h4>
			<div className='mt-6'>
				<button
					className='px-4 py-1 bg-slate-400 rounded-md mr-2'
					onClick={handleStartStop}>
					{isRunning ? 'Stop' : 'Start'}
				</button>
				<button
					className='px-4 py-1 bg-slate-400 rounded-md ml-2'
					onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	);
};

export default StopWatch;
