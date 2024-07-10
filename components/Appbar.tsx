"use client";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, Button,
    DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import Logo from "./Logo";

const navLinks = [
    {
        title: "Events",
        path: "/events",
    },
    {
        title: "Stories",
        path: "stories"
    },
    {
        title: "About Us",
        path: "/about"
    },
    {
        title: "",
        path: "/"
    }
]

const optNavLink = [
    {
        title: "Login",
        path: "/login"
    },
    {
        title: "Sign Up",
        path: "/register"
    },
];

export default function Appbar(){
    return(
        <Navbar>
            <NavbarBrand className="w-4/5">
                <Logo />
            </NavbarBrand>
            <NavbarContent>

            </NavbarContent>
            <NavbarContent
                justify="end"
            >
                <NavbarItem>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
