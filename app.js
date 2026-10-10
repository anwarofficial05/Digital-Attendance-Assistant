/**
 * Synexia Attendance OS - Classroom & Student Intelligence Engine
 * Comprehensive multi-student roster management and subject-level analytics.
 */

// Initial standard subjects for the classroom
const CLASS_SUBJECTS = [
  { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer" },
  { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta" },
  { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy" },
  { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma" },
  { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair" }
];

// Initial classroom student roster
const DEFAULT_CLASSROOM = [
  {
    id: "stu_1",
    rollNo: "21CS101",
    name: "Aarav Patel",
    email: "aarav.p@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 31 }, // 64.6% (Shortage)
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 37 }, // 84.1%
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 42 }, // 84.0%
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 32 }, // 69.6% (Shortage)
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 32 }  // 80.0%
    ]
  },
  {
    id: "stu_2",
    rollNo: "21CS102",
    name: "Priya Sharma",
    email: "priya.s@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 36 }, // 75.0%
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 33 }, // 75.0%
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 37 }, // 74.0% (Shortage)
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 38 }, // 82.6%
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 33 }  // 82.5%
    ]
  },
  {
    id: "stu_3",
    rollNo: "21CS103",
    name: "Kavya Sundaram",
    email: "kavya.s@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 45 }, // 93.8%
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 41 }, // 93.2%
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 47 }, // 94.0%
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 42 }, // 91.3%
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 38 }  // 95.0%
    ]
  },
  {
    id: "stu_4",
    rollNo: "21CS104",
    name: "Rohan Verma",
    email: "rohan.v@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 28 }, // 58.3% (Shortage)
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 29 }, // 65.9% (Shortage)
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 33 }, // 66.0% (Shortage)
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 31 }, // 67.4% (Shortage)
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 28 }  // 70.0% (Shortage)
    ]
  },
  {
    id: "stu_5",
    rollNo: "21CS105",
    name: "Ananya Iyer",
    email: "ananya.i@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 40 }, // 83.3%
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 38 }, // 86.4%
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 44 }, // 88.0%
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 40 }, // 87.0%
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 35 }  // 87.5%
    ]
  },
  {
    id: "stu_6",
    rollNo: "21CS106",
    name: "Vikram Das",
    email: "vikram.d@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 39 }, // 81.3%
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 32 }, // 72.7% (Shortage)
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 41 }, // 82.0%
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 37 }, // 80.4%
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 34 }  // 85.0%
    ]
  },
  {
    id: "stu_7",
    rollNo: "21CS107",
    name: "Sneha Nair",
    email: "sneha.n@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 44 }, // 91.7%
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 39 }, // 88.6%
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 46 }, // 92.0%
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 41 }, // 89.1%
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 37 }  // 92.5%
    ]
  },
  {
    id: "stu_8",
    rollNo: "21CS108",
    name: "Tanmay Deshmukh",
    email: "tanmay.d@synexia.edu",
    section: "A",
    subjects: [
      { code: "CS601", name: "Machine Learning", faculty: "Dr. R. K. Iyer", totalClasses: 48, attendedClasses: 35 }, // 72.9% (Shortage)
      { code: "CS602", name: "Cloud Computing", faculty: "Prof. S. Sengupta", totalClasses: 44, attendedClasses: 36 }, // 81.8%
      { code: "CS603", name: "Database Systems", faculty: "Dr. Anita Roy", totalClasses: 50, attendedClasses: 39 }, // 78.0%
      { code: "CS604", name: "Computer Networks", faculty: "Prof. V. Sharma", totalClasses: 46, attendedClasses: 33 }, // 71.7% (Shortage)
      { code: "CS605", name: "Software Engineering", faculty: "Dr. Deepa Nair", totalClasses: 40, attendedClasses: 31 }  // 77.5%
    ]
  }
];

