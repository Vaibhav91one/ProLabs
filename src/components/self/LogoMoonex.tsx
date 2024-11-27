import { MoonStar } from "lucide-react"


const Logo = () => {
  return (
    <div className="font-railway flex justify-center gap-2 items-center bg-gradient-to-tl from-yellow-200 via-yellow-300 to-yellow-400 bg-clip-text text-transparent font-bold">
        <MoonStar className="text-yellow-300"/>
        <p>Moonex</p>
    </div>
  )
}

export default Logo