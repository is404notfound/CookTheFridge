import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem} from "@nextui-org/react";
import Image from "next/image";
import Logo from "@/assets/icons/meal-icon.svg"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const BASE_URL = '/CookTheFridge';
  const menuItems = [
    'Home'
    ,'Ingredients'
    ,'Cuisines'
  ];

  return (
    <Navbar className="font-bold" onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll >
      <NavbarBrand>
        <Image className="p-2" src={Logo} alt="Logo" width={40} height={40} />
        <p>Cook The Fridge</p>
      </NavbarBrand>
      {/* Web */}
      <NavbarContent className="hidden sm:flex gap-4 font-bold" justify="center">
        {
          menuItems.map((item, index) => (
            <NavbarItem key={index}>
              <Link className="text-black" href={`${BASE_URL}/${item === 'Home' ? '' : item}`}>
                {item}
              </Link>
            </NavbarItem>
          ))
        }
      </NavbarContent>
      {/* MWeb */}
      <NavbarMenuToggle
        className="md:hidden"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
      />
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="text-black"
              href={`${BASE_URL}/${item === 'Home' ? '' : item}`}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
