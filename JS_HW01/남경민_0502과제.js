/*문제 1번*/
let object = {name: "likelion", color:"yellow"};

console.log(object); //인수로 설정한 값을 디버거 콘솔에 표시하는 함수

//실행 결과: {name: 'likelion', color: 'yellow'}

/*문제 2번*/
let likelion = {
	1: { "name" : "김대연", "mbti" : "ENFJ"},
	2: { "name" : "김지혜", "mbti" : "INTJ"},
	3: { "name" : "조나원", "mbti" : "ENFP"}
}

likelion[3]["mbti"]; //결과가 ENFP일 때 코드

//김대연 <- likelion[1][”name”] 의 실행 결과

/*문제 3번*/
/*
1. .val() : 일치하는 요소 집합에서 첫 번째 요소의 현재 값을 가져오거나 일치하는 모든 요소의 값을 설정하는 함수
2. .html() : 선택한 요소 안의 내용을 가져오거나, 다른 내용으로 바꾸는 함수
3. parseInt() : string형을 숫자형으로 바꿔주는 함수
4. .attr() : 태그의 속성을 바꿔주는 함수
*/

/*문제 4번*/
/*
<!-- 요소에 id 속성이 있으면 위치에 상관없이 메서드 
document.getElementById(id)를 이용해 접근할 수 있다. -->

<div id="elem">
  <div id="elem-content">Element</div>
</div>

<script>
  let elemtext = document.getElementById('elem');

  elemtext.style.textAlign="center";
</script>
*/

/*문제 5번*/
/*
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
*/

//for문의 실행 결과 : "1-2", "2-2"