import './App.css';
import React, { useState, useEffect } from 'react';
function App() {
  const [dynamicHTML, setDynamicHTML] = useState('');
  const [dynamicHTML2, setDynamicHTML2] = useState('');

  const [i, setI] = useState(2);
  
  
  function DelTP() {
    if(i===5){
      const element2 = document.getElementById("TooMuchTP");
      element2.style.display = "none";
      setI(3);
      console.log("del "+i);
      const elementId = `MoreTP3`;
      const element = document.getElementById(elementId);
      const elementId3 = 'ResultTP2';
      const element3 = document.getElementById(elementId3);
      if (element) {
        element.remove();
        setDynamicHTML((prevHTML) => {
          const updatedHTML = prevHTML.replace(new RegExp(`<div id='MoreTP3'>.*?</div></div></div>`), '');
          console.log(i + 'dupa');
          return updatedHTML;
        });
        element3.remove();
        setDynamicHTML2((prevHTML) =>{
          const updatedHTML = prevHTML.replace(new RegExp(`<p id='ResultTP3'>.*?</p>`), '');
          console.log(i + 'dupa');
          return updatedHTML;
        })
      }
    }
    if (i===4){
      const elementId = `MoreTP3`;
      const element = document.getElementById(elementId);
      const elementId3 = 'ResultTP3';
      const element3 = document.getElementById(elementId3);
      if (element) {
        element.remove();
        setDynamicHTML((prevHTML) => {
          const updatedHTML = prevHTML.replace(new RegExp(`<div id='MoreTP3'>.*?</div></div></div>`), '');
          console.log(i + 'dupa');
          return updatedHTML;
        });
        element3.remove();
        setDynamicHTML2((prevHTML) =>{
          const updatedHTML = prevHTML.replace(new RegExp(`<p id='ResultTP3'>.*?</p>`), '');
          console.log(i + 'dupa');
          return updatedHTML;
        })
        setI(3);
        console.log("del "+i);
      }
    }
    if (i===3){
      const elementId = `MoreTP2`;
      const element = document.getElementById(elementId);
      const elementId2 = `ResultTP2`;
      const element2 = document.getElementById(elementId2);
      if (element) {
        element.remove();
        setDynamicHTML((prevHTML) => {
          const updatedHTML = prevHTML.replace(new RegExp(`<div id='MoreTP2'>.*?</div></div></div>`), '');
          console.log(i + 'dupa');
          return updatedHTML;
        });
        element2.remove();
        setDynamicHTML2((prevHTML) =>{
          const updatedHTML = prevHTML.replace(new RegExp(`<p id='ResultTP2'>.*?</p>`), '');
          console.log(i + 'dupa');
          return updatedHTML;
        })
        setI(2);
        console.log("del "+i);
      }
    }
  }

  function Calculate() {
    const elementId4 = `PositionSize`;
    const element4 = document.getElementById(elementId4);
    const elementId5 = 'SLoss';
    const element5 = document.getElementById(elementId5);

    const Size = document.getElementById("Size").value;
    const Risk = document.getElementById("Risk").value;
    const EP = document.getElementById("EP").value;
    const SL = document.getElementById("SL").value;
    const TP1 = document.getElementById("TP1").value;
    const ProcentTP1 = document.getElementById("ProcentTP1").value;
    /*const TP2 = document.getElementById("TP2").value;
    const TP3 = document.getElementById("TP3").value;*/
    const Currency = document.getElementById("Currency").value;
    let Lot = 0;
    let x = 0;
    let y = 0;
    let profit1 = 0;
    let RR = 0;
    switch(Currency){
      case "1":

      console.log(Currency+" waluta");
      if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      

      case "2":

        console.log(Currency+" waluta");
      if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      case "3":

        console.log(Currency+" waluta");
      if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y/10000;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y/10000;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y/10000;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      case "4":
        console.log(Currency+" waluta");
        if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y/10000;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y/10000;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y/10000;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      case "5":
        console.log(Currency+" waluta");
        if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y/100;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y/100;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y/100;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      case "6":
        console.log(Currency+" waluta");
        if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y/10;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y/10;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y/10;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      case "7":
        console.log(Currency+" waluta");
        if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y/10;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y/10;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y/10;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      case "8":
        console.log(Currency+" waluta");
        if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
      case "9":
        console.log(Currency+" waluta");
        if(document.getElementById("TP3") != null){
          const TP2 = document.getElementById("TP2").value;
          const TP3 = document.getElementById("TP3").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          const ProcentTP3 = document.getElementById("ProcentTP3").value;
          let profit2 = 0;
          let profit3 = 0;
          console.log(TP3);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));
            profit3 = ((TP3-EP)*y)*(ProcentTP3/100);

          }
          profit1.toFixed(2);
          profit2.toFixed(2);
          profit3.toFixed(3);
          element4.innerHTML = "Wielkość Pozycji: "+y/100;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("ResultTP3").innerHTML = "Zysk na TP3: " + profit3+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;

      }else if(document.getElementById("TP2") != null){
          const TP2 = document.getElementById("TP2").value;
          const ProcentTP2 = document.getElementById("ProcentTP2").value;
          let profit2 = 0;
          console.log(TP2);
          x = EP-SL;

          if(x<0){
            x = x*(-1);
          }

          y = ((Risk/100)*Size)/x;
          y = y.toFixed(3);
          if(TP1-EP<0){
            profit1 = ((TP1-EP)*y)*(ProcentTP1/100)*(-1);
            profit2 = ((TP2-EP)*y)*(ProcentTP2/100)*(-1);
            RR = ((TP2/EP)*y)*(-1);

          }else{
            profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
            profit2 = (((TP2-EP)*y)*(ProcentTP2/100));

          }
          profit1.toFixed(2);
          element4.innerHTML = "Wielkość Pozycji: "+y/100;
          element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
          document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
          document.getElementById("ResultTP2").innerHTML = "Zysk na TP2: " + profit2+"$";
          document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }else{
        x = EP-SL;

        if(x<0){
          x = x*(-1);
        }

        y = ((Risk/100)*Size)/x;
        y = y.toFixed(3);
        if(TP1-EP<0){
          profit1 = ((TP1-EP)*y)*(-1);
        }else{
        profit1 = (((TP1-EP)*y)*(ProcentTP1/100));
        }
        profit1.toFixed(2);
        element4.innerHTML = "Wielkość Pozycji: "+y/100;
        element5.innerHTML = "Strata przy SL: "+(Risk/100)*Size+"$";
        document.getElementById("ResultTP1").innerHTML = "Zysk na TP1: " + profit1+"$";
        document.getElementById("RR").innerHTML = "Twoje RR: " + RR;
      }
        break;
    }
    //document.querySelector(".right").innerHTML =  Size + " " + Risk + " " + EP + " " + SL + " " + TP1;
    /*
    BTC-1
    ETH-1
    XRP-10000
    ADA-10000
    Link-100
    LTC-10
    AAVE-10
    BNB-1
    DOT-100
    */
  }
    

  useEffect(() => {
    const element = document.getElementById("Calculate");
    element.addEventListener("click", Calculate);
    document.getElementById("Risk").addEventListener("change", function() {
      Calculate();
    });
  });

  function AddTakeProfit() {
  if(i<4){
    setI(i+1);
    console.log("add "+i);
    let HTML = "<div id='MoreTP"+i+"'><div class='iBox'> <p class='pTP'>Take Profit "+i+":</p><div style='display: flex;'> <input id='ProcentTP"+i+"' type='number' min='0' max='100'/><b>%</b><div><input id='TP"+i+"' type='number'/></div></div></div></div>";
    let HTML2 = "<p id='ResultTP"+i+"'>Zysk na TP"+i+": </p>";
    setDynamicHTML(dynamicHTML + HTML);
    setDynamicHTML2(dynamicHTML2 + HTML2);
    } else if(i===4){
      document.getElementById("TooMuchTP").style.display = "block";
      setI(i+1);
      console.log("add "+i);
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <code>Kalkulator Crypto</code>
      </header>
      <div id="Container">
        <div className='box'> 

          <div className='iBox'> 
            <div id="RiskManagment">
              <p>Wielkość Konta:</p> <input id="Size" type='number' min='100' max='200000'/> 
              <p>Ryzyko:</p> <input id="Risk" type='number' min="0.1" max='100'/> 
            </div>
          </div>

          <div className='iBox'> <p>Entry Point:</p> <input id="EP" type='number'/> </div>

          <div className='iBox'> <p id='pSL'>Stop Loss:</p> <input id="SL" type='number'/> </div>

          <div id="TPbox">
            <div className='iBox'> <p className='pTP'>Take Profit 1:</p> <div> <input id="ProcentTP1" type='number' min="0" max="100"/><b>%</b> <input id="TP1" type='number'/></div> </div>
            <div dangerouslySetInnerHTML={{__html: dynamicHTML}}></div>
            <p style={{color: 'red', display: 'none'}} id='TooMuchTP'>Masz za duzo TakeProfitów</p>
          </div>

          <div className='iBox'> 
            <label>Wybierz Kryptowalutę:</label>
            <select id="Currency">
              <option value="1">Bitcoin</option>
              <option value="2">Ethereum</option>
              <option value="3">XRP</option>
              <option value="4">Cardano</option>
              <option value="5">Link Matic</option>
              <option value="6">Litecoin</option>
              <option value="7">AAVE</option>
              <option value="8">BNB</option>
              <option value="9">Polkadot</option>
            </select>
          </div>
          <div className='iBox'>
            <button onClick={DelTP} id="DeleteTP">Usuń TakeProfit</button>
            <button onClick={AddTakeProfit} id="AddTP">Dodaj TakeProfit</button>
          </div>

          <button id="Calculate" onClick={Calculate}>OBLICZ POZYCJE</button>
        </div>
          <div className='box right'> 
            <div id="Results">
            <p id="PositionSize">Wielkość Pozycji: </p>
            <p id="SLoss">Strata przy SL: </p>
            <p id="ResultTP1">Zysk na TP1: </p> 
            <div dangerouslySetInnerHTML={{__html: dynamicHTML2}}></div>
            <p id="RR">Twoje RR:</p>
            </div>
          </div>
      </div>
    </div>
  );
}
export default App;