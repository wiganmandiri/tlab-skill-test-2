import API from '../config/api';

export const login = (params: any) => {
  return API
    // .get(`/connect?client_id=${params.client_id}&redirect_uri=https://soundcloud.com&response_type=code&state=wigan`, params)
    .get(`/me&client_id=${params.client_id}`,
      {
        headers: {
          Authorization: params?.token
        }
      }
    )
}