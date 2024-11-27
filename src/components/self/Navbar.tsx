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
                  <NavigationMenuItem className="text-white hover:text-yellow-300 delay-120  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-300 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-300 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
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