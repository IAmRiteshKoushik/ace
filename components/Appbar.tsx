"use client";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import Logo from "./Logo";
import LoginIcon from '@mui/icons-material/Login';

const navLinks = [
    {
        title: "Home",
        path: "/",
    },
    {
        title: "Events",
        path: "/events",
    },
    {
        title: "Newsletters",
        path: "/newsletter"
    },
    {
        title: "Stories",
        path: "stories"
    },
    {
        title: "About ACE",
        path: "/about"
    },
    {
        title: "Team",
        path: "/team"
    }
]

type AppbarProp = {
    activeLink: string
}

export default function Appbar({ activeLink }: AppbarProp){
    return(
        <div className="flex justify-center items-center w-3/4 shadow-2xl p-4 
            rounded-md bg-white border-1 border-[#230C25]">
            <div className="flex-grow-0">
                <Link href="/">
                    <Logo />
                </Link>
            </div>
            <div className="flex justify-center flex-grow gap-x-4">
                {navLinks.map((link, index) => (
                    <Link 
                        href={link.path} 
                        key={index}
                    >
                        <Button
                            className={`my-2 rounded-md border-2 bg-white 
                            text-[#230C25] font-semibold text-md 
                            hover:border-[#230C25] 
                            ${activeLink === link.title ? "border-[#230C25]" : "border-transparent"}`}
                        >
                            {link.title}
                        </Button>
                    </Link>
                ))}
            </div>
            <div className="flex flex-grow-0 gap-x-6">
                <Link href="/login">
                    <Button
                        className="my-2 rounded-md bg-[#230C25] text-white"
                        endContent={<LoginIcon />}
                    >
                        Sign In
                    </Button>
                </Link>
            </div>
        </div>
    );
}
