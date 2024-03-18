import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar shouldHideOnScroll >
      <NavbarBrand>
        <p className="font-bold text-inherit">Cook The Fridge</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href="/" color="foreground">   
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Ingredients
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#" color="foreground">
            Recipes
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
