import Link from "next/link";


export default function Navbar(props: any) {

  return (
    <nav className={`${props.className ? props.className : ""}`}>
      <nav className={`flex flex-row justify-between py-5 mobile:py-4 border-b  transition-all duration-300 `}>
        <div className="flex flex-row pl-20 mobile:pl-4">
          <Link href="/"><h2 className="text-3xl font-bold cursor-pointer">Mediumz</h2></Link>
        </div>

        <div className="pr-20 mobile:pr-4 self-center flex flex-row">
          <ul className="flex flex-row justify-between mobile:hidden">
            <li className="mx-3 font-thin self-center text-sm"><Link href="/about">Our story</Link></li>
            <li className="mx-3 font-thin self-center text-sm"><Link href="/membership">Membership</Link></li>
            <li className="mx-3 font-thin self-center text-sm"><Link href="/creators">Write</Link></li>
            <li className="mx-3 font-thin self-center text-sm"><Link href="/signin">Sign In</Link></li>
          </ul>
          <span className="px-4 py-2 bg-stone-900 cursor-pointer hover:bg-black rounded-full text-sm font-thin ml-5 text-white">Get Started</span>
        </div>
      </nav>

      <ul className="flex-row hidden justify-between mobile:flex py-3 border-b">
        <li className="mx-3 font-normal self-center text-sm"><Link href="/about">Our story</Link></li>
        <li className="mx-3 font-normal self-center text-sm"><Link href="/membership">Membership</Link></li>
        <li className="mx-3 font-normal self-center text-sm"><Link href="/creators">Write</Link></li>
        <li className="mx-3 font-normal self-center text-sm"><Link href="/signin">Sign In</Link></li>
      </ul>
    </nav>

  )
}
