/**
 * Synexia Digital Attendance Assistant
 * Problem Statement 10 - Hackathon Edition
 * Complete Reactive State Engine, Bunk Forecaster, AI Voice Bot & Timetable
 */

// Initial Demo Student Profiles for rapid hackathon testing
const DEMO_PROFILES = {
  profile1: {
    name: "Aarav Patel",
    rollNo: "21CS1042",
    dept: "Computer Science & Engineering",
    semester: "Semester VI (2026)",
    streak: 8,
    subjects: [
      { id: "s1", code: "CS601", name: "Machine Learning & Neural Nets", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 31, medicalApproved: 0 }, // 64.58% (SHORTAGE)
      { id: "s2", code: "CS602", name: "Cloud Computing & DevOps", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 36, medicalApproved: 2 }, // 81.81% (SAFE)
      { id: "s3", code: "CS603", name: "Database Systems & Big Data", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 42, medicalApproved: 1 }, // 84.00% (SAFE)
      { id: "s4", code: "CS604", name: "Computer Networks & Protocols", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 32, medicalApproved: 0 }, // 69.56% (SHORTAGE)
      { id: "s5", code: "CS605", name: "Software Engineering & Agile", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 31, medicalApproved: 0 }, // 77.50% (BORDERLINE)
      { id: "s6", code: "CS606", name: "AI Ethics & Cyber Law", faculty: "Prof. K. Menon", totalClasses: 36, attendedClasses: 34, medicalApproved: 0 }  // 94.44% (SAFE)
    ]
  },
  profile2: {
    name: "Priya Sharma",
    rollNo: "21CS1089",
    dept: "Information Technology",
    semester: "Semester VI (2026)",
    streak: 14,
    subjects: [
      { id: "s1", code: "IT601", name: "Full Stack Web Systems", faculty: "Prof. Vikram Das", totalClasses: 52, attendedClasses: 38, medicalApproved: 0 }, // 73.07% (SHORTAGE - Borderline)
      { id: "s2", code: "IT602", name: "Information Security", faculty: "Dr. Sneha Paul", totalClasses: 45, attendedClasses: 34, medicalApproved: 1 }, // 75.55% (BORDERLINE)
      { id: "s3", code: "IT603", name: "Mobile App Architecture", faculty: "Dr. M. Joseph", totalClasses: 40, attendedClasses: 32, medicalApproved: 0 }, // 80.00% (SAFE)
      { id: "s4", code: "IT604", name: "Data Warehousing", faculty: "Prof. T. Agarwal", totalClasses: 48, attendedClasses: 39, medicalApproved: 0 }, // 81.25% (SAFE)
      { id: "s5", code: "IT605", name: "Distributed Computing", faculty: "Dr. R. Raman", totalClasses: 42, attendedClasses: 30, medicalApproved: 0 }  // 71.42% (SHORTAGE)
    ]
  },
  profile3: {
    name: "Kavya Sundaram",
    rollNo: "21CS1015",
    dept: "Artificial Intelligence & Data Science",
    semester: "Semester VI (2026)",
    streak: 25,
    subjects: [
      { id: "s1", code: "AI601", name: "Deep Learning Foundations", faculty: "Dr. A. Nambiar", totalClasses: 50, attendedClasses: 46, medicalApproved: 0 }, // 92.00%
      { id: "s2", code: "AI602", name: "Natural Language Processing", faculty: "Prof. C. Verma", totalClasses: 46, attendedClasses: 42, medicalApproved: 0 }, // 91.30%
      { id: "s3", code: "AI603", name: "Reinforcement Learning", faculty: "Dr. G. Krishnan", totalClasses: 44, attendedClasses: 39, medicalApproved: 0 }, // 88.63%
      { id: "s4", code: "AI604", name: "Computer Vision Systems", faculty: "Prof. E. Thomas", totalClasses: 48, attendedClasses: 43, medicalApproved: 0 }, // 89.58%
      { id: "s5", code: "AI605", name: "Data Ethics & Governance", faculty: "Dr. S. Kulkarni", totalClasses: 38, attendedClasses: 36, medicalApproved: 0 }  // 94.73%
    ]
  }
};

// Timetable schedule mapped to days
const TIMETABLE = {
  Monday: [
    { time: "09:00 - 10:00 AM", code: "CS601", room: "Hall A-201" },
    { time: "10:15 - 11:15 AM", code: "CS604", room: "Lab 3" },
    { time: "11:30 - 12:30 PM", code: "CS602", room: "Hall B-105" },
    { time: "02:00 - 03:00 PM", code: "CS605", room: "Hall A-202" }
  ],
  Tuesday: [
    { time: "09:00 - 10:00 AM", code: "CS603", room: "Lab 1" },
    { time: "10:15 - 11:15 AM", code: "CS601", room: "Hall A-201" },
    { time: "01:30 - 02:30 PM", code: "CS606", room: "Seminar Hall" },
    { time: "02:45 - 03:45 PM", code: "CS604", room: "Lab 3" }
  ],
  Wednesday: [
    { time: "09:00 - 10:00 AM", code: "CS602", room: "Hall B-105" },
    { time: "10:15 - 11:15 AM", code: "CS603", room: "Lab 1" },
    { time: "11:30 - 12:30 PM", code: "CS605", room: "Hall A-202" },
    { time: "02:00 - 04:00 PM", code: "CS601", room: "Project Lab" }
  ],
  Thursday: [
    { time: "09:00 - 10:00 AM", code: "CS604", room: "Lab 3" },
    { time: "10:15 - 11:15 AM", code: "CS602", room: "Hall B-105" },
    { time: "01:30 - 02:30 PM", code: "CS603", room: "Lab 1" },
    { time: "02:45 - 03:45 PM", code: "CS606", room: "Seminar Hall" }
  ],
  Friday: [
    { time: "09:00 - 10:00 AM", code: "CS601", room: "Hall A-201" },
    { time: "10:15 - 11:15 AM", code: "CS605", room: "Hall A-202" },
    { time: "11:30 - 12:30 PM", code: "CS604", room: "Lab 3" },
    { time: "02:00 - 03:00 PM", code: "CS602", room: "Hall B-105" }
  ]
};

// Global State
let appState = {
  currentProfileKey: "profile1",
  student: JSON.parse(JSON.stringify(DEMO_PROFILES.profile1)),
  requiredThreshold: 75.0, // default 75%
  selectedDay: "Monday",
  activeFilter: "all", // all, shortage, borderline, safe
  speechEnabled: true
};

