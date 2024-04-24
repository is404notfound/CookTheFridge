import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function Header() {
  const BASE_URL = '/CookTheFridge';

  return (
    <Navbar shouldHideOnScroll >
      <NavbarBrand>
        <p className="font-bold text-inherit">Cook The Fridge</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link href={BASE_URL} color="foreground">   
            Home
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={`${BASE_URL}/Ingredients`} color="foreground">
            Ingredients
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={`${BASE_URL}/Cuisines`} color="foreground">
            Cuisines
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
