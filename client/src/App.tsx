import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { DemoProvider } from "./contexts/DemoContext";
import ResponsiveShell from "./components/ResponsiveShell";

// 啟動與引導
import Splash from "./pages/onboarding/Splash";
import Welcome from "./pages/onboarding/Welcome";
import Login from "./pages/onboarding/Login";
import Guide from "./pages/onboarding/Guide";
import PetForm from "./pages/onboarding/PetForm";
import PetDone from "./pages/onboarding/PetDone";
// 會員
import MemberHome from "./pages/home/MemberHome";
import PetProfile from "./pages/pet/PetProfile";
import PetEdit from "./pages/pet/PetEdit";
import PetCard from "./pages/pet/PetCard";
import Wallet from "./pages/wallet/Wallet";
import History from "./pages/wallet/History";
import MemberCode from "./pages/wallet/MemberCode";
import PointsRules from "./pages/wallet/PointsRules";
import TaskCenter from "./pages/tasks/TaskCenter";
import TaskDetail from "./pages/tasks/TaskDetail";
import TaskDone from "./pages/tasks/TaskDone";
import ContentBridge from "./pages/tasks/ContentBridge";
import CourseBridge from "./pages/tasks/CourseBridge";
import Verify from "./pages/tasks/Verify";
import BrandTaskDetail from "./pages/tasks/BrandTaskDetail";
import DailyCheckin from "./pages/daily/DailyCheckin";
import RewardHome from "./pages/rewards/RewardHome";
import RewardDetail from "./pages/rewards/RewardDetail";
import RedeemConfirm from "./pages/rewards/RedeemConfirm";
import RedeemSuccess from "./pages/rewards/RedeemSuccess";
import MyCoupons from "./pages/coupons/MyCoupons";
import CouponDetail from "./pages/coupons/CouponDetail";
import Redeemed from "./pages/coupons/Redeemed";
import MerchantList from "./pages/merchants/MerchantList";
import MerchantDetail from "./pages/merchants/MerchantDetail";
import MemberCenter from "./pages/me/MemberCenter";
import Settings from "./pages/me/Settings";
import AiAssistant from "./pages/ai/AiAssistant";
import Notifications from "./pages/notifications/Notifications";
import DesktopHome from "./pages/desktop/DesktopHome";
import AmbassadorCenter from "./pages/ambassador/AmbassadorCenter";

function Router() {
  return (
    <Switch>
      {/* 響應式佈局：PC 為官網，手機為 App */}
      <Route>
        {() => (
          <ResponsiveShell>
            <Switch>
              <Route path={"/"} component={DesktopHome} />
              <Route path={"/welcome"} component={Welcome} />
              <Route path={"/login"} component={Login} />
              <Route path={"/guide"} component={Guide} />
              <Route path={"/pet/new"} component={PetForm} />
              <Route path={"/pet/done"} component={PetDone} />
              <Route path={"/home"} component={MemberHome} />
              <Route path={"/pets/:id"} component={PetProfile} />
              <Route path={"/pets/:id/edit"} component={PetEdit} />
              <Route path={"/pets/:id/card"} component={PetCard} />
              <Route path={"/wallet"} component={Wallet} />
              <Route path={"/wallet/history"} component={History} />
              <Route path={"/wallet/code"} component={MemberCode} />
              <Route path={"/wallet/rules"} component={PointsRules} />
              <Route path={"/tasks"} component={TaskCenter} />
              <Route path={"/tasks/:id"} component={TaskDetail} />
              <Route path={"/tasks/:id/done"} component={TaskDone} />
              <Route path={"/tasks/content/:id"} component={ContentBridge} />
              <Route path={"/tasks/course/:id"} component={CourseBridge} />
              <Route path={"/tasks/verify/:id"} component={Verify} />
              <Route path={"/brand-tasks/:id"} component={BrandTaskDetail} />
              <Route path={"/daily"} component={DailyCheckin} />
              <Route path={"/rewards"} component={RewardHome} />
              <Route path={"/rewards/:id"} component={RewardDetail} />
              <Route path={"/rewards/:id/confirm"} component={RedeemConfirm} />
              <Route path={"/rewards/:id/success"} component={RedeemSuccess} />
              <Route path={"/coupons"} component={MyCoupons} />
              <Route path={"/coupons/:id"} component={CouponDetail} />
              <Route path={"/coupons/:id/redeemed"} component={Redeemed} />
              <Route path={"/merchants"} component={MerchantList} />
              <Route path={"/merchants/:id"} component={MerchantDetail} />
              <Route path={"/me"} component={MemberCenter} />
              <Route path={"/settings"} component={Settings} />
              <Route path={"/ai"} component={AiAssistant} />
              <Route path={"/notifications"} component={Notifications} />
              <Route path={"/ambassador"} component={AmbassadorCenter} />
              <Route path={"/favorites"} component={MemberCenter} />
              <Route path={"/support"} component={MemberCenter} />
              <Route component={NotFound} />
            </Switch>
          </ResponsiveShell>
        )}
      </Route>
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
      >
        <DemoProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
          </TooltipProvider>
        </DemoProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
