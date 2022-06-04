/*1️⃣ 빈칸을 채우시오.
BrowserRouter : react-router-dom의 라우터 중 하나로 HTML5의 history API를 활용하여 URL과 UI를 동기화하는 라우터이다.
*/

/*
2️⃣ Hook 의 기능에 대해 설명하시오.
- Hook은 함수형 컴포넌트가 클래스형 컴포넌트의 기능을 사용할 수 있도록 해주는 기능이다. 
- useState와 useEffect를 사용하여 특징적으로 state와 lifecycle과 같은 기능을 사용 가능하게 해준다.  
*/

/*
3️⃣ App.js에서 home.js와 test.js를 불러오기 위한 코드이다. 빈칸을 채우시오.
/* src/inc/home.js */

import React, { Component } from 'react';

class home extends Component {

  render() {
    return (
        <div>
            <h3> This is likelion's Blog </h3>
        </div>
    );
  }
}

export default home;

/* src/inc/test.js */

import React, { Component } from 'react';

class test extends Component {

  render() {
    return (
        <div>
            <h3> This is test page </h3>
        </div>
    );
  }
}

export default test;

/* src/App.js */

import home from './inc/home';
import test from './inc/test';


/*
4️⃣ 불러온 home.js와 test.js를 App.js  파일 안에서 Route 컴포넌트를 통해 렌더링하는 코드이다. 빈칸을 채우시오.
/* src/App.js */

import { Route } from 'react-router-dom'

const App = () => {
  return (
      <div>
          <Route path="/" element={<home />}/>
          <Route path="/test" element={<test />}/>
      </div>
  );
};

export default App;

/*
5️⃣ 3번에서 지정한 경로에 맞게 Link 컴포넌트를 통해 렌더링하는 코드이다. 빈칸을 채우시오.
/* src/App.js */
import { Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>home</Link>
        </li>
        <li>
          <Link to='/test'>test</Link>
        </li>
      </ul>
      <hr />
      <Route path="/" element={<home />}/>
      <Route path="/test" element={<test />}/>
    </div>
  );
};

export default App;