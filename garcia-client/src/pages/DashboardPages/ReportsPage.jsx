import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Divider,
  ToggleButtonGroup,
  ToggleButton,
  Chip,
  Container,
  Button,
} from "@mui/material";
import {Print as PrintIcon} from "@mui/icons-material";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";
import { PieChart } from "@mui/x-charts/PieChart";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const revenueData = [
  5200, 6100, 5800, 7500, 6900, 8800, 9100, 9700, 9400, 10800, 10200, 12100,
];

const expensesData = [
  3400, 4600, 4100, 5300, 4900, 6400, 6100, 7200, 6800, 7900, 7500, 9100,
];

const visitorData = [
  1300, 1900, 1600, 2300, 2100, 2900, 2600, 3300, 3100, 3700, 3400, 4200,
];


const pieData = [
  { id: 0, value: 40, label: "Organic Search", color: "#32cd32" },
  { id: 1, value: 25, label: "Direct", color: "#22d3ee" },
  { id: 2, value: 20, label: "Social Media", color: "#a78bfa" },
  { id: 3, value: 15, label: "Referral", color: "#34d399" },
];

const summaryStats = [
  { label: "AVG. MONTHLY REVENUE", value: "₱17,380", color: "#32cd32" },
  { label: "TOTAL ANNUAL REVENUE", value: "678,080", color: "#22d3ee" },
  { label: "PEAK MONTH", value: "March", color: "#a78bfa" },
  { label: "ANNUAL GROWTH", value: "+14%", color: "#34d399" },
];

const cardSx = {
  borderRadius: "20px",
  bgcolor: "#161616",
  border: "1px solid rgba(255,255,255,0.06)",
  height: "100%",
};

const axisStyle = {
  "& .MuiChartsAxis-tickLabel": {
    fill: "#475569 !important",
    fontSize: "11px !important",
  },
  "& .MuiChartsAxis-line": { stroke: "rgba(255,255,255,0.06) !important" },
  "& .MuiChartsAxis-tick": { stroke: "rgba(255,255,255,0.06) !important" },
  "& .MuiChartsGrid-line": { stroke: "rgba(255,255,255,0.04) !important" },
};

