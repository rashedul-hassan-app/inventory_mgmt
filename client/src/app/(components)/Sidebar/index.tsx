"use client";

// import { useAppDispatch, useAppSelector } from "@/app/redux";
// import { setIsSidebarCollapsed } from "@/state";
import {
  Archive,
  CircleDollarSign,
  Clipboard,
  Layout,
  LucideIcon,
  Menu,
  SlidersHorizontal,
  User,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";


const Sidebar = () => {
    const isSidebarCollapsed = false;
    const toggleSidebar = () => {};

    return (
        <div>
          {/* TOP LOGO */}
          <div
            className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
              isSidebarCollapsed ? "px-5" : "px-8"
            }`}
          >
            <div>logo</div>
            <h1
              className={`${
                isSidebarCollapsed ? "hidden" : "block"
              } font-extrabold text-2xl`}
            >
              Rashedul
            </h1>
    
            <button
              className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
              onClick={toggleSidebar}
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
    
          {/* LINKS */}
          <div className="flex-grow mt-8">
            {/* <SidebarLink
              href="/dashboard"
              icon={Layout}
              label="Dashboard"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/inventory"
              icon={Archive}
              label="Inventory"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/products"
              icon={Clipboard}
              label="Products"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/users"
              icon={User}
              label="Users"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/settings"
              icon={SlidersHorizontal}
              label="Settings"
              isCollapsed={isSidebarCollapsed}
            />
            <SidebarLink
              href="/expenses"
              icon={CircleDollarSign}
              label="Expenses"
              isCollapsed={isSidebarCollapsed}
            /> */}
          </div>
    
          {/* FOOTER */}
          <div className={`${isSidebarCollapsed ? "hidden" : "block"} mb-10`}>
            <p className="text-center text-xs text-gray-500">&copy; 2024 Rashedul</p>
          </div>
        </div>
      );
    };
    
    export default Sidebar;