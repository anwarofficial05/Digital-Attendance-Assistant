# 🎓 Synexia Digital Attendance Assistant (PS 10)

> **Hackathon Problem Statement 10:**  
> *"Build a Digital Attendance Assistant where students can view their subject-wise attendance, including total classes, classes attended, classes absent, and current attendance percentage. The dashboard should clearly highlight subjects where attendance is below the required percentage."*

---

## 🚀 Quick Launch (Instant Demo)

To run the application immediately:
1. **Option 1 (One-Click Windows Launcher):**  
   Double-click `START_ASSISTANT.bat` in this folder.
2. **Option 2 (Terminal Command):**  
   ```bash
   python server.py
   ```
3. **Option 3 (Direct File Open):**  
   Double click `index.html` to open directly in Google Chrome, Microsoft Edge, or Firefox!

---

## 🏆 Core Requirements (100% Satisfied)

| Requirement | Implementation in Synexia Assistant | Status |
| :--- | :--- | :---: |
| **Subject-wise attendance view** | Dedicated subject cards & summary table showing code, name, faculty | ✅ Completed |
| **Total classes conducted** | Explicitly tracked and displayed per subject & in aggregate | ✅ Completed |
| **Classes attended** | Tracked per subject with 1-click `+1 Present` increment | ✅ Completed |
| **Classes absent** | Computed in real-time (`Total - Attended`) | ✅ Completed |
| **Current attendance percentage** | Calculated dynamically to 1 decimal place with progress bar | ✅ Completed |
| **Clear highlighting of shortage** | High-contrast flashing red border, glowing alert badge, exam detention warning | ✅ Completed |

---

## 🌟 Groundbreaking & Unique Innovation Features

To stand out from all other teams at the hackathon, we implemented:

### 1. 🧮 Interactive Predictive Bunk & Recovery Calculator
- **Mathematical Formula for Recovery:** Computes the exact number of consecutive classes $C$ a student must attend to reach target threshold $T$ (e.g. 75%):
  $$C = \left\lceil \frac{T \cdot \text{Total} - \text{Attended}}{1 - T} \right\rceil$$
- **Mathematical Formula for Safe Bunking:** Computes the exact number of classes $B$ a student can safely miss without dipping below threshold $T$:
  $$B = \left\lfloor \frac{\text{Attended} - T \cdot \text{Total}}{T} \right\rfloor$$
- **Interactive "What-If" Sliders:** Drag sliders to simulate attending $+X$ or missing $+Y$ upcoming lectures and preview projected percentage in real time.

### 2. 🤖 Synexia AI Voice & Speech Assistant (With Web Speech TTS)
- Built-in AI attendance bot with natural language query parsing.
- Integrated **Voice Synthesis (TTS)**: The bot can read attendance summaries, shortage alerts, and bunk recommendations aloud via the speaker!
- Quick-action query chips:
  - *"Which subjects am I detained in?"*
  - *"Can I bunk any classes today?"*
  - *"Give me an overall summary"*
  - *"Draft an application letter for HOD"*

### 3. 🎯 Dynamic University Threshold Slider
- Judges can drag the threshold slider between **60% and 90%**.
- All cards, status badges, charts, and detention warning banners recalculate dynamically in real time.

### 4. 📅 Smart Daily Timetable with 1-Click Fast Check-In
- Integrated Monday–Friday college timetable with period timings and lecture rooms.
- 1-click **Present / Absent** buttons update subject statistics live with sound and confetti feedback!

### 5. 🏥 On-Duty (OD) & Medical Leave Exemption System
- Allows students to log approved OD certificates (symposiums, sports) and medical leaves.
- Calculates and compares **Gross Raw Attendance %** vs **Net Condoned %**.

### 6. 📝 Auto-Generated Formal HOD Condonation Letter
- Generates a pre-formatted, professional letter addressed to the Head of Department.
- Pre-fills student name, roll number, department, subject shortage stats, and condonation plea.
- 1-click "Copy to Clipboard" and "Print Report Card" support.

### 7. 👥 Instant Judge Persona Switcher
- Fast demo buttons to toggle between:
  - **Aarav Patel:** 2 Critical Shortages (64.5% in ML, 69.5% in CN)
  - **Priya Sharma:** High Risk Borderline (73.0% - 1 class away from safety)
  - **Kavya Sundaram:** High Flyer (90%+ safe zone)

---

## 🎤 2-Minute Pitch Script for Hackathon Judges

1. **Introduction (15s):**  
   *"Respected judges, we have built the **Synexia Digital Attendance Assistant** for Problem Statement 10. While standard portals only show static tables, our system is an active intelligence engine that predicts, prevents, and recovers student attendance deficits."*

2. **Core Feature Walkthrough (30s):**  
   *"Here is our dashboard. Every subject displays total classes, attended, absent, and current percentage. Notice how subjects below 75% are immediately flagged with critical red shortage indicators and detention warning alerts."*

3. **Demonstrate Unique Innovation (45s):**  
   - *"Watch what happens when we click **Bunk Simulator** on Machine Learning: our mathematical engine tells the student they need exactly 5 consecutive classes to escape detention."*
   - *"We also provide a **Dynamic Threshold Slider**—watch all 6 subjects adapt instantly if university regulations change to 80%."*
   - *"Here is the **Daily Timetable Fast Check-In**: with one click on 'Present', attendance updates live and triggers our celebration engine."*

4. **Showcase AI Voice & Letter Generator (30s):**  
   - *"Click **Voice Briefing** to hear our AI Bot speak the status aloud."*
   - *"And if a student is facing shortage, our system drafts a formal, ready-to-sign **Attendance Condonation Application to the HOD** in one click."*

---

## 📂 Project Structure

```
digital_attendance_assistant/
├── index.html            # Main Single-Page Application (HTML5 + Tailwind)
├── app.js                # State management, Math formulas, Voice AI, Charts
├── styles.css            # Glassmorphism theme, pulse animations, print styles
├── server.py             # Python HTTP server with auto-launch
├── START_ASSISTANT.bat   # Windows 1-click runner
└── README.md             # Complete documentation and judge presentation guide
```

Developed for the **Synexia Hackathon 2026** — Problem Statement 10.
