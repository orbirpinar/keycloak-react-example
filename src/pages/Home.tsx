import * as React from 'react'
import { useCallback,useState } from 'react'

import { useKeycloak } from '@react-keycloak/web'

import { useAxios } from '../utils/hooks'
import Navbar from '../components/Navbar'
import { userInfo } from 'os'


interface ProfileType  extends React.Props<any>{
    username : string | undefined,
    email : string | undefined
}

export default () => {
  const { keycloak } = useKeycloak()
  const [profile, setProfile] = useState<ProfileType | undefined>(undefined)

  const axiosInstance = useAxios('http://localhost:8087') // see https://github.com/panz3r/jwt-checker-server for a quick implementation
  const callApi = useCallback(() => {
    !!axiosInstance.current && axiosInstance.current.get('/orderRequests')
  }, [axiosInstance])



  return (
    <div>
        <Navbar/>
      {/* <div>User is {!keycloak?.authenticated ? 'NOT ' : keycloak?.profile?.firstName} authenticated</div> */}

      {/* {!!keycloak?.authenticated && (
          <div> 
        <button type="button" onClick={() => keycloak.logout()}>
          Logout
        </button>
        <p>{profile?.email}</p>
        </div>
      )}

      <button type="button" onClick={callApi}>
        Call API
      </button> */}
    </div>
  )
}