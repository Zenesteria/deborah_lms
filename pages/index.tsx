import {
  UserDashboard,
  TextSlider_A,
  NewArrivals,
  HomeView,
  SearchView,
  ShelfView,
  ContributionView,
} from "@/components";
import { RootState } from "@/redux/store";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Home() {
  const dashboardState = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  return (
    <UserDashboard>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="flex-1 min-h-full p-10 flex items-center bg-[#F3F3F7] relative overflow-hidden">
        {dashboardState.view == "default" ? <HomeView /> : null}
        {dashboardState.view == 'Search' ? <SearchView /> : null}
        {dashboardState.view == 'My Shelf' ? <ShelfView /> : null}
        {dashboardState.view == 'Contribute' ? <ContributionView /> : null}
      </div>
    </UserDashboard>
  );
}