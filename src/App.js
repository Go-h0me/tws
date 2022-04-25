import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";
import Content from "./components/Content/Content";
import { useEffect, useState } from "react";

function App() {
  const [windowSize,setWindowSize] =useState({
    width:undefined,
    height:undefined
  })
  const [isMobile,setMobile] = useState(false)

  useEffect(()=>{
    const handleSize =() =>{
     setWindowSize({
        width:window.innerWidth,
      height:window.innerHeight
     })
    }
    window.addEventListener('resize',handleSize)
    handleSize()
    return () => window.removeEventListener('resize',handleSize)
  },[])

  useEffect(() => {
    if(windowSize.width < 500) {
      setMobile(true)
    }else {
      setMobile(false)
    }
// console.log(windowSize);
  },[windowSize])


  return (
    <div className='font-sora h-screen px-4 py-8 bg-gradient-to-b  via-slate-500 
    dark:text-white text-black overflow-y-auto overflow-x-hidden md:px-20 light:from-white
    light:to-pink-500 dark:from-purple-900 dark:to-purple-700 from-white to-pink-500
    '>
     
    <NavBar isMobile={isMobile}/>
    <Slogan/>
    <Content/>
    </div>
  );
}

export default App;
