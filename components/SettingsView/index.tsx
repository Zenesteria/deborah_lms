import React from "react";
import ViewBtn from "./ViewBtn";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import ProfilePic from "./ProfilePic";
import SettingsForm from "./SettingsForm";

export default function Settings() {
  const dashboardState = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  return (
    <div
      className="w-full min-h-[70vh] my-4 bg-white rounded-xl max-h-screen overflow-auto p-7 z-[200] relative"
      style={{ animation: "slide_up_fast 1s ease" }}
    >
      <div className="w-full flex">
        <ViewBtn text="Settings" />
        <ViewBtn text="Login & Security" />
        <ViewBtn text="Notifications" />
        <ViewBtn text="Interface" />
      </div>

      {/* Account Settings View */}
      {dashboardState.view == "Settings" ? (
        <div className="">
          <ProfilePic />

          <SettingsForm
            email="kenoncs.official@college.com"
            fname="Reinhard Kenson"
            phoneNumber="9952508995"
            about="I am a staff. . ."
            staffId="6022020"
          />
        </div>
      ) : null}
    </div>
  );
}
