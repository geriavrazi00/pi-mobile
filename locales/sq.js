export default {
  login: {
    title: "kyçu",
    registry: "NR. I AMZËS",
    password: "FJALËKALIMI"
  },
  dashboard: {
    class: "Klasa",
    general: "E përgjithshme",
    absences: absencesNr => `${absencesNr} Mungesa`,
    subjects: (subjectsNr, hoursNr) => `${subjectsNr} Lëndë / ${hoursNr} Orë`,
    average: averageNr => `${averageNr} Mesatare`,
    grades: (gradesNr, commentsNr) =>
      `${gradesNr} Nota / ${commentsNr} Komente`,
    lastFive: "5 ditët e fundit",
    avgTitle: "Mesatarja në muaj",
    classRank: "Renditja në Klasë",
    schoolRank: "Renditja në Shkollë"
  },
  schedule: {
    totalHours: hours => `Totali ${hours} orë`,
    totalGrades: grades => `Totali ${grades} nota`,
    syllabus: "Silabusi",
    stats: "Statistika"
  },
  calendar: {
    grades: "Notat",
    attendance: "Pjesëmarrja",
    info: "Informacion",
    today: "Sot",
    todayDate: "Dita e sotme",
    dateWithGrades: "Ditë me notë/a",
    dateWithAbsences: "Ditë mungesë/a",
    noMarkDates: "* Ditët pa asnjë shenjues nuk kanë nota ose mungesa."
  },
  hoursNumber: {
    0: "Ora e parë",
    1: "Ora e dytë",
    2: "Ora e tretë",
    3: "Ora e katërt",
    4: "Ora e pestë",
    5: "Ora e gjashtë",
    6: "Ora e shtatë",
    7: "Ora e tetë"
  },
  hoursNumber2: {
    0: "Orën e parë",
    1: "Orën e dytë",
    2: "Orën e tretë",
    3: "Orën e katërt",
    4: "Orën e pestë",
    5: "Orën e gjashtë",
    6: "Orën e shtatë",
    7: "Orën e tetë"
  },
  modal: {
    grade: "NOTA",
    gradeAction: grade => `Vlerësim me notën ${grade}`,
    absenceAction: absence => `Mungesë në ${absence}`,
    noAssessment: "Nuk ka vlerësim",
    status: "STATUSI",
    statusMissing: "Mungesë",
    statusPresent: "Prezent në klasë",
    comment: "Komenti i mësuesit",
    noComment: "Nuk ka komente",
    evaluation: "Vlerësimi",
    behavior: "Sjellja",
    homework: "D. Shtëpie",
    subChapterCompleted: "Përfunduar",
    subChapterInProgress: "Në zhvillim",
    noLesson: "Pushim"
  },
  profile: {
    language: "Gjuha:",
    logout: `Ç'kyçuni`
  },
  notifications: {
    emptyField: "Të dhënat bosh",
    emptyPassord: "Ju lutem shkruani fjalëkalimin",
    emptyRegNumber: "Ju lutem shkruani numrin e amzës",
    error: "Gabim",
    checkCredentials: "Ju lutem kontrolloni kredencialet",
    somethingWrong: "Diçka shkoi keq!",
    tryAgain: `Ju lutem tërhiqeni ekranin poshtë për të rifreskuar ose provojeni më vonë.`
  },
  months: [
    "Jan",
    "Shku",
    "Mar",
    "Pri",
    "Maj",
    "Qer",
    "Kor",
    "Gush",
    "Shta",
    "Tet",
    "Nën",
    "Dhje"
  ],
  days: {
    mon: "E Hënë",
    tue: "E Martë",
    wed: "E Mërkurë",
    thur: "E Enjte",
    fri: "E Premte"
  },
  bottomNav: {
    dashboard: "Paneli",
    calendar: "Kalendari",
    today: "Sot",
    schedule: "Orari",
    profile: "Profili"
  }
};
