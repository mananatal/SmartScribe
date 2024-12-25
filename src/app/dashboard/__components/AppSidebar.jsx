import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Progress } from "@/components/ui/progress"

import { LayoutPanelLeft, Plus, ShieldEllipsis,BadgeCheck } from "lucide-react";
import { NavUser } from "./NavUser";
import { useUser } from "@clerk/nextjs";

function AppSidebar() {
    const items = [
      {
        title: "Workspace",
        url: "/dashboard",
        icon: LayoutPanelLeft,
      },
      {
        title: "Account",
        url: "/dashboard/user-profile",
        icon: BadgeCheck,
      },
      {
        title: "Upgrade plan",
        url: "/dashboard/upgrade",
        icon: ShieldEllipsis,
      },
    ];

    return (
      <Sidebar>
        <SidebarHeader className={"mt-4"}>
          <Logo/>
          <Separator/>
          <Button className={"mt-2"}>
            <Plus/>
            Upload
          </Button>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className={"mb-8"}>
          <Progress value={33} />
          <div className="ml-1 font-semibold text-sm">2 out of 5 PDF uploaded</div>
          <div className="ml-1 opacity-80 text-sm mb-4">Upgrade to Upload more PDF</div>
          <NavUser/>
        </SidebarFooter>
      </Sidebar>
    )
}

export default AppSidebar