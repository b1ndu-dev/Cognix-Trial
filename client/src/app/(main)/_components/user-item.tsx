"use client";

import { 
  ChevronsUpDown, 
  LogOut, 
  Plus, 
  PlusCircle, 
  Settings, 
  Trash
} from "lucide-react";

import {
  Avatar,
  AvatarImage
} from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export const UserItem = () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div role="button" className="flex items-center text-sm p-3 w-full hover:bg-primary/5">
          <div className="gap-x-2 flex items-center max-w-[150px]">
            <Avatar className="h-5 w-5">
              <AvatarImage src={"/user.png"} />
            </Avatar>
            <span className="text-start font-medium line-clamp-1">
              Raunak's Notion
            </span>
          </div>
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground ml-2" />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-80"
        align="start"
        alignOffset={11}
        forceMount
      >
        <div className="flex flex-col space-y-4 p-2">
          <p className="text-xs font-medium leading-none text-muted-foreground">
            raunak11209@gmail.com
          </p>
          <div className="flex items-center gap-x-2">
            <div className="rounded-md bg-secondary p-1">
              <Avatar className="h-8 w-8">
                <AvatarImage src={"/user.png"} />
              </Avatar>
            </div>
            <div className="space-y-1">
              <p className="text-sm line-clamp-1">
                Raunak's Notion
              </p>
            </div>
          </div>
        </div>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground">
          {/* Replace with a link to account settings */}
          <div>
            Account
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem asChild className="w-full cursor-pointer text-muted-foreground">
            {/* Replace with actual logout functionality */}
          <div>
            Log out
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
