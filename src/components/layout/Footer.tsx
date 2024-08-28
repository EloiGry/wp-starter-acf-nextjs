import { Menu } from "@/utils/types"
import Image from "next/image"
import Link from "next/link";
import { NavigationMenuLink, navigationMenuTriggerStyle, NavigationMenuItem, NavigationMenu, NavigationMenuList } from "../ui/navigation-menu";

interface FooterProps {
    menu: Menu;
}

export default function Footer ({menu}: FooterProps) {
    return (
        <footer className="py-4 container flex flex-col sm:flex-row justify-center sm:justify-between items-center">
            <Image src='/logo-starter.svg' alt="logo"  width="64" height="64"/>
            <NavigationMenu >
                <NavigationMenuList className="flex flex-col sm:flex-row justify-center sm:justify-end items-center">
            {menu.map(item => {
                return (
                    <NavigationMenuItem key={item.title}>
                    <Link href={item.url} legacyBehavior passHref >
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                {item.title}
                        </NavigationMenuLink>
                    </Link>
                    </NavigationMenuItem>

                )
            })}
            </NavigationMenuList>
            </NavigationMenu>

        </footer>
    )
}