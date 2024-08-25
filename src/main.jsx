import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./components/Errors/ErrorPage.jsx";
import PostsPage from "./pages/User/PostsPage/PostsPage.jsx";
import PersonalProfile from "./pages/User/ProfilePage/PersonalProfile.jsx";
import PublicProfile from "./pages/User/ProfilePage/PublicProfile.jsx";
import WritePostPage from "./pages/User/PostsPage/WritePostPage.jsx";
import SignInPage from "./pages/User/SignInPage/SignInPage.jsx";
import SignUpPage from "./pages/User/SignInPage/SignUpPage.jsx";
import ViewPostPage from "./pages/User/PostsPage/ViewPostPage.jsx";
import BlogPage from "./pages/Admin/BlogPage/BlogPage.jsx";
import WriteBlogPage from "./pages/Admin/BlogPage/WriteBlogPage.jsx";
import MapPage from "./pages/User/TravelPage/MapPage.jsx";
import ViewStaffPage from "./pages/Admin/StaffPage/ViewStaffPage.jsx";
import ViewUserGuide from "./pages/Admin/UserGuidePage/ViewUserGuide.jsx";
import CreateUserGuide from "./pages/Admin/UserGuidePage/CreateUserGuide.jsx";
import ViewBlogPage from "./pages/Admin/BlogPage/ViewBlogPage.jsx";
import Dashboard from "./pages/Admin/Dashboard/Dashboard.jsx";
import DashboardAccounts from "./pages/Admin/Dashboard/DashboardAccounts.jsx";
import DashboardUsers from "./pages/Admin/Dashboard/DashboardUsers.jsx";
import DashboardBans from "./pages/Admin/Dashboard/DashboardBans.jsx";
import DashboardPosts from "./pages/Admin/Dashboard/DashboardPosts.jsx";
import TravelItinerary from "./pages/User/TravelPage/TravelItinerary.jsx";
import ViewFAQ from "./pages/User/FAQPage/ViewFAQ.jsx"
import FeedbackPage from "./pages/User/Feedback/FeedbackPage.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AdminSignInPage from "./pages/Admin/Authentication/AdminSignInPage.jsx";
import UserBlogPage from "./pages/User/BlogPage/UserBlogPage.jsx";
import FeedbackManagementPage from "./pages/Admin/FeedbackManagement/FeedbackManagementPage.jsx";
import EditUserGuide from "./components/UserGuide/EditUserGuide.jsx";
import FeedbackSingleView from "./components/Feedback/FeedbackSingleView.jsx";
import BugReportSingleView from "./components/Feedback/BugReportSingleView.jsx";
import ReportManagementPage from "./pages/Admin/ReportManagement/ReportManagementPage.jsx";
import AdminViewPostPage from "./pages/Admin/ReportManagement/AdminViewPostPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/user",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/posts",
    element: <PostsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/profile",
    element: <PersonalProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/profile-public",
    element: <PublicProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/post-create",
    element: <WritePostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/travel-itinerary",
    element: <TravelItinerary />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/feedback",
    element: <FeedbackPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/blogs",
    element: <UserBlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/signup",
    element: <SignUpPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/post-view",
    element: <ViewPostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/map-view",
    element: <MapPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/user/faq-view",
    element: <ViewFAQ />,
    errorElement: <ErrorPage />,
  },
  
  {
    path: "/admin",
    element: <AdminSignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/profile",
    element: <PersonalProfile />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-users",
    element: <DashboardUsers />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-bans",
    element: <DashboardBans />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-accounts",
    element: <DashboardAccounts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/dashboard-posts",
    element: <DashboardPosts />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/blogs",
    element: <BlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog/blog-view/:blogId",
    element: <ViewBlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/blog-create",
    element: <WriteBlogPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/report-management",
    element: <ReportManagementPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/signin",
    element: <SignInPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/staff-view",
    element: <ViewStaffPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/staff-create",
    element: <ViewPostPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/user-guide",
    element: <ViewUserGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/user-guide-create",
    element: <CreateUserGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/user-guide-edit/:id",
    element: <EditUserGuide />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/feedback-management",
    element: <FeedbackManagementPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/feedback/:id",
    element: <FeedbackSingleView />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/bugreport/:id",
    element: <BugReportSingleView />, //change to single bug report view
    errorElement: <ErrorPage />,
  },
  {
    path: "/admin/post-view",
    element: <AdminViewPostPage />, //change to single bug report view
    errorElement: <ErrorPage />,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
