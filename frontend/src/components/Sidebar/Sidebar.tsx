// src/components/Sidebar.tsx
"use client";

import Link from "next/link";
import {
  LayoutGrid,
  Users,
  GraduationCap,
  Building2,
  UserCheck,
  Calendar,
  CreditCard,
  Wallet,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
} from "lucide-react";

const mainLinks = [
  { label: "Dashboard", href: "/dashboard", icon: LayoutGrid },
  { label: "Students", href: "/students", icon: Users },
  { label: "Teachers & Staff", href: "/teachers", icon: GraduationCap },
  { label: "Classes & Sections", href: "/classes", icon: Building2 },
  { label: "Attendance", href: "/attendance", icon: UserCheck },
  { label: "Timetable", href: "/timetable", icon: Calendar },
];

const financeLinks = [
  { label: "Fee Management", href: "/fees", icon: CreditCard },
  { label: "Payroll", href: "/payroll", icon: Wallet },
];

const academicLinks = [
  { label: "Exams", href: "/exams", icon: BookOpen },
  { label: "Reports", href: "/reports", icon: BarChart3 },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-[#0d1526] text-gray-300 flex flex-col py-6 px-4">
      {/* Logo */}
      <div className="flex items-center gap-3 px-2 mb-8">
        <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white font-bold">
          A
        </div>
        <span className="font-semibold text-white text-lg">Admin Portal</span>
      </div>

      <nav className="flex-1 flex flex-col gap-6 overflow-y-auto">
        {/* Main */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">
            Main
          </p>
          <div className="flex flex-col gap-1">
            {mainLinks.map((item, i) => (
              <SidebarLink key={item.label} {...item} active={i === 0} />
            ))}
          </div>
        </div>

        {/* Finance */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">
            Finance
          </p>
          <div className="flex flex-col gap-1">
            {financeLinks.map((item) => (
              <SidebarLink key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* Academic */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">
            Academic
          </p>
          <div className="flex flex-col gap-1">
            {academicLinks.map((item) => (
              <SidebarLink key={item.label} {...item} />
            ))}
          </div>
        </div>

        {/* System */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase px-3 mb-2">
            System
          </p>
          <div className="flex flex-col gap-1">
            <SidebarLink label="Settings" href="/settings" icon={Settings} />
            <SidebarLink
              label="Logout"
              href="/logout"
              icon={LogOut}
              danger
            />
          </div>
        </div>
      </nav>
    </aside>
  );
}

function SidebarLink({
  label,
  href,
  icon: Icon,
  active,
  danger,
}: {
  label: string;
  href: string;
  icon: React.ElementType;
  active?: boolean;
  danger?: boolean;
}) {
  return (
    <Link
      href={href}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
        active
          ? "bg-blue-600 text-white"
          : danger
          ? "text-red-400 hover:bg-white/5"
          : "text-gray-300 hover:bg-white/5"
      }`}
    >
      <Icon size={18} />
      {label}
    </Link>
  );
}