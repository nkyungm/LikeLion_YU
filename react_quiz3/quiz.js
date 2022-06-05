/*
1️⃣  **빈칸을 채워주세요.**

(1) React Virtual Dom 을 사용하면 실제 DOM에 접근하여 조작하는 대신, 이를 추상화한 자바스크립트 객체를 구성하여 사용한다.

(2) useRef 는 .current 프로퍼티로 전달된 인자로 초기화된 변경가능한 객체를 반환한다.
 */

/*
2️⃣  **아래 코드는 리렌더링되면 val의 값이 다시 0으로 초기화되는 케이스입니다.
 `useRef()` 를 사용해서 리렌더링되더라도 값이 유지되도록 변수와 함수를 추가해보세요!**
*/
import { useState, useRef } from "react";

function App() {

  const [render, setRender] = useState(false);
  let val = 0;
  const valRef = useRef(0) ;

  console.log(`렌더링 후 Ref : ${valRef.current}`);
  console.log(`렌더링 후 Var : ${val}`);

  const increaseRef = () => {
      valRef.current+=1;
      console.log(`Ref up -> ${valRef.current} `);
  };

  const increaseVar = () => {
    val++;
    console.log(`Var up -> ${val}`);
  };

  const doRender = () => {
    setRender(!render);
  };

  return (
    <div className="App">
      <p>Ref : </p>
      <p>Val : {val}</p>

      <div>
				<button onClick={increaseRef}>Ref ++</button>
        <button onClick={increaseVar}>Var ++</button>
        <button onClick={doRender}>Render</button>
      </div>

    </div>
  );
}

export default App;

/*
3️⃣  **아래 코드를 실행시켰을 때 버튼을 클릭하면 Bool 컴포넌트가 3번 렌더링됩니다.** 

**React.memo() 와 useCallback() 훅을 사용하여 클릭한 컴포넌트의 함수만 호출되도록 해보세요!**
*/
import React, { useState, useCallback} from "react";
import Light from "./Light";


export default function SmartHome() {
    
    const [masterOn, setMasterOn] = useState(false);
    const [kitchenOn, setKitchenOn] = useState(false);
    const [bathOn, setBathOn] = useState(false);

	const toggleMaster = useCallback(() => setMasterOn(!masterOn), [masterOn]);
    const toggleKitchen = useCallback(() => setKitchenOn(!kitchenOn),[kitchenOn]);
    const toggleBath = useCallback(() => setBathOn(!bathOn), [bathOn]);

    return (
        <div className="App">
            <Light room="침실" on={masterOn} toggle={toggleMaster} />
            <Light room="주방" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="욕실" on={bathOn} toggle={toggleBath} />
        </div>
    );
    
}


import React from "react";

const Light = ({ room, on, toggle }) => {
    console.log({ room, on });
    return (
      <button onClick={toggle}>
        {room} {on ? "💡" : "⬛"}
      </button>
    );
}

export default React.memo(Light);