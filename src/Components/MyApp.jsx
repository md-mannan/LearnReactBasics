import { useState } from "react";
import MyButton from "./MyButton";
import Profile from "./Profile";

export default function MyApp() {
    const [count,setCount]=useState(0);

    function handleClick(){
    setCount(count + 1);
    }
  const isLogin = true;
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="">Welcome to My App</h1>

      {isLogin && <Profile /> }

       <MyButton count={count} onClick={handleClick} />
       <br />
       <MyButton count={count} onClick={handleClick} />

    </div>
  );
}
