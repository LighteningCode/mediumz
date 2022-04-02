import Link from "next/link";


export default function Footer(props: any) {
    return (
        <nav className={`flex flex-row mobile:flex-col  justify-between py-8 border-t bg-white border-black ${props.className ? props.className : ""}`}>
            <div className="flex flex-row px-5 w-1/3 mobile:mb-3 mobile:justify-center mobile:w-full">
                <h2 className="text-3xl font-bold">Mediumz</h2>
            </div>

            <div className="flex flex-row px-5 w-1/3 mobile:mb-3 justify-center mobile:w-full">
                <p className="text-lg font-medium">Every idea needs Mediumz</p>
            </div>

            <div className="px-5 self-center flex flex-row w-1/3 justify-center mobile:w-full">
                <ul className="flex flex-row justify-between">
                    <li className="mx-3 font-thin self-center underline text-xs"><Link href="/about" passHref>About</Link></li>
                    <li className="mx-3 font-thin self-center underline text-xs"><Link href="/membership" passHref>Terms</Link></li>
                    <li className="mx-3 font-thin self-center underline text-xs"><Link href="#" passHref>Privacy</Link></li>
                    <li className="mx-3 font-thin self-center underline text-xs"><Link href="#" passHref>Help</Link></li>
                </ul>
            </div>
        </nav>
    )
}
