import AppSidebar from "./__components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";


function DashboardLayout({children}) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default DashboardLayout