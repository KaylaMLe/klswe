/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { POST } from '../../../hooks/PageNumbers';
import { Entry } from '../entry.js';
import { API_URL } from '../../../constants';
import { Page } from '../Page';


export default function Post(): React.JSX.Element {
	const { slug } = useParams<{ slug: string }>();
	const [post, setPost] = useState<Entry | null>(null);

	useEffect(() => {
		fetch(API_URL + '/entries/post/' + slug)
			.then(async (response) => {
				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
				const data = await response.json();
				setPost(data);
			})
			.catch((error) => console.error('Error fetching post:', error));
	}, []);

	return (
		<Page pageNumber={POST.pageNumber} title={post?.title}>
			<h1>{post?.title}</h1>
		</Page>
	);
}
