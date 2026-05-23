import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  Chip,
  Button,
  TextField,
  InputAdornment,
  Divider,
  IconButton,
  Tooltip,
  Container,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Alert,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Search as SearchIcon,
  PersonAdd as PersonAddIcon,
  Edit as EditIcon,
  DeleteOutlined as DeleteIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

const statusStyle = {
  Active: {
    bg: "rgba(52,211,153,0.1)",
    color: "#34d399",
    border: "rgba(52,211,153,0.2)",
  },
  Inactive: {
    bg: "rgba(239,68,68,0.1)",
    color: "#32cd32",
    border: "rgba(239,68,68,0.2)",
  },
  Pending: {
    bg: "rgba(249,115,22,0.1)",
    color: "#32cd32",
    border: "rgba(249,115,22,0.2)",
  },
};
const roleStyle = {
  Admin: {
    bg: "rgba(249,115,22,0.1)",
    color: "#32cd32",
    border: "rgba(249,115,22,0.2)",
  },
  Editor: {
    bg: "rgba(34,211,238,0.1)",
    color: "#22d3ee",
    border: "rgba(34,211,238,0.2)",
  },
  Viewer: {
    bg: "rgba(71,85,105,0.2)",
    color: "#94a3b8",
    border: "rgba(71,85,105,0.3)",
  },
  Manager: {
    bg: "rgba(167,139,250,0.1)",
    color: "#a78bfa",
    border: "rgba(167,139,250,0.2)",
  },
};

const rows = [
  {
    id: 1,
    name: "Herzsel Datul",
    email: "herzsel@example.com",
    role: "Admin",
    status: "Active",
    joined: "Jan 15, 2024",
    initials: "AB",
    avatarColor: "#32cd32",
  },
  {
    id: 2,
    name: "Ben Tenorio",
    email: "ben@example.com",
    role: "Editor",
    status: "Active",
    joined: "Feb 3, 2024",
    initials: "BC",
    avatarColor: "#22d3ee",
  },
  {
    id: 3,
    name: "LeBron Germs",
    email: "lebron@example.com",
    role: "Viewer",
    status: "Inactive",
    joined: "Mar 20, 2024",
    initials: "CT",
    avatarColor: "#a78bfa",
  },
  {
    id: 4,
    name: "Andy Lim",
    email: "andy@example.com",
    role: "Manager",
    status: "Active",
    joined: "Apr 8, 2024",
    initials: "DL",
    avatarColor: "#34d399",
  },
  {
    id: 5,
    name: "Malou Manay",
    email: "malou@example.com",
    role: "Editor",
    status: "Pending",
    joined: "Apr 22, 2024",
    initials: "ES",
    avatarColor: "#f472b6",
  },
  {
    id: 6,
    name: "Four of Spades",
    email: "spades@example.com",
    role: "Viewer",
    status: "Active",
    joined: "May 10, 2024",
    initials: "FO",
    avatarColor: "#818cf8",
  },
  {
    id: 7,
    name: "Bato Dela Rosa",
    email: "bato@example.com",
    role: "Editor",
    status: "Active",
    joined: "Jun 1, 2024",
    initials: "GG",
    avatarColor: "#2dd4bf",
  },
  {
    id: 8,
    name: "Kanibalismo Fitter",
    email: "fitter@example.com",
    role: "Viewer",
    status: "Inactive",
    joined: "Jun 18, 2024",
    initials: "HS",
    avatarColor: "#32cd32",
  },
  {
    id: 9,
    name: "Tol Fu",
    email: "Tulfo@example.com",
    role: "Admin",
    status: "Active",
    joined: "Jul 5, 2020",
    initials: "ID",
    avatarColor: "#06b6d4",
  },
  {
    id: 10,
    name: "Bruno Marce",
    email: "bruno@example.com",
    role: "Manager",
    status: "Pending",
    joined: "Jul 25, 2019",
    initials: "JR",
    avatarColor: "#84cc16",
  },
];

