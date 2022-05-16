const todoInputElement = document.querySelector('.todo-input');
const todoEnterBtn = document.querySelector('.enter');
const todoList = document.querySelector('.todo-list');
const leftItem = document.querySelector('.left-items');

let todos = []; // todo를 모아놓은 객체 배열 {id, content, isCompleted}
let id = 1; // todo 객체의 id가 될 숫자

// console.log(todos);

const paintTodos=()=>{
    todoList.innerHTML=null; //다 지워줌 //<ul class="todo_list"></ul>
    todos.forEach(todo=>paint(todo)); //객체 하나마다 paint() 함수 돌림, 처음부터 새로 찍음
};
//더블클릭, input창
const updateTodo=(e,todoId)=>{

    const inputElement=e.target.parentNode.children[1]; //부모 노드 가져옴, li태그

    inputElement.classList.add('visible');

    let content=e.target.innerHTML;

    inputElement.value=content;

    inputElement.addEventListener('keypress',(e)=>{
        if(e.key=='Enter'){
            conent=inputElement.value;
            const newTodos=todos.map(todos=>(todoId===todo.id?{...todo,content}:todo)); //새로운 배열 반환

            todos=newTodos;
            inputElement.classList.remove('visible'); //innerHtml=""; 이거로 변경

            paintTodos(); //수정 끝난 뒤 사용
        }
    }); //새로운 입력은 이 함수랑 동일, 밑에 2개 만듦

    //inputElement.addEventListener(Element) input안 내용 없어짐, innerHtml="";

    //console.log(inputElement);
};

const paint=(todo)=>{

    //<li class="todo-item"></li>
    const liElement=document.createElement('li'); //태그 생성
    liElement.classList.add('todo-item');  //html 클래스 연결, css를 주기위해


    const inputElement=document.createElement('input');
    inputElement.classList.add('edit-input');

    //<button class="checkbox">'✔︎'</button>
    const checkBtn=document.createElement('button');
    checkBtn.classList.add('checkbox');
    checkBtn.innerHTML='✔︎';

    const content=document.createElement('div');
    content.classList.add('content');
    content.innerHTML=todo.content;
    content.addEventListener('dblclick',(e)=>updateTodo(e,todo.id)); //더블 클릭 이벤트

    const delBtn=document.createElement('button');
    delBtn.classList.add('delBtn');
    checkBtn.innerHTML='X';

    //liElement안에 3개 태그 넣음
    liElement.appendChild(checkBtn);
    liElement.appendChild(content); 
    liElement.appendChild(inputElement);
    liElement.appendChild(delBtn);

    todoList.appendChild(liElement); //todoList안에 liElement 태그 넣음

    console.log(liElement);

};
paintTodos();