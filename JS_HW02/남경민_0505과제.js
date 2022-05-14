const topBtn=document.querySelector('#top');
const bottomBtn=document.querySelector('#bottom');
const dressBtn=document.querySelector('#dress');
const allBtn=document.querySelector('#all');

const products=[	
    {"name":"반팔티","price":"10000"},
	{"name":"린넨 셔츠","price":"45000"},
    {"name":"긴팔티","price":"11000"},
    {"name":"린넨 바지","price":"25000"},
    {"name":"슬랙스","price":"18000"},
    {"name":"롱 원피스","price":"40000"},
    {"name":"린넨 원피스","price":"30000"}
]

/*
**Q1. HTML 코드의 버튼들(top, bottom, dress, all)을 클릭했 때 해당 품목만 콘솔에 출력하는 코드를 작성해주세요**

>> top : 상의만 출력

>> bottom : 하의만 출력

>> dress : 원피스만 출력

>> all : 모든 아이템 출력
*/
topBtn.addEventListener('click',()=>{
    btclick(0,2);
});
bottomBtn.addEventListener('click',()=>{
    btclick(3,6);
});
dressBtn.addEventListener('click',()=>{
    btclick(5,6);
});
allBtn.addEventListener('click',()=>{
    btclick(0,6);
});

function btclick(a,b){
    for(let i=a;i<=b;i++){
        console.log(products[i]);
    }
}
/*
**Q2-1. 선택한 두 개의 제품의 총 금액을 콘솔에 출력하는 함수를 작성해주세요**

💡 **결과**

함수 이름이 ‘total’일 때,
콘솔에 total(0,4)를 입력하면 28000, total(1,2)를 입력하면 56000이 출력되면 됩니다.
(인자로 넘겨준 각 숫자들은 제품 배열의 원소번호 입니다)
*/

function total(a,b){
    let p1 = parseInt(products[a].price)
    let p2 = parseInt(products[b].price)
    console.log(p1+p2)
}