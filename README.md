# ๐ปFrontEnd
<details>

<summary>HTML/CSS</summary>
<div markdown="1">
 
### ๐ฅย ํ๊ทธ...0
**Box**

---

`header` `section` `footer` `article` `nav` `div` `aside` `span` `main` `form` .
 
 **Item**

---

`a` `button` `input` `label` `img` `video` `audio` `map` `canvas` `table`
 
 **ํ๊ทธ**๋ **๋ฐ์ค(box)** ๋๋ **์์ดํ(item)** 2๊ฐ์ง๋ก ๋ถ๋ฅํ  ์ ์๋ค.

- `Box` : ์์ดํ์ ์ด๋ป๊ฒ ๋ฐฐ์นํ ์ง ๋๋์ด์ฃผ๋ ํ๊ทธ
- `Item` : ์ฌ์ฉ์๋ค์๊ฒ ๋ณด์ฌ์ง๋ ํ๊ทธ
   - `Block` : ํ ์ค์ ํ ๊ฐ๋ง ๋ฐฐ์นใ
   - `Inline` : ํ ์ค์ ์ฌ๋ฌ ๊ฐ ๋ฐฐ์นzz
 ---
 
 ### โญ๋ธ๋ก ์์ (Block Element)
 
 ![image](https://user-images.githubusercontent.com/97418768/173006109-96782c82-bb24-48d5-ad61-f977221b89e4.png)

 - ๊ฐ๋กํญ ์ ์ฒด์ ๋์ด๋ฅผ ๊ฐ์ง๋ ์ง์ฌ๊ฐํ ํํ์ด๋ฉฐ `width`, `height`, `margin`, `padding` ๋ฑ์ผ๋ก ๋ ์ด์์์ ์์ ํ  ์ ์๋ค.
- ๋ธ๋ก ์์ ๋ค์์๋ ์ค๋ฐ๊ฟ์ด ์ด๋ฃจ์ด์ง๋ค.
- css์์ `display:block` ์ผ๋ก ๋ธ๋ก์ ๋ณ๊ฒฝํ  ์ ์๋ค.
    
    ```css
    div {
    	display : block;
    }
    ```
    
- ๋ธ๋ก ์์์ธ ํ๊ทธ ์ข๋ฅ
    
    `article` `aside` `div` `footer` `form` `h1` `h2` `h3` `h4` `h5` `h6` `header` `p` `section` `table` `ul` ๋ฑ.
	
 ---
 
 ### โญ์ธ๋ผ์ธ ์์ (Inline Element)

 ![image](https://user-images.githubusercontent.com/97418768/173202257-f52ac463-7ab9-4cef-afc3-82efe37a1017.png)

- ์ปจํ์ธ ๊ฐ ๋๋๋ ์ง์ ๊น์ง๋ฅผ ๋์ด๋ก ๊ฐ์ง๊ฒ ๋๋ค.
- ์์๋ก `width`, `height`๋ก ๋ณํ์ ์ค ์๊ฐ ์๋ค.
- ์ธ๋ผ์ธ ์์๋ `line-height`๋ก ์ค์ ๋๋ฎ์ด๋ฅผ ์กฐ์ ํ  ์ ์๊ณ , `text-align`์ผ๋ก ํ์คํธ์ ์ค์, ์ข, ์ฐ์ธก ์ ๋ ฌ์ ํ  ์ ์๋ค.
- ์ธ๋ผ์ธ ์์ ๋ค์์๋ ์ค๋ฐ๊ฟ์ด ์๊ณ  ์ฐ์ธก์ผ๋ก ๋ฐ๋ก ์ด์ด์ ํ์๋๋ค.
- css์์ `display:inline`์ผ๋ก ์ธ๋ผ์ธ์ผ๋ก ๋ณ๊ฒฝํ  ์ ์๋ค.
    
    ```css
    div {
    	display : inline;
    }
    ```
    
- ์ธ๋ผ์ธ ๋ธ๋ก์ธ ํ๊ทธ ์ข๋ฅ
    
    `a` `br` `button` `em` `i` `img` `input` `label` `select` `span` `strong` `textarea` ๋ฑ
    
---
 
 ### โญํ๊น์ ์ด์ฉํ ์น ๊ตฌ์กฐํ (๋งํฌ์)

์น์ฌ์ดํธ์ ๋ฐฐ์น๋ฅผ ์ ํ๋ ํ๊ทธ๊ฐ ์๋ค. ํด๋น ํ๊ทธ๋ค์ ์ด์ฉํ๋ฉด ์น์ฌ์ดํธ์ ๊ตฌ์กฐ๋ฅผ ์งค ์ ์๋ค.
 
 ![image](https://user-images.githubusercontent.com/97418768/173343489-a41a37c4-a589-4ba9-85bc-ed3ff9bafcbc.png)
---
 ### โญ์์ฃผ ์ฌ์ฉํ๋ ํ๊ทธ

`div` `span` : ์์ดํ๋ค์ ๋ฌถ์ด์ ์คํ์ผ๋งํ  ๋ ์ฃผ๋ก ์ฌ์ฉ

`div` : block level์ ํ๊ทธ

`span` : inline level์ ํ๊ทธ

`article` : ์ฌ๋ฌ๊ฐ์ง ์์ดํ๋ค์ ์ฌ์ฌ์ฉ ๊ฐ๋ฅํ๋๋ก ๊ทธ๋ฃนํํด ๋์ ๊ฒ

`p` : ๋ฌธ๋จ์ ์ ์

`b` : ๋ณผ๋์ฒด

`ol` : ๋ฒํธ๊ฐ ์๋ ๋ฆฌ์คํธ

`ul` : ๋ฒํธ๊ฐ ์๋ ๋ฆฌ์คํธ
 
---
 ### โญform

- ์ฌ์ฉ์๋ก๋ถํฐ ๋ฐ์ดํฐ๋ฅผ ๋ฐ์์ผํ๋ ๊ฒฝ์ฐ ์ฌ์ฉ๋๋ ์์์ด๋ค.

- ํผ ์์๋ ์๋ฒ์ ๋ฐ์ดํฐ๋ฅผ ์ ๋ฌํ๊ธฐ ์ํด ์ฌ์ฉํ๋ค.

```html
<form action="" method="">
	...
</form>
```

`input` : ๋ด์ฉ์ด ์๋ ๋น ์์์ด๋ฉฐ type ์์ฑ์ ํตํด ์ฌ๋ฌ ์ข๋ฅ์ ์๋ ฅ ์์์ผ๋ก ๋ํ๋ผ ์ ์๋ค.

```html
<!-- ๋จ์ํ ํ์คํธ ์๋ ฅ -->
<input type="text">

<!-- ๊ณต๊ฐํ  ์ ์๋ ๋ด์ฉ ์๋ ฅ -->
<input type="password">

<!-- ๋ผ๋์ค ๋ฒํผ(์ค๋ณต ์ ํ ๋ถ๊ฐ๋ฅ) -->
<input type="radio">

<!-- ์ฒดํฌ๋ฐ์ค(์ค๋ณต ์ ํ ๊ฐ๋ฅ) -->
<input type="checkbox">

<!-- ํ์ผ์ ์๋ฒ์ ์ฌ๋ฆด ๋ ์ฌ์ฉ -->
<input type="file">

<!-- ๋ฒํผ(ํด๋ฆญ) -->
<input type="submit">
<input type="reset">
<input type="button">
```

`select` : ๋ช ๊ฐ์ ์ ํ์ง๋ฅผ ๋ฆฌ์คํธ ํํ๋ก ๋ธ์ถํ๊ณ  ๊ทธ ์ค ํ๋๋ฅผ ์ ํํ  ์ ์๊ฒ ํ๋ ํ๊ทธ

```html
<select>
	<option>๋์ฐ</option>
	<option>๋์</option>
	<option>์ฃผ์</option>
	...
</select>
```

`textarea` : ์ฌ๋ฌ์ค์ ํ์คํธ๋ฅผ ์๋ ฅํ  ๋ ์ฌ์ฉ

```html
<textarea rows="5" cols="30"></textarea>
```

`button` : submit, reset, button 3๊ฐ์ง์ ํ์

```html
<button type="submit|reset|button">๋ฒํผ<button>
```

`label` : form ์์์ ์ด๋ฆ๊ณผ form ์์๋ฅผ ๋ช์์ ์ผ๋ก ์ฐ๊ฒฐ์์ผ์ฃผ๊ธฐ ์ํด ์ฌ์ฉ

- form ์์์ id ์์ฑ๊ฐ๊ณผ `<label>`์ for ์์ฑ๊ฐ์ ๊ฐ๊ฒ ์ ์ด์ฃผ์ด์ผ ํ๋ค.

```html
<label for="name">์ด๋ฆ</label> : <input type="text" id="name">
```
 </div>
</details>
	
<details>

<summary>JS</summary>
<div markdown="2">
 
### ๐ฅย ๋ค์ํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ

์๋ฐ์คํฌ๋ฆฝํธ ์ธ์ด๋ฅผ ์ด์ฉํด ๋ง๋  `React`, `Angular`, `View.js` ๊ฐ์ ํ๋ ์์ํฌ๋ `jQuery` ๊ฐ์ ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ ์์ต๋๋ค.

<details>

<summary>๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ํ๋ ์์ํฌ์ ์ฐจ์ด</summary>
<div markdown="1">
    
| ๋ผ์ด๋ธ๋ฌ๋ฆฌ | ๊ฐ๋ฐ์๊ฐ ๊ฐ๋ฐํ๋๋ฐ ํ์ํ ๊ฒ๋ค์ ๋ชจ์๋ ๋๊ตฌ๋ค <br> ex. ๋ฏธ๋ฆฌ ์์ฑ๋ ์ฝ๋, ๋ณ์, ํจ์, ํด๋์ค |
| :---: | :----: |
| ํ๋ ์์ํฌ | ๊ฐ๋ฐ ์ ํ์์ ์ธ ์ฝ๋, ์๊ณ ๋ฆฌ์ฆ, ๋ฐ์ดํฐ๋ฒ ์ด์ค ์ฐ๋ ๋ฑ๊ณผ ๊ฐ์  ๊ธฐ๋ฅ์ ์ํด ์ด๋ ์ ๋์ ๋ผ๋๋ฅผ ์ ๊ณตํด์ฃผ๋ ๊ฒ <br> ๊ฐ๋ฐ์๋ ๊ทธ ๋ผ๋ ์์ ์ฝ๋๋ฅผ ์์ฑํ์ฌ ์ ํ๋ฆฌ์ผ์ด์์ ์์ฑ |

</div>
</details>

### ์ ์ด์ ์ญ์ 

![image](https://user-images.githubusercontent.com/97418768/174070043-67e18781-b898-443b-9459-27d5132f24d0.png)
	
![image](https://user-images.githubusercontent.com/97418768/174070074-ec94f921-f132-4097-85a0-5a915bb610b9.png)

---

### 1๏ธโฃย  ๊ฐ๋จํ ์๋ฐ์คํฌ๋ฆฝํธ ์์  (ํด๋ฆญํด์ ์ ๋ณ๊ฒฝ)
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
    <h1 id="heading">์๋ฐ์คํฌ๋ฆฝํธ</h1>
    <p id="text">ํด๋ฆญํด๋ณด์ธ์!</p>

    <script src="http://code.jquery.com/jquery-1.11.2.min.js"></script>
<script> //jquary

    //์๋ฐ์คํฌ๋ฆฝํธ๋ฅผ ํด๋ฆญํ์ ๋ ์๊น์ด ๋ณํ๊ฒ
    //const heading = document.querySelector("#heading") //.์ ํด๋์ค, #์ id
    //heading.addEventListener('click',()=>{
    //    heading.style.color='red';
    //})

    $('h1#heading').click(function(){
        $(this).css('color','red');
    });


</script>
<!-- ์์์ id ์์ฑ์ด ์์ผ๋ฉด ์์น์ ์๊ด์์ด ๋ฉ์๋ 
document.getElementById(id)๋ฅผ ์ด์ฉํด ์ ๊ทผํ  ์ ์๋ค. -->

<div id="elem">
    <div id="elem-content">Element</div>
  </div>
  
  <script>
    let elemtext = document.getElementById('elem');

    elemtext.style.textAlign="center";
  </script>


  <!-- elem.querySelectorAll(css)์ ์์๊ฒ์ ๋ฉ์๋์ด๋ค. 
elem์ ์์ ์์ ์ค ์ฃผ์ด์ง CSS ์ ํ์์ ๋์ํ๋ ์์ ๋ชจ๋๋ฅผ ๋ฐํํ๋ค.-->

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
	
### 2๏ธโฃย  ์๋ฐ์คํฌ๋ฆฝํธ ๊ธฐ์ด (ES6)

**๐ฅ ๋ณ์** 

์๋ฐ์คํฌ๋ฆฝํธ๋ `var`, `const`, `let` ์ ๋ณ์ ์ ์ธ์ ์ง์ํฉ๋๋ค.

<aside>
โ `**var` ์ ์ฐ์์ง ์๋ ๊ฑธ ์ถ์ฒ๋๋ฆฝ๋๋ค!** 

์์ธ์ง ๊ถ๊ธํ์๋ค๋ฉด ๋จผ์  ๊ฒ์ํด๋ณด์๋ ์ข์ต๋๋ค!  ์ ๋ต์ ๊ฐ์ ์๊ฐ์ ์๋ ค๋๋ฆด๊ฒ์

</aside>

๊ทธ๋ ๋ค๋ฉด `const`์ `let`์ ๋ํด ์์์ผ๊ฒ ์ฃ .

`const`๋ ์ฌํ ๋น์ด ๊ฐ๋ฅํ์ง ์๊ณ , `let`์ ์ฌํ ๋น์ด ๊ฐ๋ฅํฉ๋๋ค. 

์์ผ๋ก JS๋ก ๋ณ์๋ฅผ ์ ์ธํ์ค ๋์๋ `const`, `let`์ ์ฌ์ฉํด์ฃผ์ธ์!

```jsx
const FOO = 123;
FOO = 456; // TypeError

let foo = 123;
foo = 456;
```

<details>

<summary>ํ ๊ธ</summary>
<div markdown="1">

### **์ค์ฝํ**

- ๋ณ์์ ์ ํจ๋ฒ์ ํน์ ์์กด ๋ฒ์

- `var` ํค์๋๋ ํจ์ ์์ค์ ๋ฒ์๋ฅผ ๊ฐ์ง๋ค

- `const`, `let`์ ๋ธ๋ญ ์์ค ๋ฒ์

- ๋ณดํต ํ๋ก๊ทธ๋๋ฐ ์ธ์ด์ ๊ฒฝ์ฐ if๋ฌธ ๋ธ๋ญ ์์์ ๋ณ์๋ฅผ ์ ์ธํ๋ฉด ํด๋น ๋ธ๋ญ ์์์๋ง ์ ์ง๋์ง๋ง ์๋ฐ์คํฌ๋ฆฝํธ๋ ๊ทธ๋ ์ง ์๋ค

```jsx
var name = "Kim Jihye";

function showName(){
	var name = "Kim DaeYeon";
	if(true){
		var name = "๊น๋์ฐ";
		console.log(name);
	}
	console.log(name);
}

showName();

console.log(name);
```

<details>

<summary>๋ต</summary>
<div markdown="1">
๊น๋์ฐ<br> 
๊น๋์ฐ<br> 
Kim jihye<br>
 </div>
</details>
	

### **ํธ์ด์คํ**

- ๋ณ์ ์ ์ธ๊ณผ ํจ์ ์ ์ธ์ ๋์ด์ฌ๋ฆผ

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

<summary>์ค์  ์ปดํ์ผ</summary>
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

**๐ฅย  ํ์ดํ ํจ์**

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
	
### 3๏ธโฃย  ๋๋ฌผ ํ์คํธ๋ฅผ ๋ง๋ค์ด๋ณด์ (๋ณต๋ถ)

์ค๋์ HTML, CSS์์๋ ๊ด์ฌ์ ๋๊ณ  **JS**๋ง ์ง์ค์ ์ผ๋ก ๋ณผ ๊ฒ์ด๊ธฐ ๋๋ฌธ์ ๋ค๋ฅธ ๋ด์ฉ์ ๋ฏธ๋ฆฌ ์ ๊ณตํด๋๋ฆฝ๋๋ค!

`index.html` `style.css` `script.js` ํ์ผ์ ๋ง๋ค์ด ์๋ ๋ด์ฉ์ ๋ณต๋ถํด์ฃผ์ธ์

- index.html
    
    ```html
    <!DOCTYPE html>
    <html lang="ko">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>์ธ๋ ๊ฒํฐ</title>
    
        <!-- css -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    <body class="container">
        <div class="cont title-container">
            <h1>์ธ๋ ๊ฒํฐ ๋๋ฌผ ํ์คํธ</h1>
            <button id="startBtn" class="btn btn-primary">์์ํ๊ธฐ</button>
        </div>
    
        <div class="cont question-container bg-light">
            <div class="progress mt-5">
                <div class="progress-bar" role="progressbar" style="width: calc(100/12*1%)"></div>
            </div>
            <h3 id="question" class="mt-5">์ง๋ฌธ</h3>
            <p id="type">EI</p>
            <button id="a" class="btn btn-dark">1</button>
            <button id="b" class="btn btn-dark">2</button>
        </div>
        <div class="cont result-container bg-danger">
            <h3 id="mbti">MBTI</h3>
            <p id="explain">์ค๋ช</p>
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
            "title": "๋ฌธ์  1๋ฒ", 
            "type": "EI", 
            "A": "E", 
            "B": "I"
        },
        2: {"title": "๋ฌธ์  2๋ฒ", "type": "EI", "A": "E", "B": "I"},
        3: {"title": "๋ฌธ์  3๋ฒ", "type": "EI", "A": "E", "B": "I"},
        4: {"title": "๋ฌธ์  4๋ฒ", "type": "SN", "A": "S", "B": "N"},
        5: {"title": "๋ฌธ์  5๋ฒ", "type": "SN", "A": "S", "B": "N"},
        6: {"title": "๋ฌธ์  6๋ฒ", "type": "SN", "A": "S", "B": "N"},
        7: {"title": "๋ฌธ์  7๋ฒ", "type": "TF", "A": "T", "B": "F"},
        8: {"title": "๋ฌธ์  8๋ฒ", "type": "TF", "A": "T", "B": "F"},
        9: {"title": "๋ฌธ์  9๋ฒ", "type": "TF", "A": "T", "B": "F"},
        10: {"title": "๋ฌธ์  10๋ฒ", "type": "JP", "A": "J", "B": "P"},
        11: {"title": "๋ฌธ์  11๋ฒ", "type": "JP", "A": "J", "B": "P"},
        12: {"title": "๋ฌธ์  12๋ฒ", "type": "JP", "A": "J", "B": "P"}
    }
    const result = {
        "ISTJ": {
            "animal": "ํ๋ง", 
            "explain": "ํ๋ง ์ค๋ช", 
            "img": "lion.jpg"
        },
        "ISFJ": {"animal": "๋ถ์์ด", "explain": "๋ถ์์ด ์ค๋ช", "img": "lion.jpg"},
        "INFJ": {"animal": "๋ฌผ์", "explain": "๋ฌผ์ ์ค๋ช", "img": "lion.jpg"},
        "INTJ": {"animal": "์นํ", "explain": "์นํ ์ค๋ช", "img": "lion.jpg"},
        "ISTP": {"animal": "๋๋ฌด๋๋ณด", "explain": "๋๋ฌด๋๋ณด ์ค๋ช", "img": "lion.jpg"},
        "ISFP": {"animal": "๊ฑฐ๋ถ์ด", "explain": "๊ฑฐ๋ถ์ด ์ค๋ช", "img": "lion.jpg"},
        "INFP": {"animal": "์ฝ๋ผ๋ฆฌ", "explain": "์ฝ๋ผ๋ฆฌ ์ค๋ช", "img": "lion.jpg"},
        "INTP": {"animal": "์นจํฌ์ง", "explain": "์นจํฌ์ง ์ค๋ช", "img": "lion.jpg"},
        "ESTP": {"animal": "์์ด", "explain": "์์ด ์ค๋ช", "img": "lion.jpg"},
        "ESFP": {"animal": "๋ฏธ์ด์บฃ", "explain": "๋ฏธ์ด์บฃ ์ค๋ช", "img": "lion.jpg"},
        "ENFP": {"animal": "๋ฉ์์ด ์ฌ์", "explain": "๋ฉ์์ด ์ฌ์ ์ค๋ช", "img": "lion.jpg"},
        "ENTP": {"animal": "ํ์์", "explain": "ํ์์ ์ค๋ช", "img": "lion.jpg"},
        "ESTJ": {"animal": "๊ธฐ๋ฆฐ", "explain": "๊ธฐ๋ฆฐ ์ค๋ช", "img": "lion.jpg"},
        "ESFJ": {"animal": "๊ณ ๋ฆด๋ผ", "explain": "๊ณ ๋ฆด๋ผ ์ค๋ช", "img": "lion.jpg"},
        "ENFJ": {"animal": "์นดํผ๋ฐ๋ผ", "explain": "์นดํผ๋ฐ๋ผ ์ค๋ช", "img": "lion.jpg"},
        "ENTJ": {"animal": "ํธ๋์ด", "explain": "ํธ๋์ด ์ค๋ช", "img": "lion.jpg"}
    }
    
    let num = 1;
    
    // ์ฌ๊ธฐ๊น์ง๋ง ์ฌ์  ์ ๊ณต
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
            "title": "๋ฌธ์  1๋ฒ", 
            "type": "EI", 
            "A": "E", 
            "B": "I"
        },
        2: {"title": "๋ฌธ์  2๋ฒ", "type": "EI", "A": "E", "B": "I"},
        3: {"title": "๋ฌธ์  3๋ฒ", "type": "EI", "A": "E", "B": "I"},
        4: {"title": "๋ฌธ์  4๋ฒ", "type": "SN", "A": "S", "B": "N"},
        5: {"title": "๋ฌธ์  5๋ฒ", "type": "SN", "A": "S", "B": "N"},
        6: {"title": "๋ฌธ์  6๋ฒ", "type": "SN", "A": "S", "B": "N"},
        7: {"title": "๋ฌธ์  7๋ฒ", "type": "TF", "A": "T", "B": "F"},
        8: {"title": "๋ฌธ์  8๋ฒ", "type": "TF", "A": "T", "B": "F"},
        9: {"title": "๋ฌธ์  9๋ฒ", "type": "TF", "A": "T", "B": "F"},
        10: {"title": "๋ฌธ์  10๋ฒ", "type": "JP", "A": "J", "B": "P"},
        11: {"title": "๋ฌธ์  11๋ฒ", "type": "JP", "A": "J", "B": "P"},
        12: {"title": "๋ฌธ์  12๋ฒ", "type": "JP", "A": "J", "B": "P"}
    }
    const result = {
        "ISTJ": {
            "animal": "ํ๋ง", 
            "explain": "ํ๋ง ์ค๋ช", 
            "img": "lion.jpg"
        },
        "ISFJ": {"animal": "๋ถ์์ด", "explain": "๋ถ์์ด ์ค๋ช", "img": "lion.jpg"},
        "INFJ": {"animal": "๋ฌผ์", "explain": "๋ฌผ์ ์ค๋ช", "img": "lion.jpg"},
        "INTJ": {"animal": "์นํ", "explain": "์นํ ์ค๋ช", "img": "lion.jpg"},
        "ISTP": {"animal": "๋๋ฌด๋๋ณด", "explain": "๋๋ฌด๋๋ณด ์ค๋ช", "img": "lion.jpg"},
        "ISFP": {"animal": "๊ฑฐ๋ถ์ด", "explain": "๊ฑฐ๋ถ์ด ์ค๋ช", "img": "lion.jpg"},
        "INFP": {"animal": "์ฝ๋ผ๋ฆฌ", "explain": "์ฝ๋ผ๋ฆฌ ์ค๋ช", "img": "lion.jpg"},
        "INTP": {"animal": "์นจํฌ์ง", "explain": "์นจํฌ์ง ์ค๋ช", "img": "lion.jpg"},
        "ESTP": {"animal": "์์ด", "explain": "์์ด ์ค๋ช", "img": "lion.jpg"},
        "ESFP": {"animal": "๋ฏธ์ด์บฃ", "explain": "๋ฏธ์ด์บฃ ์ค๋ช", "img": "lion.jpg"},
        "ENFP": {"animal": "๋ฉ์์ด ์ฌ์", "explain": "๋ฉ์์ด ์ฌ์ ์ค๋ช", "img": "lion.jpg"},
        "ENTP": {"animal": "ํ์์", "explain": "ํ์์ ์ค๋ช", "img": "lion.jpg"},
        "ESTJ": {"animal": "๊ธฐ๋ฆฐ", "explain": "๊ธฐ๋ฆฐ ์ค๋ช", "img": "lion.jpg"},
        "ESFJ": {"animal": "๊ณ ๋ฆด๋ผ", "explain": "๊ณ ๋ฆด๋ผ ์ค๋ช", "img": "lion.jpg"},
        "ENFJ": {"animal": "์นดํผ๋ฐ๋ผ", "explain": "์นดํผ๋ฐ๋ผ ์ค๋ช", "img": "lion.jpg"},
        "ENTJ": {
            "animal": "ํธ๋์ด", 
            "explain": "ํธ๋์ด ์ค๋ช", 
            "img": "lion.jpg"
        }
    }
    
    let num = 1;
    let mbti = '';
    
    // ์ฌ๊ธฐ๊น์ง๋ง ์ฌ์  ์ ๊ณต
    
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
	
### 0๏ธโฃย  ๊ฐ๋ณ ๋ณ์์ ๋ถ๋ณ ๋ณ์

๊ฐ๋ณ ๋ณ์๋ฅผ ์ํ `let` ํค์๋, ๊ฐ์ ์์ ํ  ์ ์๋ ๋ถ๋ณ ๋ณ์๋ฅผ ์ํ `const` ํค์๋๋ฅผ ์ฌ์ฉํฉ๋๋ค.

**๊ฐ๋ณ ๋ณ์**๋ ๋ณ์๋ฅผ ์ฝ๊ฑฐ๋ ์์ ํ  ์ ์์ต๋๋ค.

```jsx
// ๊ฐ๋ณ ๋ณ์ let

let num = -1;
num = num * 3;

let str = '์ด๊ฑด ๋ฌธ์';
str = '๋ค๋ฅธ ๋ฌธ์';

let arr = [];
arr [ 1,2,3,];

let obj = {};
obj = { name : '์๋ก์ด ๊ฐ์ฒด' };
```

**๋ถ๋ณ ๋ณ์**๋ ์ ์ธํ ํ ์ฝ๊ธฐ๋ง ๊ฐ๋ฅํฉ๋๋ค. ๊ทธ๋ฐ๋ฐ ๊ฐ์ ๋ค์ ํ ๋นํ  ์ ์๋ ๊ฒ์ด์ง ๊ฐ์ ๋ณ๊ฒฝํ  ์ ์์ต๋๋ค. 

ํ์ง๋ง ๋ถ๋ณ ๋ณ์๋ก ์ ์๋ ๋ฐฐ์ด์ด๋ ๊ฐ์ฒด๋ฅผ ๋ด์ฅ ํจ์๋ก ์์ ํ๋ ๊ฒ์ **๋ฌด๊ฒฐ์ฑ**์ ํด์น๋ ์ผ์ด๋ฏ๋ก ์๋ก์ด ๋ถ๋ณ ๋ณ์๋ฅผ ๋ง๋ค์ด ์๊ฐ์ ํ ๋นํด์ฃผ๋ ๋ฐฉ๋ฒ์ผ๋ก ์๋ก ์ ์ํด์ค์ผ ํฉ๋๋ค.

๊ฐ๋ณ ๋ด์ฅ ํจ์(push, splice, pop, shift) < ๋ฌด๊ฒฐ์  ๋ด์ฅ ํจ์ < let

- `concat()`
- `slice()`

```jsx
// ๋ถ๋ณ ๋ณ์ const 

const num = 1;
num = 3; // TypeError

// const๋ฅผ ๋ณ๊ฒฝํ  ์ ์๋ ๊ฒฝ์ฐ
const arr2 = [];
arr2.push(1); // arr2 = [1];
arr2.splice(0,0,0); // arr2 = [0,1];
```
### 1๏ธโฃย  ํํ๋ฆฟ ๋ฌธ์์ด

**ํํ๋ฆฟ ๋ฌธ์์ด**์ ๋ฌธ์์ด ์์ ๋ณ์์ ์ฐ์ฐ์์ ํผํฉํ์ฌ ์ฌ์ฉํฉ๋๋ค.

๊ธฐ์กด ์๋ฐ์คํฌ๋ฆฝํธ๋ ๋ฌธ์์ด๊ณผ ๋ณ์๋ฅผ ์ฐ๊ฒฐํ๊ธฐ ์ํด์ ๋ณํฉ ์ฐ์ฐ์(+)๋ฅผ ์ฌ์ฉํด์ผํ์ต๋๋ค.

ES6๋ถํฐ๋ ํํ๋ฆฟ ๋ฌธ์์ด์ ๋์ํด **๋ฐฑํฑ(`)**์ผ๋ก ๋ฌธ์์ด์ ํํํฉ๋๋ค.

**ํน์ ๊ธฐํธ $** ๋ฅผ ์ฌ์ฉํ์ฌ ๋ณ์๋ฅผ ํฌํจํ  ์๋ ์์ต๋๋ค.

```jsx
const product = { name : '๊ฒ์  ๋ฐํ', price : '25000์' };

let message = '์ ํ ' + product.name + '์ ๊ฐ๊ฒฉ์ ' + product.price + '์๋๋ค.'; // ์ด์ 

message = `์ ํ ${product.name}์ ๊ฐ๊ฒฉ์ ${product.price}์๋๋ค.`; // ES6
```


### 2๏ธโฃย  ์ ๊ฐ ์ฐ์ฐ์ Spread Operator

**์ ๊ฐ ์ฐ์ฐ์**๋ ๋์ดํ ์๋ฃ๋ฅผ ์ถ์ถํ๊ฑฐ๋ ์ฐ๊ฒฐํ  ๋ ์ฌ์ฉํฉ๋๋. 

์ฌ์ฉ ๋ฐฉ๋ฒ์ ๋ฐฐ์ด์ด๋ ๊ฐ์ฒด, ๋ณ์๋ช ์์ **๋ง์นจํ ์ธ ๊ฐ ...** ๋ฅผ ์๋ ฅํฉ๋๋ค.

์ค์ํ ์ ์ **๋ฐฐ์ด, ๊ฐ์ฒด, ํจ์ ์ธ์ ํํ์** ์์์๋ง ์ฌ์ฉํด์ผํ๋ค๋ ๊ฒ!

```jsx
// ๋ฐฐ์ด

const arr1 = ['one', 'two'];
const arr2 = ['three', 'four'];

let arr3 = [ arr1[0], arr1[1], arr2[0], arr[1] ]; // ๊ณผ๊ฑฐ

arr3 = [ ...arr1, ...arr2 ]; // ES6

const [ one, two, three = 'empty', ...others ] = arr1;
// one = 'one' , two = 'two', three = 'empty' , others = []
```

```jsx
// ๊ฐ์ฒด

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

### 3๏ธโฃย  ํด๋์ค

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

// ํน์
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

### 4๏ธโฃย  ํ์ดํ ํจ์

**ํ์ดํ ํจ์**๋ **ํ์ดํ ๊ธฐํธ โ** ๋ก ํจ์๋ฅผ ์ ์ธํฉ๋๋ค. 

```jsx
function func(name){
	return "์๋ " + name;
}

console.log(func('์ํฌ');

// ํ์ดํ ํจ์๋ฅผ ์ฌ์ฉํ๋ฉด

const func = (name) => {
	return `์๋ ${name}`;
}

console.log(func('์ํฌ'));

// ํจ์ ์ฝ๋๊ฐ ํ ์ค์ธ ๊ฒฝ์ฐ ์๋์ฒ๋ผ {}์ return์ ์๋ตํ ์ ์์ต๋๋ค.

const func = (name) => `์๋ ${name}`;

```


### 5๏ธโฃย  forEach()

์ฃผ์ด์ง ํจ์๋ฅผ ๋ฐฐ์ด ์์ ๊ฐ๊ฐ์ ๋ํด ์คํ

```jsx
const arr = ['a', 'b', 'c' ];

arr.forEach(element => console.log(element));
```

### 6๏ธโฃย  map()

๋ฐฐ์ด ๋ด์ ๋ชจ๋  ์์ ๊ฐ๊ฐ์ ๋ํ์ฌ ์ฃผ์ด์ง ํจ์๋ฅผ ํธ์ถํ ๊ฒฐ๊ณผ๋ฅผ ๋ชจ์ ์๋ก์ด ๋ฐฐ์ด์ ๋ฐํ

```jsx
const arr = [1,3,5,7];

const map = arr.map(x => x *2);

console.log(map);
```

### 7๏ธโฃย  reduce()

๋ฐฐ์ด์ ๊ฐ ์์์ ๋ํด ์ฃผ์ด์ง ๋ฆฌ๋์ ํจ์๋ฅผ ์คํํ๊ณ  ํ๋์ ๊ฒฐ๊ณผ๊ฐ์ ๋ฐํ

```jsx
const arr = [1,3,5,7];

const initalValue = 0;

const sum = arr.reduce( (prev, curr) => prev + curr , initValue);

console.log(sum);
```

</div>
</details>

<details>
<summary>React ์ค์นํ๊ธฐ</summary>
<div markdown="2">
	
### 1๏ธโฃ  node.js ๋ค์ด๋ก๋
์๋ ๋งํฌ์์ node.js ๋ค์ด๋ฐ๊ธฐ
[Node.js](https://nodejs.org/en/)

### 2๏ธโฃย  ํฐ๋ฏธ๋์ ์ด๊ณ  npm ์ด ๋ค์ด๋์๋์ง ํ์ธ

`**npm -v`** ์๋ ฅํด์ ์ ์ค์น๋์๋์ง ํ์ธ
	
![image](https://user-images.githubusercontent.com/97418768/177555334-adac71e1-23d6-4e28-b374-2529e7995e45.png)
	
`**npm install -g create-react-app**`

### 3๏ธโฃย  react ์คํํ๊ธฐ
์ํ๋ ํด๋ ์ด๋ฆ์ผ๋ก react ์ด๊ธฐ ํ์ผ์ ์์ฑํด๋ณด๊ฒ ์ต๋๋ค. 

์์ ์ด ์ํ๋ ํด๋๋ก ์ด๋ํด์ 

`**create-react-app ํ๋ก์ ํธ ์ด๋ฆ**`

`**cd ํ๋ก์ ํธ ์ด๋ฆ**`

`**npm start**`

์น์ ์ด๋ฐ ์ฐฝ์ด ๋จ์๋ฉด ์ฑ๊ณต์๋๋ค.

์ฐฝ์ด ์ ๋จ๋ฉด [localhost:3000](http://localhost:3000) ์ผ๋ก ์ ์ํด๋ณด์ธ์!

โญย  **ํ์ธ ๋๋์๋ฉด ํฐ๋ฏธ๋์์ `ctrl + c` ๋๋ `cmd + c` ๋ก ์ข๋ฃํด์ฃผ์ธ์!** 

![image](https://user-images.githubusercontent.com/97418768/177555484-b5407863-b83b-4a23-873e-366fc08eddcd.png)

</div>
</details>

<details>
<summary>Component</summary>
<div markdown="3">

### React

"์ปดํฌ๋ํธ" ๋ผ๋ ๊ฐ๋์ ์ง์ค์ด ๋์ด์๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.

๋ณต์กํ ์ฝ๋๋ฅผ ์ฌ์ฉ์ ์ ์ ํ๊ทธ(component)๋ฅผ ํตํด ํํ

1. ๊ฐ๋์ฑ
2. ์ฌ์ฌ์ฉ์ฑ
3. ์ ์ง๋ณด์ (๋ณ๊ฒฝ๋ ๋ด์ฉ์ด ๋ชจ๋  ์ฌ์ฉ ํ์ผ์์ ์๋ก๋)

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

### ์๋ก์ด ์ปดํฌ๋ํธ ๋ง๋ค๊ธฐ

์๋ก์ด ์ปดํฌ๋ํธ๋ฅผ ๋ง๋ค์ด App ์ปดํฌ๋ํธ์ ๋ฃ์ด๋ด์๋ค

```jsx
import { Component } from 'react';

class App extends Component{ 
  render() {
      return (
        <div className="App">
	  {/*์ปดํฌ๋ํธ ๋ฃ๊ธฐ*/}
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

# ๐LikeLion_YU HTML/CSS
 <details>

<summary>4์ 7์ผ ๊ณผ์ </summary>
<div markdown="1">
 
## ๐ CSS Flex(Flexible Box) ์๋ฒฝ ๊ฐ์ด๋
#### https://heropy.blog/2018/11/24/css-flexible-box/
 
 ### ๐ท float์ ์์ฑ
 ![image](https://user-images.githubusercontent.com/97418768/164005368-f78e6e59-5c4a-4c6a-9b9e-9aa2320d09fa.png)

## ๐ Flexbox Froggy
#### http://flexboxfroggy.com/#ko

 ### โ justify-content :  ์์๋ค์ ๊ฐ๋ก์  ์์์ ์ ๋ ฌ
- flex-start: ์์๋ค์ ์ปจํ์ด๋์ ์ผ์ชฝ์ผ๋ก ์ ๋ ฌํฉ๋๋ค.
- flex-end: ์์๋ค์ ์ปจํ์ด๋์ ์ค๋ฅธ์ชฝ์ผ๋ก ์ ๋ ฌํฉ๋๋ค.
- center: ์์๋ค์ ์ปจํ์ด๋์ ๊ฐ์ด๋ฐ๋ก ์ ๋ ฌํฉ๋๋ค.
- space-between: ์์๋ค ์ฌ์ด์ ๋์ผํ ๊ฐ๊ฒฉ์ ๋ก๋๋ค.
- space-around: ์์๋ค ์ฃผ์์ ๋์ผํ ๊ฐ๊ฒฉ์ ๋ก๋๋ค.

 ### โ align-items : ์์๋ค์ ์ธ๋ก์  ์์์ ์ ๋ ฌ
 - flex-start: ์์๋ค์ ์ปจํ์ด๋์ ๊ผญ๋๊ธฐ๋ก ์ ๋ ฌํฉ๋๋ค.
 - flex-end: ์์๋ค์ ์ปจํ์ด๋์ ๋ฐ๋ฅ์ผ๋ก ์ ๋ ฌํฉ๋๋ค.
 - center: ์์๋ค์ ์ปจํ์ด๋์ ์ธ๋ก์  ์์ ๊ฐ์ด๋ฐ๋ก ์ ๋ ฌํฉ๋๋ค.
 - baseline: ์์๋ค์ ์ปจํ์ด๋์ ์์ ์์น์ ์ ๋ ฌํฉ๋๋ค.
 - stretch: ์์๋ค์ ์ปจํ์ด๋์ ๋ง๋๋ก ๋๋ฆฝ๋๋ค.
 
 ### โ flex-direction : ์ปจํ์ด๋ ์์์ ์์๋ค์ด ์ ๋ ฌํด์ผ ํ  ๋ฐฉํฅ์ ์ง์ 
 - row: ์์๋ค์ ํ์คํธ์ ๋ฐฉํฅ๊ณผ ๋์ผํ๊ฒ ์ ๋ ฌํฉ๋๋ค.
 - row-reverse: ์์๋ค์ ํ์คํธ์ ๋ฐ๋ ๋ฐฉํฅ์ผ๋ก ์ ๋ ฌํฉ๋๋ค.
 - column: ์์๋ค์ ์์์ ์๋๋ก ์ ๋ ฌํฉ๋๋ค.
 - column-reverse: ์์๋ค์ ์๋์์ ์๋ก ์ ๋ ฌํฉ๋๋ค.
 
 ### โ order : Flex ์์์ ์์๋ฅผ ์ง์ 
  - ๊ธฐ๋ณธ๊ฐ : 0
  - ์์ ๋ฐ ์์๋ก ๋ณ๊ฒฝ ๊ฐ๋ฅ
 
  ### โ align-self :  align-items๊ฐ ์ฌ์ฉํ๋ ๊ฐ๋ค์ ์ธ์๋ก ๋ฐ์ผ๋ฉฐ, ๊ทธ ๊ฐ๋ค์ ์ง์ ํ ์์์๋ง ์ ์ฉ
 - ๊ฐ๋ณ ์์์ ์ ์ฉ
 - flex-start: ์์๋ค์ ์ปจํ์ด๋์ ๊ผญ๋๊ธฐ๋ก ์ ๋ ฌํฉ๋๋ค.
 - flex-end: ์์๋ค์ ์ปจํ์ด๋์ ๋ฐ๋ฅ์ผ๋ก ์ ๋ ฌํฉ๋๋ค.
 - center: ์์๋ค์ ์ปจํ์ด๋์ ์ธ๋ก์  ์์ ๊ฐ์ด๋ฐ๋ก ์ ๋ ฌํฉ๋๋ค.
 - baseline: ์์๋ค์ ์ปจํ์ด๋์ ์์ ์์น์ ์ ๋ ฌํฉ๋๋ค.
 - stretch: ์์๋ค์ ์ปจํ์ด๋์ ๋ง๋๋ก ๋๋ฆฝ๋๋ค.
 
  ### โ flex-wrap : Flex ์์๋ค์ ํ ์ค ๋๋ ์ฌ๋ฌ ์ค์ ๊ฑธ์ณ ์ ๋ ฌ
 - nowrap: ๋ชจ๋  ์์๋ค์ ํ ์ค์ ์ ๋ ฌํฉ๋๋ค.
 - wrap: ์์๋ค์ ์ฌ๋ฌ ์ค์ ๊ฑธ์ณ ์ ๋ ฌํฉ๋๋ค.
 - wrap-reverse: ์์๋ค์ ์ฌ๋ฌ ์ค์ ๊ฑธ์ณ ๋ฐ๋๋ก ์ ๋ ฌํฉ๋๋ค.
 
  ### โ flex-flow : flex-direction๊ณผ flex-wrap ๋ ์์ฑ์ ๊ฐ๋ค์ ์ธ์๋ก ๋ฐ์(๋ ์์ฑ์ ๋์์ ์ฌ์ฉ๊ฐ๋ฅ)
  - ex) flex-flow: row wrap;
 
  ### โ align-content : ์ธ๋ก์  ์์ ์ฌ๋ถ์ ๊ณต๊ฐ์ด ์๋ ๊ฒฝ์ฐ Flex ์ปจํ์ด๋ ์ฌ์ด์ ๊ฐ๊ฒฉ์ ์กฐ์ 
 - flex-start: ์ฌ๋ฌ ์ค๋ค์ ์ปจํ์ด๋์ ๊ผญ๋๊ธฐ์ ์ ๋ ฌํฉ๋๋ค.
 - flex-end: ์ฌ๋ฌ ์ค๋ค์ ์ปจํ์ด๋์ ๋ฐ๋ฅ์ ์ ๋ ฌํฉ๋๋ค.
 - center: ์ฌ๋ฌ ์ค๋ค์ ์ธ๋ก์  ์์ ๊ฐ์ด๋ฐ์ ์ ๋ ฌํฉ๋๋ค.
 - space-between: ์ฌ๋ฌ ์ค๋ค ์ฌ์ด์ ๋์ผํ ๊ฐ๊ฒฉ์ ๋ก๋๋ค.
 - space-around: ์ฌ๋ฌ ์ค๋ค ์ฃผ์์ ๋์ผํ ๊ฐ๊ฒฉ์ ๋ก๋๋ค.
 - stretch: ์ฌ๋ฌ ์ค๋ค์ ์ปจํ์ด๋์ ๋ง๋๋ก ๋๋ฆฝ๋๋ค.
 
 
 </div>
</details>
