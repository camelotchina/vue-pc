
import  { HTTP } from '../util/axios'

const api = {
  // 公用接口
  base: {
    getUser: () => HTTP.get('/user/list')
  },
  // 权限接口
  auth: {

  },

}

export default api;
