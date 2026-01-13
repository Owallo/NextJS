import { useEffect, useState, ChangeEvent } from "react";

export function useCalcul() {
    const[button0, setButton0] = useState(0);
    const[button1, setButton1] = useState(0);
    const[button2, setButton2] = useState(0);
    const[button3, setButton3] = useState(0);
    const[button4, setButton4] = useState(0);
    const[button5, setButton5] = useState(0);
    const[button6, setButton6] = useState(0);
    const[button7, setButton7] = useState(0);
    const[button8, setButton8] = useState(0);
    const[button9, setButton9] = useState(0);
    const[buttonC, setButtonC] = useState(0);
    const[buttondiv, setButtondiv] = useState(0);
    const[buttonfois, setButtonfois] = useState(0);
    const[buttonegal, setButtonEgal] = useState(0);
    const[buttonplus, setButtonplus] = useState(0);
    const[resultat, setResultat] = useState(0);

    const chiffre_0 = (e:any) => {
    setButton0(Number(e.target.value));
    }
    const chiffre_1 = (e:any) => {
    setButton1(Number(e.target.value));
    }
    const chiffre_2 = (e:any) => {
    setButton2(Number(e.target.value));
    }
    const chiffre_3 = (e:any) => {
    setButton3(Number(e.target.value));
    }
    const chiffre_4 = (e:any) => {
    setButton4(Number(e.target.value));
    }
    const chiffre_5 = (e:any) => {
    setButton5(Number(e.target.value));
    }
    const chiffre_6 = (e:any) => {
    setButton6(Number(e.target.value));
    }
    const chiffre_7 = (e:any) => {
    setButton7(Number(e.target.value));
    }
    const chiffre_8= (e:any) => {
    setButton8(Number(e.target.value));
    }
    const chiffre_9 = (e:any) => {
    setButton9(Number(e.target.value));
    }
    const mult = (e:any) => {
    setButtonfois(Number(e.target.value));
    }

    useEffect(() => {

    });

  return {resultat, chiffre_0, chiffre_1, chiffre_2, chiffre_3, chiffre_4, chiffre_5, chiffre_6, chiffre_7, chiffre_8, chiffre_9, mult  };
}