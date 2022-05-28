import World from "./World";
import styles from "./Hello.module.css"
import {useState} from "react";
export default function Hello(props) {
    //console.log(props);
    // function showName(){
    //     console.log("Mike");
    // }
    // function showAge(age){
    //     console.log(age);
    // }
    // function showText(txt){
    //     console.log(txt);
    // }

    //let name ="Mike"
    const [name,setName] =useState("Mike"); //App.js에서 여러번 사용해도 각각 개별적으로 관리됨
    const [age,setAge] =useState(props.age);
    // function changeName(){
    //     //console.log(name);
    //     //document.getElementById("name").innerText=name;
    // }
    return(
    <div>
        <h1 >state</h1>
        <h2 id="name">{name}({age})</h2>
        <button onClick={()=>{
            setName(name==="Mike"?"Jane":"Mike"); 
            setAge(age+1);
        }}>Change</button>
        {/* <button onClick={showName}>Show name</button>
        <button onClick={()=>{
            showAge(22);
        }}>Show age</button>
        <input type="text" onChange={(e)=>{
            const txt=e.target.value;
            showText(txt);
        }}/> */}
    </div>
        
    );
}
