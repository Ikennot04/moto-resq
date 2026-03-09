"use client";
import { Search } from "../Components/dashboard/search/search";
import { NotificationAndHelp } from "../Components/dashboard/notificationandhelp/notificationandhelp";
import { ActiveUser } from "../Components/dashboard/activeuser/activeuser";

export default function Dashboard() {
  const search = (key: string) => {
    console.log(key);
  };
  const notification = () => {
    console.log("notification click");
  };
  const help = () => {
    console.log("help click");
  };
  const dropDown = () => {
    console.log("drop down");
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex-1 w-full max-w-3xl mr-8">
          <Search onSubmit={search} />
        </div>
        <div className="flex items-center gap-10">
          <NotificationAndHelp
            onNotificationClick={notification}
            onHelpClick={help}
          />
          <ActiveUser
            username="Cedrick"
            email="cedrickalegsao@gmail.com" 
            avatarUrl=""
            onDropdown={dropDown}
          />
        </div>

      </div>
    </div>
  );
}