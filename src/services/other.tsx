import API from '../config/api';

export const getMe = (params: any) => {
  return API
    .get(`/me?client_id=${params.client_id}`,
      {
        headers: {
          Authorization: params?.access_token
        }
      }
    )
}

export const getTrack = (params: any) => {
  return API
    // .get(`/tracks?client_id=${params.client_id}&limit=10`,
    .get(`/me/activities?client_id=${params.client_id}&limit=10`,
      {
        headers: {
          Authorization: params?.access_token
        }
      }
    )
}