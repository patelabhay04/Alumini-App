import { ProfileSidebar } from "./ProfileSidebar";
import { Feed } from "./Feed";

export function HomePage() {
  return (
    <div className="flex max-w-7xl mx-auto">
      <ProfileSidebar />
      <Feed />
    </div>
  );
}