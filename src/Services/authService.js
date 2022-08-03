import { api, requestConfig } from "../Utils/config";

//Register user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(`${api}/users/register`, config)
      .then((res) => res.json())
      .catch((err) => err);

    const loginInfo = {
      Email: res.Email,
      Password: res.Password,
    };

    login(loginInfo);
  } catch (error) {
    console.log(error);
  }
};

const login = async (data) => {
  const config = requestConfig("PUT", data);

  try {
    const res = await fetch(`${api}/users/login`, config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res) {
      localStorage.setItem("user", JSON.stringify(res));
    }
  } catch (error) {
    console.log(error);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  login,
  logout,
};

export default authService;
