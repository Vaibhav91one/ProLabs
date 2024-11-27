import { navLinks } from "@/constants"
import { Button } from "../ui/button"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
  } from "@/components/ui/navigation-menu"
import Logo from "./LogoMoonex"
    

const Navbar = () => {
  return (
    <header className='font-fira padding-x py-8 w-full'>
    <nav className='flex justify-evenly items-center max-container transition-all'>
        <a href="/">
            <Logo/>
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
            {navLinks.map((item) => (
                <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem className="text-white hover:text-yellow-300 transition-all delay-120">
                   {item.label}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              
            ))}
        </ul>
        <Button className="rounded-full p-6 bg-gradient-to-r from-yellow-300 to-yellow-400 text-black font-bold ">Connect Wallet</Button>
    </nav>
</header>
  )
}

export default Navbar