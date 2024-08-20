import { useState, useEffect } from "react";
import "./header.css";
export default function Header() {
  const [showModal, setshowModal] = useState(false);
  const [theme, settheme] = useState(localStorage.getItem('currentMode') ?? 'dark' )
  

  useEffect(()=>{
    if(theme=== 'light'){
      document.body.classList.add('light')
      document.body.classList.remove('dark')
    }
else{
  document.body.classList.add('dark')
  document.body.classList.remove('light')
}


  },[theme])

 const  closeModal = () => { 
  setshowModal(false)
  }

  return (
    <header className="flex mt-2 ">
      <button
        onClick={() => {
          setshowModal(true);
        }}
        className="menu"
      >
        <i className  ="fa-solid fa-bars"></i>
      </button>

      <nav className="m-auto">
        <ul className="flex m-1  pe-3 ps-3 ">
          <li>
            <a href="#About">About</a>
          </li>
    
          <li>
            <a href="#Project">Project</a>
          </li>
     
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>

      <button onClick={()=>{
            localStorage.setItem('currentMode',theme=== 'dark'?'light':'dark')
          
          settheme(localStorage.getItem('currentMode'))



          
      }}
  
      >
        {theme === "dark"?<span className="fa-regular fa-moon "></span>: <span className="fa-solid fa-sun"></span> }
      </button>

      {showModal && (
        <div className="popUp">
          <div className="smallModal mt-4 rounded-4 ">
            <ul className="m-3 p-2 ">
              <li>
                <button
                  onClick={() => {
                    setshowModal(false);
                  }}
                >
                  <i className="fa-solid  fa-x"></i>{" "}
                </button>
              </li>
              <li>
                <a onClick={closeModal} href="#About">About</a>
              </li>
            
              <li>
                <a onClick={closeModal} href="#Project">Project</a>
              </li>
             
              <li>
                <a onClick={closeModal} href="#contact">contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}


