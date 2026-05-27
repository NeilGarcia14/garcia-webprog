import { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Add as AddIcon,
  Close as CloseIcon,
  DeleteOutlined as DeleteIcon,
  Edit as EditIcon,
} from "@mui/icons-material";
import {
  createArticle,
  deleteArticle,
  getArticles,
  updateArticle,
} from "../../services/api";

const emptyForm = {
  title: "",
  name: "",
  image: "",
  imageAlt: "",
  imageCaption: "",
  content: "",
};

const slugify = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export default function DashArticleListPage() {
  const [articles, setArticles] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loadArticles = async () => {
    try {
      setLoading(true);
      const data = await getArticles();
      setArticles(data.articles);
    } catch (err) {
      setError(err.message || "Unable to load articles.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const handleOpen = (article = null) => {
    if (article) {
      setEditingId(article._id);
      setFormData({
        title: article.title,
        name: article.name,
        image: article.image || "",
        imageAlt: article.imageAlt || "",
        imageCaption: article.imageCaption || "",
        content: article.content.join("\n"),
      });
    } else {
      setEditingId(null);
      setFormData(emptyForm);
    }
    setError("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingId(null);
    setFormData(emptyForm);
  };

  const handleSave = async () => {
    if (!formData.title.trim() || !formData.content.trim()) {
      setError("Title and content are required.");
      return;
    }

    const payload = {
      ...formData,
      name: formData.name || slugify(formData.title),
      content: formData.content
        .split("\n")
        .map((paragraph) => paragraph.trim())
        .filter(Boolean),
    };

    try {
      setLoading(true);
      if (editingId) {
        await updateArticle(editingId, payload);
      } else {
        await createArticle(payload);
      }
      handleClose();
      loadArticles();
    } catch (err) {
      setError(err.message || "Unable to save article.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setLoading(true);
      await deleteArticle(id);
      loadArticles();
    } catch (err) {
      setError(err.message || "Unable to delete article.");
    } finally {
      setLoading(false);
    }
  };

  const columns = [
    { field: "title", headerName: "Title", flex: 1.2, minWidth: 220 },
    { field: "name", headerName: "Slug", flex: 1, minWidth: 180 },
    {
      field: "content",
      headerName: "Preview",
      flex: 1.5,
      minWidth: 260,
      valueGetter: (value) => value?.[0] || "",
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 120,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <Tooltip title="Edit">
            <IconButton size="small" onClick={() => handleOpen(params.row)}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton size="small" onClick={() => handleDelete(params.row._id)}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      ),
    },
  ];

  return (
    <Container maxWidth={false} sx={{ py: 4, px: { xs: 2, md: 4 } }}>
      <Box textAlign="center" mb={4}>
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#f1f5f9",
          }}
        >
          Articles
        </Typography>
        <Typography sx={{ color: "#32cd32", fontSize: "1.2rem" }}>
          Manage dashboard articles shown on the public article list
        </Typography>
      </Box>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}

      <Box display="flex" justifyContent="center" mb={3}>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
          sx={{
            bgcolor: "#32cd32",
            color: "#000",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 700,
            textTransform: "none",
            borderRadius: "12px",
            "&:hover": { bgcolor: "#32cd31" },
          }}
        >
          Add Article
        </Button>
      </Box>

      <Card elevation={0} sx={{ bgcolor: "#161616", border: "1px solid rgba(255,255,255,0.06)" }}>
        <CardContent>
          <DataGrid
            rows={articles}
            columns={columns}
            getRowId={(row) => row._id}
            loading={loading}
            autoHeight
            pageSizeOptions={[5, 10]}
            initialState={{ pagination: { paginationModel: { pageSize: 5 } } }}
            disableRowSelectionOnClick
            sx={{
              border: "none",
              color: "#94a3b8",
              "& .MuiDataGrid-columnHeaderTitle": { color: "#e2e8f0", fontWeight: 700 },
              "& .MuiDataGrid-cell": { borderBottom: "1px solid rgba(255,255,255,0.05)" },
            }}
          />
        </CardContent>
      </Card>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {editingId ? "Edit Article" : "Add Article"}
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <Divider />
        <DialogContent sx={{ display: "grid", gap: 2, pt: 3 }}>
          <TextField
            label="Title"
            value={formData.title}
            onChange={(e) =>
              setFormData({
                ...formData,
                title: e.target.value,
                name: formData.name || slugify(e.target.value),
              })
            }
            required
          />
          <TextField
            label="Slug"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: slugify(e.target.value) })}
          />
          <TextField
            label="Image URL"
            value={formData.image}
            onChange={(e) => setFormData({ ...formData, image: e.target.value })}
          />
          <TextField
            label="Image Alt Text"
            value={formData.imageAlt}
            onChange={(e) => setFormData({ ...formData, imageAlt: e.target.value })}
          />
          <TextField
            label="Image Caption"
            value={formData.imageCaption}
            onChange={(e) => setFormData({ ...formData, imageCaption: e.target.value })}
          />
          <TextField
            label="Content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            multiline
            minRows={6}
            helperText="Use a new line for each paragraph."
            required
          />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleSave} disabled={loading}>
            {editingId ? "Update" : "Create"} Article
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
