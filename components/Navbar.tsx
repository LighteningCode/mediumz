import axios from "axios";
import { useSession, signIn } from "next-auth/react";
import Link from "next/link";


export default function Navbar(props: any) {

  const { data: session } = useSession()


  const submit = async () => {
    // const payload = {
    //   email: "elvisagbesi@gmail.com",
    //   name: "SOme name",
    //   image: "xxx",
    // }

    const payload = {
      lastName: "balcmk",
      otherNames: "Richard",
      sex: "MALE",
      availabile: true,
      phone: "0236654654",
      city: "xxx",
      town: "xxx",
      address: "xxx",
      nearestLandmark: "xxx",
      country: "xxx",
      jerseySize: "xxx",
      shortSize: "xxx",
    }

    // const payload = {
    //   lastName: "balcmk",
    //   otherNames: "Richard",
    //   sex: "MALE",
    //   availabile: true,
    //   phone: "0236654654",
    // }

    axios.post(
      "/api/player",
      payload
    )

  }

  return (
    <nav className={`transition-all duration-300 ${props.className ? props.className : ""}`}>
      <nav className={`flex flex-row justify-between py-5 border-b`}>
        <div className="flex flex-row pl-20 mobile:pl-4">
          <Link href="/"><h2 className="text-3xl font-bold cursor-pointer">Mediumz</h2></Link>
        </div>

        <div className="pr-20 mobile:pr-4 self-center flex flex-row">
          <ul className="flex flex-row justify-between mobile:hidden">
            <li className="mx-3 font-normal self-center text-sm"><Link href="/about">Our story</Link></li>
            <li className="mx-3 font-normal self-center text-sm"><Link href="/membership">Membership</Link></li>
            <li className="mx-3 font-normal self-center text-sm"><Link href="/creators">Write</Link></li>
            {!session ?
              <li onClick={() => signIn()} className="mx-3 font-normal self-center cursor-pointer text-sm">
                {/* <Link href="/signin">Sign In</Link> */}
                Sign In
              </li>
              :
              <li onClick={() => signIn()} className="mx-3 font-normal self-center cursor-pointer text-sm">
                <img src={session?.user?.image || ""} className="w-10 h-10 rounded-full" alt={session?.user?.name || ""} />
              </li>
            }
          </ul>
          <span onClick={() => submit()} className="px-4 py-2 bg-stone-900 cursor-pointer hover:bg-black rounded-full mobile:font-light text-sm font-normal ml-5 text-white">Get Started</span>
        </div>
      </nav>

      <ul className="flex-row hidden justify-between mobile:flex py-3 border-b">
        <li className="mx-3 font-normal self-center text-sm"><Link href="/about">Our story</Link></li>
        <li className="mx-3 font-normal self-center text-sm"><Link href="/membership">Membership</Link></li>
        <li className="mx-3 font-normal self-center text-sm"><Link href="/creators">Write</Link></li>
        {!session ?
          <li onClick={() => signIn()} className="mx-3 font-normal self-center cursor-pointer text-sm">
            {/* <Link href="/signin">Sign In</Link> */}
            Sign In
          </li>
          :
          <li onClick={() => signIn()} className="mx-3 font-normal self-center cursor-pointer text-sm">
            <img src={session?.user?.image || ""} className="w-6 h-6 rounded-full" alt={session?.user?.name || ""} />
          </li>
        }
      </ul>

    </nav>

  )
}
