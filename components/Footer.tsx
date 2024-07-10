import {Button} from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import CallMadeOutlinedIcon from '@mui/icons-material/CallMadeOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import Logo from "./Logo";

export default function Footer(){
    return(
        <div className="bg-gradient-to-r from-violet-200 to-pink-200">
            {/* Grid Layout */}
            <div className="flex justify-center w-screen">
                <div className="w-2/3 my-6 grid grid-cols-4 grid-rows-2 gap-4">
                    <div className="col-span-1">
                        <div 
                            className="text-3xl font-semibold text-[#2E0C25]"
                        >
                            Gallery
                        </div>
                        <div>Events</div>
                        <div>Blogs</div>
                        <div>Newsletter</div>
                    </div>
                    <div className="col-span-2">
                        <div 
                            className="text-3xl font-semibold text-[#2E0C25]"
                        >
                            Team
                        </div>
                        <div>About Us</div>
                        <div>Timeline</div>
                        <div>Contact Us</div>
                    </div>
                    <div className="col-span-1 row-span-2">
                        <div className="text-3xl font-semibold text-[#2E0C25]">Newsletter</div>
                        <div className="my-2 text-[#2E0C25]">
                            Never miss an opportunity! Subscribe to our 
                            newsletter for upcoming events, member spotlights 
                            and exclusive content.
                        </div>
                        <Input 
                            type="email"
                            placeholder="you@example.com"
                            className="my-2 rounded-sm text-[#2E0C25]"
                            endContent={<MarkEmailReadOutlinedIcon />}
                        />
                        <Button
                            className="my-2 rounded-md bg-[#2E0C25] text-white"
                            endContent={<CallMadeOutlinedIcon />}
                        >
                            Subscribe Now
                        </Button>
                    </div>
                    <div className="flex items-center justify-center">
                        <Logo />
                    </div>
                </div>
            </div>
            {/* Underline */}
            <hr className="w-3/5 mx-auto my-2 border-1 border-[#2E0C25]"/>
            <div className="flex justify-center py-2 text-md">
                <span className="text-[#2E0C25] mb-3">
                    2024 Amrita Centre for Entrepreneurship. All rights reserved.
                </span>
            </div>
        </div>
    )
}
