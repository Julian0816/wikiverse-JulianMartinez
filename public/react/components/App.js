import React, { useState, useEffect } from 'react';
import { PagesList } from './PagesList';

// import and prepend the api url to any fetch calls
import apiURL from '../api';
import { AddArticle } from './AddArticle';

export const App = () => {

	const [pages, setPages] = useState([]);
	const [isAddingArticle, setIsAddingArticle] = useState(false)
	
	
	async function fetchPages(){
		try {
			const response = await fetch(`${apiURL}/wiki`);
			const pagesData = await response.json();
			setPages(pagesData);
		} catch (err) {
			console.log("Oh no an error! ", err)
		}
	}

	const clicked = () => {
        
       	setIsAddingArticle(true) 
    }

	


	useEffect(() => {
		fetchPages();
	}, []);

	return (
		<main className='container'>	
      <h1>WikiVerse</h1>
			<h2>An interesting 📚</h2>	
			{isAddingArticle ? <AddArticle /> : <PagesList pages={pages} setPages={setPages} fetchPages={fetchPages}/> }
			<button className='btn' onClick={clicked}>Create Page</button>
		</main>
	)
}