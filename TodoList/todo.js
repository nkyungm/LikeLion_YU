const todoInputElement = document.querySelector('.todo-input');
const todoEnterBtn = document.querySelector('.enter');
const todoList = document.querySelector('.todo-list');
const leftItem = document.querySelector('.left-items');

let todos = []; // todo를 모아놓은 객체 배열 {id, content, isCompleted}
let id = 1; // todo 객체의 id가 될 숫자

const createTodo = () => {

    todoInputElement.addEventListener('keypress', (e)=>{ // todoInputElement의 "keypress"를 이벤트리스너로 등록한다.
        if(e.key == 'Enter'){ // todoInputElement에 키보드 'enter'가 입력되었을 때
            content = todoInputElement.value; // todoInputElement의 내용을 가져와 
            pushTodo(content);// pushTodo(todoInputElement의 내용)한다. -> pushTodo() 함수는 바로 밑에 있습니다.
            //todoInputElement.value="";// todoInputElement의 내용을 없앤다
        }
    });

    todoEnterBtn.addEventListener('click', (e)=>{ // todoEnterBtn의 'click'을 이벤트 리스너로 등록한다.
        content=todoInputElement.value; // todoInputElement의 내용을 가져와 
        pushTodo(content); // pushTodo(todoInputElement의 내용)한다. 
        //todoInputElement.value="";// todoInputElement의 내용을 없앤다
    });
	
    todoInputElement.value="";// todoInputElement의 내용을 없앤다

};

const pushTodo = (content) => {
	const newId = id++;

	// newTodos에 기존 todos와 매개변수로 받아온 content를 객체로 만들어 넣는다.
	
	paintTodos();

};

const completeTodo = (todoId) => {
	// newTodo에 현재 todos을 가져와서 map(삼항연산자)을 돌린다. -> (삼항연산자) todo.id랑 todoId가 같으면 isCompleted를 not(!) 처리한다
	// newTodos를 todos로 한다

	paintTodos();
	
};

const deleteTodo = (todoId) => {
	// newTOdos에 현재 todos를 가져와 filter(조건)를 돌린다 -> todo.id랑 todoId가 같지 않은 것만 가져온다
	// newTodos를 todos로 한다

	paintTodos();

};

const updateTodo = (e, todoId) =>{
    const inputElement = e.target.parentNode.children[1];
    inputElement.classList.add('visible');

    let content = e.target.innerHTML;

    inputElement.value = content;
    
    inputElement.addEventListener('keypress', (e)=>{
        if(e.key == 'Enter'){
            content = inputElement.value;
            const newTodos = todos.map(todo => (todoId === todo.id ? {... todo, content} : todo ));
            todos = newTodos;
            inputElement.classList.remove('visible');
            // console.log(todos);
            paintTodos();
        }
    });
 
};


const paintTodos = () => {
    todoList.innerHTML = null;
    todos.forEach(todo => paint(todo));
};

const paint = (todo) => {

    const liElement = document.createElement('li');
    liElement.classList.add('todo-item');

    const inputElement = document.createElement('input');
    inputElement.classList.add('edit-input');

    const checkBtn = document.createElement('button');
    checkBtn.classList.add('checkbox');
    checkBtn.innerHTML = '✔︎';
	// checkBtn에 이벤트 리스너로 'click'을 감지한다. 실행할 함수는 completeTodo

    const content = document.createElement('div');
    content.classList.add('content');
    content.innerHTML = todo.content;
    content.addEventListener('dblclick', (e)=> updateTodo(e, todo.id));


    const delBtn = document.createElement('button');
    delBtn.classList.add('delBtn');
    delBtn.innerHTML = '✕';
	// delBtn에 이벤트 리스너로 'click'을 감지한다. 실행할 함수는 deleteTodo


    liElement.appendChild(checkBtn);
    liElement.appendChild(inputElement);
    liElement.appendChild(content);
    liElement.appendChild(delBtn);

    todoList.appendChild(liElement);    
};

createTodo();
