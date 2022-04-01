import Link from "next/link";


export default function Navbar(props: any) {

  return (
   <nav className={`flex flex-row justify-between py-5 border-b transition-all duration-300 border-black ${props.className ? props.className : ""}`}>
     <div className="flex flex-row pl-20">
       <Link href="/"><h2 className="text-3xl font-bold cursor-pointer">Mediumz</h2></Link>
     </div>

     <div className="pr-20 self-center flex flex-row">
       <ul className="flex flex-row justify-between">
         <li className="mx-3 font-thin self-center text-sm"><Link href="/about">Our story</Link></li>
         <li className="mx-3 font-thin self-center text-sm"><Link href="/membership">Membership</Link></li>
         <li className="mx-3 font-thin self-center text-sm"><Link href="/creators">Write</Link></li>
         <li className="mx-3 font-thin self-center text-sm"><Link href="/signin">Sign In</Link></li>
       </ul>
       <span className="px-4 py-2 bg-stone-900 cursor-pointer hover:bg-black rounded-full text-sm font-thin ml-5 text-white">Get Started</span>
     </div>
   </nav>     
  )
}
