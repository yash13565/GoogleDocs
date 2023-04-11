import React, { useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar1/Navbar1";
import style from "./Home.module.css";
// import DownloadIcon from '@mui/icons-material/Download';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Home() {
  const[value,setValue]=useState('Untitled Document')
  function handleremoveFormat(color) {
    document.execCommand("removeFormat");
  }
  function download(){
     window.print()
  }

  return (
    <div className={style.main}>
      <Navbar1 
      setValue={setValue}
      value={value}
      />
      <Navbar
        handleremoveFormat={handleremoveFormat}
      />
      <div className={style.box} >
        <p  id="edit" className={style.txt} contentEditable={true}
        ></p>
      </div>
    <button onClick={download} className={style.floaticon}><CheckCircleIcon style={{fontSize:"35px",color:"white"}}/></button>
    </div>
  );
}

export default Home;
