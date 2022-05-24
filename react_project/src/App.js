import { Component } from 'react';
// import './App.css';

class Subject extends Component{
  render(){
    return(
      <header>
          <h1>WEB</h1>
          world wide web!
      </header>
    );
  }
}

class Like extends Component{
  render(){
    return(
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JavaScript</a></li>
        </ul>
      </nav>
    );
  }
}
class Lion extends Component{
  render(){
    return(
      <article>
            <h2>HTML</h2>
            HTML is HyperText Markup Language.
        </article>
    );
  }
}
class App extends Component{
  render() {
    const style = {
      backgroundColor: 'blue',
      padding: '16px',
      color: 'white',
      fontSize: '36px'
    };
    //const name = 'likelion';
    //const name = 'react';
    return (
    // <div className="App">
    //   <Subject></Subject>
    //   <Like></Like>
    //   <Lion></Lion>
    //   <input type='text'></input>
    // </div>
      // <div>
      //   hello {name}!
      // </div>
      // <div>
      //   {
      //     1 + 1 === 2 
      //       ? (<div>맞아요!</div>)
      //       : (<div>틀려요!</div>)
      //   }
      // </div>
      // <div>
      //   {
	    //     name === 'likelion' && (<div>멋쟁이사자처럼</div>)
					
      //   }
      // </div>
    
     <div>
			<div style={style}>안녕하세요!</div>
			<div className="App">리액트</div>
		</div>
    );
  }
}

export default App;