// Load saved state from LocalStorage if present
function loadStoredState() {
  const saved = localStorage.getItem("synexia_attendance_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      appState.student = parsed.student || appState.student;
      appState.requiredThreshold = parsed.requiredThreshold || 75.0;
      appState.currentProfileKey = parsed.currentProfileKey || "profile1";
    } catch (e) {
      console.warn("Could not load local storage", e);
    }
  }
}

function saveState() {
  localStorage.setItem("synexia_attendance_state", JSON.stringify({
    student: appState.student,
    requiredThreshold: appState.requiredThreshold,
    currentProfileKey: appState.currentProfileKey
  }));
}

// Math Engine for Attendance & Bunk Forecasting
const AttendanceMath = {
  // Percentage = (Attended / Total) * 100
  getPercentage(attended, total) {
    if (total === 0) return 0;
    return parseFloat(((attended / total) * 100).toFixed(1));
  },

  // Calculate classes required to hit threshold T (in %)
  // (attended + x) / (total + x) >= T/100
  // x >= ( (T/100)*total - attended ) / ( 1 - T/100 )
  getClassesNeededToReachThreshold(attended, total, thresholdPct) {
    const T = thresholdPct / 100.0;
    const currentPct = (attended / total) * 100;
    if (currentPct >= thresholdPct) return 0;
    
    const numerator = (T * total) - attended;
    const denominator = 1.0 - T;
    if (denominator <= 0) return 999;
    return Math.max(0, Math.ceil(numerator / denominator));
  },

  // Calculate safe bunks without falling below threshold T (in %)
  // attended / (total + b) >= T/100
  // b <= ( attended - (T/100)*total ) / (T/100)
  getSafeBunksAllowed(attended, total, thresholdPct) {
    const T = thresholdPct / 100.0;
    const currentPct = (attended / total) * 100;
    if (currentPct < thresholdPct) return 0;

    const numerator = attended - (T * total);
    const denominator = T;
    if (denominator <= 0) return 0;
    return Math.max(0, Math.floor(numerator / denominator));
  },

  // Get status bucket: 'shortage' | 'borderline' | 'safe'
  getStatus(percentage, thresholdPct) {
    if (percentage < thresholdPct) return 'shortage';
    if (percentage < thresholdPct + 5.0) return 'borderline';
    return 'safe';
  }
};

