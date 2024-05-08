"use client";
import React from 'react'
import {Input} from '../input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select'
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "../dropdown-menu"
import { Button } from '../button'
import { useTheme } from 'next-themes'

const Header = () => {
    const { setTheme } = useTheme()
  return (
    <div className='flex justify-between items-center min-h-12 w-full px-6'>
        <div className='gap-6 flex items-center'>
            <h1 className='text-3xl'>RealtyNest</h1>
            <Input placeholder='Search for properties' className='w-[200px]'/>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Buy"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='Buy'>Buy</SelectItem>
                    <SelectItem value='Rent'>Rent</SelectItem>
                    <SelectItem value='Sold'>Sold</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Bedrooms"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='1 bedroom'>1 Bedroom</SelectItem>
                    <SelectItem value='2 bedroom'>2 Bedroom</SelectItem>
                    <SelectItem value='3 bedroom'>3 Bedroom</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger>
                    <SelectValue placeholder="Home Type"/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='house'>House</SelectItem>
                    <SelectItem value='condo'>Condo</SelectItem>
                </SelectContent>
            </Select>
            </div>

            <div>
            <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
     </div>
       
    </div>
  )
}

export default Header