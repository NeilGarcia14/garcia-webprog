import {
  Box,
  Card,
  CardContent,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  LinearProgress,
  Divider,
  Container,
} from "@mui/material";
import {
  TrendingUp,
  People,
  ShoppingCart,
  AttachMoney,
  ArrowUpward,
  ArrowDownward,
} from "@mui/icons-material";

const statCards = [
  {
    label: "TOTAL SALES",
    value: "₱152,000",
    change: "+5.4%",
    up: true,
    icon: <AttachMoney />,
    accent: "#ff9800",
  },
  {
    label: "ACTIVE CUSTOMERS",
    value: "1,245",
    change: "+2.1%",
    up: true,
    icon: <People />,
    accent: "#2196f3",
  },
  {
    label: "PENDING ORDERS",
    value: "87",
    change: "-1.8%",
    up: false,
    icon: <ShoppingCart />,
    accent: "#9c27b0",
  },
  {
    label: "MONTHLY GROWTH",
    value: "12.3%",
    change: "+3.2%",
    up: true,
    icon: <TrendingUp />,
    accent: "#4caf50",
  },
];

const recentActivity = [
  {
    name: "Juan Dela Cruz",
    action: "Placed a bulk order",
    time: "10 min ago",
    initials: "JC",
    color: "#ff9800",
  },
  {
    name: "Maria Santos",
    action: "Signed up as new customer",
    time: "30 min ago",
    initials: "MS",
    color: "#2196f3",
  },
  {
    name: "Pedro Ramirez",
    action: "Requested refund",
    time: "1 hr ago",
    initials: "PR",
    color: "#9c27b0",
  },
];

const topProducts = [
  { name: "Premium Package", sales: 76, color: "#ff9800" },
  { name: "Starter Kit", sales: 54, color: "#2196f3" },
  { name: "Enterprise Plan", sales: 43, color: "#9c27b0" },
  { name: "Consultation Service", sales: 29, color: "#4caf50" },
];

const cardSx = {
  borderRadius: "20px",
  bgcolor: "#161616",
  border: "1px solid rgba(255,255,255,0.06)",
  "&:hover": { border: "1px solid rgba(249,115,22,0.2)" },
  transition: "border 0.2s",
  height: "100%",
};

export default function DashboardPage() {
  return (
    <Container
      maxWidth={false}
      sx={{ py: 4, px: { xs: 2, md: 4 }, width: "100%" }}
    >
      {/* Header - Centered */}
      <Box textAlign="center" mb={6}>
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#f1f5f9",
            mb: 0,
          }}
        >
          Overview
        </Typography>
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.5rem",
            color: "#32cd32",
            mb: 2,
          }}
        >
          Welcome back! Here's what's happening today.
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          mb: 3,
          justifyContent: "center",
        }}
      >
        {statCards.map((card) => (
          <Box
            key={card.label}
            sx={{
              flex: "1 1 220px",
              minWidth: 220,
              maxWidth: {
                xs: "100%",
                sm: "calc(50% - 12px)",
                md: "calc(25% - 18px)",
              },
            }}
          >
            <Card elevation={0} sx={cardSx}>
              <CardContent sx={{ p: 3 }}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  mb={2}
                >
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: "16px",
                      bgcolor: `${card.accent}18`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      "& svg": { color: card.accent, fontSize: 26 },
                    }}
                  >
                    {card.icon}
                  </Box>
                  <Chip
                    size="small"
                    icon={
                      card.up ? (
                        <ArrowUpward sx={{ fontSize: "12px !important" }} />
                      ) : (
                        <ArrowDownward sx={{ fontSize: "12px !important" }} />
                      )
                    }
                    label={card.change}
                    sx={{
                      height: 26,
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      bgcolor: card.up
                        ? "rgba(52,211,153,0.1)"
                        : "rgba(239,68,68,0.1)",
                      color: card.up ? "#34d399" : "#32cd32",
                      border: `1px solid ${card.up ? "rgba(52,211,153,0.2)" : "rgba(239,68,68,0.2)"}`,
                      "& .MuiChip-icon": { color: "inherit", ml: "6px" },
                    }}
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: "2rem",
                    color: "#f1f5f9",
                    lineHeight: 1.2,
                    mb: 1,
                  }}
                >
                  {card.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.7rem",
                    color: "#475569",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontWeight: 600,
                  }}
                >
                  {card.label}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Recent Activity & Top Products - Side by Side using flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {/* Recent Activity Card */}
        <Box sx={{ flex: "1 1 45%", minWidth: 280 }}>
          <Card elevation={0} sx={cardSx}>
            <CardContent sx={{ p: 3 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#f1f5f9",
                  }}
                >
                  Recent Activity
                </Typography>
                <Typography
                  sx={{
                    fontSize: "0.75rem",
                    color: "#32cd32",
                    fontWeight: 600,
                    cursor: "pointer",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  View all →
                </Typography>
              </Box>
              <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 2 }} />
              <List disablePadding>
                {recentActivity.map((item, i) => (
                  <ListItem
                    key={i}
                    disablePadding
                    sx={{
                      py: 1.5,
                      borderBottom:
                        i < recentActivity.length - 1
                          ? "1px solid rgba(255,255,255,0.04)"
                          : "none",
                    }}
                  >
                    <ListItemAvatar sx={{ minWidth: 52 }}>
                      <Avatar
                        sx={{
                          bgcolor: `${item.color}20`,
                          color: item.color,
                          width: 40,
                          height: 40,
                          fontSize: "0.8rem",
                          fontFamily: "'Syne', sans-serif",
                          fontWeight: 700,
                          border: `1px solid ${item.color}35`,
                        }}
                      >
                        {item.initials}
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={
                        <Typography
                          sx={{
                            fontFamily: "'Syne', sans-serif",
                            fontSize: "0.9rem",
                            fontWeight: 600,
                            color: "#e2e8f0",
                          }}
                        >
                          {item.name}
                        </Typography>
                      }
                      secondary={
                        <Typography
                          sx={{
                            fontFamily: "'DM Sans', sans-serif",
                            fontSize: "0.7rem",
                            color: "#475569",
                          }}
                        >
                          {item.action}
                        </Typography>
                      }
                    />
                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        color: "#334155",
                        whiteSpace: "nowrap",
                        fontFamily: "'DM Sans', sans-serif",
                      }}
                    >
                      {item.time}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Box>

        {/* Top Products Card */}
        <Box sx={{ flex: "1 1 45%", minWidth: 280 }}>
          <Card elevation={0} sx={cardSx}>
            <CardContent sx={{ p: 3 }}>
              <Typography
                sx={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#f1f5f9",
                  mb: 2,
                }}
              >
                Top Products
              </Typography>
              <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 2 }} />
              {topProducts.map((product) => (
                <Box key={product.name} sx={{ mb: 3 }}>
                  <Box display="flex" justifyContent="space-between" mb={0.8}>
                    <Typography
                      sx={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: "#94a3b8",
                      }}
                    >
                      {product.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.85rem",
                        fontWeight: 700,
                        color: product.color,
                      }}
                    >
                      {product.sales}%
                    </Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={product.sales}
                    sx={{
                      height: 6,
                      borderRadius: 6,
                      bgcolor: "rgba(255,255,255,0.06)",
                      "& .MuiLinearProgress-bar": {
                        borderRadius: 6,
                        bgcolor: product.color,
                      },
                    }}
                  />
                </Box>
              ))}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
}