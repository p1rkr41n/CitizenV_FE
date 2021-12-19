import axios from 'axios';

const API_URL = 'http://localhost:3000/api/';

class AuthService {
  login(user) {
    return axios
      .post(API_URL + 'auth', {
        id: user.id,
        password: user.password
      })
      .then(response => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem('user');
  }

  register(user) {
    return axios.post(API_URL + 'signup', {
      id: user.id,
      email: user.email,
      password: user.password
    });
  }
}

export default new AuthService();