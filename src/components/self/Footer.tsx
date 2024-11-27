import { navLinks, socialMedia } from "@/constants";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "../ui/navigation-menu";
import Logo from "./LogoMoonex";

const Footer = () => {
  return (
    <footer>
      <div className="text-white flex justify-evenly items-center max-container transition-all">
        <a href="/">
          <Logo/>
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.slice(1).map((item) => (
            <NavigationMenu>
              <NavigationMenuList>
              <NavigationMenuItem className="text-white hover:text-yellow-300 delay-120  cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-yellow-300 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-yellow-300 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
                   {item.label}
                  </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          ))}
        </ul>
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl mb-2 font-bold">
            Contact <span className="text-yellow-300">Us</span>
          </h2>
          <div className="flex item-center mt-4 gap-5">
            {socialMedia.map((icon, index) => (
              <div
                key={index}
                className="flex justify-center items-center w-10 h-10 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
