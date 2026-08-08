"use client";

import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function TopBar() {
  return (
    <div className="hidden bg-blue-900 text-white lg:block">
      <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-6 text-sm">

          <div className="flex items-center gap-2">
            <Phone size={15} />
            <span>+91 9421182990</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={15} />
            <span>pristineimiraj@gmail.com</span>
          </div>

        </div>

        <div className="flex items-center gap-2 text-sm">

          <MapPin size={15} />

          <span>Miraj, Maharashtra</span>

        </div>

      </div>
    </div>
  );
}