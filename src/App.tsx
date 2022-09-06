import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import home from './markdown/home.md';

function App() {

	const [md, setMd] = useState("");

	useEffect(() => {
		// importing '.md' file

		const importMd = async () => {
			const file = await fetch(home);
			const homeMd = await file.text();
			setMd(homeMd);
		}

		importMd();
	}, []);


	return (
		<div className="App">
			<header className="App-header">
				<h1 className='text-3xl text-pink-500 font-bold'>Smart Enough City JP</h1>
			</header>
			<ReactMarkdown children={md} />
		</div>
	);
}

export default App;