const columns = [
  {
    field: "name",
    headerName: "User",
    flex: 1.4,
    minWidth: 200,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" gap={1.5} height="100%">
        <Avatar
          sx={{
            bgcolor: `${params.row.avatarColor}20`,
            color: params.row.avatarColor,
            width: 36,
            height: 36,
            fontSize: "0.75rem",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            border: `1px solid ${params.row.avatarColor}40`,
          }}
        >
          {params.row.initials}
        </Avatar>
        <Box>
          <Typography
            sx={{
              fontFamily: "'Syne', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#e2e8f0",
              lineHeight: 1.3,
            }}
          >
            {params.value}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.7rem",
              color: "#475569",
            }}
          >
            {params.row.email}
          </Typography>
        </Box>
      </Box>
    ),
  },
  {
    field: "role",
    headerName: "Role",
    flex: 0.8,
    minWidth: 100,
    renderCell: (params) => {
      const s = roleStyle[params.value] || {};
      return (
        <Chip
          label={params.value}
          size="small"
          sx={{
            bgcolor: s.bg,
            color: s.color,
            border: `1px solid ${s.border}`,
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.7rem",
            height: 24,
            borderRadius: "6px",
          }}
        />
      );
    },
  },
  {
    field: "status",
    headerName: "Status",
    flex: 0.8,
    minWidth: 100,
    renderCell: (params) => {
      const s = statusStyle[params.value] || {};
      return (
        <Chip
          label={params.value}
          size="small"
          sx={{
            bgcolor: s.bg,
            color: s.color,
            border: `1px solid ${s.border}`,
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "0.7rem",
            height: 24,
            borderRadius: "6px",
          }}
        />
      );
    },
  },
  {
    field: "joined",
    headerName: "Date Joined",
    flex: 1,
    minWidth: 120,
    renderCell: (params) => (
      <Typography
        sx={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.8rem",
          color: "#475569",
        }}
      >
        {params.value}
      </Typography>
    ),
  },
  {
    field: "actions",
    headerName: "Actions",
    flex: 0.6,
    minWidth: 80,
    sortable: false,
    filterable: false,
    renderCell: (params) => (
      <Box display="flex" alignItems="center" gap={0.5}>
        <Tooltip title="Edit">
          <IconButton
            size="small"
            onClick={() => handleOpenDialog(params.row)}
            sx={{ color: "#475569", "&:hover": { color: "#32cd32" } }}
          >
            <EditIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton
            size="small"
            onClick={() => handleDeleteUser(params.row.id)}
            sx={{ color: "#475569", "&:hover": { color: "#ef4444" } }}
          >
            <DeleteIcon sx={{ fontSize: 18 }} />
          </IconButton>
        </Tooltip>
      </Box>
    ),
  },
];

