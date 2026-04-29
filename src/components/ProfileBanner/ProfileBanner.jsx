import { User } from "lucide-react";
import "./ProfileBanner.css";

export default function ProfileBanner() {
  return (
    <div className="profile-banner">
      <div className="profile-left">
        <User size={20} />
        <span>Complete Your Health Profile</span>
      </div>

      <button>Complete Now</button>
    </div>
  );
}