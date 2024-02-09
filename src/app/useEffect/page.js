"use client"

// import { useEffect } from "react";
import { useState, useEffect } from "react";



export default function Page() {
  const [samet, setSamet] = useState(0);
  const [diger, setDiger] = useState(0)

  ///useState Ne Zaman Çalışır?

  useEffect(() => {
    console.log("ilk kez render edildiğinde çalışır daha da çalışmaz.")
  }, [])
  
  useEffect(() => {
    console.log("her zaman çalışır.")
  })

  useEffect(() => {
    console.log("ilk kez render edildiğinde çalışır + samet değerinde bir değişiklik olduğunda.")
  }, [samet])
  

  useEffect(() => {
    setDiger(diger-1)
  }, [samet]);

  return (
    <div className="text-white">
      <button onClick={()=> setSamet(samet + 1)}>Samet ++</button>
      <div>Samet:{samet}</div>
      <div>baska bi sey: {diger}</div>
    </div>
  );
}
