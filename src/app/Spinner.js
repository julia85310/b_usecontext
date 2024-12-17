import { useState, useEffect } from "react"

export default function Spinner(){
  const [proceso, setProceso] = useState('');

  /*
  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProceso(".");
    }, 200);

    const timer2 = setTimeout(() => {
      setProceso("..");
    }, 400);

    const timer3 = setTimeout(() => {
      setProceso("...");
    }, 600);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);*/

  return (
    <div>{proceso}hola</div>
  );
}