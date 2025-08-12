import React, { Suspense } from "react";
import { Header } from "./header";
import { Banner } from "./banner";
import { BottomTab } from "./bottomtab";
import { PointWallet } from "./pointwallet";
import { Event } from "./event";
import { Mission } from "./mission";
import { Gift } from "./gift";
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
