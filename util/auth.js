import axios from "axios";

const API_KEY = "AIzaSyDJpq0zZIMD9BEg-XCaM5p9TakwJcmwt0A";
export const createUser = async(email, password) => {
    const response =await axios.post(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
    {
      email: email,
      password: password,
      recentSecureToken: true,
    }
  );
};
