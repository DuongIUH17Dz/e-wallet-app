import React, { Suspense } from "react";
import { Header } from "../components/index/header";
import { Banner } from "../components/index/banner";
import { BottomTab } from "../components/index/bottomtab";
import { PointWallet } from "../components/index/pointwallet";
import { Event } from "../components/index/event";
import { Mission } from "../components/index/mission";
import { Gift } from "../components/index/gift";
const HomePage: React.FunctionComponent = () => {
  return (
    <div>
      <Header />
      <Banner />
      <PointWallet />
      <Event />
      <Mission />
      <Gift />
      <BottomTab />    
    </div>
  );
}

export default HomePage;