export default function UsersPage() {
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    contactNumber: "",
    age: "",
    role: "",
    status: "Active",
    gender: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [editingId, setEditingId] = useState(null);
  const [allUsers, setAllUsers] = useState(rows);

  // Validation rules
  const validateForm = () => {
    const errors = {};

    if (!formData.firstName.trim()) errors.firstName = "First name is required";
    if (!formData.lastName.trim()) errors.lastName = "Last name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errors.email = "Invalid email format";
    
    if (!formData.username.trim()) errors.username = "Username is required";
    else if (formData.username.includes(" "))
      errors.username = "Username must not contain spaces";
    
    if (!formData.password && !editingId) errors.password = "Password is required";
    else if (formData.password && formData.password.length < 8)
      errors.password = "Password must be at least 8 characters";
    
    if (formData.contactNumber && !/^\d{11}$/.test(formData.contactNumber.replace(/\D/g, "")))
      errors.contactNumber = "Contact number must be 11 digits";
    
    if (formData.age && !/^\d+$/.test(formData.age))
      errors.age = "Age must be a number only";
    else if (formData.age && (parseInt(formData.age) < 1 || parseInt(formData.age) > 120))
      errors.age = "Age must be between 1 and 120";

    if (!formData.role) errors.role = "Role is required";
    if (!formData.gender) errors.gender = "Gender is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleOpenDialog = (user = null) => {
    if (user) {
      setEditingId(user.id);
      setFormData({
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ").slice(1).join(" "),
        email: user.email,
        username: user.email.split("@")[0],
        password: "",
        contactNumber: "",
        age: "",
        role: user.role,
        status: user.status,
        gender: "",
      });
    } else {
      setEditingId(null);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        contactNumber: "",
        age: "",
        role: "",
        status: "Active",
        gender: "",
      });
    }
    setFormErrors({});
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setFormErrors({});
  };

  const handleSaveUser = () => {
    if (!validateForm()) return;

    const fullName = `${formData.firstName} ${formData.lastName}`;
    const newUser = {
      id: editingId || Math.max(...allUsers.map((u) => u.id), 0) + 1,
      name: fullName,
      email: formData.email,
      role: formData.role,
      status: formData.status,
      joined: editingId
        ? allUsers.find((u) => u.id === editingId)?.joined
        : new Date().toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          }),
      initials: `${formData.firstName[0]}${formData.lastName[0]}`.toUpperCase(),
      avatarColor: [
        "#32cd32",
        "#22d3ee",
        "#a78bfa",
        "#f472b6",
        "#818cf8",
        "#2dd4bf",
        "#06b6d4",
        "#84cc16",
      ][Math.floor(Math.random() * 8)],
    };

    if (editingId) {
      setAllUsers(allUsers.map((u) => (u.id === editingId ? newUser : u)));
    } else {
      setAllUsers([...allUsers, newUser]);
    }

    handleCloseDialog();
  };

  const handleDeleteUser = (id) => {
    setAllUsers(allUsers.filter((u) => u.id !== id));
  };

  const filtered = allUsers.filter((r) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      r.name.toLowerCase().includes(searchLower) ||
      r.email.toLowerCase().includes(searchLower) ||
      r.role.toLowerCase().includes(searchLower);

    const matchesRole = !roleFilter || r.role === roleFilter;
    const matchesStatus = !statusFilter || r.status === statusFilter;

    return matchesSearch && matchesRole && matchesStatus;
  });

  const counts = {
    active: allUsers.filter((r) => r.status === "Active").length,
    inactive: allUsers.filter((r) => r.status === "Inactive").length,
    pending: allUsers.filter((r) => r.status === "Pending").length,
  };

  return (
    <Container
      maxWidth={false}
      sx={{ py: 4, px: { xs: 2, md: 4 }, width: "100%" }}
    >
      {/* Header */}
      <Box textAlign="center" mb={4}>
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#f1f5f9",
            mb: 1,
          }}
        >
          Users
        </Typography>
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.5rem",
            color: "#32cd32",
            mb: 2,
          }}
        >
          Manage user accounts and permissions
        </Typography>
      </Box>

      {/* Add User button & Search - Centered horizontal layout */}
      <Box display="flex" justifyContent="center" gap={2} mb={4} flexWrap="wrap" alignItems="center">
        <Button
          variant="contained"
          startIcon={<PersonAddIcon />}
          onClick={() => handleOpenDialog()}
          sx={{
            bgcolor: "#32cd32",
            color: "#000",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            textTransform: "none",
            borderRadius: "12px",
            px: 3,
            py: 1,
            fontSize: "1rem",
            "&:hover": {
              bgcolor: "#32cd31",
              boxShadow: "0 0 20px rgba(249,115,22,0.3)",
            },
            transition: "all 0.2s",
          }}
        >
          Add User
        </Button>
        <TextField
          size="small"
          placeholder="Search by name, email, role..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#475569", fontSize: 18 }} />
              </InputAdornment>
            ),
          }}
          sx={{
            width: 280,
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              fontSize: "0.85rem",
              bgcolor: "#1e1e1e",
              fontFamily: "'DM Sans', sans-serif",
              color: "#94a3b8",
              "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
              "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
              "&.Mui-focused fieldset": { borderColor: "#32cd32" },
            },
            "& input::placeholder": { color: "#475569" },
          }}
        />
      </Box>

      {/* Status summary chips - Centered horizontal row */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          mb: 4,
        }}
      >
        {[
          {
            label: `All Users: ${rows.length}`,
            bg: "rgba(255,255,255,0.05)",
            color: "#94a3b8",
            border: "rgba(255,255,255,0.08)",
          },
          {
            label: `Active: ${counts.active}`,
            bg: "rgba(52,211,153,0.08)",
            color: "#34d399",
            border: "rgba(52,211,153,0.2)",
          },
          {
            label: `Inactive: ${counts.inactive}`,
            bg: "rgba(239,68,68,0.08)",
            color: "#32cd32",
            border: "rgba(239,68,68,0.2)",
          },
          {
            label: `Pending: ${counts.pending}`,
            bg: "rgba(249,115,22,0.08)",
            color: "#32cd32",
            border: "rgba(249,115,22,0.2)",
          },
        ].map((c) => (
          <Chip
            key={c.label}
            label={c.label}
            sx={{
              bgcolor: c.bg,
              color: c.color,
              border: `1px solid ${c.border}`,
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              fontSize: "0.8rem",
              borderRadius: "10px",
              py: 2,
            }}
          />
        ))}
      </Box>

      {/* Table card */}
      <Card
        elevation={0}
        sx={{
          borderRadius: "20px",
          bgcolor: "#161616",
          border: "1px solid rgba(255,255,255,0.06)",
          width: "100%",
        }}
      >
        <CardContent sx={{ p: 3 }}>
          {/* Card header with filters */}
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
            flexWrap="wrap"
            gap={2}
          >
            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#f1f5f9",
              }}
            >
              User List
            </Typography>
            <Box display="flex" gap={2} flexWrap="wrap" alignItems="flex-end">
              <FormControl size="small" sx={{ minWidth: 140 }}>
                <InputLabel sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>
                  Filter by Role
                </InputLabel>
                <Select
                  value={roleFilter}
                  onChange={(e) => setRoleFilter(e.target.value)}
                  label="Filter by Role"
                  sx={{
                    borderRadius: "12px",
                    bgcolor: "#1e1e1e",
                    color: "#94a3b8",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.08)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(249,115,22,0.3)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#32cd32",
                    },
                    "& .MuiSvgIcon-root": { color: "#475569" },
                  }}
                >
                  <MenuItem value="">All Roles</MenuItem>
                  <MenuItem value="Admin">Admin</MenuItem>
                  <MenuItem value="Editor">Editor</MenuItem>
                  <MenuItem value="Manager">Manager</MenuItem>
                  <MenuItem value="Viewer">Viewer</MenuItem>
                </Select>
              </FormControl>
              <FormControl size="small" sx={{ minWidth: 140 }}>
                <InputLabel sx={{ fontFamily: "'DM Sans', sans-serif", fontSize: "0.85rem" }}>
                  Filter by Status
                </InputLabel>
                <Select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  label="Filter by Status"
                  sx={{
                    borderRadius: "12px",
                    bgcolor: "#1e1e1e",
                    color: "#94a3b8",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(255,255,255,0.08)",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "rgba(249,115,22,0.3)",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#32cd32",
                    },
                    "& .MuiSvgIcon-root": { color: "#475569" },
                  }}
                >
                  <MenuItem value="">All Status</MenuItem>
                  <MenuItem value="Active">Active</MenuItem>
                  <MenuItem value="Inactive">Inactive</MenuItem>
                  <MenuItem value="Pending">Pending</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 2 }} />

          <DataGrid
            rows={filtered}
            columns={columns}
            initialState={{ pagination: { paginationModel: { pageSize: 7 } } }}
            pageSizeOptions={[7, 10]}
            disableRowSelectionOnClick
            autoHeight
            sx={{
              border: "none",
              color: "#94a3b8",
              fontFamily: "'DM Sans', sans-serif",
              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "rgba(255,255,255,0.03)",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "10px",
              },
              "& .MuiDataGrid-columnHeaderTitle": {
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "0.7rem",
                color: "#475569",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              },
              "& .MuiDataGrid-columnSeparator": { display: "none" },
              "& .MuiDataGrid-cell": {
                borderBottom: "1px solid rgba(255,255,255,0.04)",
                "&:focus": { outline: "none" },
              },
              "& .MuiDataGrid-row:hover": { bgcolor: "rgba(249,115,22,0.04)" },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "1px solid rgba(255,255,255,0.06)",
              },
              "& .MuiTablePagination-root": {
                color: "#475569",
                fontFamily: "'DM Sans', sans-serif",
              },
              "& .MuiTablePagination-actions .MuiIconButton-root": {
                color: "#475569",
                "&:hover": { color: "#32cd32" },
              },
              "& .MuiDataGrid-selectedRowCount": { color: "#475569" },
            }}
          />
        </CardContent>
      </Card>
      {/* Add/Edit User Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: "16px",
            bgcolor: "#1a1a1a",
            border: "1px solid rgba(255,255,255,0.1)",
          },
        }}
      >
        <DialogTitle
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            fontSize: "1.3rem",
            color: "#f1f5f9",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {editingId ? "Edit User" : "Add New User"}
          <IconButton
            onClick={handleCloseDialog}
            sx={{ color: "#475569", "&:hover": { color: "#32cd32" } }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
        <DialogContent sx={{ pt: 3 }}>
          {Object.keys(formErrors).length > 0 && (
            <Alert severity="error" sx={{ mb: 2, fontFamily: "'DM Sans', sans-serif" }}>
              Please fix the errors below
            </Alert>
          )}
          <Box display="flex" flexDirection="column" gap={2}>
            <TextField
              fullWidth
              label="First Name"
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              error={!!formErrors.firstName}
              helperText={formErrors.firstName}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                  "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "#32cd32" },
                },
                "& .MuiInputBase-input::placeholder": { color: "#475569" },
              }}
            />
            <TextField
              fullWidth
              label="Last Name"
              value={formData.lastName}
              onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              error={!!formErrors.lastName}
              helperText={formErrors.lastName}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                  "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "#32cd32" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              error={!!formErrors.email}
              helperText={formErrors.email}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                  "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "#32cd32" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Username"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              error={!!formErrors.username}
              helperText={formErrors.username || "Username must not contain spaces"}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                  "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "#32cd32" },
                },
              }}
            />
            {!editingId && (
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                error={!!formErrors.password}
                helperText={formErrors.password || "Minimum 8 characters"}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    bgcolor: "#2a2a2a",
                    color: "#e2e8f0",
                    "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                    "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
                    "&.Mui-focused fieldset": { borderColor: "#32cd32" },
                  },
                }}
              />
            )}
            <TextField
              fullWidth
              label="Contact Number"
              value={formData.contactNumber}
              onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
              error={!!formErrors.contactNumber}
              helperText={formErrors.contactNumber || "Must be 11 digits"}
              placeholder="09123456789"
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                  "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "#32cd32" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Age"
              type="text"
              value={formData.age}
              onChange={(e) => setFormData({ ...formData, age: e.target.value })}
              error={!!formErrors.age}
              helperText={formErrors.age || "Numbers only"}
              sx={{
                "& .MuiOutlinedInput-root": {
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& fieldset": { borderColor: "rgba(255,255,255,0.08)" },
                  "&:hover fieldset": { borderColor: "rgba(249,115,22,0.3)" },
                  "&.Mui-focused fieldset": { borderColor: "#32cd32" },
                },
              }}
            />
            <FormControl fullWidth error={!!formErrors.gender}>
              <InputLabel sx={{ color: "#94a3b8" }}>Gender</InputLabel>
              <Select
                value={formData.gender}
                onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                label="Gender"
                sx={{
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.08)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(249,115,22,0.3)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32cd32",
                  },
                  "& .MuiSvgIcon-root": { color: "#475569" },
                }}
              >
                <MenuItem value="Male">Male</MenuItem>
                <MenuItem value="Female">Female</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth error={!!formErrors.role}>
              <InputLabel sx={{ color: "#94a3b8" }}>Role</InputLabel>
              <Select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                label="Role"
                sx={{
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.08)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(249,115,22,0.3)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32cd32",
                  },
                  "& .MuiSvgIcon-root": { color: "#475569" },
                }}
              >
                <MenuItem value="Admin">Admin</MenuItem>
                <MenuItem value="Editor">Editor</MenuItem>
                <MenuItem value="Manager">Manager</MenuItem>
                <MenuItem value="Viewer">Viewer</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth error={!!formErrors.status}>
              <InputLabel sx={{ color: "#94a3b8" }}>Status</InputLabel>
              <Select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                label="Status"
                sx={{
                  bgcolor: "#2a2a2a",
                  color: "#e2e8f0",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(255,255,255,0.08)",
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "rgba(249,115,22,0.3)",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#32cd32",
                  },
                  "& .MuiSvgIcon-root": { color: "#475569" },
                }}
              >
                <MenuItem value="Active">Active</MenuItem>
                <MenuItem value="Inactive">Inactive</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.08)" }} />
        <DialogActions sx={{ p: 2, gap: 1 }}>
          <Button
            onClick={handleCloseDialog}
            sx={{
              color: "#475569",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              "&:hover": { bgcolor: "rgba(255,255,255,0.05)" },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleSaveUser}
            variant="contained"
            sx={{
              bgcolor: "#32cd32",
              color: "#000",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 700,
              "&:hover": { bgcolor: "#32cd31" },
            }}
          >
            {editingId ? "Update" : "Create"} User
          </Button>
        </DialogActions>
      </Dialog>    </Container>
  );
}