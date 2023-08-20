import jwtDecode from "jwt-decode";

function isValidToken() {
  const accessToken = localStorage.getItem('jwt_token');

  try {
    const { exp } = jwtDecode(accessToken);

    if (Date.now() >= exp * 1000) {
      return false;
    }
  } catch (e) {
    return false;
  }
  return true;
}

export default isValidToken;