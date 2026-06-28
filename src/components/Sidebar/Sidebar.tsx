import { NavLink, useNavigate } from "react-router-dom";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Folder as FolderIcon,
  Assignment as AssignmentIcon,
  People as PeopleIcon,
  Notifications as NotificationsIcon,
  Person as PersonIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
} from "@mui/icons-material";
import { getCurrentUser, logout } from "../../services/authService";
import UserAvatar from "../Common/UserAvatar";

export default function Sidebar() {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  const navItems = [
    { to: "/", icon: <DashboardIcon />, label: "داشبورد" },
    { to: "/projects", icon: <FolderIcon />, label: "پروژه‌ها" },
    { to: "/kanban", icon: <AssignmentIcon />, label: "کانبان" },
    { to: "/members", icon: <PeopleIcon />, label: "اعضا" },
    { to: "/notifications", icon: <NotificationsIcon />, label: "اعلان‌ها" },
    { to: "/profile", icon: <PersonIcon />, label: "پروفایل" },
    { to: "/settings", icon: <SettingsIcon />, label: "تنظیمات" },
  ];

  return (
    <Box
      sx={{
        width: 280,
        minHeight: "100vh",
        bgcolor: "background.paper",
        borderRight: 1,
        borderColor: "divider",
        display: "flex",
        flexDirection: "column",
        p: 3,
        flexShrink: 0,
      }}
    >
      {/* Logo */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 5 }}>
        <Box
          sx={{
            width: 52,
            height: 52,
            borderRadius: 1,
            bgcolor: "primary.main",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          م
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 600 }}>سیستم مدیریت</Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            پروژه‌های سازمانی
          </Typography>
        </Box>
      </Box>

      {/* Navigation Links */}
      <List sx={{ flex: 1, p: 0 }}>
        {navItems.map((item) => (
          <ListItem key={item.to} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={NavLink}
              to={item.to}
              sx={{
                height: 50,
                borderRadius: 2,
                gap: 2,
                color: "text.secondary",
                transition: "all 0.2s ease",
                "&:hover": {
                  bgcolor: "rgba(99, 102, 241, 0.08)",
                  color: "primary.main",
                },
                "&.active": {
                  bgcolor: "primary.main",
                  color: "white",
                  fontWeight: 700,
                  boxShadow: "0 4px 12px rgba(99, 102, 241, 0.3)",
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                  "&:hover": {
                    bgcolor: "primary.dark",
                    boxShadow: "0 4px 16px rgba(99, 102, 241, 0.4)",
                  },
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: "auto", color: "inherit" }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "0.95rem",
                  },
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}

        {/* Logout Button */}
        <ListItem disablePadding>
          <ListItemButton
            onClick={handleLogout}
            sx={{
              height: 50,
              borderRadius: 1,
              gap: 2,
              color: "text.secondary",
              "&:hover": { bgcolor: "action.hover" },
            }}
          >
            <ListItemIcon sx={{ minWidth: "auto", color: "inherit" }}>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="خروج" />
          </ListItemButton>
        </ListItem>
      </List>

      {/* User Card */}
      <Box sx={{ pt: 2, borderTop: 1, borderColor: "divider" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <UserAvatar sx={{ bgcolor: "primary.main", width: 44, height: 44 }} />
          <Box>
            <Typography sx={{ fontWeight: 700 }}>
              {currentUser?.fullName}
            </Typography>
            <Typography variant="caption" sx={{ color: "text.secondary" }}>
              {currentUser?.role}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
