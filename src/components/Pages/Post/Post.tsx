/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DOMPurify from 'dompurify';

import { POST, HOME } from '../../../hooks/PageNumbers';
import { Entry } from '../entry.js';
import { API_URL } from '../../../constants';

import { Responsive } from '../../ResponsiveComponents/ResponsiveComponent';
import { Page } from '../Page';
import { titleStyle, bodyStyle, contentStyle } from './Post.styles';

export default function Post(): React.JSX.Element {
	const { slug } = useParams<{ slug: string }>();
	const navigate = useNavigate();
	const [post, setPost] = useState<Entry | null>(null);

	useEffect(() => {
		fetch(API_URL + '/entries/post/' + slug)
			.then(async (response) => {
				if (!response.ok) {
					navigate(HOME.link, { replace: true });
					return;
				}
				const data = await response.json();
				setPost({...data, title: DOMPurify.sanitize(data.title), body: DOMPurify.sanitize(data.body)});
			})
			.catch(() => navigate(HOME.link, { replace: true }));
	}, [slug, navigate]);

	return (
		<Page pageNumber={POST.pageNumber} title={post?.title}>
			<Responsive Component="div" styles={contentStyle}>
				<h2 css={titleStyle}>{post?.title}</h2>
				{post?.body && <RenderedPostBody body={post.body} />}
			</Responsive>
		</Page>
	);
}

function RenderedPostBody({ body }: { body: string }): React.JSX.Element {
	return <div css={bodyStyle} dangerouslySetInnerHTML={{ __html: body }} />;
}
