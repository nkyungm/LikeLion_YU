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
    
    `article` `aside` `div` `footer` `form` `h1` `h2` `h3` `h4` `h5` `h6` `header` `p` `section` `table` `ul` 등
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

### 간단한 자바스크립트 예제 (클릭해서 색 변경)
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

**❤️‍🔥 변수** 

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

**❤️‍🔥  화살표 함수**

지금은 ‘함수를 이렇게도 선언할 수 있다’ 정도만 알고 계시면 됩니다!

더 알아보고 싶으신 분들은 아래 링크을 참고해주세요.

```jsx
// ES5
let foo = function(){
	console.log("foo");
}

// ES6
let foo = () => console.log("foo");
```

[[JavaScript - 화살표 함수(Arrow function)](https://velog.io/@ki_blank/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98Arrow-function)](https://velog.io/@ki_blank/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98Arrow-function)

---	
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
