import {
  UserDashboard,
  TextSlider_A,
  NewArrivals,
  HomeView,
  SearchView,
  ShelfView,
  ContributionView,
} from "@/components";
import BookView from "@/components/BookView";
import { RootState } from "@/redux/store";
import Head from "next/head";
import { useSelector } from "react-redux";

export default function Home() {
  const dashboardState = useSelector(
    (state: RootState) => state.dashboardSlice
  );
  const user = useSelector((state: RootState) => state.dashboardSlice);
  return user.isLoggedIn ? (
    <UserDashboard>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <div className="flex-1 min-h-full p-10 flex items-center bg-[#F3F3F7] relative overflow-hidden">
        <div className="">
          {dashboardState.view == "default" ? <HomeView /> : null}
          {dashboardState.view == "Search" ? <SearchView /> : null}
          {dashboardState.view == "My Shelf" ? <ShelfView /> : null}
          {dashboardState.view == "Contribute" ? <ContributionView /> : null}
          {dashboardState.view == "Book" ? <BookView /> : null}
        </div>
      </div>
    </UserDashboard>
  ) : (
    <div className="">
      <h1>Protected Resource Please Login/Register</h1>
    </div>
  );
}
