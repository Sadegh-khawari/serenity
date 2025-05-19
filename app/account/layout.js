import SideNavigation from "@/app/_components/SideNavigation";

export default function Layout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[16rem_1fr] h-full gap-8 md:gap-12">
      <SideNavigation />
      <div className="py-1 px-4 md:px-0">{children}</div>
    </div>
  );
}
