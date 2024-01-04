import {NavLink} from "react-router-dom"

function App() {

  return (
    <div className="h-[99vh] bg-slate-400 flex items-center justify-center">
      <div className="h-[30vh] ">
        <NavLink
          className="w-[20vw] h-[5vh] font-bold mt-5 text-[20px] flex items-center justify-center hover:bg-black transition-all rounded-2xl"
          to="/basic"
        >
          Basic
        </NavLink>
        <NavLink
          className="w-[20vw] h-[5vh] font-bold mt-5 text-[20px] flex items-center justify-center hover:bg-black transition-all rounded-2xl"
          to="/basic"
        >
          Basic
        </NavLink>
        <NavLink
          className="w-[20vw] h-[5vh] font-bold mt-5 text-[20px] flex items-center justify-center hover:bg-black transition-all rounded-2xl"
          to="/basic"
        >
          Basic
        </NavLink>
        <NavLink
          className="w-[20vw] h-[5vh] font-bold mt-5 text-[20px] flex items-center justify-center hover:bg-black transition-all rounded-2xl"
          to="/basic"
        >
          Basic
        </NavLink>
      </div>
    </div>
  );
}

export default App
