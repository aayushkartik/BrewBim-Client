import React,{useState} from 'react';
import './css/Modal.css';

const LoginPage = (props) => {
  const[userData,setuserData]= useState({
    email:'',
    password:''
  });
    function updateHandler(event) {
        const Name= event.target.name;
        const val= event.target.value;
        setuserData({...userData ,[Name]:val});
    }
  if(!props.display){
    return null;
  }
  

//   async function SubmitHandler(e){
//     try{
//         e.preventDefault();
//         const response = await axios.post('http://localhost:8080/postquestion',{
//                 question: ques,
                
//             },{
//                 withCredentials: true
//             });
//           setQues('');
//         if(response.status===200){
//           reduxpost();
//           props.modalClose();
//           alert('Successfully posted');

//         }
//         else{
//             console.log(response.status);
//         }
//     }catch(err){
//         alert('Invalid');
//         console.error(err);
//     }
// }
  return (
    <div className="modals" >
    <div className="modals-content">
    
    <div className="modals-header">
    <button type="button" className="btn btn-outline-danger" onClick={props.modalClose}>X</button>
    </div>
    <h4 className="modals-title">Welcome back !</h4>

    <div className="modals-body">
      {/* <input className="Question-Input" onChange={(e)=> setQues(e.target.value)} value={ques} ></input> */}
      <input
          required
          className='inputs-fields'
          label="email"
          type="email"
          onChange={updateHandler}
          value={userData.email}
          autoComplete="off"
          placeholder="your email"
          name="email"
        /> <br/>
                <input
          required
          className='inputs-fields'
          label="Password"
          type="password"
          onChange={updateHandler}
          value={userData.password}
          autoComplete="off"
          placeholder="Password"
          name="password"
        /> <br/>
        <button className="Log">Login</button><br/>
        <a href="#">forgot password</a>

    </div>
    </div>
    </div>
  )
}
export default LoginPage