export default function ReportsPage() {
  const [period, setPeriod] = useState("monthly");
  const handlePrint = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Reports Dashboard</title>
          <meta charset="utf-8" />
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
              font-family: Arial, sans-serif;
              padding: 40px;
              background: white;
              color: #333;
            }
            .header {
              text-align: center;
              margin-bottom: 30px;
              border-bottom: 3px solid #32cd32;
              padding-bottom: 20px;
            }
            .title {
              font-size: 32px;
              font-weight: bold;
              color: #32cd32;
              margin-bottom: 10px;
            }
            .subtitle {
              font-size: 14px;
              color: #666;
            }
            .date {
              font-size: 12px;
              color: #999;
              margin-top: 10px;
            }
            .stats {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              margin: 30px 0;
            }
            .stat-card {
              flex: 1;
              min-width: 180px;
              border: 2px solid #32cd32;
              border-radius: 10px;
              padding: 20px;
              text-align: center;
              background: #fafafa;
            }
            .stat-label {
              font-size: 12px;
              text-transform: uppercase;
              color: #666;
              font-weight: 600;
              letter-spacing: 1px;
            }
            .stat-value {
              font-size: 28px;
              font-weight: bold;
              margin-top: 10px;
              color: #32cd32;
            }
            h3 {
              margin-top: 30px;
              margin-bottom: 15px;
              color: #333;
              font-size: 18px;
              border-bottom: 2px solid #32cd32;
              padding-bottom: 10px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 12px;
              text-align: left;
            }
            th {
              background: #32cd32;
              color: white;
              font-weight: bold;
            }
            tr:nth-child(even) {
              background: #f9f9f9;
            }
            .footer {
              text-align: center;
              font-size: 11px;
              color: #999;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #ddd;
            }
            @media print {
              body { padding: 20px; }
              .stat-card { page-break-inside: avoid; }
              table { page-break-inside: avoid; }
            }
          </style>
        </head>
        <body onload="window.print()">
          <div class="header">
            <div class="title">Reports Summary</div>
            <div class="subtitle">Analytics overview for generated reports, category breakdown, and completion performance.</div>
            <div class="date">Prepared on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>
          </div>
          
          <div class="stats">
            <div class="stat-card">
              <div class="stat-label">AVG. MONTHLY REVENUE</div>
              <div class="stat-value">₱17,380</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">TOTAL ANNUAL REVENUE</div>
              <div class="stat-value">₱678,080</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">PEAK MONTH</div>
              <div class="stat-value">March</div>
            </div>
            <div class="stat-card">
              <div class="stat-label">ANNUAL GROWTH</div>
              <div class="stat-value">+14%</div>
            </div>
          </div>

          <h3>Monthly Report Output</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Revenue (₱)</th>
                <th>Expenses (₱)</th>
              </tr>
            </thead>
            <tbody>
              ${months
                .slice(0, 6)
                .map(
                  (m, i) =>
                    `<tr><td>${m}</td><td>₱${revenueData[i].toLocaleString()}</td><td>₱${expensesData[i].toLocaleString()}</td></tr>`,
                )
                .join("")}
            </tbody>
          </table>

          <h3>Report Category Share</h3>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Percentage</th>
              </tr>
            </thead>
            <tbody>
              ${pieData.map((p) => `<tr><td>${p.label}</td><td>${p.value}%</td></tr>`).join("")}
            </tbody>
          </table>

          <h3>Monthly Visitors Trend</h3>
          <table>
            <thead>
              <tr>
                <th>Month</th>
                <th>Visitors</th>
              </tr>
            </thead>
            <tbody>
              ${months.map((m, i) => `<tr><td>${m}</td><td>${visitorData[i].toLocaleString()}</td></tr>`).join("")}
            </tbody>
          </table>

          <div class="footer">
            Generated from Reports Dashboard | Data represents current fiscal year
          </div>
        </body>
      </html>
    `;

    try {
      const blob = new Blob([printContent], { type: "text/html;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const printWindow = window.open(url, "_blank");
      
      if (!printWindow) {
        alert("Please allow popups for this site to print reports.");
      }
    } catch (error) {
      console.error("Print error:", error);
      alert("Error generating report. Please try again.");
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{ py: 5, px: { xs: 3, md: 5 }, width: "100%" }}
    >
      <Box display="flex" justifyContent="flex-end" mb={3}>
        <Button
          variant="contained"
          startIcon={<PrintIcon />}
          onClick={handlePrint}
          sx={{
            bgcolor: "#32cd32",
            color: "#fff",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            textTransform: "none",
            borderRadius: "10px",
            "&:hover": { bgcolor: "#32cd32" },
          }}
        >
          Print PDF
        </Button>
      </Box>
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography
          sx={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: { xs: "2rem", md: "3rem" },
            color: "#f1f5f9",
            mb: 1,
          }}
        >
          Reports
        </Typography>
        <Typography
          sx={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.5rem",
            color: "#32cd32",
            mb: 2,
          }}
        >
          Data visualization and analytics overview
        </Typography>
      </Box>

      {/* Period Toggle - Centered */}
      <Box display="flex" justifyContent="center" mb={8}>
        <ToggleButtonGroup
          value={period}
          exclusive
          onChange={(_, v) => v && setPeriod(v)}
          size="small"
          sx={{
            bgcolor: "#161616",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "12px",
            p: "6px",
            "& .MuiToggleButtonGroup-grouped": {
              border: 0,
              borderRadius: "8px !important",
              mx: 1,
            },
            "& .MuiToggleButton-root": {
              textTransform: "none",
              px: 4,
              py: 1.2,
              fontSize: "0.9rem",
              fontFamily: "'Syne', sans-serif",
              fontWeight: 600,
              color: "#64748b",
              "&.Mui-selected": {
                bgcolor: "#32cd32",
                color: "#000",
                "&:hover": { bgcolor: "#22d3ee" },
              },
            },
          }}
        >
          <ToggleButton value="weekly">Weekly</ToggleButton>
          <ToggleButton value="monthly">Monthly</ToggleButton>
          <ToggleButton value="yearly">Yearly</ToggleButton>
        </ToggleButtonGroup>
      </Box>

      <Box sx={{ height: 30 }} />

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          mb: 8,
          justifyContent: "center",
        }}
      >
        {summaryStats.map((s) => (
          <Box
            key={s.label}
            sx={{
              flex: "1 1 220px",
              minWidth: 200,
            }}
          >
            <Card elevation={0} sx={cardSx}>
              <CardContent sx={{ p: 4, textAlign: "center" }}>
                <Typography
                  sx={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.75rem",
                    color: "#475569",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    mb: 2,
                    fontWeight: 500,
                  }}
                >
                  {s.label}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 800,
                    fontSize: { xs: "1.4rem", md: "1.8rem" },
                    color: s.color,
                  }}
                >
                  {s.value}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>

      {/* Charts row - Horizontal */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          mb: 8,
        }}
      >
        {/* Bar Chart */}
        <Box sx={{ flex: "2 1 55%", minWidth: 320 }}>
          <Card elevation={0} sx={cardSx}>
            <CardContent sx={{ p: 3.5 }}>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                mb={2.5}
                flexWrap="wrap"
                gap={1}
              >
                <Typography
                  sx={{
                    fontFamily: "'Syne', sans-serif",
                    fontWeight: 700,
                    fontSize: "1.2rem",
                    color: "#f1f5f9",
                  }}
                >
                  Revenue vs Expenses
                </Typography>
                <Box display="flex" gap={2.5}>
                  {[
                    { label: "Revenue", color: "#32cd32" },
                    { label: "Expenses", color: "#22d3ee" },
                  ].map((l) => (
                    <Box
                      key={l.label}
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: l.color,
                        }}
                      />
                      <Typography
                        sx={{
                          fontSize: "0.75rem",
                          color: "#475569",
                          fontFamily: "'DM Sans', sans-serif",
                        }}
                      >
                        {l.label}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 3 }} />
              <BarChart
                xAxis={[{ scaleType: "band", data: months }]}
                series={[
                  { data: revenueData, label: "Revenue", color: "#32cd32" },
                  { data: expensesData, label: "Expenses", color: "#22d3ee" },
                ]}
                height={360}
                margin={{ top: 10, bottom: 30, left: 60, right: 10 }}
                slotProps={{ legend: { hidden: true } }}
                sx={axisStyle}
              />
            </CardContent>
          </Card>
        </Box>

        {/* Pie Chart */}
        <Box sx={{ flex: "1 1 35%", minWidth: 300 }}>
          <Card elevation={0} sx={cardSx}>
            <CardContent sx={{ p: 3.5 }}>
              <Typography
                sx={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.2rem",
                  color: "#f1f5f9",
                  mb: 2.5,
                }}
              >
                Traffic Sources
              </Typography>
              <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 3 }} />
              <Box display="flex" justifyContent="center">
                <PieChart
                  series={[
                    {
                      data: pieData,
                      innerRadius: 55,
                      outerRadius: 95,
                      paddingAngle: 3,
                      cornerRadius: 5,
                      cx: 125,
                      cy: 115,
                    },
                  ]}
                  width={270}
                  height={240}
                  slotProps={{ legend: { hidden: true } }}
                />
              </Box>
              <Box mt={3}>
                {pieData.map((item) => (
                  <Box
                    key={item.id}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    py={1}
                  >
                    <Box display="flex" alignItems="center" gap={1.5}>
                      <Box
                        sx={{
                          width: 10,
                          height: 10,
                          borderRadius: "50%",
                          bgcolor: item.color,
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "0.8rem",
                          color: "#64748b",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontFamily: "'Syne', sans-serif",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: item.color,
                      }}
                    >
                      {item.value}%
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>

      {/* Line Chart - Full width */}
      <Card elevation={0} sx={cardSx}>
        <CardContent sx={{ p: 3.5 }}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2.5}
          >
            <Typography
              sx={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 700,
                fontSize: "1.2rem",
                color: "#f1f5f9",
              }}
            >
              Monthly Visitors
            </Typography>
            <Chip
              label="2024"
              size="small"
              sx={{
                bgcolor: "rgba(249,115,22,0.1)",
                color: "#32cd32",
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: "0.7rem",
                border: "1px solid rgba(249,115,22,0.2)",
                height: 26,
              }}
            />
          </Box>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.06)", mb: 3 }} />
          <LineChart
            xAxis={[{ scaleType: "band", data: months }]}
            series={[
              {
                data: visitorData,
                label: "Visitors",
                color: "#32cd32",
                area: true,
                showMark: false,
              },
            ]}
            height={280}
            margin={{ top: 10, bottom: 30, left: 60, right: 20 }}
            slotProps={{ legend: { hidden: true } }}
            sx={{
              ...axisStyle,
              "& .MuiAreaElement-root": { fill: "#32cd32", opacity: 0.08 },
            }}
          />
        </CardContent>
      </Card>
    </Container>
  );
}