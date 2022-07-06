# 💻FrontEnd
<details>

<summary>HTML/CSS</summary>
<div markdown="1">
 
### 🔥 태그
**Box**

---

`header` `section` `footer` `article` `nav` `div` `aside` `span` `main` `form` .
 
 **Item**

---

`a` `button` `input` `label` `img` `video` `audio` `map` `canvas` `table`
 
 **태그**는 **박스(box)** 또는 **아이템(item)** 2가지로 분류할 수 있다.

- `Box` : 아이템을 어떻게 배치할지 나누어주는 태그
- `Item` : 사용자들에게 보여지는 태그
   - `Block` : 한 줄에 한 개만 배치
   - `Inline` : 한 줄에 여러 개 배치
 ---
 
 ### ⭐블록 요소 (Block Element)
 
 ![image](https://user-images.githubusercontent.com/97418768/173006109-96782c82-bb24-48d5-ad61-f977221b89e4.png)

 - 가로폭 전체의 넓이를 가지는 직사각형 형태이며 `width`, `height`, `margin`, `padding` 등으로 레이아웃을 수정할 수 있다.
- 블록 요소 다음에는 줄바꿈이 이루어진다.
- css에서 `display:block` 으로 블록을 변경할 수 있다.
    
    ```css
    div {
    	display : block;
    }
    ```
    
- 블록 요소인 태그 종류
    
    `article` `aside` `div` `footer` `form` `h1` `h2` `h3` `h4` `h5` `h6` `header` `p` `section` `table` `ul` 등.
	
 ---
 
 ### ⭐인라인 요소 (Inline Element)

 ![image](https://user-images.githubusercontent.com/97418768/173202257-f52ac463-7ab9-4cef-afc3-82efe37a1017.png)

- 컨텐츠가 끝나는 지점까지를 넓이로 가지게 된다.
- 임의로 `width`, `height`로 변형을 줄 수가 없다.
- 인라인 요소는 `line-height`로 줄의 높낮이를 조절할 수 있고, `text-align`으로 텍스트의 중앙, 좌, 우측 정렬을 할 수 있다.
- 인라인 요소 다음에는 줄바꿈이 없고 우측으로 바로 이어서 표시된다.
- css에서 `display:inline`으로 인라인으로 변경할 수 있다.
    
    ```css
    div {
    	display : inline;
    }
    ```
    
- 인라인 블록인 태그 종류
    
    `a` `br` `button` `em` `i` `img` `input` `label` `select` `span` `strong` `textarea` 등
    
---
 
 ### ⭐태깅을 이용한 웹 구조화 (마크업)

웹사이트에 배치를 정하는 태그가 있다. 해당 태그들을 이용하면 웹사이트의 구조를 짤 수 있다.
 
 ![image](https://user-images.githubusercontent.com/97418768/173343489-a41a37c4-a589-4ba9-85bc-ed3ff9bafcbc.png)
---
 ### ⭐자주 사용하는 태그

`div` `span` : 아이템들을 묶어서 스타일링할 때 주로 사용

`div` : block level의 태그

`span` : inline level의 태그

`article` : 여러가지 아이템들을 재사용 가능하도록 그룹화해 놓은 것

`p` : 문단을 정의

`b` : 볼드체

`ol` : 번호가 있는 리스트

`ul` : 번호가 없는 리스트
 
---
 ### ⭐form

- 사용자로부터 데이터를 받아야하는 경우 사용되는 요소이다.

- 폼 요소는 서버에 데이터를 전달하기 위해 사용한다.

```html
<form action="" method="">
	...
</form>
```

`input` : 내용이 없는 빈 요소이며 type 속성을 통해 여러 종류의 입력 양식으로 나타낼 수 있다.

```html
<!-- 단순한 텍스트 입력 -->
<input type="text">

<!-- 공개할 수 없는 내용 입력 -->
<input type="password">

<!-- 라디오 버튼(중복 선택 불가능) -->
<input type="radio">

<!-- 체크박스(중복 선택 가능) -->
<input type="checkbox">

<!-- 파일을 서버에 올릴 때 사용 -->
<input type="file">

<!-- 버튼(클릭) -->
<input type="submit">
<input type="reset">
<input type="button">
```

`select` : 몇 개의 선택지를 리스트 형태로 노출하고 그 중 하나를 선택할 수 있게 하는 태그

```html
<select>
	<option>대연</option>
	<option>나원</option>
	<option>주원</option>
	...
</select>
```

`textarea` : 여러줄의 텍스트를 입력할 때 사용

```html
<textarea rows="5" cols="30"></textarea>
```

`button` : submit, reset, button 3가지의 타입

```html
<button type="submit|reset|button">버튼<button>
```

`label` : form 요소의 이름과 form 요소를 명시적으로 연결시켜주기 위해 사용

- form 요소의 id 속성값과 `<label>`의 for 속성값을 같게 적어주어야 한다.

```html
<label for="name">이름</label> : <input type="text" id="name">
```
 </div>
</details>
	
<details>

<summary>JS</summary>
<div markdown="2">
 
### 🔥 다양한 라이브러리

자바스크립트 언어를 이용해 만든 `React`, `Angular`, `View.js` 같은 프레임워크나 `jQuery` 같은 라이브러리도 있습니다.

<details>

<summary>라이브러리와 프레임워크의 차이</summary>
<div markdown="1">
    
| 라이브러리 | 개발자가 개발하는데 필요한 것들을 모아둔 도구들 <br> ex. 미리 작성된 코드, 변수, 함수, 클래스 |
| :---: | :----: |
| 프레임워크 | 개발 시 필수적인 코드, 알고리즘, 데이터베이스 연동 등과 같은  기능을 위해 어느 정도의 뼈대를 제공해주는 것 <br> 개발자는 그 뼈대 위에 코드를 작성하여 애플리케이션을 완성 |

</div>
</details>

### 제어의 역전

![image](https://user-images.githubusercontent.com/97418768/174070043-67e18781-b898-443b-9459-27d5132f24d0.png)
	
![image](https://user-images.githubusercontent.com/97418768/174070074-ec94f921-f132-4097-85a0-5a915bb610b9.png)

---

### 1️⃣  간단한 자바스크립트 예제 (클릭해서 색 변경)
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        *:hover{
            cursor: default;
        }
    </style>
</head>
<body>
    <h1 id="heading">자바스크립트</h1>
    <p id="text">클릭해보세요!</p>

    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script> //jquary

    //자바스크립트를 클릭했을 때 색깔이 변하게
    //const heading = document.querySelector("#heading") //.은 클래스, #은 id
    //heading.addEventListener('click',()=>{
    //    heading.style.color='red';
    //})

    $('h1#heading').click(function(){
        $(this).css('color','red');
    });


</script>
<!-- 요소에 id 속성이 있으면 위치에 상관없이 메서드 
document.getElementById(id)를 이용해 접근할 수 있다. -->

<div id="elem">
    <div id="elem-content">Element</div>
  </div>
  
  <script>
    let elemtext = document.getElementById('elem');

    elemtext.style.textAlign="center";
  </script>


  <!-- elem.querySelectorAll(css)은 요소검색 메서드이다. 
elem의 자식 요소 중 주어진 CSS 선택자에 대응하는 요소 모두를 반환한다.-->

<ul>
    <li>1-1</li>
    <li>1-2</li>
  </ul>
  <ul>
    <li>2-1</li>
    <li>2-2</li>
  </ul>
  <script>
    let elements = document.querySelectorAll('ul > li:last-child');
  
    for (let elem of elements) {
      alert(elem.innerHTML); 
    }
  </script>
  

</body>
</html>
```
---
	
### 2️⃣  자바스크립트 기초 (ES6)

**🔥 변수** 

자바스크립트는 `var`, `const`, `let` 의 변수 선언을 지원합니다.

<aside>
❓ `**var` 은 쓰시지 않는 걸 추천드립니다!** 

왜인지 궁금하시다면 먼저 검색해보셔도 좋습니다!  정답은 강의 시간에 알려드릴게요

</aside>

그렇다면 `const`와 `let`에 대해 알아야겠죠.

`const`는 재할당이 가능하지 않고, `let`은 재할당이 가능합니다. 

앞으로 JS로 변수를 선언하실 때에는 `const`, `let`을 사용해주세요!

```jsx
const FOO = 123;
FOO = 456; // TypeError

let foo = 123;
foo = 456;
```

<details>

<summary>토글</summary>
<div markdown="1">

### **스코프**

- 변수의 유효범위 혹은 생존 범위

- `var` 키워드는 함수 수준의 범위를 가진다

- `const`, `let`은 블럭 수준 범위

- 보통 프로그래밍 언어의 경우 if문 블럭 안에서 변수를 선언하면 해당 블럭 안에서만 유지되지만 자바스크립트는 그렇지 않다

```jsx
var name = "Kim Jihye";

function showName(){
	var name = "Kim DaeYeon";
	if(true){
		var name = "김대연";
		console.log(name);
	}
	console.log(name);
}

showName();

console.log(name);
```

<details>

<summary>답</summary>
<div markdown="1">
김대연<br> 
김대연<br> 
Kim jihye<br>
 </div>
</details>
	

### **호이스팅**

- 변수 선언과 함수 선언을 끌어올림

```jsx
console.log(a());
console.log(b());
console.log(c());

function a(){
	return 'a';
}

var b = function fb(){
	return 'fb';
}

var c = function fc(){
	return 'fc';
}
```
<details>

<summary>실제 컴파일</summary>
<div markdown="1">

```jsx
function a(){
	reutrn 'a';
}

var b;
var c;

console.log(a());
console.log(b());
console.log(c());

b = function fb(){
	return 'fb';
}

c = function fc(){
	return 'fc';
}
```
    </div>
  </details>
	
 </div>
</details>

**🔥  화살표 함수**

```jsx
// ES5
let foo = function(){
	console.log("foo");
}

// ES6
let foo = () => console.log("foo");
```

https://velog.io/@ki_blank/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98Arrow-function

---	
	
### 3️⃣  동물 테스트를 만들어보자 (복붙)

오늘은 HTML, CSS에서는 관심을 끄고 **JS**만 집중적으로 볼 것이기 때문에 다른 내용을 미리 제공해드립니다!

`index.html` `style.css` `script.js` 파일을 만들어 아래 내용을 복붙해주세요

- index.html
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>세렝게티</title>
    
        <!-- css -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body class="container">
        <div class="cont title-container">
            <h1>세렝게티 동물 테스트</h1>
            <button id="startBtn" class="btn btn-primary">시작하기</button>
        </div>
    
        <div class="cont question-container bg-light">
            <div class="progress mt-5">
                <div class="progress-bar" role="progressbar" style="width: calc(100/12*1%)"></div>
            </div>
            <h3 id="question" class="mt-5">질문</h3>
            <p id="type">EI</p>
            <button id="a" class="btn btn-dark">1</button>
            <button id="b" class="btn btn-dark">2</button>
        </div>
        <div class="cont result-container bg-danger">
            <h3 id="mbti">MBTI</h3>
            <p id="explain">설명</p>
            <img id="result-img" src="" alt="">
    
        </div>
    
        <div class="score-container">
            <input id="EI" type="text" class="input" value="0">
            <input id="SN" type="text" class="input" value="0">
            <input id="TF" type="text" class="input" value="0">
            <input id="JP" type="text" class="input" value="0">
        </div>
    
        <!-- js -->
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <script type="text/javascript" src="script.js"></script>
    </body>
    </html>
    ```
    
- style.css
    
    ```css
    body{
        width : 100vw;
        height : 100vh;
        display: flex;
    }
    .cont{
        width : 100%;
        height : 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
    }
    
    .title-container{
        margin: auto;
        background-color: gray;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .question-container{   
        display: none;
    }
    
    .btn{
        width : 300px;
        margin : 10px;
    }
    
    .score-container{
        position:absolute;
        display: flex;
        flex-direction: column;
        bottom: 5%;
        display: none;
    }
    
    .result-container{
        display: none;
    }
    
    #result-img{
        width : 50%;
    }
    
    #type{
        display: none;
    }
    ```
    
- script.js
    
    ```jsx
    const titleContainer = document.querySelector(".title-container");
    const titleBtn = document.querySelector("#startBtn");
    const questionContainer = document.querySelector('.question-container');
    const question = document.querySelector('#question');
    const type = document.querySelector('#type');
    const aBtn = document.querySelector("#a");
    const bBtn = document.querySelector('#b');
    const EI = document.querySelector('#EI');
    const SN = document.querySelector('#SN');
    const TF = document.querySelector("#TF");
    const JS = document.querySelector("#JP");
    const pro = document.querySelector('.progress-bar');
    const MBTI = document.querySelector('#mbti');
    const explain = document.querySelector('#explain');
    const image = document.querySelector('#result-img');
    const resultContainer = document.querySelector('.result-container');
    
    const q = {
        1: {
            "title": "문제 1번", 
            "type": "EI", 
            "A": "E", 
            "B": "I"
        },
        2: {"title": "문제 2번", "type": "EI", "A": "E", "B": "I"},
        3: {"title": "문제 3번", "type": "EI", "A": "E", "B": "I"},
        4: {"title": "문제 4번", "type": "SN", "A": "S", "B": "N"},
        5: {"title": "문제 5번", "type": "SN", "A": "S", "B": "N"},
        6: {"title": "문제 6번", "type": "SN", "A": "S", "B": "N"},
        7: {"title": "문제 7번", "type": "TF", "A": "T", "B": "F"},
        8: {"title": "문제 8번", "type": "TF", "A": "T", "B": "F"},
        9: {"title": "문제 9번", "type": "TF", "A": "T", "B": "F"},
        10: {"title": "문제 10번", "type": "JP", "A": "J", "B": "P"},
        11: {"title": "문제 11번", "type": "JP", "A": "J", "B": "P"},
        12: {"title": "문제 12번", "type": "JP", "A": "J", "B": "P"}
    }
    const result = {
        "ISTJ": {
            "animal": "하마", 
            "explain": "하마 설명", 
            "img": "lion.jpg"
        },
        "ISFJ": {"animal": "부엉이", "explain": "부엉이 설명", "img": "lion.jpg"},
        "INFJ": {"animal": "물소", "explain": "물소 설명", "img": "lion.jpg"},
        "INTJ": {"animal": "치타", "explain": "치타 설명", "img": "lion.jpg"},
        "ISTP": {"animal": "나무늘보", "explain": "나무늘보 설명", "img": "lion.jpg"},
        "ISFP": {"animal": "거북이", "explain": "거북이 설명", "img": "lion.jpg"},
        "INFP": {"animal": "코끼리", "explain": "코끼리 설명", "img": "lion.jpg"},
        "INTP": {"animal": "침팬지", "explain": "침팬지 설명", "img": "lion.jpg"},
        "ESTP": {"animal": "악어", "explain": "악어 설명", "img": "lion.jpg"},
        "ESFP": {"animal": "미어캣", "explain": "미어캣 설명", "img": "lion.jpg"},
        "ENFP": {"animal": "멋쟁이 사자", "explain": "멋쟁이 사자 설명", "img": "lion.jpg"},
        "ENTP": {"animal": "태양새", "explain": "태양새 설명", "img": "lion.jpg"},
        "ESTJ": {"animal": "기린", "explain": "기린 설명", "img": "lion.jpg"},
        "ESFJ": {"animal": "고릴라", "explain": "고릴라 설명", "img": "lion.jpg"},
        "ENFJ": {"animal": "카피바라", "explain": "카피바라 설명", "img": "lion.jpg"},
        "ENTJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "lion.jpg"}
    }
    
    let num = 1;
    
    // 여기까지만 사전 제공
    ```
    
    ```jsx
    const titleContainer = document.querySelector(".title-container");
    const titleBtn = document.querySelector("#startBtn");
    const questionContainer = document.querySelector('.question-container');
    const question = document.querySelector('#question');
    const type = document.querySelector('#type');
    const aBtn = document.querySelector("#a");
    const bBtn = document.querySelector('#b');
    const EI = document.querySelector('#EI');
    const SN = document.querySelector('#SN');
    const TF = document.querySelector("#TF");
    const JS = document.querySelector("#JP");
    const pro = document.querySelector('.progress-bar');
    const MBTI = document.querySelector('#mbti');
    const explain = document.querySelector('#explain');
    const image = document.querySelector('#result-img');
    const resultContainer = document.querySelector('.result-container');
    
    const q = {
        1: {
            "title": "문제 1번", 
            "type": "EI", 
            "A": "E", 
            "B": "I"
        },
        2: {"title": "문제 2번", "type": "EI", "A": "E", "B": "I"},
        3: {"title": "문제 3번", "type": "EI", "A": "E", "B": "I"},
        4: {"title": "문제 4번", "type": "SN", "A": "S", "B": "N"},
        5: {"title": "문제 5번", "type": "SN", "A": "S", "B": "N"},
        6: {"title": "문제 6번", "type": "SN", "A": "S", "B": "N"},
        7: {"title": "문제 7번", "type": "TF", "A": "T", "B": "F"},
        8: {"title": "문제 8번", "type": "TF", "A": "T", "B": "F"},
        9: {"title": "문제 9번", "type": "TF", "A": "T", "B": "F"},
        10: {"title": "문제 10번", "type": "JP", "A": "J", "B": "P"},
        11: {"title": "문제 11번", "type": "JP", "A": "J", "B": "P"},
        12: {"title": "문제 12번", "type": "JP", "A": "J", "B": "P"}
    }
    const result = {
        "ISTJ": {
            "animal": "하마", 
            "explain": "하마 설명", 
            "img": "lion.jpg"
        },
        "ISFJ": {"animal": "부엉이", "explain": "부엉이 설명", "img": "lion.jpg"},
        "INFJ": {"animal": "물소", "explain": "물소 설명", "img": "lion.jpg"},
        "INTJ": {"animal": "치타", "explain": "치타 설명", "img": "lion.jpg"},
        "ISTP": {"animal": "나무늘보", "explain": "나무늘보 설명", "img": "lion.jpg"},
        "ISFP": {"animal": "거북이", "explain": "거북이 설명", "img": "lion.jpg"},
        "INFP": {"animal": "코끼리", "explain": "코끼리 설명", "img": "lion.jpg"},
        "INTP": {"animal": "침팬지", "explain": "침팬지 설명", "img": "lion.jpg"},
        "ESTP": {"animal": "악어", "explain": "악어 설명", "img": "lion.jpg"},
        "ESFP": {"animal": "미어캣", "explain": "미어캣 설명", "img": "lion.jpg"},
        "ENFP": {"animal": "멋쟁이 사자", "explain": "멋쟁이 사자 설명", "img": "lion.jpg"},
        "ENTP": {"animal": "태양새", "explain": "태양새 설명", "img": "lion.jpg"},
        "ESTJ": {"animal": "기린", "explain": "기린 설명", "img": "lion.jpg"},
        "ESFJ": {"animal": "고릴라", "explain": "고릴라 설명", "img": "lion.jpg"},
        "ENFJ": {"animal": "카피바라", "explain": "카피바라 설명", "img": "lion.jpg"},
        "ENTJ": {
            "animal": "호랑이", 
            "explain": "호랑이 설명", 
            "img": "lion.jpg"
        }
    }
    
    let num = 1;
    let mbti = '';
    
    // 여기까지만 사전 제공
    
    titleBtn.addEventListener('click', ()=>{
        titleContainer.style.display = 'none';
        questionContainer.style.display = 'block';
        updateQuestion();
    });
    
    aBtn.addEventListener('click', ()=>{
        switch(type.innerHTML){
            case 'EI' :
                let e = parseInt(EI.value);
                EI.setAttribute('value', e+1);
                break;
            case 'SN':
                let s = parseInt(SN.value);
                SN.setAttribute('value', s+1);
                break;
            case 'TF':
                let t = parseInt(TF.value);
                TF.setAttribute('value', t+1);
                break;
            case 'JP':
                let j = parseInt(JP.value);
                JP.setAttribute('value', j+1);
                break;
        }
        updateQuestion();
    });
    
    bBtn.addEventListener('click', ()=>{
        updateQuestion();
    });
    
    function updateQuestion(){
        if(num == 13){
            questionContainer.style.display = 'none';
            resultContainer.style.display = 'block';
    
            (EI.value > 2 ? mbti+='E' : mbti+='I');
            (SN.value > 2 ? mbti+='S' : mbti+='N');
            (TF.value > 2 ? mbti+='T' : mbti+='F');
            (JP.value > 2 ? mbti+='J' : mbti+='P');
    
            MBTI.innerHTML = mbti;
            explain.innerHTML = result[mbti].explain;
            image.setAttribute('src', result[mbti].img);
    
            // if(EI.value > 2){
            //     mbti += 'E';
            // }
            // else{
            //     mbti += 'I';
            // }
        }
        else{
            pro.setAttribute('style', `width : calc(100/12*${num}%);`);
            question.innerHTML = q[num].title;
            type.innerHTML = q[num].type;
            aBtn.innerHTML = q[num].A;
            bBtn.innerHTML = q[num].B;
            num++;
        }
    }
    ```
 </div>
</details>

<details>

<summary>React</summary>
<div markdown="3">

<details>
	
<summary>ES6</summary>
<div markdown="1">
	
### 0️⃣  가변 변수와 불변 변수

가변 변수를 위한 `let` 키워드, 값을 수정할 수 없는 불변 변수를 위한 `const` 키워드를 사용합니다.

**가변 변수**는 변수를 읽거나 수정할 수 있습니다.

```jsx
// 가변 변수 let

let num = -1;
num = num * 3;

let str = '이건 문자';
str = '다른 문자';

let arr = [];
arr [ 1,2,3,];

let obj = {};
obj = { name : '새로운 객체' };
```

**불변 변수**는 선언한 후 읽기만 가능합니다. 그런데 값을 다시 할당할 수 없는 것이지 값을 변경할 순 있습니다. 

하지만 불변 변수로 정의된 배열이나 객체를 내장 함수로 수정하는 것은 **무결성**을 해치는 일이므로 새로운 불변 변수를 만들어 새값을 할당해주는 방법으로 새로 정의해줘야 합니다.

가변 내장 함수(push, splice, pop, shift) < 무결정 내장 함수 < let

- `concat()`
- `slice()`

```jsx
// 불변 변수 const 

const num = 1;
num = 3; // TypeError

// const를 변경할 수 있는 경우
const arr2 = [];
arr2.push(1); // arr2 = [1];
arr2.splice(0,0,0); // arr2 = [0,1];
```
### 1️⃣  템플릿 문자열

**템플릿 문자열**은 문자열 안에 변수와 연산식을 혼합하여 사용합니다.

기존 자바스크립트는 문자열과 변수를 연결하기 위해서 병합 연산자(+)를 사용해야했습니다.

ES6부터는 템플릿 문자열을 도입해 **백틱(`)**으로 문자열을 표현합니다.

**특수 기호 $** 를 사용하여 변수를 포함할 수도 있습니다.

```jsx
const product = { name : '검정 반팔', price : '25000원' };

let message = '제품 ' + product.name + '의 가격은 ' + product.price + '입니다.'; // 이전

message = `제품 ${product.name}의 가격은 ${product.price}입니다.`; // ES6
```


### 2️⃣  전개 연산자 Spread Operator

**전개 연산자**는 나열형 자료를 추출하거나 연결할 때 사용합나디. 

사용 방법은 배열이나 객체, 변수명 앞에 **마침표 세 개 ...** 를 입력합니다.

중요한 점은 **배열, 객체, 함수 인자 표현식** 안에서만 사용해야하다는 것!

```jsx
// 배열

const arr1 = ['one', 'two'];
const arr2 = ['three', 'four'];

let arr3 = [ arr1[0], arr1[1], arr2[0], arr[1] ]; // 과거

arr3 = [ ...arr1, ...arr2 ]; // ES6

const [ one, two, three = 'empty', ...others ] = arr1;
// one = 'one' , two = 'two', three = 'empty' , others = []
```

```jsx
// 객체

let obj1 = { one : 1, two : 2, other : 0 };

let obj2 = { three : 3, four : 4, other : -1 };

let comb = { ...obj1, ... obj2 };
// comb = { one : 1, two : 2, three : 3, four : 4, other : -1 };

comb = { ...obj2, ...obj1 };
// comb = [ one : 1, two : 2, three : 3, four : 4, other : 0 };

let { other , others } = comb;
// other =  0
// others = { one : 1, two : 2, three : 3, four : 4 }
```

### 3️⃣  클래스

```jsx
function Shape(x,y){
	this.name = "Shape";
  this.move(x,y);
}

Shape.create = function(x,y) { return new Shape(x,y); };

Shape.prototype.move = function(x,y) {
	this.x = x;
	this.y = y;
}

// 혹은
Shape.prototype = {
	move : function(x,y) {
		this.x = x;
		this.y = y;
	}
};

var s = new Shape(0,0);
```

```jsx
class Shape {
	static create(x,y) { return new Shape(x,y); }
	name = "Shape";

  constructor(x,y) {
		this.move(x,y);
	}
	move(x,y){
		this.x = x;
		this.y = y;
	}
}

class Circle extends Shape{
	constructor(x,y,radius) {
		super(x,y);
		this.radius = radius;
	}
}
```

### 4️⃣  화살표 함수

**화살표 함수**는 **화살표 기호 ⇒** 로 함수를 선언합니다. 

```jsx
function func(name){
	return "안녕 " + name;
}

console.log(func('영희');

// 화살표 함수를 사용하면

const func = (name) => {
	return `안녕 ${name}`;
}

console.log(func('영희'));

// 함수 코드가 한 줄인 경우 아래처럼 {}와 return을 생략할수 있습니다.

const func = (name) => `안녕 ${name}`;

```


### 5️⃣  forEach()

주어진 함수를 배열 요소 각각에 대해 실행

```jsx
const arr = ['a', 'b', 'c' ];

arr.forEach(element => console.log(element));
```

### 6️⃣  map()

배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환

```jsx
const arr = [1,3,5,7];

const map = arr.map(x => x *2);

console.log(map);
```

### 7️⃣  reduce()

배열의 각 요소에 대해 주어진 리듀서 함수를 실행하고 하나의 결과값을 반환

```jsx
const arr = [1,3,5,7];

const initalValue = 0;

const sum = arr.reduce( (prev, curr) => prev + curr , initValue);

console.log(sum);
```

</div>
</details>

<details>
<summary>React 설치하기</summary>
<div markdown="2">
	
### 1️⃣  node.js 다운로드
아래 링크에서 node.js 다운받기
[Node.js](https://nodejs.org/en/)

### 2️⃣  터미널을 열고 npm 이 다운되었는지 확인

`**npm -v`** 입력해서 잘 설치되었는지 확인
	
![image](https://user-images.githubusercontent.com/97418768/177555334-adac71e1-23d6-4e28-b374-2529e7995e45.png)
	
`**npm install -g create-react-app**`

### 3️⃣  react 실행하기
원하는 폴더 이름으로 react 초기 파일을 생성해보겠습니다. 

자신이 원하는 폴더로 이동해서 

`**create-react-app 프로젝트 이름**`

`**cd 프로젝트 이름**`

`**npm start**`

웹에 이런 창이 뜨시면 성공입니다.

창이 안 뜨면 [localhost:3000](http://localhost:3000) 으로 접속해보세요!

⭐  **확인 끝나시면 터미널에서 `ctrl + c` 또는 `cmd + c` 로 종료해주세요!** 

![image](https://user-images.githubusercontent.com/97418768/177555484-b5407863-b83b-4a23-873e-366fc08eddcd.png)

</div>
</details>

<details>
<summary>Component</summary>
<div markdown="3">

### React

"컴포넌트" 라는 개념에 집중이 되어있는 라이브러리입니다.

복잡한 코드를 사용자 정의 태그(component)를 통해 표현

1. 가독성
2. 재사용성
3. 유지보수 (변경된 내용이 모든 사용 파일에서 업로드)

pure.html

```jsx
<html>
    <body>
        <header>
            <h1>WEB</h1>
            world wide web!
        </header>

        <nav>
            <ul>
                <li><a href="1.html">HTML</a></li>
                <li><a href="2.html">CSS</a></li>
                <li><a href="3.html">JavaScript</a></li>
            </ul>
        </nav>

        <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language.
        </article>
    </body>
</html>
```

### 새로운 컴포넌트 만들기

새로운 컴포넌트를 만들어 App 컴포넌트에 넣어봅시다

```jsx
import { Component } from 'react';

class App extends Component{ 
  render() {
      return (
        <div className="App">
	  {/*컴포넌트 넣기*/}
        </div>
      );
  }
}
export default App;
```

</div>
</details>
	
</div>
</details>

# 📙LikeLion_YU HTML/CSS
 <details>

<summary>4월 7일 과제</summary>
<div markdown="1">
 
## 📝 CSS Flex(Flexible Box) 완벽 가이드
#### https://heropy.blog/2018/11/24/css-flexible-box/
 
 ### 🔷 float의 속성
 ![image](https://user-images.githubusercontent.com/97418768/164005368-f78e6e59-5c4a-4c6a-9b9e-9aa2320d09fa.png)

## 📝 Flexbox Froggy
#### http://flexboxfroggy.com/#ko

 ### ✅ justify-content :  요소들을 가로선 상에서 정렬
- flex-start: 요소들을 컨테이너의 왼쪽으로 정렬합니다.
- flex-end: 요소들을 컨테이너의 오른쪽으로 정렬합니다.
- center: 요소들을 컨테이너의 가운데로 정렬합니다.
- space-between: 요소들 사이에 동일한 간격을 둡니다.
- space-around: 요소들 주위에 동일한 간격을 둡니다.

 ### ✅ align-items : 요소들을 세로선 상에서 정렬
 - flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.
 - flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
 - center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
 - baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
 - stretch: 요소들을 컨테이너에 맞도록 늘립니다.
 
 ### ✅ flex-direction : 컨테이너 안에서 요소들이 정렬해야 할 방향을 지정
 - row: 요소들을 텍스트의 방향과 동일하게 정렬합니다.
 - row-reverse: 요소들을 텍스트의 반대 방향으로 정렬합니다.
 - column: 요소들을 위에서 아래로 정렬합니다.
 - column-reverse: 요소들을 아래에서 위로 정렬합니다.
 
 ### ✅ order : Flex 요소의 순서를 지정
  - 기본값 : 0
  - 양수 및 음수로 변경 가능
 
  ### ✅ align-self :  align-items가 사용하는 값들을 인자로 받으며, 그 값들은 지정한 요소에만 적용
 - 개별 요소에 적용
 - flex-start: 요소들을 컨테이너의 꼭대기로 정렬합니다.
 - flex-end: 요소들을 컨테이너의 바닥으로 정렬합니다.
 - center: 요소들을 컨테이너의 세로선 상의 가운데로 정렬합니다.
 - baseline: 요소들을 컨테이너의 시작 위치에 정렬합니다.
 - stretch: 요소들을 컨테이너에 맞도록 늘립니다.
 
  ### ✅ flex-wrap : Flex 요소들을 한 줄 또는 여러 줄에 걸쳐 정렬
 - nowrap: 모든 요소들을 한 줄에 정렬합니다.
 - wrap: 요소들을 여러 줄에 걸쳐 정렬합니다.
 - wrap-reverse: 요소들을 여러 줄에 걸쳐 반대로 정렬합니다.
 
  ### ✅ flex-flow : flex-direction과 flex-wrap 두 속성의 값들을 인자로 받음(두 속성을 동시에 사용가능)
  - ex) flex-flow: row wrap;
 
  ### ✅ align-content : 세로선 상에 여분의 공간이 있는 경우 Flex 컨테이너 사이의 간격을 조절
 - flex-start: 여러 줄들을 컨테이너의 꼭대기에 정렬합니다.
 - flex-end: 여러 줄들을 컨테이너의 바닥에 정렬합니다.
 - center: 여러 줄들을 세로선 상의 가운데에 정렬합니다.
 - space-between: 여러 줄들 사이에 동일한 간격을 둡니다.
 - space-around: 여러 줄들 주위에 동일한 간격을 둡니다.
 - stretch: 여러 줄들을 컨테이너에 맞도록 늘립니다.
 
 
 </div>
</details>