// App State
let AppState = {
  classroomName: "B.Tech CSE - Section A (Year 3)",
  academicTerm: "Spring Semester 2026",
  threshold: 75.0, // Minimum attendance requirement %
  currentView: "roster", // 'roster' | 'student' | 'session' | 'report'
  students: [],
  selectedStudentId: "stu_1",
  searchQuery: "",
  rosterFilter: "all", // 'all' | 'shortage' | 'safe'
  sessionSubjectCode: "CS601",
  sessionAttendance: {} // studentId -> boolean (present/absent)
};

// Storage
function loadState() {
  const saved = localStorage.getItem("synexia_attendance_classroom_v2");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      AppState.students = parsed.students || DEFAULT_CLASSROOM;
      AppState.threshold = parsed.threshold || 75.0;
      AppState.selectedStudentId = parsed.selectedStudentId || AppState.students[0]?.id || "stu_1";
      return;
    } catch (e) {
      console.warn("Storage parse error", e);
    }
  }
  AppState.students = JSON.parse(JSON.stringify(DEFAULT_CLASSROOM));
}

function saveState() {
  localStorage.setItem("synexia_attendance_classroom_v2", JSON.stringify({
    students: AppState.students,
    threshold: AppState.threshold,
    selectedStudentId: AppState.selectedStudentId
  }));
}

// Math Engine
const MathEngine = {
  getPercentage(attended, total) {
    if (!total || total === 0) return 0;
    return parseFloat(((attended / total) * 100).toFixed(1));
  },

  getStudentOverallStats(student) {
    let totalClasses = 0;
    let totalAttended = 0;
    let shortageSubjects = [];

    student.subjects.forEach(sub => {
      totalClasses += sub.totalClasses;
      totalAttended += sub.attendedClasses;
      const pct = this.getPercentage(sub.attendedClasses, sub.totalClasses);
      if (pct < AppState.threshold) {
        shortageSubjects.push({
          code: sub.code,
          name: sub.name,
          pct: pct,
          needed: this.getConsecutiveNeeded(sub.attendedClasses, sub.totalClasses, AppState.threshold)
        });
      }
    });

    const overallPct = this.getPercentage(totalAttended, totalClasses);
    return {
      totalClasses,
      totalAttended,
      totalAbsent: totalClasses - totalAttended,
      overallPct,
      shortageCount: shortageSubjects.length,
      shortageSubjects,
      isDefaulter: shortageSubjects.length > 0 || overallPct < AppState.threshold
    };
  },

  // Consecutive classes required: ceil((T * total - attended) / (1 - T))
  getConsecutiveNeeded(attended, total, thresholdPct) {
    const T = thresholdPct / 100.0;
    if ((attended / total) * 100 >= thresholdPct) return 0;
    const num = (T * total) - attended;
    const den = 1.0 - T;
    if (den <= 0) return 999;
    return Math.max(0, Math.ceil(num / den));
  },

  // Safe bunks allowed: floor((attended - T * total) / T)
  getSafeBunks(attended, total, thresholdPct) {
    const T = thresholdPct / 100.0;
    if ((attended / total) * 100 < thresholdPct) return 0;
    const num = attended - (T * total);
    return Math.max(0, Math.floor(num / T));
  }
};

