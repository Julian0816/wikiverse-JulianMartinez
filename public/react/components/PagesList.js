import React from 'react';
import { Page } from './Page';

export const PagesList = ({pages, setPages, fetchPages}) => {
	return <>
		{
			pages.map((page, idx) => {
				return <Page page={page} pages={pages} setPages={setPages} fetchPages={fetchPages} key={idx} />
			})
		}
	</>
} 
