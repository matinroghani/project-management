import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import MainDashboardPage from "./pages/MainDashboard/MainDashboardPage";

import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";
import { initUsers } from "./utils/initialUsers";
import AuthLayout from "./layouts/AuthLayout/AuthLayout.tsx";
import DashBoardLayouts from "./layouts/DashBoardLayouts/DashBoardLayouts";
import ProjectsPage from "./pages/ProjectPage/ProjectsPage";
import KanbanBoardPage from "./pages/KanbanBoardPage/KanbanBoardPage.tsx";
import MembersPage from "./pages/MembersPage/MembersPage.tsx";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import SettingsPage from "./pages/SettingsPage/SettingsPage.tsx";
import CreateTaskPage from "./pages/CreateTaskPage/CreateTaskPage.tsx";
import TaskDetailsPage from "./pages/TaskDetailsPage/TaskDetailsPage.tsx";
import CreateProjectPage from "./pages/CreateProjectPage/CreateProjectPage.tsx";
import ProjectDetailsPage from "./pages/ProjectDetailsPage/ProjectDetailsPage.tsx";

export default function App() {
  initUsers();
  return (
    <Router>
      <Routes>
        {/* root redirect */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Auth Layout */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        {/* Dashboard Layout */}
        <Route
          element={
            <ProtectedRoute>
              <DashBoardLayouts />
            </ProtectedRoute>
          }
        >
          <Route path="/dashboard" element={<MainDashboardPage/>} />
          <Route path="/projects" element={<ProjectsPage/>} />
          <Route path="/kanban" element={<KanbanBoardPage/>} />
          <Route path="/members" element={<MembersPage/>} />
          <Route path="/notifications" element={<NotificationsPage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/settings" element={<SettingsPage/>} />
          <Route path="/create-task" element={<CreateTaskPage/>} />
          <Route path="/tasks/:id" element={<TaskDetailsPage/>} />
          <Route path="/create-project" element={<CreateProjectPage />} />
          <Route path="/project-detail" element={<ProjectDetailsPage />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}
