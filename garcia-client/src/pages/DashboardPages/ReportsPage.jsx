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
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  RadioGroup,
  Radio,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
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
  const [printDialogOpen, setPrintDialogOpen] = useState(false);
  const [pageSelection, setPageSelection] = useState("all");
  const [customPageRange, setCustomPageRange] = useState("");
  const [outputFormat, setOutputFormat] = useState("pdf");
  const handlePrint = () => {
    const printContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Reports Dashboard</title>
          <meta charset="utf-8" />
          <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Syne:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
          <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            html, body {
              width: 100%;
              height: 100%;
            }
            body {
              font-family: 'DM Sans', sans-serif;
              background: #0f0f0f;
              color: #f1f5f9;
              line-height: 1.6;
            }
            @page {
              size: A4;
              margin: 20mm;
              @bottom-center {
                content: "Page " counter(page) " of " counter(pages);
                font-size: 10px;
                color: #475569;
              }
            }
            .page-break {
              page-break-after: always;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              border-bottom: 2px solid #32cd32;
              padding-bottom: 30px;
              page-break-after: avoid;
            }
            .title {
              font-family: 'Syne', sans-serif;
              font-size: 36px;
              font-weight: 800;
              color: #f1f5f9;
              margin-bottom: 10px;
            }
            .subtitle {
              font-size: 14px;
              color: #64748b;
              margin-bottom: 10px;
            }
            .date {
              font-size: 12px;
              color: #475569;
              margin-top: 10px;
            }
            .stats {
              display: flex;
              flex-wrap: wrap;
              gap: 20px;
              margin: 40px 0;
              page-break-inside: avoid;
            }
            .stat-card {
              flex: 1;
              min-width: 160px;
              border: 1px solid rgba(255,255,255,0.06);
              border-radius: 16px;
              padding: 24px;
              text-align: center;
              background: #161616;
              page-break-inside: avoid;
            }
            .stat-label {
              font-size: 11px;
              text-transform: uppercase;
              color: #475569;
              font-weight: 600;
              letter-spacing: 1px;
            }
            .stat-value {
              font-family: 'Syne', sans-serif;
              font-size: 28px;
              font-weight: 800;
              margin-top: 12px;
              color: #32cd32;
            }
            h3 {
              margin-top: 40px;
              margin-bottom: 20px;
              color: #f1f5f9;
              font-family: 'Syne', sans-serif;
              font-size: 18px;
              font-weight: 700;
              border-bottom: 1px solid rgba(255,255,255,0.06);
              padding-bottom: 15px;
              page-break-after: avoid;
            }
            .chart-section {
              page-break-inside: avoid;
              margin-bottom: 30px;
              border: 1px solid rgba(255,255,255,0.06);
              border-radius: 16px;
              padding: 24px;
              background: #161616;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin: 20px 0;
              page-break-inside: avoid;
            }
            th, td {
              border: 1px solid rgba(255,255,255,0.06);
              padding: 14px;
              text-align: left;
            }
            th {
              background: #32cd32;
              color: #000;
              font-weight: 700;
              font-family: 'Syne', sans-serif;
              page-break-inside: avoid;
            }
            tr {
              page-break-inside: avoid;
            }
            tr:nth-child(even) {
              background: rgba(255,255,255,0.02);
            }
            td {
              color: #e2e8f0;
            }
            .chart-item {
              page-break-inside: avoid;
              border: 1px solid rgba(255,255,255,0.06);
              border-radius: 16px;
              padding: 24px;
              background: #161616;
              margin-bottom: 20px;
            }
            .chart-title {
              font-family: 'Syne', sans-serif;
              font-size: 16px;
              font-weight: 700;
              color: #f1f5f9;
              margin-bottom: 15px;
            }
            .footer {
              text-align: center;
              font-size: 11px;
              color: #475569;
              margin-top: 50px;
              padding-top: 20px;
              border-top: 1px solid rgba(255,255,255,0.06);
              page-break-before: avoid;
            }
            .legend {
              display: flex;
              gap: 20px;
              margin: 15px 0;
              flex-wrap: wrap;
              page-break-inside: avoid;
            }
            .legend-item {
              display: flex;
              align-items: center;
              gap: 8px;
              font-size: 12px;
              color: #64748b;
            }
            .legend-color {
              width: 12px;
              height: 12px;
              border-radius: 2px;
            }
            .section-divider {
              margin: 40px 0;
              border-top: 2px solid rgba(50,205,50,0.2);
              page-break-before: auto;
            }
            @media print {
              body { 
                background: white; 
                color: #333; 
                padding: 0;
              }
              .header { 
                border-bottom: 2px solid #000; 
                page-break-after: avoid;
              }
              .stat-card { 
                background: #f5f5f5; 
                border: 1px solid #ddd; 
              }
              .chart-section { 
                background: #f5f5f5; 
                border: 1px solid #ddd; 
              }
              .chart-item { 
                background: #f5f5f5; 
                border: 1px solid #ddd; 
              }
              .title { 
                color: #000; 
              }
              .subtitle { 
                color: #666; 
              }
              .date { 
                color: #999; 
              }
              .stat-value { 
                color: #000; 
              }
              h3 { 
                color: #000; 
                border-bottom: 1px solid #ddd; 
              }
              .chart-title { 
                color: #000; 
              }
              td { 
                color: #333; 
                border: 1px solid #ddd;
              }
              th { 
                background: #32cd32; 
                color: #000;
                border: 1px solid #32cd32;
              }
              .footer { 
                border-top: 1px solid #ddd; 
                color: #999; 
              }
              .legend-item { 
                color: #666; 
              }
              .section-divider {
                border-top: 2px solid #ddd;
              }
              table {
                border: 1px solid #ddd;
              }
              tr:nth-child(even) {
                background: #f9f9f9;
              }
            }
            .print-modal {
              position: fixed;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background: #fff;
              display: flex;
              align-items: stretch;
              justify-content: flex-start;
              z-index: 9999;
              font-family: 'DM Sans', sans-serif;
            }
            .print-modal-content {
              background: #2a2a2a;
              border-right: 1px solid rgba(255,255,255,0.1);
              padding: 24px;
              width: 30%;
              min-width: 300px;
              max-width: 400px;
              height: 100vh;
              overflow-y: auto;
              box-shadow: 2px 0 10px rgba(0, 0, 0, 0.3);
              margin: 0;
            }
            .print-modal-preview {
              flex: 1;
              background: #fff;
              overflow: auto;
              padding: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
            }
            .print-modal-preview-content {
              background: #fff;
              box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              padding: 40px;
              max-width: 700px;
              width: 100%;
              font-family: 'Arial', sans-serif;
              color: #333;
              line-height: 1.6;
            }
            .print-modal-preview-title {
              font-size: 28px;
              font-weight: 800;
              color: #000;
              margin-bottom: 10px;
            }
            .print-modal-preview-subtitle {
              font-size: 13px;
              color: #666;
              margin-bottom: 30px;
            }
            .print-modal-title {
              font-family: 'Syne', sans-serif;
              font-size: 20px;
              font-weight: 700;
              color: #f1f5f9;
              margin-bottom: 24px;
            }
            .print-modal-section {
              margin-bottom: 24px;
            }
            .print-modal-label {
              font-family: 'Syne', sans-serif;
              font-size: 13px;
              font-weight: 600;
              color: #e2e8f0;
              margin-bottom: 12px;
              display: block;
            }
            .print-modal-option {
              display: flex;
              align-items: center;
              margin-bottom: 12px;
              cursor: pointer;
            }
            .print-modal-radio {
              width: 18px;
              height: 18px;
              border: 2px solid #32cd32;
              border-radius: 50%;
              margin-right: 12px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
            .print-modal-radio.checked {
              background: #32cd32;
            }
            .print-modal-radio.checked::after {
              content: '';
              width: 6px;
              height: 6px;
              background: #000;
              border-radius: 50%;
            }
            .print-modal-text {
              color: #cbd5e1;
              font-size: 14px;
              cursor: pointer;
            }
            .print-modal-input {
              width: 100%;
              padding: 8px 12px;
              border: 1px solid rgba(255,255,255,0.15);
              border-radius: 6px;
              background: rgba(255,255,255,0.05);
              color: #f1f5f9;
              font-family: 'DM Sans', sans-serif;
              margin-top: 12px;
            }
            .print-modal-divider {
              height: 1px;
              background: rgba(255,255,255,0.06);
              margin: 20px 0;
            }
            .print-modal-buttons {
              display: flex;
              gap: 12px;
              margin-top: 24px;
            }
            .print-modal-btn {
              flex: 1;
              padding: 12px 20px;
              border: none;
              border-radius: 8px;
              font-size: 14px;
              font-weight: 600;
              font-family: 'Syne', sans-serif;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .print-modal-btn-cancel {
              background: rgba(255,255,255,0.1);
              color: #f1f5f9;
            }
            .print-modal-btn-cancel:hover {
              background: rgba(255,255,255,0.15);
            }
            .print-modal-btn-save {
              background: #32cd32;
              color: #000;
              font-weight: 700;
            }
            .print-modal-btn-save:hover {
              background: #2cb82c;
            }
            @media print {
              .print-modal {
                display: none;
              }
            }
          </style>
        </head>
        <body>
          <!-- Print Dialog Modal -->
          <div class="print-modal" id="printModal">
            <div class="print-modal-content">
              <div class="print-modal-title">Print</div>
              
              <!-- Total Pages Info -->
              <div class="print-modal-section">
                <span style="color: #94a3b8; font-size: 13px;">Total: 2 pages</span>
              </div>

              <!-- Printer Selection -->
              <div class="print-modal-section">
                <label class="print-modal-label">Printer</label>
                <select style="width: 100%; padding: 10px; border: 1px solid rgba(255,255,255,0.15); border-radius: 6px; background: rgba(255,255,255,0.05); color: #f1f5f9; font-family: 'DM Sans', sans-serif;" id="printerSelect">
                  <option value="pdf" style="background: #161616; color: #f1f5f9;">Save as PDF</option>
                  <option value="printer" style="background: #161616; color: #f1f5f9;">Print to Printer</option>
                </select>
              </div>

              <div class="print-modal-divider"></div>

              <!-- Pages Selection -->
              <div class="print-modal-section">
                <label class="print-modal-label">Pages</label>
                
                <div class="print-modal-option" onclick="setPageSelection(this, 'all')">
                  <div class="print-modal-radio checked" id="radio-all"></div>
                  <span class="print-modal-text">All</span>
                </div>

                <div class="print-modal-option" onclick="setPageSelection(this, 'odd')">
                  <div class="print-modal-radio" id="radio-odd"></div>
                  <span class="print-modal-text">Odd pages only</span>
                </div>

                <div class="print-modal-option" onclick="setPageSelection(this, 'even')">
                  <div class="print-modal-radio" id="radio-even"></div>
                  <span class="print-modal-text">Even pages only</span>
                </div>

                <div class="print-modal-option" onclick="setPageSelection(this, 'custom')">
                  <div class="print-modal-radio" id="radio-custom"></div>
                  <span class="print-modal-text">Custom</span>
                </div>
                <input type="text" class="print-modal-input" id="customRange" placeholder="e.g. 1-5, 8, 11-13" />
              </div>

              <div style="margin-top: 12px;">
                <button style="background: none; border: none; color: #32cd32; cursor: pointer; font-size: 14px; padding: 0; text-decoration: underline;">More settings</button>
              </div>

              <!-- Buttons -->
              <div class="print-modal-buttons">
                <button class="print-modal-btn print-modal-btn-cancel" onclick="closePrintModal()">Cancel</button>
                <button class="print-modal-btn print-modal-btn-save" onclick="confirmPrint()">Save</button>
              </div>
            </div>

            <!-- Preview Section -->
            <div class="print-modal-preview">
              <div class="print-modal-preview-content">
                <div class="print-modal-preview-title">Reports Summary</div>
                <div class="print-modal-preview-subtitle">Analytics overview for generated reports, category breakdown, and completion performance.<br>Prepared on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>
                
                <h3 style="margin-top: 30px; margin-bottom: 15px; color: #333; font-size: 16px; border-bottom: 2px solid #32cd32; padding-bottom: 10px;">Monthly Report Output</h3>
                <p style="color: #666; font-size: 12px; margin-bottom: 15px;">This chart compares how many reports were generated and how many were completed across the last four months.</p>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin-bottom: 30px;">
                  <div style="height: 150px; background: linear-gradient(to bottom, #e0e0e0 0%, #f5f5f5 100%); border-radius: 4px; display: flex; align-items: flex-end; justify-content: space-around; padding: 10px;">
                    <div style="width: 30px; height: 60px; background: #2196F3; border-radius: 2px;"></div>
                    <div style="width: 30px; height: 45px; background: #FF9800; border-radius: 2px;"></div>
                    <div style="width: 30px; height: 75px; background: #2196F3; border-radius: 2px;"></div>
                    <div style="width: 30px; height: 55px; background: #FF9800; border-radius: 2px;"></div>
                    <div style="width: 30px; height: 70px; background: #2196F3; border-radius: 2px;"></div>
                    <div style="width: 30px; height: 50px; background: #FF9800; border-radius: 2px;"></div>
                  </div>
                </div>

                <h3 style="margin-top: 30px; margin-bottom: 15px; color: #333; font-size: 16px; border-bottom: 2px solid #32cd32; padding-bottom: 10px;">Report Category Share</h3>
                <p style="color: #666; font-size: 12px; margin-bottom: 15px;">This chart shows the distribution of report requests by category for the current reporting period.</p>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; height: 120px; display: flex; align-items: center; justify-content: center;">
                  <div style="width: 100px; height: 100px; border-radius: 50%; background: conic-gradient(#2196F3 0deg 144deg, #FF9800 144deg 234deg, #F44336 234deg 306deg, #4CAF50 306deg 360deg);"></div>
                </div>
              </div>
            </div>
          </div>

          <script>
            let selectedPageOption = 'all';

            function setPageSelection(element, option) {
              selectedPageOption = option;
              document.getElementById('radio-all').classList.remove('checked');
              document.getElementById('radio-odd').classList.remove('checked');
              document.getElementById('radio-even').classList.remove('checked');
              document.getElementById('radio-custom').classList.remove('checked');
              document.getElementById('radio-' + option).classList.add('checked');
            }

            function closePrintModal() {
              document.getElementById('printModal').style.display = 'none';
              window.close();
            }

            function confirmPrint() {
              const printer = document.getElementById('printerSelect').value;
              const customRange = document.getElementById('customRange').value;
              console.log('Print settings:', { printer, selectedPageOption, customRange });
              
              // Auto-print after a short delay
              setTimeout(() => {
                window.print();
              }, 300);
            }
          </script>
          <div class="header">
            <div class="title">Reports Summary</div>
            <div class="subtitle">Analytics overview for generated reports, category breakdown, and completion performance.</div>
            <div class="date">Prepared on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</div>
          </div>
          
          <div class="stats">
            ${summaryStats.map((s) => `
              <div class="stat-card">
                <div class="stat-label">${s.label}</div>
                <div class="stat-value">${s.label === "AVG. MONTHLY REVENUE" ? "₱17,380" : s.label === "TOTAL ANNUAL REVENUE" ? "₱678,080" : s.label === "PEAK MONTH" ? "March" : "+14%"}</div>
              </div>
            `).join("")}
          </div>

          <div class="section-divider"></div>

          <h3>Monthly Report Output</h3>
          <div class="chart-section">
            <div class="legend">
              <div class="legend-item"><div class="legend-color" style="background: #32cd32;"></div>Revenue</div>
              <div class="legend-item"><div class="legend-color" style="background: #22d3ee;"></div>Expenses</div>
            </div>
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
                  .map(
                    (m, i) =>
                      `<tr><td>${m}</td><td>₱${revenueData[i].toLocaleString()}</td><td>₱${expensesData[i].toLocaleString()}</td></tr>`,
                  )
                  .join("")}
              </tbody>
            </table>
          </div>

          <div class="section-divider"></div>

          <h3>Report Category Share</h3>
          <div class="chart-section">
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
          </div>

          <div class="section-divider"></div>

          <h3>Monthly Visitors Trend</h3>
          <div class="chart-section">
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
          </div>

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

  const handleClosePrintDialog = () => {
    setPrintDialogOpen(false);
  };

  const handlePrintConfirm = () => {
    handlePrint();
    setPrintDialogOpen(false);
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

      {/* Print Dialog */}
      <Dialog 
        open={printDialogOpen} 
        onClose={handleClosePrintDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 700 }}>
          Print
        </DialogTitle>
        <DialogContent sx={{ py: 3 }}>
          {/* Printer/Format Selection */}
          <Box mb={3}>
            <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, mb: 1 }}>
              Printer
            </Typography>
            <FormControl fullWidth>
              <Select
                value={outputFormat}
                onChange={(e) => setOutputFormat(e.target.value)}
                sx={{ bgcolor: "#f5f5f5" }}
              >
                <MenuItem value="pdf">Save as PDF</MenuItem>
                <MenuItem value="print">Print to Printer</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Pages Selection */}
          <Box>
            <Typography sx={{ fontFamily: "'Syne', sans-serif", fontWeight: 600, mb: 2 }}>
              Pages
            </Typography>
            <RadioGroup
              value={pageSelection}
              onChange={(e) => setPageSelection(e.target.value)}
            >
              <FormControlLabel
                value="all"
                control={<Radio />}
                label="All"
              />
              <FormControlLabel
                value="odd"
                control={<Radio />}
                label="Odd pages only"
              />
              <FormControlLabel
                value="even"
                control={<Radio />}
                label="Even pages only"
              />
              <Box display="flex" alignItems="center" gap={1} mt={1}>
                <Radio
                  value="custom"
                  checked={pageSelection === "custom"}
                  onChange={(e) => setPageSelection(e.target.value)}
                />
                <TextField
                  placeholder="e.g. 1-5, 8, 11-13"
                  value={customPageRange}
                  onChange={(e) => setCustomPageRange(e.target.value)}
                  onClick={() => setPageSelection("custom")}
                  size="small"
                  sx={{ width: 200 }}
                />
              </Box>
            </RadioGroup>
          </Box>

          <Box mt={2}>
            <Button 
              variant="text" 
              sx={{ color: "#32cd32", textTransform: "none" }}
            >
              More settings
            </Button>
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button 
            onClick={handleClosePrintDialog}
            sx={{ color: "#333" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handlePrintConfirm}
            variant="contained"
            sx={{
              bgcolor: "#32cd32",
              color: "#fff",
              "&:hover": { bgcolor: "#2cb82c" }
            }}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}
