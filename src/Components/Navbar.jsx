import React from 'react'
import { CgMenuLeftAlt } from "react-icons/cg";

const Navbar = () => {
  
  return (
    <section className="w-full gap-48 flex justify-between">
    <div><img src="" alt="Logo" className="" />
    </div>
    <CgMenuLeftAlt />
    <div><ul className="">
      <li><a href="#" className="hover:text-gray-400">Countries</a></li></ul>
    </div>
  </section>
  )
}

export default Navbar