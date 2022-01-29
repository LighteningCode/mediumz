

export default function Navbar(props: any) {
  return (
   <nav className="flex flex-row justify-between py-5 border-b border-black">
     <div className="flex flex-row pl-20">
       <h2 className="text-3xl font-bold">Mediumz</h2>
     </div>

     <div className="pr-20 self-center flex flex-row">
       <ul className="flex flex-row justify-between">
         <li className="mx-3 font-thin self-center text-sm"><a href="/about">Our story</a></li>
         <li className="mx-3 font-thin self-center text-sm"><a href="#">Membership</a></li>
         <li className="mx-3 font-thin self-center text-sm"><a href="#">Write</a></li>
         <li className="mx-3 font-thin self-center text-sm"><a href="#">Sign In</a></li>
       </ul>
       <span className="px-4 py-2 bg-stone-900 cursor-pointer hover:bg-black rounded-full text-sm font-thin ml-5 text-white">Get Started</span>
     </div>
   </nav>     
  )
}
