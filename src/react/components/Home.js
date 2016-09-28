import React, { Component, PropTypes } from 'react';
import marked from 'marked';

import HomeDescription from './HomeDescription';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});

let descriptions = [
  {
    title1: '소속',
    title2: 'REAL',
    description: '저희는 SW 창업동아리 REAL 4기 주간 스튜디오입니다.'
  },
  {
    title1: '젊은',
    title2: '늙은',
    description: '쓸 말이 없네?'
  },
  {
    title1: '호박고구마',
    title2: '호박고구마호박고구마!',
    description: '고구마엔 우유'
  }
];

let members = [
  {
    name: '박주형',
    role: '개발',
    imageSource: ''
  },
  {
    name: '나석주',
    role: '개발',
    imageSource: ''
  },
  {
    name: '김수희',
    role: '기획',
    imageSource: ''
  },
  {
    name: '이승진',
    role: '기획',
    imageSource: ''
  },
  {
    name: '김자은',
    role: '개발?',
    imageSource: ''
  },
]

let projects = [
  {
    title: '주간 스튜디오 홈페이지 제작',
    link: './projects/juganstudio-github-io',
    imageSource: './images/projects/juganstudio/thumbnail.png',
    github: 'https://github.com/JuganStudio/JuganStudio.github.io',
    tags: ['front', 'react']
  }
]

class Home extends Component {
	render() {
    let homeDescriptions = descriptions.map( (desc, i) =>
      <HomeDescription key={i} {...desc} /> );

		return (
			<div className='home-contents'>
        <div className='bg_1'>
          <span>주간 스튜디오</span>
          <span>매 주 금요일에 새로운 서비스를 런칭합니다.</span>
        </div>

        // 간단한 설명
        <div className='bg_2'>
          { homeDescriptions }
        </div>

        // 프로젝트들

			</div>
		)
	}
}

export default Home;
