import React, {useEffect} from 'react'
import Axios from 'axios'


function LandingPage() {

    useEffect(() => {
        Axios.get('/admin/auth')
        .then(response=>console.log(response)) 
    }, [])

    return (
        <div style={{
            display:'flex', justifyContent:'center', alignItems:'center', width:'100%', height:'100vh'
        }}>
            <h2>시작페이지</h2>
        </div>
    )
}

export default LandingPage
