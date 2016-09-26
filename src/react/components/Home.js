import React, { Component, PropTypes } from 'react';
import marked from 'marked';

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

class Home extends Component {
	render() {
		return (
			<article className='contents'>
				<div dangerouslySetInnerHTML={{__html: marked(intro)}}></div>

			</article>
		)
	}
}

export default Home;
