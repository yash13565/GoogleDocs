import React, { useState ,useRef} from "react";
import Navbar from "../Navbar/Navbar";
import Navbar1 from "../Navbar1/Navbar1";
import style from "./Home.module.css";
import DownloadIcon from '@mui/icons-material/Download';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

function Home() {
const[value,setValue]=useState('Untitled Document')
const printDiv = useRef("");

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
      <div id="edit" className={style.box} >
        <p  className={style.txt} contentEditable={true}
        ></p>
      </div>
    <button onClick={download} className={style.floaticon}><DownloadIcon style={{fontSize:"35px",color:"white"}}/></button>
    </div>
  );
}

export default Home;
