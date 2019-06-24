import React from 'react';
import PostList from './postlist';
import Newspost from './newspost';

const routes = [
  {
    path: '/',
    exact: true,
    component: PostList,
  },
  {
    path: '/news-post',
    exact: true,
    component: Newspost,
  },
];
export default routes;
