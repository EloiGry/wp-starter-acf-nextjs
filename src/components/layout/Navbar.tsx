'use client'
import React from "react"
import { Menu, MenuItem } from "@/lib/types"
import Link from "next/link"
import Image from "next/image"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
import { ChevronRight } from "lucide-react"

  interface NavbarProps {
    menu: Menu;
}



export default function Navbar ({menu}: NavbarProps) {
   
    return (
        <div className="flex justify-between items-center py-4 container">
            <Image src='/logo-starter.svg' alt="logo"  width="64" height="64"/>
            <NavbarDesktop menu={menu}/>
            <MobileNavbar menu={menu}/>
        </div>

    )
}

function NavbarDesktop ({menu}: NavbarProps) {
    return (
        <NavigationMenu className="hidden md:flex">
                <NavigationMenuList>
                    {menu.map((item: MenuItem) => {
                        const isDropdown = item.childitems.length > 0
                        return (
                            <NavigationMenuItem key={item.title}>
                                {isDropdown ? 
                                    <>
                                    <Link href={item.url}><NavigationMenuTrigger>{item.title}</NavigationMenuTrigger></Link>
                                    <NavigationMenuContent>
                                        <ul className="flex flex-col whitespace-nowrap items-start w-full">
                                        {item.childitems.map(subitem => {
                                            return (
                                                <li className="w-full" key={subitem.url} >
                                                    <Link className="w-full" href={subitem.url} legacyBehavior passHref >
                                                        <NavigationMenuLink className={`${navigationMenuTriggerStyle()} w-full items-start justify-start`}>
                                                            {subitem.title}
                                                        </NavigationMenuLink>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                        </ul>
                                    </NavigationMenuContent>
                                    </> : 

                                    <Link href={item.url} legacyBehavior passHref >
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {item.title}
                                    </NavigationMenuLink>
                                    </Link>
                                }

                            </NavigationMenuItem>
                        )
                    })}
                    
                </NavigationMenuList>
            </NavigationMenu>
    )
}

function MobileNavbar ({menu}: NavbarProps) {
    return (
        <Sheet>
        <div className="flex items-center justify-between md:hidden">
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="rounded-full">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>
        <SheetContent side="left" className="w-72 bg-background p-4">
          <nav className="grid gap-4">
          {menu.map((item: MenuItem) => {
            const isDropdown = item.childitems.length > 0
            return (
                <React.Fragment key={item.title}>
                {isDropdown ? 
                (
                    <Collapsible className="grid gap-2">
                        <CollapsibleTrigger className="group flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 ">
                        <Link href={item.url} className="flex items-center gap-2">
                            {item.title}
                        </Link>
                        <ChevronRight
                            className="relative top-[1px] ml-1 h-4 w-4 transition duration-200 group-data-[state=open]:rotate-90"
                            aria-hidden="true"
                        />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="grid gap-2 pl-6">
                            {item.childitems.map(subitem => {
                                return (
                                    <Link
                                        key={subitem.title}
                                        href={subitem.url}
                                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                                        prefetch={false}
                                    >
                                        {subitem.title}
                                    </Link>
                                )
                            })}
                        </CollapsibleContent>
                    </Collapsible>
                ) : 
                (
                    <Link
                    href={item.url}
                    className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                    >
                    {item.title}
                    </Link>
                )}
                </React.Fragment>
            )
          })}

           
            </nav>
        </SheetContent>
      </Sheet>
    )
}


function MenuIcon(props : any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}