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
import Leaderboard from "./pages/ambassador/Leaderboard";
import MerchantScan from "./pages/merchant/MerchantScan";
import MerchantConfirm from "./pages/merchant/MerchantConfirm";
import MerchantSuccess from "./pages/merchant/MerchantSuccess";
import MerchantError from "./pages/merchant/MerchantError";
import BusinessLogin from "./pages/business/BusinessLogin";
import BusinessDashboard from "./pages/business/BusinessDashboard";
import CampaignList from "./pages/business/CampaignList";
import CampaignNew from "./pages/business/CampaignNew";
import BusinessLanding from "./pages/business/BusinessLanding";
import ProLanding from "./pages/pro/ProLanding";
import AudienceList from "./pages/business/AudienceList";
import VerificationCenter from "./pages/business/VerificationCenter";
import Sampling from "./pages/business/Sampling";
import Reports from "./pages/business/Reports";
import MerchantLogin from "./pages/merchant/MerchantLogin";
import MerchantHome from "./pages/merchant/MerchantHome";
import MerchantRedemptions from "./pages/merchant/MerchantRedemptions";
import MerchantIssuePoints from "./pages/merchant/MerchantIssuePoints";
import MerchantSupport from "./pages/merchant/MerchantSupport";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminOrganizations from "./pages/admin/AdminOrganizations";
import AdminCampaigns from "./pages/admin/AdminCampaigns";
import AdminMembers from "./pages/admin/AdminMembers";
import AdminRisk from "./pages/admin/AdminRisk";
import AdminPoints from "./pages/admin/AdminPoints";
import AdminRedemptions from "./pages/admin/AdminRedemptions";
import AdminSupport from "./pages/admin/AdminSupport";
import AdminSettlement from "./pages/admin/AdminSettlement";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminAudit from "./pages/admin/AdminAudit";
import Consent from "./pages/me/Consent";

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
              <Route path={"/ambassador/leaderboard"} component={Leaderboard} />
              <Route path={"/merchant/scan"} component={MerchantScan} />
              <Route path={"/merchant/confirm"} component={MerchantConfirm} />
              <Route path={"/merchant/success"} component={MerchantSuccess} />
              <Route path={"/merchant/error"} component={MerchantError} />
              <Route path={"/business/login"} component={BusinessLogin} />
              <Route path={"/business/dashboard"} component={BusinessDashboard} />
              <Route path={"/business/campaigns"} component={CampaignList} />
              <Route path={"/business/campaigns/new"} component={CampaignNew} />
              <Route path={"/business"} component={BusinessLanding} />
              <Route path={"/pro"} component={ProLanding} />
              <Route path={"/business/audiences"} component={AudienceList} />
              <Route path={"/business/verification"} component={VerificationCenter} />
              <Route path={"/business/sampling"} component={Sampling} />
              <Route path={"/business/reports"} component={Reports} />
              <Route path={"/merchant/login"} component={MerchantLogin} />
              <Route path={"/merchant/home"} component={MerchantHome} />
              <Route path={"/merchant/redemptions"} component={MerchantRedemptions} />
              <Route path={"/merchant/points/issue"} component={MerchantIssuePoints} />
              <Route path={"/merchant/support"} component={MerchantSupport} />
              <Route path={"/admin/login"} component={AdminLogin} />
              <Route path={"/admin/dashboard"} component={AdminDashboard} />
              <Route path={"/admin/organizations"} component={AdminOrganizations} />
              <Route path={"/admin/campaigns"} component={AdminCampaigns} />
              <Route path={"/admin/members"} component={AdminMembers} />
              <Route path={"/admin/risk"} component={AdminRisk} />
              <Route path={"/admin/points"} component={AdminPoints} />
              <Route path={"/admin/redemptions"} component={AdminRedemptions} />
              <Route path={"/admin/support"} component={AdminSupport} />
              <Route path={"/admin/settlement"} component={AdminSettlement} />
              <Route path={"/admin/settings"} component={AdminSettings} />
              <Route path={"/admin/audit"} component={AdminAudit} />
              <Route path={"/consent"} component={Consent} />
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
