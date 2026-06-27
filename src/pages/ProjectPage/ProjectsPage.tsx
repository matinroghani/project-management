import { Link } from "react-router-dom";
import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { getProjects } from "../../services/dashboardService";
import { filterConfig } from "../../utils/projectStats";
import { useState } from "react";
import ProjectPageCard from "../../components/Project/ProjectPageCard";

export default function ProjectsPage() {
  const projects = getProjects();

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.status === filter);

  const searchedProjects = filteredProjects.filter((project) =>
    project.name.toLocaleLowerCase().includes(search.toLowerCase()),
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#f6f8fb",
        p: 4,
        direction: "rtl",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: "32px",
              fontWeight: 700,
              color: "text.primary",
            }}
          >
            پروژه‌ها
          </Typography>

          <Typography
            sx={{
              mt: 1,
              color: "#6b7280",
            }}
          >
            مدیریت و مشاهده تمامی پروژه‌ها
          </Typography>
        </Box>

        <Button
          component={Link}
          to="/create-project"
          variant="contained"
          disableElevation
          sx={{
            height: 52,
            px: 3,
            borderRadius: "16px",
            backgroundColor: "#2563eb",
            fontWeight: 700,
          }}
        >
          ایجاد پروژه جدید
        </Button>
      </Box>

      {/* Toolbar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: 2.5,
          mb: 4,
        }}
      >
        <Box sx={{ flex: 1 }}>
          <TextField
            fullWidth
            placeholder="جستجوی پروژه..."
            variant="outlined"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            sx={{
              "& .MuiOutlinedInput-root": {
                height: 56,
                borderRadius: "18px",
                backgroundColor: "background.paper",
              },
            }}
          />
        </Box>
        <Stack direction="row" spacing={1.5}>
          {filterConfig.map((item) => (
            <Button
              key={item.filter}
              variant="outlined"
              onClick={() => setFilter(item.filter)}
              sx={{
                height: 56,
                px: 2.5,
                borderRadius: "16px",

                color: filter === item.filter ? "#fff" : "#374151",
                borderColor: filter === item.filter ? "#2563eb" : "#dbe2ea",
                backgroundColor: filter === item.filter ? "#2563eb" : "#fff",

                "&:hover": {
                  backgroundColor:
                    filter === item.filter ? "#1d4ed8" : "#f8fafc",
                  borderColor: filter === item.filter ? "#1d4ed8" : "#cbd5e1",
                },
              }}
            >
              {item.value}
            </Button>
          ))}
        </Stack>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={3}>
        {searchedProjects.map((project) => (
          <ProjectPageCard key={project.id} project={project} />
        ))}
      </Grid>
    </Box>
  );
}
