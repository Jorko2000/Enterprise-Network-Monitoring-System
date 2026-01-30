import { api } from "../api/api";

export default function Login() {
  const login = async () => {
    const res = await api.post("/auth/login", {
      email: "admin@test.com",
      password: "password"
    });
    localStorage.token = res.data.token;
    window.location.reload();
  };

  return <button onClick={login}>Login</button>;
}
