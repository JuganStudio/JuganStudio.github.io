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


let intro = `
# 주간 스튜디오
주간스튜디오는 매주 1개의 서비스를 선보일 계획입니다.
정말 그렇게 될지는 잘 모르겠어요.


# 진행중인 프로젝트
Projects 탭을 참조하세요!

# 멤버들
## 개발
 * 박주형
 * 나석주
 * 김자은(미정)

## 기획 / 마케팅
 * 김수희
 * 이승진
`
// <div className='markup' dangerouslySetInnerHTML={{__html: marked(intro)}}></div>

let descriptions = [
  {
    title1: '소속',
    title2: 'REAL',
    description: '저희는 SW 창업동아리 REAL 4기 주간 스튜디오입니다.'
  },
  {
    title1: '젊은',
    title2: '20대',
    description: '예. 우린 젊어요.'
  },
  {
    title1: '호박고구마',
    title2: '호박고구마호박고구마!',
    description: '고구마엔 우유'
  }
]

class Home extends Component {
	render() {
    let homeDescriptions = descriptions.map( (desc, i) => <HomeDescription key={i} {...desc} />)

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
