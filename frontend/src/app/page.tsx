import Sidebar from "../components/Sidebar/Sidebar";
import StaffManagement from "../components/StaffManagement/StaffManagement";

export default function Home() {
  return (
    <div className="flex h-screen bg-slate-900 overflow-hidden">
      <Sidebar />
      <StaffManagement />
    </div>
  );
}