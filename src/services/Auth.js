import axios from 'axios';
import Cookies from 'js-cookie';

const API_URL = 'http://localhost:4000/api/auth/login';

export const login = async (identifier, password) => {
  try {
    const response = await axios.post(API_URL, { identifier, password });

    if (response.data.tokens) {
      Cookies.set('accessToken', response.data.tokens.accessToken);
      Cookies.set('refreshToken', response.data.tokens.refreshToken);
      Cookies.set('user', response.data.user.id);

      return response.data.user.role;
    }
    
    return null;
  } catch (error) {
    console.error('Login gagal', error);
    throw new Error('Login gagal');
  }
};