// UI Controller
const Controller = {
  init() {
    loadState();
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Threshold input
    const slider = document.getElementById("input-threshold");
    if (slider) {
      slider.value = AppState.threshold;
      slider.addEventListener("input", (e) => {
        AppState.threshold = parseFloat(e.target.value);
        document.getElementById("label-threshold").textContent = `${AppState.threshold}%`;
        saveState();
        this.render();
      });
    }

    // Search input
    const search = document.getElementById("search-students");
    if (search) {
      search.addEventListener("input", (e) => {
        AppState.searchQuery = e.target.value.toLowerCase().trim();
        this.renderRosterTable();
      });
    }
  },

  switchView(viewName) {
    AppState.currentView = viewName;
    ['roster', 'student', 'session', 'report'].forEach(v => {
      const tabBtn = document.getElementById(`tab-btn-${v}`);
      const viewPanel = document.getElementById(`view-panel-${v}`);
      if (tabBtn && viewPanel) {
        if (v === viewName) {
          tabBtn.className = "nav-tab-active px-3.5 py-1.5 rounded-lg text-xs transition cursor-pointer flex items-center gap-1.5";
          viewPanel.classList.remove("hidden");
        } else {
          tabBtn.className = "nav-tab-inactive px-3.5 py-1.5 rounded-lg text-xs transition cursor-pointer flex items-center gap-1.5";
          viewPanel.classList.add("hidden");
        }
      }
    });

    if (viewName === 'session') {
      this.initSessionRollCall();
    }
    this.render();
  },

  render() {
    this.renderClassroomStats();
    if (AppState.currentView === 'roster') {
      this.renderRosterTable();
    } else if (AppState.currentView === 'student') {
      this.renderStudentDeepDive();
    } else if (AppState.currentView === 'session') {
      this.renderSessionRollCall();
    } else if (AppState.currentView === 'report') {
      this.renderDebarmentReport();
    }
    if (window.lucide) lucide.createIcons();
  },

  renderClassroomStats() {
    let totalStudents = AppState.students.length;
    let sumOverallPct = 0;
    let defaultersCount = 0;

    AppState.students.forEach(s => {
      const stats = MathEngine.getStudentOverallStats(s);
      sumOverallPct += stats.overallPct;
      if (stats.isDefaulter) defaultersCount++;
    });

    const classAverage = totalStudents ? (sumOverallPct / totalStudents).toFixed(1) : 0;
    const safeCount = totalStudents - defaultersCount;

    document.getElementById("stat-class-size").textContent = totalStudents;
    document.getElementById("stat-class-avg").textContent = `${classAverage}%`;
    document.getElementById("stat-defaulters").textContent = defaultersCount;
    document.getElementById("stat-eligible").textContent = safeCount;
    document.getElementById("label-threshold").textContent = `${AppState.threshold}%`;

    // Classroom select dropdown in student view
    const selector = document.getElementById("select-active-student");
    if (selector) {
      selector.innerHTML = AppState.students.map(s => {
        const stats = MathEngine.getStudentOverallStats(s);
        const tag = stats.isDefaulter ? `⚠️ ${s.rollNo} - ${s.name} (${stats.overallPct}%)` : `${s.rollNo} - ${s.name} (${stats.overallPct}%)`;
        return `<option value="${s.id}" ${s.id === AppState.selectedStudentId ? 'selected' : ''}>${tag}</option>`;
      }).join("");
    }
  },

  renderRosterTable() {
    const tbody = document.getElementById("roster-table-body");
    if (!tbody) return;

    let filtered = AppState.students.filter(s => {
      const matchSearch = s.name.toLowerCase().includes(AppState.searchQuery) || 
                          s.rollNo.toLowerCase().includes(AppState.searchQuery);
      if (!matchSearch) return false;

      const stats = MathEngine.getStudentOverallStats(s);
      if (AppState.rosterFilter === 'shortage') return stats.isDefaulter;
      if (AppState.rosterFilter === 'safe') return !stats.isDefaulter;
      return true;
    });

    if (filtered.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="7" class="py-12 text-center text-slate-500">
            No students found matching your criteria.
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = filtered.map(s => {
      const stats = MathEngine.getStudentOverallStats(s);
      const isShortage = stats.isDefaulter;

      return `
        <tr class="cursor-pointer transition" onclick="Controller.viewStudentDetails('${s.id}')">
          <td class="font-mono font-semibold text-slate-300">${s.rollNo}</td>
          <td>
            <div class="font-semibold text-slate-100">${s.name}</div>
            <div class="text-xs text-slate-500">${s.email}</div>
          </td>
          <td>
            <span class="font-mono text-xs text-slate-300 font-semibold">${stats.totalAttended}</span>
            <span class="text-xs text-slate-500">/ ${stats.totalClasses}</span>
          </td>
          <td>
            <span class="font-mono text-xs text-rose-400 font-semibold">${stats.totalAbsent}</span>
          </td>
          <td>
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold ${isShortage ? 'text-rose-400' : 'text-emerald-400'}">${stats.overallPct}%</span>
              <div class="w-16 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden sm:block">
                <div class="h-full ${isShortage ? 'bg-rose-500' : 'bg-emerald-500'}" style="width: ${Math.min(stats.overallPct, 100)}%"></div>
              </div>
            </div>
          </td>
          <td>
            ${stats.shortageCount > 0 
              ? `<span class="px-2 py-0.5 rounded text-xs font-semibold status-shortage-badge flex items-center gap-1 w-fit">
                   <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> ${stats.shortageCount} Subject Deficit(s)
                 </span>`
              : `<span class="px-2 py-0.5 rounded text-xs font-semibold status-safe-badge flex items-center gap-1 w-fit">
                   <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Eligible
                 </span>`
            }
          </td>
          <td class="text-right">
            <button onclick="event.stopPropagation(); Controller.viewStudentDetails('${s.id}')" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 transition">
              Inspect &rarr;
            </button>
          </td>
        </tr>
      `;
    }).join("");
  },

  setRosterFilter(filterName) {
    AppState.rosterFilter = filterName;
    ['all', 'shortage', 'safe'].forEach(f => {
      const btn = document.getElementById(`filter-roster-${f}`);
      if (btn) {
        if (f === filterName) {
          btn.className = "px-2.5 py-1 rounded-md bg-blue-600 text-white font-semibold text-xs transition";
        } else {
          btn.className = "px-2.5 py-1 rounded-md bg-slate-900 text-slate-400 hover:text-white font-medium text-xs transition border border-slate-800";
        }
      }
    });
    this.renderRosterTable();
  },

  viewStudentDetails(studentId) {
    AppState.selectedStudentId = studentId;
    this.switchView('student');
  },

  onStudentSelectChange(studentId) {
    AppState.selectedStudentId = studentId;
    saveState();
    this.renderStudentDeepDive();
  },

  renderStudentDeepDive() {
    const student = AppState.students.find(s => s.id === AppState.selectedStudentId) || AppState.students[0];
    if (!student) return;

    const stats = MathEngine.getStudentOverallStats(student);

    // Profile header
    document.getElementById("student-header-name").textContent = student.name;
    document.getElementById("student-header-roll").textContent = student.rollNo;
    document.getElementById("student-header-email").textContent = student.email;
    document.getElementById("student-overall-metric").textContent = `${stats.overallPct}%`;
    document.getElementById("student-attended-metric").textContent = `${stats.totalAttended} / ${stats.totalClasses}`;
    document.getElementById("student-absent-metric").textContent = stats.totalAbsent;
    document.getElementById("student-shortages-metric").textContent = stats.shortageCount;

    // Student Defaulter Banner
    const banner = document.getElementById("student-status-banner");
    if (stats.shortageCount > 0) {
      banner.className = "p-3.5 rounded-xl border border-rose-500/40 bg-rose-950/20 flex items-center justify-between gap-4 text-xs";
      banner.innerHTML = `
        <div class="flex items-center gap-2.5 text-rose-300">
          <i data-lucide="alert-octagon" class="w-4 h-4 text-rose-400 shrink-0"></i>
          <span><strong>Debarment Alert:</strong> Attendance is below the mandatory ${AppState.threshold}% requirement in <strong>${stats.shortageCount} course(s)</strong>. Immediate remedial attendance required.</span>
        </div>
        <button onclick="Controller.openCondonationLetter('${student.id}')" class="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-500 text-white font-semibold text-xs shrink-0 transition">
          Generate HOD Letter &rarr;
        </button>
      `;
    } else {
      banner.className = "p-3 rounded-xl border border-emerald-500/30 bg-emerald-950/20 flex items-center gap-2.5 text-xs text-emerald-300";
      banner.innerHTML = `
        <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0"></i>
        <span><strong>Fully Eligible:</strong> Attendance exceeds the required ${AppState.threshold}% threshold across all registered subjects.</span>
      `;
    }

    // Render Subjects Table & Cards
    const tbody = document.getElementById("student-subjects-tbody");
    tbody.innerHTML = student.subjects.map((sub, idx) => {
      const absent = sub.totalClasses - sub.attendedClasses;
      const pct = MathEngine.getPercentage(sub.attendedClasses, sub.totalClasses);
      const isShort = pct < AppState.threshold;
      const needed = MathEngine.getConsecutiveNeeded(sub.attendedClasses, sub.totalClasses, AppState.threshold);
      const bunks = MathEngine.getSafeBunks(sub.attendedClasses, sub.totalClasses, AppState.threshold);

      return `
        <tr class="${isShort ? 'status-shortage' : ''}">
          <td>
            <span class="font-mono font-bold text-xs px-2 py-0.5 rounded bg-slate-800 text-blue-400 border border-slate-700/60">${sub.code}</span>
          </td>
          <td>
            <div class="font-semibold text-slate-100 text-sm">${sub.name}</div>
            <div class="text-xs text-slate-500">${sub.faculty}</div>
          </td>
          <td class="font-mono text-center font-semibold text-slate-200">${sub.totalClasses}</td>
          <td class="font-mono text-center font-semibold text-emerald-400">${sub.attendedClasses}</td>
          <td class="font-mono text-center font-semibold text-rose-400">${absent}</td>
          <td>
            <div class="flex items-center gap-2">
              <span class="font-mono font-bold text-sm ${isShort ? 'text-rose-400' : 'text-emerald-400'}">${pct}%</span>
              <div class="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden hidden md:block">
                <div class="h-full ${isShort ? 'bg-rose-500' : 'bg-emerald-500'}" style="width: ${Math.min(pct, 100)}%"></div>
              </div>
            </div>
          </td>
          <td>
            ${isShort 
              ? `<span class="px-2 py-0.5 rounded text-xs font-semibold status-shortage-badge inline-flex items-center gap-1">
                   <span class="w-1.5 h-1.5 rounded-full bg-rose-500"></span> Shortage (Needs +${needed})
                 </span>`
              : `<span class="px-2 py-0.5 rounded text-xs font-semibold status-safe-badge inline-flex items-center gap-1">
                   <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Safe (${bunks} bunks)
                 </span>`
            }
          </td>
          <td class="text-right">
            <div class="flex items-center justify-end gap-1">
              <button onclick="Controller.adjustAttendance('${student.id}', '${sub.code}', 1, 1)" title="+1 Present" class="p-1.5 rounded bg-emerald-950/60 hover:bg-emerald-900 border border-emerald-800/40 text-emerald-300 text-xs">
                <i data-lucide="plus" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="Controller.adjustAttendance('${student.id}', '${sub.code}', 1, 0)" title="+1 Absent" class="p-1.5 rounded bg-rose-950/60 hover:bg-rose-900 border border-rose-800/40 text-rose-300 text-xs">
                <i data-lucide="minus" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="Controller.openCalculatorModal('${student.id}', '${sub.code}')" title="Forecaster" class="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs">
                <i data-lucide="calculator" class="w-3.5 h-3.5"></i>
              </button>
            </div>
          </td>
        </tr>
      `;
    }).join("");

    if (window.lucide) lucide.createIcons();
  },

  adjustAttendance(studentId, subjectCode, totalDelta, attendedDelta) {
    const student = AppState.students.find(s => s.id === studentId);
    if (!student) return;
    const sub = student.subjects.find(s => s.code === subjectCode);
    if (!sub) return;

    sub.totalClasses += totalDelta;
    sub.attendedClasses += attendedDelta;
    if (sub.attendedClasses < 0) sub.attendedClasses = 0;
    if (sub.totalClasses < sub.attendedClasses) sub.totalClasses = sub.attendedClasses;

    saveState();
    this.renderClassroomStats();
    this.renderStudentDeepDive();
  },

  // Bulk Classroom Roll Call Session Mode
  initSessionRollCall() {
    AppState.sessionAttendance = {};
    AppState.students.forEach(s => {
      AppState.sessionAttendance[s.id] = true; // Default present
    });
  },

  renderSessionRollCall() {
    const container = document.getElementById("session-students-list");
    if (!container) return;

    // Subject select
    const subSelect = document.getElementById("session-subject-select");
    if (subSelect && subSelect.children.length === 0) {
      subSelect.innerHTML = CLASS_SUBJECTS.map(s => `
        <option value="${s.code}">${s.code} - ${s.name} (${s.faculty})</option>
      `).join("");
      subSelect.value = AppState.sessionSubjectCode;
      subSelect.addEventListener("change", (e) => {
        AppState.sessionSubjectCode = e.target.value;
      });
    }

    container.innerHTML = AppState.students.map(s => {
      const isPresent = AppState.sessionAttendance[s.id] !== false;
      const sub = s.subjects.find(x => x.code === AppState.sessionSubjectCode);
      const currentPct = sub ? MathEngine.getPercentage(sub.attendedClasses, sub.totalClasses) : 0;

      return `
        <div class="flex items-center justify-between p-3 rounded-lg border ${isPresent ? 'border-slate-800 bg-slate-900/50' : 'border-rose-900/50 bg-rose-950/20'} transition">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs text-slate-400 w-16">${s.rollNo}</span>
            <div>
              <div class="text-sm font-semibold text-slate-100">${s.name}</div>
              <div class="text-xs text-slate-500">Current Course Attendance: <strong class="${currentPct < AppState.threshold ? 'text-rose-400' : 'text-slate-300'}">${currentPct}%</strong></div>
            </div>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="Controller.setStudentSessionStatus('${s.id}', true)" class="px-3 py-1.5 rounded-md text-xs font-semibold transition ${isPresent ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400'}">
              Present
            </button>
            <button onclick="Controller.setStudentSessionStatus('${s.id}', false)" class="px-3 py-1.5 rounded-md text-xs font-semibold transition ${!isPresent ? 'bg-rose-600 text-white' : 'bg-slate-800 text-slate-400'}">
              Absent
            </button>
          </div>
        </div>
      `;
    }).join("");
  },

  setStudentSessionStatus(studentId, isPresent) {
    AppState.sessionAttendance[studentId] = isPresent;
    this.renderSessionRollCall();
  },

  markAllSession(status) {
    AppState.students.forEach(s => {
      AppState.sessionAttendance[s.id] = status;
    });
    this.renderSessionRollCall();
  },

  submitSessionAttendance() {
    const code = document.getElementById("session-subject-select").value || AppState.sessionSubjectCode;

    AppState.students.forEach(s => {
      const sub = s.subjects.find(x => x.code === code);
      if (sub) {
        sub.totalClasses += 1;
        if (AppState.sessionAttendance[s.id] !== false) {
          sub.attendedClasses += 1;
        }
      }
    });

    saveState();
    alert(`Classroom attendance successfully recorded for ${code}!`);
    this.switchView('roster');
  },

  // Debarment / Defaulter Report Mode
  renderDebarmentReport() {
    const list = document.getElementById("debarment-report-list");
    if (!list) return;

    const defaulters = [];
    AppState.students.forEach(s => {
      const stats = MathEngine.getStudentOverallStats(s);
      if (stats.isDefaulter) {
        defaulters.push({ student: s, stats });
      }
    });

    if (defaulters.length === 0) {
      list.innerHTML = `
        <div class="py-12 text-center text-slate-500">
          <i data-lucide="check-circle" class="w-10 h-10 mx-auto text-emerald-500 mb-2"></i>
          <p class="font-semibold text-slate-200">Zero Defaulters</p>
          <p class="text-xs">All classroom students meet the ${AppState.threshold}% attendance threshold.</p>
        </div>
      `;
      return;
    }

    list.innerHTML = defaulters.map(item => {
      const { student, stats } = item;
      return `
        <div class="p-4 rounded-xl border border-rose-900/60 bg-rose-950/10 mb-3">
          <div class="flex items-center justify-between border-b border-rose-900/40 pb-2 mb-2">
            <div>
              <span class="font-mono text-xs text-rose-400 font-bold">${student.rollNo}</span>
              <span class="text-sm font-bold text-white ml-2">${student.name}</span>
            </div>
            <span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-rose-500/20 text-rose-400 border border-rose-500/30">
              Overall: ${stats.overallPct}%
            </span>
          </div>
          <div class="text-xs text-slate-400 mb-2">Deficit Courses:</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${stats.shortageSubjects.map(sub => `
              <div class="p-2 rounded bg-slate-900/80 border border-slate-800 text-xs flex items-center justify-between">
                <div>
                  <span class="font-mono font-semibold text-slate-300">${sub.code}</span>
                  <span class="text-slate-400 ml-1">${sub.name}</span>
                </div>
                <div class="text-right">
                  <span class="font-mono text-rose-400 font-bold">${sub.pct}%</span>
                  <span class="text-[10px] text-slate-500 block">Needs +${sub.needed} classes</span>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      `;
    }).join("");
  },

  exportCSV() {
    let rows = [["Roll No", "Name", "Email", "Total Classes", "Attended", "Absent", "Overall %", "Status"]];
    AppState.students.forEach(s => {
      const stats = MathEngine.getStudentOverallStats(s);
      rows.push([
        s.rollNo,
        `"${s.name}"`,
        s.email,
        stats.totalClasses,
        stats.totalAttended,
        stats.totalAbsent,
        `${stats.overallPct}%`,
        stats.isDefaulter ? "DEFICIT/DEBARRED" : "ELIGIBLE"
      ]);
    });

    const csvContent = "data:text/csv;charset=utf-8," + rows.map(e => e.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `attendance_roster_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  // Modal: Add Student to Classroom
  openAddStudentModal() {
    document.getElementById("modal-add-student").classList.remove("hidden");
  },

  closeAddStudentModal() {
    document.getElementById("modal-add-student").classList.add("hidden");
  },

  saveNewStudent() {
    const rollNo = document.getElementById("new-stu-roll").value.trim();
    const name = document.getElementById("new-stu-name").value.trim();
    const email = document.getElementById("new-stu-email").value.trim() || `${rollNo.toLowerCase()}@synexia.edu`;

    if (!rollNo || !name) {
      alert("Please provide both Roll Number and Full Name.");
      return;
    }

    const newStudent = {
      id: "stu_" + Date.now(),
      rollNo,
      name,
      email,
      section: "A",
      subjects: CLASS_SUBJECTS.map(s => ({
        code: s.code,
        name: s.name,
        faculty: s.faculty,
        totalClasses: 40,
        attendedClasses: 32
      }))
    };

    AppState.students.push(newStudent);
    AppState.selectedStudentId = newStudent.id;
    saveState();
    this.closeAddStudentModal();
    this.render();
  },

  // Modal: Calculator
  currentCalcStudentId: null,
  currentCalcSubCode: null,
  openCalculatorModal(studentId, subCode) {
    this.currentCalcStudentId = studentId;
    this.currentCalcSubCode = subCode;
    const student = AppState.students.find(s => s.id === studentId);
    const sub = student ? student.subjects.find(x => x.code === subCode) : null;
    if (!sub) return;

    document.getElementById("calc-title").textContent = `${sub.code} - ${sub.name}`;
    document.getElementById("calc-current-pct").textContent = `${MathEngine.getPercentage(sub.attendedClasses, sub.totalClasses)}%`;
    document.getElementById("calc-add-attend").value = 0;
    document.getElementById("calc-add-miss").value = 0;
    this.updateCalculation();
    document.getElementById("modal-calculator").classList.remove("hidden");
  },

  closeCalculatorModal() {
    document.getElementById("modal-calculator").classList.add("hidden");
  },

  updateCalculation() {
    const student = AppState.students.find(s => s.id === this.currentCalcStudentId);
    const sub = student ? student.subjects.find(x => x.code === this.currentCalcSubCode) : null;
    if (!sub) return;

    const addAttend = parseInt(document.getElementById("calc-add-attend").value) || 0;
    const addMiss = parseInt(document.getElementById("calc-add-miss").value) || 0;

    document.getElementById("val-calc-add-attend").textContent = `+${addAttend}`;
    document.getElementById("val-calc-add-miss").textContent = `+${addMiss}`;

    const newAttended = sub.attendedClasses + addAttend;
    const newTotal = sub.totalClasses + addAttend + addMiss;
    const projPct = MathEngine.getPercentage(newAttended, newTotal);
    const needed = MathEngine.getConsecutiveNeeded(sub.attendedClasses, sub.totalClasses, AppState.threshold);
    const safeBunks = MathEngine.getSafeBunks(sub.attendedClasses, sub.totalClasses, AppState.threshold);

    document.getElementById("calc-projected-pct").textContent = `${projPct}%`;

    const verdict = document.getElementById("calc-verdict");
    if (projPct < AppState.threshold) {
      verdict.className = "p-3 rounded-lg border border-rose-500/40 bg-rose-950/20 text-rose-300 text-xs";
      verdict.innerHTML = `<strong>Shortage:</strong> Must attend <strong>${needed} consecutive classes</strong> to reach the ${AppState.threshold}% requirement.`;
    } else {
      verdict.className = "p-3 rounded-lg border border-emerald-500/40 bg-emerald-950/20 text-emerald-300 text-xs";
      verdict.innerHTML = `<strong>Safe Zone:</strong> Student is eligible and has <strong>${safeBunks} safe bunk(s)</strong> available.`;
    }
  },

  // Modal: Condonation Letter
  openCondonationLetter(studentId) {
    const student = AppState.students.find(s => s.id === studentId);
    if (!student) return;

    const stats = MathEngine.getStudentOverallStats(student);
    const dateStr = new Date().toLocaleDateString('en-GB');

    const deficits = stats.shortageSubjects.map(s => 
      `- ${s.code} ${s.name}: ${s.pct}% (Requirement: ${AppState.threshold}%, Deficit: +${s.needed} classes)`
    ).join("\n");

    const template = `To:
The Head of Department,
Department of Computer Science & Engineering,
Synexia Institute of Technology.

Date: ${dateStr}
Subject: Official Application for Attendance Condonation

Respected HOD,

I am writing on behalf of student ${student.name} (Roll No: ${student.rollNo}), currently enrolled in ${AppState.classroomName}.

Due to documented medical / official duty leaves, the student's attendance has dipped below the ${AppState.threshold}% threshold in the following course(s):

${deficits || "All courses currently meet the eligibility threshold."}

Aggregate Class Attendance: ${stats.overallPct}% (${stats.totalAttended} / ${stats.totalClasses} classes attended).

We request favorable consideration and condonation of the shortage to permit semester examination clearance upon completion of compensatory tutorial assignments.

Sincerely,

______________________
Class Advisor Signature
Synexia Academic Administration`;

    document.getElementById("letter-body-text").value = template;
    document.getElementById("modal-condonation").classList.remove("hidden");
  },

  closeCondonationLetter() {
    document.getElementById("modal-condonation").classList.add("hidden");
  },

  copyLetter() {
    const text = document.getElementById("letter-body-text").value;
    navigator.clipboard.writeText(text).then(() => {
      alert("Application letter copied to clipboard!");
    });
  }
};

// Initialize on DOM load
document.addEventListener("DOMContentLoaded", () => {
  Controller.init();
});
