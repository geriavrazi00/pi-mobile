export default {
  login: {
    title: "log in",
    registry: "REGISTRY NUMBER",
    password: "PASSWORD"
  },
  dashboard: {
    class: "Class ",
    general: "General",
    absences: absencesNr => `${absencesNr} Absences`,
    subjects: (subjectsNr, hoursNr) =>
      `${subjectsNr} Subjects / ${hoursNr} Hours`,
    average: averageNr => `${averageNr} Average`,
    grades: (gradesNr, commentsNr) =>
      `${gradesNr} Grades / ${commentsNr} Comments`,
    lastFive: "Last five days",
    avgTitle: "Average per month",
    classRank: "Class Rank",
    schoolRank: "School Rank"
  },
  schedule: {
    totalHours: hours => `${hours} Total hours`,
    totalGrades: grades => `${grades} Total grades`,
    syllabus: "Syllabus",
    stats: "Stats"
  },
  calendar: {
    grades: "Grades",
    attendance: "Attendance",
    info: "Information",
    today: "Today",
    todayDate: "Today Date",
    dateWithGrades: "Date with grades",
    dateWithAbsences: "Date with absences",
    noMarkDates: "* Dates with no mark on them do not have grades or absences."
  },
  hoursNumber: {
    0: "1st Hour",
    1: "2nd Hour",
    2: "3rd Hour",
    3: "4th Hour",
    4: "5th Hour",
    5: "6th Hour",
    6: "7th Hour",
    7: "8th Hour"
  },
  hoursNumber2: {
    0: "1st Hour",
    1: "2nd Hour",
    2: "3rd Hour",
    3: "4th Hour",
    4: "5th Hour",
    5: "6th Hour",
    6: "7th Hour",
    7: "8th Hour"
  },
  modal: {
    grade: "GRADE",
    gradeAction: grade => `Assessment with grade ${grade}`,
    absenceAction: absence => `Absent in ${absence}`,
    noAssessment: "No assessment",
    status: "STATUS",
    statusMissing: "Absent",
    statusPresent: "Present",
    comment: "Teacher's comment",
    noComment: "There are no comments",
    evaluation: "Evaluation",
    behavior: "Behavior",
    homework: "Homework",
    subChapterCompleted: "Completed",
    subChapterInProgress: "In progress",
    noLesson: "No Lesson"
  },
  profile: {
    language: "Language:",
    logout: "Log Out"
  },
  notifications: {
    emptyField: "Empty Field",
    emptyPassord: "Please type your password",
    emptyRegNumber: "Please type your registry number",
    error: "Error",
    checkCredentials: "Please check your credentials",
    somethingWrong: "Something Went Wrong!",
    tryAgain: "Please pull to refresh or try again later."
  },
  months: [
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
    "Dec"
  ],
  days: {
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thur: "Thursday",
    fri: "Friday"
  },
  bottomNav: {
    dashboard: "Dashboard",
    calendar: "Calendar",
    today: "Today",
    schedule: "Schedule",
    profile: "Profile"
  }
};
