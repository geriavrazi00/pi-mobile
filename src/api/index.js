import request from "./ApiCentral";
import { ls } from "_utils";

async function getPostBody(obj = {}) {
  const user = await ls.get("USER");
  const token = await ls.get("TOKEN");
  if (obj.student_id) {
    return {
      ...obj,
      student_id: user.id,
      token
    };
  }
  return {
    ...obj,
    id: user.id,
    token
  };
}

function login({ registryNumber, password, userId }) {
  return request({
    url: "login",
    params: {
      amza: registryNumber,
      password,
      user_id: userId
    }
  });
}

async function getDashboardData() {
  const data = await getPostBody();

  return request({
    url: "dashboard",
    data
  });
}

async function getProfilePic() {
  const data = await getPostBody();
  return request({
    url: "profilepic",
    data
  });
}

async function getDailyData() {
  const data = await getPostBody();
  return request({
    url: "daily",
    data
  });
}

async function getAttendance() {
  const data = await getPostBody();
  return request({
    url: "attendance",
    data
  });
}

async function getGrades() {
  const data = await getPostBody();
  return request({
    url: "grades",
    data
  });
}

async function getSchedule() {
  const data = await getPostBody();
  return request({
    url: "schedule",
    data
  });
}

async function getSubject(obj) {
  const data = await getPostBody(obj);
  return request({
    url: "subject",
    data
  });
}

async function setLanguage(language) {
  const data = await getPostBody({ language });
  return request({
    url: "language",
    data
  });
}

async function logOut(userId) {
  const data = await getPostBody({ user_id: userId });
  return request({
    url: "logout",
    data
  });
}

export {
  login,
  getDashboardData,
  getProfilePic,
  getDailyData,
  getAttendance,
  getGrades,
  getSchedule,
  getSubject,
  setLanguage,
  logOut
};
