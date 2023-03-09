import _ from 'lodash'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getDataMe, getDataTrack } from '../../redux/other/action'

const ApiHome = () => {
  const dispatch = useDispatch()

  const { isLoading, data, type, message, status } = useSelector((state: any) => state.otherReducer);

  let [params, setParams] = useState({
    client_id: '',
    access_token: ''
  })

  const onChange = (e: any) => {
    setParams(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onGetMe = () => {
    dispatch(getDataMe(params))
  }
  const onGetTrack = () => {
    dispatch(getDataTrack(params))
  }

  return (
    <div className='max-w-[1200px] space-y-8 m-auto flex flex-col items-center my-[5rem]'>
      <div className='flex flex-col gap-4'>
        <input className='border p-2 rounded-lg' type='text' name='client_id' onChange={(e) => onChange(e)} placeholder='client_id'></input>
        <input className='border p-2 rounded-lg' type='text' name='access_token' onChange={(e) => onChange(e)} placeholder='access_token'></input>
        <div className='flex gap-4'>
          <button className='bg-blue-400  text-white px-6 py-1 rounded-lg' onClick={() => onGetMe()}>Get About Me</button>
          <button className='bg-green-400  text-white px-6 py-1 rounded-lg' onClick={() => onGetTrack()}>Get Activities</button>
        </div>
      </div>
      <div>
        {isLoading ? <h1>Loading</h1>
          : type === 'me' ?
            <div>
              <h1>Reslut About</h1>
              <h2>First Name : {data?.first_name}</h2>
              <h2>Description : {data?.description}</h2>
              <h2>Country : {data?.country}</h2>
            </div>
            : type === 'track' ?
              <div>
                <h1>Result Activity</h1>
                <div>
                  {_.map(data?.collection, index => (
                    <h2>{index?.type} - {index?.created_at}</h2>
                  ))}
                </div>
              </div> : false
        }
        <div>{status ?? message}</div>
      </div>
      <div>
        <iframe src="https://w.soundcloud.com/player/?visual=false&url=https%3A%2F%2Fapi.soundcloud.com%2Ftracks%2F310215586&show_artwork=false&show_comments=false" allowFullScreen>
        </iframe>
      </div>
    </div>
  )
}

export default ApiHome