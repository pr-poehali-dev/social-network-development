import { NavLink } from "react-router-dom";
import { Home, Users, MessageSquare, Image, Settings, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const NavItem = ({ to, icon, label }: NavItemProps) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
          isActive
            ? "bg-primary text-primary-foreground font-medium"
            : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
        )
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export const Sidebar = () => {
  return (
    <aside className="w-64 hidden md:block border-r bg-background h-[calc(100vh-4rem)] sticky top-16">
      <div className="space-y-4 py-4 px-3">
        <div className="space-y-1">
          <NavItem to="/" icon={<Home className="h-5 w-5" />} label="Лента" />
          <NavItem to="/friends" icon={<Users className="h-5 w-5" />} label="Друзья" />
          <NavItem to="/messages" icon={<MessageSquare className="h-5 w-5" />} label="Сообщения" />
          <NavItem to="/photos" icon={<Image className="h-5 w-5" />} label="Фотографии" />
          <NavItem to="/profile" icon={<User className="h-5 w-5" />} label="Профиль" />
          <NavItem to="/settings" icon={<Settings className="h-5 w-5" />} label="Настройки" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
