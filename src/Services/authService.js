import { api, requestConfig } from "../Utils/config";

//Register user
const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(`${api}/users`, config)
      .then((res) => res.json())
      .catch((err) => err);

    const loginInfo = {
      Email: res.email,
      Password: res.password,
    };
    console.log(res);
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

    return res;
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
