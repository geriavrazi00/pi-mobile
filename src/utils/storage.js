import AsyncStorage from "@react-native-community/async-storage";

function get(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then(data => resolve(JSON.parse(data)))
      .catch(err => reject(err));
  });
}

function set(key, data) {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem(key, JSON.stringify(data))
      .then(response => resolve(response))
      .catch(err => reject(err));
  });
}

function remove(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.removeItem(key).then(response =>
      resolve(response).catch(err => reject(err))
    );
  });
}

export default { get, set, remove };
