

export default function Footer(props: any) {
    return (
        <nav className={`flex flex-row justify-between py-8 border-t bg-white border-black ${props.className ? props.className : ""}`}>
            <div className="flex flex-row px-5 w-1/3">
                <h2 className="text-3xl font-bold">Mediumz</h2>
            </div>

            <div className="flex flex-row px-5 w-1/3 justify-center">
                <p className="text-lg font-medium">Every idea needs Mediumz</p>
            </div>

            <div className="px-5 self-center flex flex-row w-1/3 justify-center">
                <ul className="flex flex-row justify-between">
                    <li className="mx-3 font-thin self-center underline text-xs"><a href="/about">About</a></li>
                    <li className="mx-3 font-thin self-center underline text-xs"><a href="/membership">Terms</a></li>
                    <li className="mx-3 font-thin self-center underline text-xs"><a href="#">Privacy</a></li>
                    <li className="mx-3 font-thin self-center underline text-xs"><a href="#">Help</a></li>
                </ul>
            </div>
        </nav>
    )
}
