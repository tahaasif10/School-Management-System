import React from 'react';
import { 
  Users, 
  GraduationCap, 
  ShieldAlert, 
  Calendar, 
  Search, 
  Filter, 
  Download, 
  UserPlus, 
  Bell, 
  Mail, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  ChevronLeft, 
  ChevronRight 
} from 'lucide-react';

export default function StaffManagement() {
  const staffData = [
    {
      id: "STF-2018-045",
      name: "Dr. Sarah Jenkins",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=faces",
      designation: "Senior Lecturer",
      department: "Mathematics",
      status: "Active"
    },
    {
      id: "STF-2019-112",
      name: "Robert Chen",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=faces",
      designation: "Head of Operations",
      department: "Administration",
      status: "Active"
    },
    {
      id: "STF-2021-088",
      name: "Emily Watson",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=faces",
      designation: "Lecturer",
      department: "English",
      status: "On Leave"
    },
    {
      id: "STF-2015-023",
      name: "Prof. David Miller",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=faces",
      designation: "Department Head",
      department: "Science",
      status: "Active"
    },
    {
      id: "STF-2023-156",
      name: "Lisa Thompson",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces",
      designation: "Senior Accountant",
      department: "Finance",
      status: "Active"
    }
  ];

  return (
    <div className="flex-1 bg-slate-50 min-h-screen p-6 overflow-y-auto">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input 
            type="text" 
            placeholder="Search students, teachers, IDs..." 
            className="w-full pl-9 pr-4 py-2 bg-white rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex items-center gap-4 self-end md:self-auto">
          <button className="flex items-center gap-2 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50">
            <MapPin className="w-3.5 h-3.5 text-blue-600" />
            All Campuses
          </button>
          
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 relative">
            <Bell className="w-4 h-4" />
          </button>
          
          <button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50">
            <Mail className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
            <div className="text-right">
              <p className="text-xs font-bold text-slate-800">Admin Ahmed</p>
              <p className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">SUPER ADMINISTRATOR</p>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=faces" 
              alt="Admin" 
              className="w-8 h-8 rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Page Title & Main Action Button */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Staff Management</h1>
          <p className="text-sm text-slate-500">Manage faculty, administration, and support staff</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">
          <UserPlus className="w-4 h-4" />
          Hire New Staff
        </button>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">TOTAL STAFF</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">286</h2>
            </div>
            <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
              <Users className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-emerald-600 font-medium flex items-center gap-1">
            <span>↗</span> +4 new this term
          </p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">TEACHERS</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">210</h2>
            </div>
            <div className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl">
              <GraduationCap className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">73% of total staff</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">ADMIN STAFF</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">76</h2>
            </div>
            <div className="p-2.5 bg-amber-50 text-amber-600 rounded-xl">
              <ShieldAlert className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">27% of total staff</p>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">ON LEAVE</p>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-1">12</h2>
            </div>
            <div className="p-2.5 bg-rose-50 text-rose-500 rounded-xl">
              <Calendar className="w-5 h-5" />
            </div>
          </div>
          <p className="text-xs text-slate-500 font-medium">Requires coverage</p>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-slate-800 text-base">Staff Directory</h3>
              <div className="flex items-center gap-2">
                <button className="p-1.5 hover:bg-slate-100 rounded border border-slate-200 text-slate-600">
                  <Filter className="w-4 h-4" />
                </button>
                <button className="p-1.5 hover:bg-slate-100 rounded border border-slate-200 text-slate-600">
                  <Download className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    <th className="pb-3">STAFF ID</th>
                    <th className="pb-3">NAME</th>
                    <th className="pb-3">DESIGNATION</th>
                    <th className="pb-3">DEPARTMENT</th>
                    <th className="pb-3">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {staffData.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-3.5 text-xs text-slate-500 font-medium">{row.id}</td>
                      <td className="py-3.5">
                        <div className="flex items-center gap-2.5">
                          <img src={row.avatar} alt={row.name} className="w-8 h-8 rounded-full object-cover" />
                          <span className="font-medium text-slate-800 text-xs">{row.name}</span>
                        </div>
                      </td>
                      <td className="py-3.5 text-xs text-slate-600">{row.designation}</td>
                      <td className="py-3.5 text-xs text-slate-600">{row.department}</td>
                      <td className="py-3.5">
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-semibold ${
                          row.status === 'Active' 
                            ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' 
                            : 'bg-amber-50 text-amber-600 border border-amber-200'
                        }`}>
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex justify-between items-center pt-4 border-t border-slate-100 mt-4">
            <p className="text-xs text-slate-500">Showing 1 to 5 of 286 entries</p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-slate-200 text-slate-600 text-xs rounded hover:bg-slate-50">Previous</button>
              <button className="px-3 py-1 border border-slate-200 text-slate-600 text-xs rounded hover:bg-slate-50">Next</button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h3 className="font-bold text-slate-800 text-sm">Department Distribution</h3>
            <p className="text-xs text-slate-400 mb-6">Staff allocation across faculties</p>

            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40 rounded-full flex items-center justify-center"
                   style={{
                     background: 'conic-gradient(#2563eb 0% 40%, #0f172a 40% 75%, #3b82f6 75% 90%, #fef08a 90% 100%)'
                   }}>
                <div className="w-24 h-24 bg-white rounded-full"></div>
              </div>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                  <span className="text-slate-600 font-medium">Science & Math</span>
                </div>
                <span className="font-bold text-slate-800">40%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-slate-900"></span>
                  <span className="text-slate-600 font-medium">Arts & Humanities</span>
                </div>
                <span className="font-bold text-slate-800">35%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <span className="text-slate-600 font-medium">Administration</span>
                </div>
                <span className="font-bold text-slate-800">15%</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-200"></span>
                  <span className="text-slate-600 font-medium">Support Staff</span>
                </div>
                <span className="font-bold text-slate-800">10%</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
            <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-4">QUICK ACTIONS</h4>
            <div className="grid grid-cols-2 gap-3">
              <button className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mb-2">
                  <DollarSign className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Manage Payroll</span>
              </button>

              <button className="flex flex-col items-center justify-center p-3 bg-slate-50 border border-slate-100 rounded-xl hover:bg-slate-100 transition">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg mb-2">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-slate-700">Attendance</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}