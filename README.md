# 📌FrontEnd
<details>

<summary>HTML/CSS</summary>
<div markdown="1">
 
### 🔥 태그
**Box**

---

`header` `section` `footer` `article` `nav` `div` `aside` `span` `main` `form`
 
 **Item**

---

`a` `button` `input` `label` `img` `video` `audio` `map` `canvas` `table`
 
 **태그**는 **박스(box)** 또는 **아이템(item)** 2가지로 분류할 수 있다.

- `Box` : 아이템을 어떻게 배치할지 나누어주는 태그
- `Item` : 사용자들에게 보여지는 태그
   - `Block` : 한 줄에 한 개만 배치
   - `Inline` : 한 줄에 여러 개 배치
 ---
 
 ### 블록 요소 (Block Element)
 
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
 
 ### 인라인 요소 (Inline Element)

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
 </div>
</details>

# 📌LikeLion_YU HTML/CSS
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