// UI Rendering Engine
const UI = {
  init() {
    loadStoredState();
    this.renderHeader();
    this.renderMetrics();
    this.renderSubjectCards();
    this.renderTimetable();
    this.renderCharts();
    this.initEventListeners();
    this.setupAssistant();
  },

  renderHeader() {
    document.getElementById("student-name-display").textContent = appState.student.name;
    document.getElementById("student-roll-display").textContent = `${appState.student.rollNo} • ${appState.student.dept}`;
    document.getElementById("threshold-slider-val").textContent = `${appState.student.requiredThreshold || appState.requiredThreshold}%`;
    document.getElementById("threshold-slider").value = appState.requiredThreshold;
    document.getElementById("streak-count").textContent = `${appState.student.streak || 7} Days`;
  },

  renderMetrics() {
    const subs = appState.student.subjects;
    let totalClasses = 0;
    let totalAttended = 0;
    let shortageCount = 0;
    let safeCount = 0;
    let borderlineCount = 0;

    subs.forEach(s => {
      totalClasses += s.totalClasses;
      totalAttended += s.attendedClasses;
      const pct = AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses);
      const status = AttendanceMath.getStatus(pct, appState.requiredThreshold);
      if (status === 'shortage') shortageCount++;
      else if (status === 'borderline') borderlineCount++;
      else safeCount++;
    });

    const totalAbsent = totalClasses - totalAttended;
    const overallPct = AttendanceMath.getPercentage(totalAttended, totalClasses);

    // Update Overall % Counter
    document.getElementById("metric-overall-pct").textContent = `${overallPct}%`;
    document.getElementById("metric-total-classes").textContent = totalClasses;
    document.getElementById("metric-total-attended").textContent = totalAttended;
    document.getElementById("metric-total-absent").textContent = totalAbsent;
    
    // Status badges & shortage badge
    const shortageBadge = document.getElementById("metric-shortage-badge");
    const shortageCard = document.getElementById("metric-shortage-card");
    const shortageCountEl = document.getElementById("metric-shortage-count");
    
    shortageCountEl.textContent = shortageCount;
    if (shortageCount > 0) {
      shortageBadge.textContent = "CRITICAL ACTION REQUIRED";
      shortageBadge.className = "text-xs px-2.5 py-0.5 rounded-full font-bold bg-rose-500/20 text-rose-400 border border-rose-500/40 animate-pulse";
      shortageCard.classList.add("shortage-border");
    } else {
      shortageBadge.textContent = "ALL CLEAR";
      shortageBadge.className = "text-xs px-2.5 py-0.5 rounded-full font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/40";
      shortageCard.classList.remove("shortage-border");
    }

    // Circular gauge SVG update
    const circle = document.getElementById("overall-gauge-circle");
    if (circle) {
      const radius = circle.r.baseVal.value;
      const circumference = 2 * Math.PI * radius;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      const offset = circumference - (overallPct / 100) * circumference;
      circle.style.strokeDashoffset = offset;

      if (overallPct < appState.requiredThreshold) {
        circle.setAttribute("stroke", "#f43f5e"); // rose-500
      } else if (overallPct < appState.requiredThreshold + 5) {
        circle.setAttribute("stroke", "#f59e0b"); // amber-500
      } else {
        circle.setAttribute("stroke", "#10b981"); // emerald-500
      }
    }

    // Emergency Banner
    const banner = document.getElementById("detention-risk-banner");
    if (shortageCount > 0) {
      banner.classList.remove("hidden");
      document.getElementById("banner-shortage-text").innerHTML = `
        <span class="font-bold text-rose-300">Detention Warning:</span> You have <span class="font-extrabold text-white underline decoration-rose-500">${shortageCount} subject(s)</span> currently below the university mandatory threshold of <span class="font-bold text-rose-300">${appState.requiredThreshold}%</span>. You risk debarment from semester examinations!
      `;
    } else {
      banner.classList.add("hidden");
    }
  },

  renderSubjectCards() {
    const container = document.getElementById("subject-cards-container");
    container.innerHTML = "";

    const filtered = appState.student.subjects.filter(s => {
      const pct = AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses);
      const status = AttendanceMath.getStatus(pct, appState.requiredThreshold);
      if (appState.activeFilter === "shortage") return status === "shortage";
      if (appState.activeFilter === "borderline") return status === "borderline";
      if (appState.activeFilter === "safe") return status === "safe";
      return true;
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div class="col-span-full py-12 text-center text-slate-400">
          <i data-lucide="check-circle" class="w-12 h-12 mx-auto text-emerald-400 mb-2"></i>
          <p class="text-lg font-semibold">No subjects match this filter!</p>
          <p class="text-sm text-slate-500">Switch back to "All Subjects" or adjust threshold.</p>
        </div>
      `;
      lucide.createIcons();
      return;
    }

    filtered.forEach(sub => {
      const absent = sub.totalClasses - sub.attendedClasses;
      const pct = AttendanceMath.getPercentage(sub.attendedClasses, sub.totalClasses);
      const status = AttendanceMath.getStatus(pct, appState.requiredThreshold);
      const needed = AttendanceMath.getClassesNeededToReachThreshold(sub.attendedClasses, sub.totalClasses, appState.requiredThreshold);
      const bunks = AttendanceMath.getSafeBunksAllowed(sub.attendedClasses, sub.totalClasses, appState.requiredThreshold);

      let cardBorderClass = "safe-border";
      let statusBadge = "";
      let adviceHtml = "";

      if (status === "shortage") {
        cardBorderClass = "shortage-border bg-rose-950/20";
        statusBadge = `
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/50 text-rose-300 font-bold text-xs pulse-badge">
            <span class="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
            CRITICAL SHORTAGE
          </div>
        `;
        adviceHtml = `
          <div class="mt-3 p-2.5 rounded-lg bg-rose-900/30 border border-rose-800/40 text-xs flex items-center justify-between">
            <div class="flex items-center gap-2 text-rose-200">
              <i data-lucide="alert-octagon" class="w-4 h-4 text-rose-400 shrink-0"></i>
              <span>Must attend next <strong>${needed}</strong> consecutive classes!</span>
            </div>
            <button onclick="UI.openBunkModal('${sub.id}')" class="text-rose-300 underline font-semibold hover:text-white">Recover &rarr;</button>
          </div>
        `;
      } else if (status === "borderline") {
        cardBorderClass = "warning-border bg-amber-950/20";
        statusBadge = `
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 font-bold text-xs">
            <span class="w-2 h-2 rounded-full bg-amber-400"></span>
            BORDERLINE (0 Bunks)
          </div>
        `;
        adviceHtml = `
          <div class="mt-3 p-2.5 rounded-lg bg-amber-900/30 border border-amber-800/40 text-xs flex items-center justify-between">
            <div class="flex items-center gap-2 text-amber-200">
              <i data-lucide="shield-alert" class="w-4 h-4 text-amber-400 shrink-0"></i>
              <span>Do not bunk! 1 miss drops below threshold.</span>
            </div>
            <button onclick="UI.openBunkModal('${sub.id}')" class="text-amber-300 underline font-semibold hover:text-white">Simulate &rarr;</button>
          </div>
        `;
      } else {
        cardBorderClass = "safe-border bg-slate-900/40";
        statusBadge = `
          <div class="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 font-bold text-xs">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            SAFE & ELIGIBLE
          </div>
        `;
        adviceHtml = `
          <div class="mt-3 p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/30 text-xs flex items-center justify-between">
            <div class="flex items-center gap-2 text-emerald-200">
              <i data-lucide="check-check" class="w-4 h-4 text-emerald-400 shrink-0"></i>
              <span>Can safely bunk <strong>${bunks}</strong> upcoming classes.</span>
            </div>
            <button onclick="UI.openBunkModal('${sub.id}')" class="text-emerald-300 underline font-semibold hover:text-white">Plan &rarr;</button>
          </div>
        `;
      }

      // Progress bar fill color
      let barBg = "bg-emerald-500";
      if (status === "shortage") barBg = "bg-rose-500";
      else if (status === "borderline") barBg = "bg-amber-500";

      const card = document.createElement("div");
      card.className = `glass-card rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden transition-all ${cardBorderClass}`;
      
      card.innerHTML = `
        <div>
          <!-- Header: Code, Name, Status Badge -->
          <div class="flex items-start justify-between gap-3 mb-2">
            <div>
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300 border border-slate-700">${sub.code}</span>
                <span class="text-xs text-slate-400">${sub.faculty}</span>
              </div>
              <h3 class="text-base font-bold text-white mt-1 leading-snug">${sub.name}</h3>
            </div>
            ${statusBadge}
          </div>

          <!-- Large Stat Display -->
          <div class="my-4 flex items-baseline justify-between">
            <div>
              <span class="text-3xl font-extrabold tracking-tight font-mono-nums ${status === 'shortage' ? 'text-rose-400' : (status === 'borderline' ? 'text-amber-400' : 'text-emerald-400')}">${pct}%</span>
              <span class="text-xs text-slate-400 ml-1">attendance</span>
            </div>
            <div class="text-right text-xs text-slate-400">
              <span class="font-mono text-slate-300 font-semibold">${sub.attendedClasses}</span> / <span class="font-mono text-slate-300 font-semibold">${sub.totalClasses}</span> classes
            </div>
          </div>

          <!-- Threshold Comparison Progress Bar -->
          <div class="relative w-full h-3 bg-slate-800/80 rounded-full overflow-hidden border border-slate-700/50">
            <div class="h-full ${barBg} rounded-full transition-all duration-500" style="width: ${Math.min(pct, 100)}%"></div>
            <!-- Target line indicator at required threshold -->
            <div class="absolute top-0 bottom-0 w-0.5 bg-white z-10 shadow-sm" style="left: ${appState.requiredThreshold}%" title="Target: ${appState.requiredThreshold}%"></div>
          </div>
          <div class="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
            <span>0%</span>
            <span class="text-slate-200 font-semibold" style="margin-left: -15px;">Target: ${appState.requiredThreshold}%</span>
            <span>100%</span>
          </div>

          <!-- Metric Breakdown Pill Grid -->
          <div class="grid grid-cols-3 gap-2 mt-4 text-center">
            <div class="p-2 rounded-xl bg-slate-800/60 border border-slate-700/40">
              <div class="text-[10px] uppercase font-semibold text-slate-400">Attended</div>
              <div class="text-sm font-bold text-emerald-400 font-mono-nums">${sub.attendedClasses}</div>
            </div>
            <div class="p-2 rounded-xl bg-slate-800/60 border border-slate-700/40">
              <div class="text-[10px] uppercase font-semibold text-slate-400">Absent</div>
              <div class="text-sm font-bold text-rose-400 font-mono-nums">${absent}</div>
            </div>
            <div class="p-2 rounded-xl bg-slate-800/60 border border-slate-700/40">
              <div class="text-[10px] uppercase font-semibold text-slate-400">Total</div>
              <div class="text-sm font-bold text-slate-200 font-mono-nums">${sub.totalClasses}</div>
            </div>
          </div>

          <!-- Smart Action Advice Box -->
          ${adviceHtml}
        </div>

        <!-- Footer Interactive Buttons: Quick attendance mark & Tools -->
        <div class="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
          <div class="flex items-center gap-1.5">
            <button onclick="UI.quickMarkAttendance('${sub.id}', true)" title="Quick Mark: Attended (+1)" class="px-2.5 py-1.5 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/40 text-emerald-300 border border-emerald-500/30 text-xs font-semibold flex items-center gap-1 transition">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> Present
            </button>
            <button onclick="UI.quickMarkAttendance('${sub.id}', false)" title="Quick Mark: Absent (+1 Total)" class="px-2.5 py-1.5 rounded-lg bg-rose-600/20 hover:bg-rose-600/40 text-rose-300 border border-rose-500/30 text-xs font-semibold flex items-center gap-1 transition">
              <i data-lucide="minus" class="w-3.5 h-3.5"></i> Absent
            </button>
          </div>
          <div class="flex items-center gap-1">
            <button onclick="UI.openBunkModal('${sub.id}')" title="Bunk Calculator & What-If Simulator" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition">
              <i data-lucide="calculator" class="w-4 h-4"></i>
            </button>
            <button onclick="UI.openExemptionModal('${sub.id}')" title="Medical / OD Exemption" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition">
              <i data-lucide="file-badge" class="w-4 h-4"></i>
            </button>
            <button onclick="UI.openEditSubjectModal('${sub.id}')" title="Edit Subject Details" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition">
              <i data-lucide="pencil" class="w-4 h-4"></i>
            </button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    lucide.createIcons();
  },

  renderTimetable() {
    const listEl = document.getElementById("timetable-slots-list");
    const day = appState.selectedDay;
    const slots = TIMETABLE[day] || [];

    document.getElementById("selected-day-display").textContent = `${day}'s Classes`;
    listEl.innerHTML = "";

    if (slots.length === 0) {
      listEl.innerHTML = `<p class="text-sm text-slate-400 py-4 text-center">No classes scheduled for ${day}. Enjoy your weekend!</p>`;
      return;
    }

    slots.forEach(slot => {
      const sub = appState.student.subjects.find(s => s.code === slot.code);
      const subName = sub ? sub.name : slot.code;
      const pct = sub ? AttendanceMath.getPercentage(sub.attendedClasses, sub.totalClasses) : 0;
      const status = sub ? AttendanceMath.getStatus(pct, appState.requiredThreshold) : 'safe';

      const div = document.createElement("div");
      div.className = "flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition";
      div.innerHTML = `
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center font-mono font-bold text-xs text-cyan-400 border border-slate-700">
            ${slot.code}
          </div>
          <div>
            <h4 class="text-sm font-bold text-white">${subName}</h4>
            <div class="flex items-center gap-2 text-xs text-slate-400">
              <span><i data-lucide="clock" class="w-3 h-3 inline mr-1"></i>${slot.time}</span>
              <span>•</span>
              <span><i data-lucide="map-pin" class="w-3 h-3 inline mr-1"></i>${slot.room}</span>
            </div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          ${sub ? `
            <span class="text-xs font-mono font-bold px-2 py-0.5 rounded ${status === 'shortage' ? 'bg-rose-500/20 text-rose-300' : 'bg-slate-800 text-slate-300'}">
              ${pct}%
            </span>
            <button onclick="UI.quickMarkAttendance('${sub.id}', true)" title="Attended today" class="p-2 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/40 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition">
              <i data-lucide="check" class="w-4 h-4"></i>
            </button>
            <button onclick="UI.quickMarkAttendance('${sub.id}', false)" title="Missed today" class="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500/40 text-rose-300 border border-rose-500/30 text-xs font-semibold transition">
              <i data-lucide="x" class="w-4 h-4"></i>
            </button>
          ` : ''}
        </div>
      `;
      listEl.appendChild(div);
    });

    lucide.createIcons();
  },

  // Chart.js Visualizations
  charts: {},
  renderCharts() {
    const subjects = appState.student.subjects;
    const labels = subjects.map(s => s.code);
    const percentages = subjects.map(s => AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses));
    const targetLine = subjects.map(() => appState.requiredThreshold);

    // Bar Chart
    const ctxBar = document.getElementById("attendanceBarChart");
    if (ctxBar) {
      if (this.charts.bar) this.charts.bar.destroy();
      this.charts.bar = new Chart(ctxBar, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Current Attendance %',
              data: percentages,
              backgroundColor: percentages.map(p => p < appState.requiredThreshold ? 'rgba(244, 63, 94, 0.75)' : (p < appState.requiredThreshold + 5 ? 'rgba(245, 158, 11, 0.75)' : 'rgba(16, 185, 129, 0.75)')),
              borderColor: percentages.map(p => p < appState.requiredThreshold ? '#f43f5e' : (p < appState.requiredThreshold + 5 ? '#f59e0b' : '#10b981')),
              borderWidth: 1.5,
              borderRadius: 6
            },
            {
              label: `Target Threshold (${appState.requiredThreshold}%)`,
              data: targetLine,
              type: 'line',
              borderColor: '#38bdf8',
              borderWidth: 2,
              borderDash: [5, 5],
              fill: false,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 11 } }
            },
            tooltip: {
              callbacks: {
                label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}%`
              }
            }
          },
          scales: {
            y: {
              min: 0,
              max: 100,
              ticks: { color: '#94a3b8', font: { family: 'JetBrains Mono' } },
              grid: { color: 'rgba(255, 255, 255, 0.05)' }
            },
            x: {
              ticks: { color: '#cbd5e1', font: { family: 'JetBrains Mono', weight: 'bold' } },
              grid: { display: false }
            }
          }
        }
      });
    }

    // Doughnut Chart (Safe vs Borderline vs Shortage)
    let safeCount = 0, borderlineCount = 0, shortageCount = 0;
    percentages.forEach(p => {
      if (p < appState.requiredThreshold) shortageCount++;
      else if (p < appState.requiredThreshold + 5) borderlineCount++;
      else safeCount++;
    });

    const ctxPie = document.getElementById("statusPieChart");
    if (ctxPie) {
      if (this.charts.pie) this.charts.pie.destroy();
      this.charts.pie = new Chart(ctxPie, {
        type: 'doughnut',
        data: {
          labels: ['Safe (>=75%)', 'Borderline', 'Shortage (<75%)'],
          datasets: [{
            data: [safeCount, borderlineCount, shortageCount],
            backgroundColor: [
              'rgba(16, 185, 129, 0.85)',
              'rgba(245, 158, 11, 0.85)',
              'rgba(244, 63, 94, 0.85)'
            ],
            borderColor: '#0f172a',
            borderWidth: 2
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'bottom',
              labels: { color: '#cbd5e1', font: { family: 'Plus Jakarta Sans', size: 11 } }
            }
          },
          cutout: '72%'
        }
      });
    }
  },

  quickMarkAttendance(subjectId, isPresent) {
    const sub = appState.student.subjects.find(s => s.id === subjectId);
    if (!sub) return;

    sub.totalClasses += 1;
    if (isPresent) {
      sub.attendedClasses += 1;
    }

    // Calculate new status
    const newPct = AttendanceMath.getPercentage(sub.attendedClasses, sub.totalClasses);
    saveState();
    this.renderMetrics();
    this.renderSubjectCards();
    this.renderTimetable();
    this.renderCharts();

    // Trigger feedback notification & confetti if they crossed safe zone!
    if (isPresent && newPct >= appState.requiredThreshold && (newPct - 1) < appState.requiredThreshold) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      this.showToast(`🎉 Congratulations! ${sub.name} is now SAFE at ${newPct}%!`);
    } else {
      this.showToast(isPresent ? `Marked Present for ${sub.code}` : `Marked Absent for ${sub.code}`, isPresent ? 'success' : 'warn');
    }
  },

  showToast(message, type = 'info') {
    const toast = document.createElement("div");
    let bg = "bg-slate-800 border-slate-700 text-white";
    if (type === 'success') bg = "bg-emerald-900/90 border-emerald-500 text-emerald-200";
    if (type === 'warn') bg = "bg-rose-900/90 border-rose-500 text-rose-200";

    toast.className = `fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl border shadow-2xl flex items-center gap-3 text-sm font-semibold transition-all duration-300 transform translate-y-2 opacity-0 ${bg}`;
    toast.innerHTML = `<i data-lucide="bell" class="w-4 h-4"></i><span>${message}</span>`;
    document.body.appendChild(toast);
    lucide.createIcons();

    setTimeout(() => {
      toast.classList.remove("translate-y-2", "opacity-0");
    }, 50);

    setTimeout(() => {
      toast.classList.add("opacity-0", "translate-y-2");
      setTimeout(() => toast.remove(), 300);
    }, 3200);
  },

  switchProfile(profileKey) {
    if (!DEMO_PROFILES[profileKey]) return;
    appState.currentProfileKey = profileKey;
    appState.student = JSON.parse(JSON.stringify(DEMO_PROFILES[profileKey]));
    saveState();
    this.renderHeader();
    this.renderMetrics();
    this.renderSubjectCards();
    this.renderTimetable();
    this.renderCharts();
    this.showToast(`Switched to demo persona: ${appState.student.name}`, 'info');
  },

  setThreshold(val) {
    appState.requiredThreshold = parseFloat(val);
    document.getElementById("threshold-slider-val").textContent = `${appState.requiredThreshold}%`;
    saveState();
    this.renderMetrics();
    this.renderSubjectCards();
    this.renderCharts();
  },

  setFilter(filterName) {
    appState.activeFilter = filterName;
    document.querySelectorAll(".filter-btn").forEach(btn => {
      btn.classList.remove("bg-cyan-500", "text-slate-950", "font-bold");
      btn.classList.add("bg-slate-800/80", "text-slate-300");
    });
    const active = document.getElementById(`filter-btn-${filterName}`);
    if (active) {
      active.classList.add("bg-cyan-500", "text-slate-950", "font-bold");
      active.classList.remove("bg-slate-800/80", "text-slate-300");
    }
    this.renderSubjectCards();
  },

  setDay(dayName) {
    appState.selectedDay = dayName;
    document.querySelectorAll(".day-tab-btn").forEach(b => {
      b.classList.remove("border-cyan-400", "text-cyan-400", "bg-cyan-950/30");
      b.classList.add("border-transparent", "text-slate-400");
    });
    const active = document.getElementById(`day-tab-${dayName}`);
    if (active) {
      active.classList.add("border-cyan-400", "text-cyan-400", "bg-cyan-950/30");
      active.classList.remove("border-transparent", "text-slate-400");
    }
    this.renderTimetable();
  },

  // Bunk & Recovery Calculator Modal
  currentSimSubId: null,
  simAttendedAdded: 0,
  simMissedAdded: 0,

  openBunkModal(subjectId) {
    this.currentSimSubId = subjectId;
    this.simAttendedAdded = 0;
    this.simMissedAdded = 0;
    const sub = appState.student.subjects.find(s => s.id === subjectId);
    if (!sub) return;

    document.getElementById("sim-sub-title").textContent = `${sub.code} - ${sub.name}`;
    document.getElementById("sim-sub-faculty").textContent = `Faculty: ${sub.faculty}`;
    document.getElementById("sim-add-attend-val").textContent = "0";
    document.getElementById("sim-add-miss-val").textContent = "0";
    document.getElementById("slider-sim-attend").value = 0;
    document.getElementById("slider-sim-miss").value = 0;

    this.updateBunkSimulation();
    document.getElementById("bunk-sim-modal").classList.remove("hidden");
  },

  closeBunkModal() {
    document.getElementById("bunk-sim-modal").classList.add("hidden");
  },

  updateBunkSimulation() {
    const sub = appState.student.subjects.find(s => s.id === this.currentSimSubId);
    if (!sub) return;

    const addAttend = parseInt(document.getElementById("slider-sim-attend").value) || 0;
    const addMiss = parseInt(document.getElementById("slider-sim-miss").value) || 0;

    document.getElementById("sim-add-attend-val").textContent = `+${addAttend}`;
    document.getElementById("sim-add-miss-val").textContent = `+${addMiss}`;

    const newAttended = sub.attendedClasses + addAttend;
    const newTotal = sub.totalClasses + addAttend + addMiss;
    const currentPct = AttendanceMath.getPercentage(sub.attendedClasses, sub.totalClasses);
    const projectedPct = AttendanceMath.getPercentage(newAttended, newTotal);

    document.getElementById("sim-current-pct").textContent = `${currentPct}%`;
    document.getElementById("sim-projected-pct").textContent = `${projectedPct}%`;

    const needed = AttendanceMath.getClassesNeededToReachThreshold(sub.attendedClasses, sub.totalClasses, appState.requiredThreshold);
    const bunks = AttendanceMath.getSafeBunksAllowed(sub.attendedClasses, sub.totalClasses, appState.requiredThreshold);

    const verdictEl = document.getElementById("sim-verdict-box");
    if (projectedPct < appState.requiredThreshold) {
      verdictEl.className = "p-4 rounded-xl bg-rose-950/40 border border-rose-500/50 text-rose-200 text-sm";
      verdictEl.innerHTML = `
        <div class="font-bold flex items-center gap-2 text-rose-400">
          <i data-lucide="alert-triangle" class="w-5 h-5"></i>
          BELOW REQUIRED THRESHOLD (${appState.requiredThreshold}%)
        </div>
        <p class="mt-1 text-xs">At ${projectedPct}%, you will be debarred from semester examinations. Currently, you need to attend <strong>${needed} consecutive classes</strong> to reach safety.</p>
      `;
    } else {
      const remainingBunks = AttendanceMath.getSafeBunksAllowed(newAttended, newTotal, appState.requiredThreshold);
      verdictEl.className = "p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-200 text-sm";
      verdictEl.innerHTML = `
        <div class="font-bold flex items-center gap-2 text-emerald-400">
          <i data-lucide="check-circle-2" class="w-5 h-5"></i>
          ELIGIBLE & IN SAFE ZONE
        </div>
        <p class="mt-1 text-xs">At ${projectedPct}%, you exceed the ${appState.requiredThreshold}% requirement! Under this simulation, you still have <strong>${remainingBunks} safe bunk(s)</strong> available.</p>
      `;
    }
    lucide.createIcons();
  },

  // Exemption / Medical Leave Modal
  currentExemptSubId: null,
  openExemptionModal(subjectId) {
    this.currentExemptSubId = subjectId;
    const sub = appState.student.subjects.find(s => s.id === subjectId);
    if (!sub) return;

    document.getElementById("exemption-sub-name").textContent = `${sub.code} - ${sub.name}`;
    document.getElementById("exemption-approved-input").value = sub.medicalApproved || 0;
    this.updateExemptionPreview();
    document.getElementById("exemption-modal").classList.remove("hidden");
  },

  closeExemptionModal() {
    document.getElementById("exemption-modal").classList.add("hidden");
  },

  updateExemptionPreview() {
    const sub = appState.student.subjects.find(s => s.id === this.currentExemptSubId);
    if (!sub) return;
    const exemptions = parseInt(document.getElementById("exemption-approved-input").value) || 0;

    const rawPct = AttendanceMath.getPercentage(sub.attendedClasses, sub.totalClasses);
    // Adjusted attendance counts exemptions as attended or deducted from total
    const adjustedAttended = Math.min(sub.totalClasses, sub.attendedClasses + exemptions);
    const adjustedPct = AttendanceMath.getPercentage(adjustedAttended, sub.totalClasses);

    document.getElementById("exemption-raw-pct").textContent = `${rawPct}%`;
    document.getElementById("exemption-adjusted-pct").textContent = `${adjustedPct}%`;
  },

  saveExemption() {
    const sub = appState.student.subjects.find(s => s.id === this.currentExemptSubId);
    if (!sub) return;
    const count = parseInt(document.getElementById("exemption-approved-input").value) || 0;
    sub.medicalApproved = count;
    saveState();
    this.closeExemptionModal();
    this.renderMetrics();
    this.renderSubjectCards();
    this.renderCharts();
    this.showToast(`Exemption updated for ${sub.code}`, 'success');
  },

  // Edit / Add Subject Modal
  openAddSubjectModal() {
    document.getElementById("edit-modal-title").textContent = "Add New Subject";
    document.getElementById("edit-sub-id").value = "";
    document.getElementById("edit-sub-code").value = "";
    document.getElementById("edit-sub-name").value = "";
    document.getElementById("edit-sub-faculty").value = "";
    document.getElementById("edit-sub-total").value = "40";
    document.getElementById("edit-sub-attended").value = "30";
    document.getElementById("edit-subject-modal").classList.remove("hidden");
  },

  openEditSubjectModal(subjectId) {
    const sub = appState.student.subjects.find(s => s.id === subjectId);
    if (!sub) return;

    document.getElementById("edit-modal-title").textContent = "Edit Subject";
    document.getElementById("edit-sub-id").value = sub.id;
    document.getElementById("edit-sub-code").value = sub.code;
    document.getElementById("edit-sub-name").value = sub.name;
    document.getElementById("edit-sub-faculty").value = sub.faculty;
    document.getElementById("edit-sub-total").value = sub.totalClasses;
    document.getElementById("edit-sub-attended").value = sub.attendedClasses;
    document.getElementById("edit-subject-modal").classList.remove("hidden");
  },

  closeEditModal() {
    document.getElementById("edit-subject-modal").classList.add("hidden");
  },

  saveSubjectForm() {
    const id = document.getElementById("edit-sub-id").value;
    const code = document.getElementById("edit-sub-code").value.trim() || "CS000";
    const name = document.getElementById("edit-sub-name").value.trim() || "Untitled Subject";
    const faculty = document.getElementById("edit-sub-faculty").value.trim() || "Faculty";
    const total = parseInt(document.getElementById("edit-sub-total").value) || 1;
    const attended = Math.min(total, parseInt(document.getElementById("edit-sub-attended").value) || 0);

    if (id) {
      // update
      const existing = appState.student.subjects.find(s => s.id === id);
      if (existing) {
        existing.code = code;
        existing.name = name;
        existing.faculty = faculty;
        existing.totalClasses = total;
        existing.attendedClasses = attended;
      }
    } else {
      // add
      appState.student.subjects.push({
        id: "s_" + Date.now(),
        code,
        name,
        faculty,
        totalClasses: total,
        attendedClasses: attended,
        medicalApproved: 0
      });
    }

    saveState();
    this.closeEditModal();
    this.renderMetrics();
    this.renderSubjectCards();
    this.renderTimetable();
    this.renderCharts();
    this.showToast("Subject details saved successfully!", 'success');
  },

  deleteCurrentEditingSubject() {
    const id = document.getElementById("edit-sub-id").value;
    if (!id) {
      this.closeEditModal();
      return;
    }
    appState.student.subjects = appState.student.subjects.filter(s => s.id !== id);
    saveState();
    this.closeEditModal();
    this.renderMetrics();
    this.renderSubjectCards();
    this.renderTimetable();
    this.renderCharts();
    this.showToast("Subject removed", 'warn');
  },

  // Formal Letter & Leave Generator Modal
  openLetterModal() {
    const student = appState.student;
    const shortages = student.subjects.filter(s => {
      const pct = AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses);
      return pct < appState.requiredThreshold;
    });

    const breakdownText = shortages.map(s => {
      const pct = AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses);
      const needed = AttendanceMath.getClassesNeededToReachThreshold(s.attendedClasses, s.totalClasses, appState.requiredThreshold);
      return `• ${s.code} - ${s.name} (${s.faculty}): Current Attendance is ${pct}% (${s.attendedClasses}/${s.totalClasses} classes). Deficit requires attending ${needed} remedial classes.`;
    }).join("\n");

    const template = `To,
The Head of Department,
Department of ${student.dept},
Synexia Institute of Technology.

Date: ${new Date().toLocaleDateString('en-GB')}
Subject: Application for Attendance Condonation & Consideration for Shortage

Respected Sir/Madam,

I am ${student.name}, bearing Register / Roll Number ${student.rollNo}, currently studying in ${student.semester} of the ${student.dept}.

I am submitting this formal appeal regarding my attendance record which has fallen below the mandatory ${appState.requiredThreshold}% threshold in the following subject(s):

${shortages.length > 0 ? breakdownText : "All subjects are currently above threshold."}

The primary reason for this shortage was unforeseen medical illness / authorized college representation (OD duty), due to which I could not attend scheduled lectures during the specified dates. Relevant supporting medical certificates / authorization documents are enclosed herewith for your kind perusal.

I earnestly assure you that I am attending all compensatory and tutorial sessions to make up for the missed curriculum. I humbly request you to kindly condone the attendance deficit and grant me permission to appear for the upcoming semester examinations.

Thanking you.

Yours sincerely,

______________________
Signature of Student: ${student.name}
Roll Number: ${student.rollNo}
Contact: student.${student.rollNo.toLowerCase()}@synexia.edu.in

Endorsement by Class Advisor: ____________________
Approval by Head of Department: ____________________`;

    document.getElementById("letter-textarea").value = template;
    document.getElementById("letter-modal").classList.remove("hidden");
  },

  closeLetterModal() {
    document.getElementById("letter-modal").classList.add("hidden");
  },

  copyLetterToClipboard() {
    const text = document.getElementById("letter-textarea").value;
    navigator.clipboard.writeText(text).then(() => {
      this.showToast("Letter copied to clipboard! Ready to send via email.", 'success');
    });
  },

  printReportCard() {
    window.print();
  },

  // AI Voice & Speech Assistant Logic
  setupAssistant() {
    const input = document.getElementById("ai-query-input");
    if (input) {
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") this.processAIQuery(input.value);
      });
    }
  },

  toggleAssistantDrawer() {
    const drawer = document.getElementById("ai-assistant-drawer");
    drawer.classList.toggle("hidden");
    if (!drawer.classList.contains("hidden")) {
      document.getElementById("ai-query-input").focus();
    }
  },

  askPresetQuery(query) {
    document.getElementById("ai-query-input").value = query;
    this.processAIQuery(query);
  },

  processAIQuery(query) {
    if (!query || !query.trim()) return;
    const chatLog = document.getElementById("ai-chat-messages");

    // Add user message
    const userMsg = document.createElement("div");
    userMsg.className = "flex justify-end mb-3";
    userMsg.innerHTML = `
      <div class="bg-cyan-600 text-white text-xs px-3 py-2 rounded-2xl rounded-tr-none max-w-[80%] font-medium">
        ${query}
      </div>
    `;
    chatLog.appendChild(userMsg);
    document.getElementById("ai-query-input").value = "";

    // Generate smart response based on user data
    const lower = query.toLowerCase();
    const shortages = appState.student.subjects.filter(s => {
      return AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses) < appState.requiredThreshold;
    });

    let botResponse = "";
    let speakText = "";

    if (lower.includes("shortage") || lower.includes("detained") || lower.includes("below") || lower.includes("risk")) {
      if (shortages.length === 0) {
        botResponse = `Great news! You have <strong>0 subjects</strong> below the ${appState.requiredThreshold}% threshold. All your subjects are in the safe zone!`;
        speakText = `Great news! You have zero subjects below the required threshold. You are fully eligible for exams.`;
      } else {
        const list = shortages.map(s => {
          const pct = AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses);
          const needed = AttendanceMath.getClassesNeededToReachThreshold(s.attendedClasses, s.totalClasses, appState.requiredThreshold);
          return `<strong>${s.code} (${s.name})</strong>: ${pct}% &rarr; Must attend <strong>${needed}</strong> consecutive classes.`;
        }).join("<br>");
        botResponse = `⚠️ <strong>Detention Alert:</strong> You have <strong>${shortages.length} subjects</strong> below ${appState.requiredThreshold}%:<br><br>${list}<br><br>💡 Click on the Bunk Simulator to test recovery pathways!`;
        speakText = `Warning! You have ${shortages.length} subjects below the ${appState.requiredThreshold} percent threshold. In ${shortages[0].name}, you must attend ${AttendanceMath.getClassesNeededToReachThreshold(shortages[0].attendedClasses, shortages[0].totalClasses, appState.requiredThreshold)} consecutive classes.`;
      }
    } else if (lower.includes("bunk") || lower.includes("skip") || lower.includes("miss")) {
      const safeSubjects = appState.student.subjects.filter(s => {
        return AttendanceMath.getSafeBunksAllowed(s.attendedClasses, s.totalClasses, appState.requiredThreshold) > 0;
      });
      if (safeSubjects.length === 0) {
        botResponse = `🚨 <strong>Zero Safe Bunks:</strong> You currently have no margin to bunk classes. Any skipped class will push you into the danger zone!`;
        speakText = `You currently have zero safe bunks. Any missed class will trigger attendance shortage.`;
      } else {
        const list = safeSubjects.map(s => {
          const bunks = AttendanceMath.getSafeBunksAllowed(s.attendedClasses, s.totalClasses, appState.requiredThreshold);
          return `• <strong>${s.code}</strong>: Can safely bunk <strong>${bunks}</strong> class(es).`;
        }).join("<br>");
        botResponse = `🎯 <strong>Bunk Allowance Analysis:</strong><br><br>${list}<br><br>⚠️ Always keep at least 1 buffer class for unexpected emergencies!`;
        speakText = `You have safe bunk margins in ${safeSubjects.length} subjects. Remember to keep a safety buffer for emergencies.`;
      }
    } else if (lower.includes("letter") || lower.includes("application") || lower.includes("hod") || lower.includes("condon")) {
      botResponse = `📄 I have prepared an official Condonation & Medical Leave Application draft pre-filled with your student details and shortage stats. <button onclick="UI.openLetterModal()" class="text-cyan-400 underline font-bold">Click here to view & copy the letter</button>.`;
      speakText = `I have generated your formal attendance condonation application for the Head of Department. You can view and copy it right now.`;
    } else if (lower.includes("summary") || lower.includes("overall") || lower.includes("status")) {
      let tot = 0, att = 0;
      appState.student.subjects.forEach(s => { tot += s.totalClasses; att += s.attendedClasses; });
      const overall = AttendanceMath.getPercentage(att, tot);
      botResponse = `📊 <strong>Executive Summary for ${appState.student.name}:</strong><br>• Overall Attendance: <strong>${overall}%</strong><br>• Total Classes: <strong>${tot}</strong> (Attended: ${att}, Absent: ${tot - att})<br>• Critical Shortages: <strong>${shortages.length}</strong><br>• Current Streak: <strong>${appState.student.streak} days</strong>.`;
      speakText = `Your overall attendance is ${overall} percent across ${tot} classes. You have ${shortages.length} critical shortages.`;
    } else {
      botResponse = `🤖 I'm Synexia Assistant! You can ask me: "Which subjects am I detained in?", "Can I bunk today?", "Generate HOD letter", or "Give me my overall summary".`;
      speakText = `I can help you analyze shortages, compute safe bunks, or draft your leave letter.`;
    }

    // Append Bot message
    const botMsg = document.createElement("div");
    botMsg.className = "flex justify-start mb-3";
    botMsg.innerHTML = `
      <div class="bg-slate-800 border border-slate-700 text-slate-200 text-xs px-3.5 py-2.5 rounded-2xl rounded-tl-none max-w-[85%] leading-relaxed shadow-lg">
        <div class="flex items-center gap-1.5 text-cyan-400 font-bold mb-1">
          <i data-lucide="bot" class="w-3.5 h-3.5"></i>
          <span>Synexia AI</span>
        </div>
        <div>${botResponse}</div>
        <div class="mt-2 pt-2 border-t border-slate-700/60 flex items-center justify-between text-[10px] text-slate-400">
          <span>AI Forecaster</span>
          <button onclick="UI.speakText('${speakText.replace(/'/g, "\\'")}')" class="text-cyan-300 hover:text-white flex items-center gap-1 font-semibold">
            <i data-lucide="volume-2" class="w-3 h-3"></i> Listen
          </button>
        </div>
      </div>
    `;
    chatLog.appendChild(botMsg);
    chatLog.scrollTop = chatLog.scrollHeight;
    lucide.createIcons();

    // Auto speak if speech is toggled
    if (appState.speechEnabled && speakText) {
      this.speakText(speakText);
    }
  },

  speakText(text) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.0;
    window.speechSynthesis.speak(utterance);
  },

  speakExecutiveSummary() {
    let tot = 0, att = 0;
    appState.student.subjects.forEach(s => { tot += s.totalClasses; att += s.attendedClasses; });
    const overall = AttendanceMath.getPercentage(att, tot);
    const shortages = appState.student.subjects.filter(s => {
      return AttendanceMath.getPercentage(s.attendedClasses, s.totalClasses) < appState.requiredThreshold;
    });

    let msg = `Hello ${appState.student.name}. Your overall attendance stands at ${overall} percent. `;
    if (shortages.length > 0) {
      msg += `Warning! You have ${shortages.length} subjects below the ${appState.requiredThreshold} percent threshold, including ${shortages[0].name}. Please review your recovery plan immediately.`;
    } else {
      msg += `All your subjects are safely above the ${appState.requiredThreshold} percent requirement. Keep up the great work!`;
    }
    this.speakText(msg);
    this.showToast("🔊 Playing Voice Attendance Briefing...", 'info');
  },

  initEventListeners() {
    // Threshold slider input
    const slider = document.getElementById("threshold-slider");
    if (slider) {
      slider.addEventListener("input", (e) => {
        this.setThreshold(e.target.value);
      });
    }

    // Bunk simulator sliders
    const simAttendSlider = document.getElementById("slider-sim-attend");
    const simMissSlider = document.getElementById("slider-sim-miss");
    if (simAttendSlider) {
      simAttendSlider.addEventListener("input", () => this.updateBunkSimulation());
    }
    if (simMissSlider) {
      simMissSlider.addEventListener("input", () => this.updateBunkSimulation());
    }

    // Exemption input
    const exemptInput = document.getElementById("exemption-approved-input");
    if (exemptInput) {
      exemptInput.addEventListener("input", () => this.updateExemptionPreview());
    }
  }
};

// Initialize app when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  UI.init();
});
