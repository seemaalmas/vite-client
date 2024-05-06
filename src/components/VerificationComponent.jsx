import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { verify } from '../api-component/Api';
const VerificationComponent = () => {
    const {verificationToken} =useParams();
    const {history} = useHistory();

    useEffect(()=> {
        
        try{
            const response = verify({verificationToken});
            if(response) history.pushState('./login');
        }catch(err){
            alert(err);
        }
        
    
  }, [verificationToken, history]);

    return(
        <div>Verifying....</div>
    )

}

export default VerificationComponent;