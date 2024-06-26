import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button";
import { CircleUser } from "lucide-react";
import { auth, signOut } from "@/auth";
import Image from "next/image";
import { LoginButton } from "../auth/LoginButton";
import LogoutButton from "../auth/LogoutButton";

const LoginUserIcon = async () => {
    const session = await auth();
    if (!session) return <LoginButton/>;

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="secondary" size="icon" className="rounded-full">

                    {
                        session?.user ? (
                            <Image src={session.user.image} alt={session.user.name} width={300} height={100} className="rounded-full h-9 w-9" />
                        ) : <CircleUser className="h-5 w-5" />
                    }
                    <span className="sr-only">Toggle user menu</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuLabel>{session.user.name}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem><LogoutButton/></DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default LoginUserIcon;