import React, { useState } from 'react';
import apiURL from '../api';

export const AddArticle = () => {

    
    const [title, setTitle] = useState('')
    const [articleContent, setArticleContent] = useState('')
    const [authorName, setAuthorName] = useState('')
    const [authorEmail, setAuthorEmail] = useState('')
    const [tag, setTag] = useState('')
    

    const handleSubmit = async (e) => {
        e.preventDefault()

         
            const response = await fetch(`${apiURL}/wiki`, {
                method: "POST",
                headers: {
                    'content-Type' : 'application/json'
                },
                body: JSON.stringify(
                    {
                        title: title,
                        content: articleContent,
                        name: authorName,
                        email: authorEmail,
                        tags: tag,
                        status: "open"
                    }
                )
            })    
            const data = await response.json();
    
        
        setTitle('')
        setArticleContent('')
        setAuthorName('')
        setAuthorEmail('')
        setTag('')      
    }




    return (
        <main>
            <form onSubmit={handleSubmit}>
                <h1>Wikiverse</h1>
                <h2>Add a Page</h2>
                <label></label>
                <input type='text' placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                <input type='text' placeholder='Article Content' value={articleContent} onChange={(e) => setArticleContent(e.target.value)}/>
                <input type='text' placeholder='Author Name' value={authorName} onChange={(e) => setAuthorName(e.target.value)}/>
                <input type='text' placeholder='Author Email' value={authorEmail} onChange={(e) => setAuthorEmail(e.target.value)}/>
                <input type='text' placeholder='Tags' value={tag} onChange={(e) => setTag(e.target.value)}/><br></br>
                <button className='btn' type='submit'>Submit</button>
            </form>			
            
        </main>
    );
}