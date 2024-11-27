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
                <NavigationMenuItem className="hover:text-yellow-300 transition-all delay-120">{item.label}</NavigationMenuItem>
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
