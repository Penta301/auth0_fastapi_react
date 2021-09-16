import { useEffect } from "react";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function Logic() {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const configAxios = async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      console.log("Token:", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }
  };

  const api = axios.create({
    baseURL: "http://127.0.0.1:8000/api",
  });

  useEffect(() => {
    configAxios();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const protectedCall = async () => {
    const token = await getAccessTokenSilently();
    const { data } = await api.get("/test/private", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    console.log(data);
  };

  const unProtectedCall = async () => {
    const { data } = await api.get("/test");
    console.log(data);
  };

  return {
    protectedCall,
    unProtectedCall,
  };
}

export default Logic;
