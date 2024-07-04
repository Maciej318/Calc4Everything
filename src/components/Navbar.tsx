import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Calculator } from "lucide-react"

const Navbar = () => {
    return <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200
    bg-white/75 backdrop-blur-lg transition-all mb-20">
        <MaxWidthWrapper>
            <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                <Link href='/'>
                    <span className="text-blue-600 font-bold text-lg">calc4</span>everything
                </Link>
            </div>
        </MaxWidthWrapper>
    </nav>
}

export default Navbar