import { getSystemInfo } from "zmp-sdk";
import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";
import { AppProps } from "zmp-ui/app";

import HomePage from "@/pages/index";
import EventPage from "@/pages/eventpage";
import MissionPage from "@/pages/missionPage";
import WalletPage from "@/pages/walletPage";
import DetailMission from "@/pages/detailMission";
import DetailEvent from "@/pages/detailEvent";
import AccountPage from "@/pages/accountPage";
import GiftWarehouse from "@/pages/giftWarehouse";  
import HistoryPage from "@/pages/historyPage";  

const Layout = () => {
  return (
    <App theme={getSystemInfo().zaloTheme as AppProps["theme"]}>
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />} />
            <Route path="/eventpage" element={<EventPage />} />
            <Route path="/missionPage" element={<MissionPage />} />
            <Route path="/walletPage" element={<WalletPage />} />
            <Route path="/mission/:id" element={<DetailMission />} />
            <Route path="/event/:id" element={<DetailEvent />} />
            <Route path="/account" element={<AccountPage />} />
            <Route path="/gift-warehouse" element={<GiftWarehouse />} />
            <Route path="/history" element={<HistoryPage />} />
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default Layout;