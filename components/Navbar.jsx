import React, { useState } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaImage,
  FaBell,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const menu = (
    <ul className="space-y-2">
      {[
        { icon: FaHome, label: "Home", link: "/" },
        { icon: FaUser, label: "Profile", link: "/profile" },
        { icon: FaEnvelope, label: "Messages", link: "/messages" },
        { icon: FaImage, label: "Photos", link: "/photos" },
        { icon: FaBell, label: "Notifications", link: "/notifications" },
        { icon: FaCog, label: "Settings", link: "/settings" },
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <li key={i}>
            <a
              href={item.link}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-primary hover:text-white transition"
            >
              <Icon size={18} />
              <span>{item.label}</span>
            </a>
          </li>
        );
      })}
    </ul>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-base-100 shadow">
        <h1 className="text-xl font-bold text-primary hidden md:flex">
          FriendHub
        </h1>
        <button className="absolute top-2 left-2" onClick={() => setOpen(true)}>
          <FaBars size={22} />
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-base-100 shadow-xl z-50 transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 flex justify-between items-center border-b">
          <h1 className="text-xl font-bold text-primary">FriendHub</h1>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="p-5">{menu}</div>

        <div className="p-5 border-t">
          <button className="flex items-center gap-3 w-full p-3 rounded-xl bg-error text-white">
            <FaSignOutAlt />
            Logout
          </button>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <div className="hidden md:flex h-screen w-64 bg-base-100 border-r shadow-xl flex-col justify-between p-5">
        <div>
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-primary">FriendHub</h1>
            <p className="text-sm text-base-content/60">
              Connect with your friends ✨
            </p>
          </div>

          {menu}
        </div>

        <div>
          <button className="flex items-center gap-4 w-full p-4 rounded-2xl bg-error text-white">
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
