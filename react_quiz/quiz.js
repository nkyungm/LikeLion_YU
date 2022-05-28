//1. JSX에서 자바스크립트 변수를 출력하기 위해 사용하는 기호는?
//정답: 4번 { }

/*2. **빈칸을 채워주세요.**

JSX 는 자바스크립트에 XML을 추가한 문법이다.
브라우저에서 실행되기 전 Babel(바벨)을 이용해 우리가 사용하는 자바스크립트 형태의 코드로 변환한다.
*/

/*3. 다음과 같이 JSX를 사용하는 상황들이 있다. 하지만 올바른 사용법이 아니다. 어떻게 바꿔야하는가?*/
function App() {
	return (
    <div>
        <div>Hello</div>
		<div>world</div>
    </div>
	);
}

function App(){
	const num = 123;
	
    return (
        <div>
          {
            num===123
              ? (<div>정답</div>)
              : (<div>오답</div>)
          }
        </div>
    );
}

export default App;


/*4. 다음과 같이 함수형 컴포넌트들이 있다. 아래 주어진 문제를 해결하시오!*/
import React, { Component } from 'react';

class Header extends Component {
	render(
		return (
			<div>
				<h1>Like Lion</h1>
			</div>
		);
	);
}

export default Header;

import React, { Component } from 'react';

class Main extends Component {
	render(
		return (
			<div>
				<p>리액트</p>
			</div>
		);
	);
}

export default Main;

import React, { Component } from 'react';

class Footer extends Component {
	render(
		return (
			<div>
				<p>화이팅</p>
			</div>
		);
	);
}

export default Footer;

/*1) App 컴포넌트의 빈칸을 채워보세요. 컴포넌트는 Header,Main,Footer 순입니다.*/
import React, { Component } from 'react';
import Header from './ex/Header';
import Footer from './ex/Footer';
import Main from './ex/Main';

function App() {
  return (
    <div>
		<Header/>
		<Main/>
		<Footer/>
    </div>
  );
}

export default App;

/*2) 1번을 완성하고 웹 화면에 출력된 내용은 어떻게 될까요?*/
/*
Like Lion
리액트
화이팅
*/

/*3) Header를 화살표 함수를 이용한 class형 컴포넌트로 바꿔보세요.*/
import React, { Component } from 'react';

const Header = ()=>{
	return(
		<div>
			<h1>Like Lion</h1>
		</div>
	)
}

export default Header;