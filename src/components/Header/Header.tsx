import { Link as RouterLink } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Button,
  IconButton,
  Badge,
} from "@mui/material";
import UserAvatar from "../Common/UserAvatar";
import { getCurrentUser } from "../../services/authService";
import { getActivities } from "../../services/activityService";

export default function Header() {
  const [search, setSearch] = useState("");

  const currentUser = getCurrentUser();
  const activities = getActivities();


  return (
    <AppBar
      position="sticky"
      sx={{
        height: { xs: "auto", md: 80 },
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        px: { xs: 2, md: 4 },
        py: { xs: 2, md: 0 },
        flexWrap: { xs: "wrap", md: "nowrap" },
        gap: { xs: 1.5, md: 0 },
        top: 0,
        zIndex: 100,
      }}
    >
      <Toolbar
        sx={{
          p: 0,
          minHeight: { xs: "auto", md: 80 },
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: { xs: "wrap", md: "nowrap" },
          gap: { xs: 1.5, md: 0 },
        }}
      >
        {/* Search Section */}
        <Box
          sx={{
            flex: { xs: "1 1 100%", md: "1" },
            maxWidth: { xs: "100%", md: "500px" },
            mx: { xs: 0, md: 5 },
            order: { xs: 3, md: 0 },
          }}
        >
          <InputBase
            placeholder="جستجو در پروژه‌ها و تسک‌ها..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              width: "100%",
              height: { xs: 44, md: 50 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "12px",
              px: 2.25,
              bgcolor: "background.default",
              "& .MuiInputBase-input": {
                p: 0,
                height: "100%",
              },
            }}
          />
        </Box>

        {/* Actions Section */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1.5,
            flex: { xs: "0 0 auto", md: "0 0 auto" },
          }}
        >
          <Button
            component={RouterLink}
            to="/create-task"
            sx={{
              height: 48,
              px: 2.5,
              border: "none",
              borderRadius: "8px",
              bgcolor: "primary.main",
              color: "white",
              fontWeight: 700,
              display: { xs: "none", sm: "flex" },
              "&:hover": {
                bgcolor: "primary.dark",
              },
            }}
          >
            ایجاد تسک
          </Button>

          <Badge badgeContent={activities.length} color="error">
            <Button
              component={RouterLink}
              to="/notifications"
              color="inherit"
              sx={{
                width: { xs: 40, md: 46 },
                height: { xs: 40, md: 46 },
                border: "1px solid",
                borderColor: "divider",
                borderRadius: "8px",
                bgcolor: "background.paper",
                minWidth: 0,
              }}
            >
              <NotificationsIcon />
            </Button>
          </Badge>

          <IconButton
            sx={{
              width: { xs: 40, md: 46 },
              height: { xs: 40, md: 46 },
              border: "1px solid",
              borderColor: "divider",
              borderRadius: "8px",
              bgcolor: "background.paper",
            }}
          >
            💬
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
            <UserAvatar
              sx={{
                width: { xs: 40, md: 44 },
                height: { xs: 40, md: 44 },
                bgcolor: "primary.main",
                color: "white",
              }}
            />

            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <Typography
                sx={{ color: "text.primary", fontWeight: 500, fontSize: 14 }}
              >
                {currentUser?.fullName}
              </Typography>
              <Typography sx={{ color: "text.secondary", fontSize: 13 }}>
                {currentUser?.role}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
