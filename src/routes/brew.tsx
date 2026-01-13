import { Title } from "@solidjs/meta";
import HomeSection from "~/components/index/HomeSection";
import Sidebar from "~/components/index/Sidebar";
import SidebarItem from "~/components/index/SidebarItem";

import BrewPage from "~/components/brew/BrewPage";

export default function Brew() {
  return (
    <HomeSection>
      <Sidebar>
        <SidebarItem isActive={true} href="/brew">Brew</SidebarItem>
        <SidebarItem href="/recipes">Recipes</SidebarItem>
        <SidebarItem href="/history">History</SidebarItem>
      </Sidebar>
      <BrewPage />
    </HomeSection>
  );
}
