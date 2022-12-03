import axios from "axios";

const API_KEY = "AIzaSyDJpq0zZIMD9BEg-XCaM5p9TakwJcmwt0A";

export const authenticateUser = async (mode, email, password) => {
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:${mode}?key=${API_KEY}`;
  const response = await axios.post(URL, {
    email:email,
    password: password,
    recentSecureToken: true,
  });
  const token=response.data.idToken
  return token
};

export const createUser =  (email, password) => {
 return authenticateUser("signUp", email, password);

};
export const loginUser =  (email, password) => {
  return  authenticateUser("signInWithPassword", email, password);
};




