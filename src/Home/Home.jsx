import React, { useState} from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar1/Navbar1";
import style from "./Home.module.css";
import DownloadIcon from '@mui/icons-material/Download';


function Home() {
  function handleremoveFormat(color) {
    document.execCommand("removeFormat");
  }
  function download(){
     window.print()
  }

  return (
    <div className={style.main}>
      <Navbar1 
      />
      <Navbar
        handleremoveFormat={handleremoveFormat}
      />
      <div className={style.box} >
        <p  id="edit" className={style.txt} contentEditable={true}
        ></p>
      </div>
    <button onClick={download} className={style.floaticon}><DownloadIcon style={{fontSize:"35px",color:"white"}}/></button>
    </div>
  );
}

export default Home;
