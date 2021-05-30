


import React, { useState, useEffect} from 'react';
import './App.css';





function App() {

  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [avatar_url, setAvatar] = useState('');
  const [followers, setFollowers] = useState('');
  const [twitter_username, setTwitter] = useState('');
  const [following, setFollowing] = useState('');
  const [public_repos, setRepositories] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [created_at, setJoinedDate] = useState('');
  const [blog, setWebsite] = useState('');
  const [bio, setBio] = useState('');
  const [hireable, setHireable] = useState('');
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState('');




  useEffect(() => {

   console.log("Hello use Effect");
   
    
  }, []);




  // const setData = ({name, followers, avatar_url}) => {

  //   setName(name);
  //   setFollowers(followers);
  //   setAvatar(avatar_url);

  // }


const handleSearch = e => {

console.log(e.target.value);
setUserInput(e.target.value);

}



const handleSubmit = () => {

 

  if(userInput === ""){
    alert("Insert Github Username !");
  }
  else{

    fetch(`https://api.github.com/users/${userInput}`)
    .then(response => response.json())
    .then(data => {
    
     if (data.message){
    
      setError(data.message);
      setName(null);
      setLogin(null);
      setFollowers(null);
      setAvatar(null);
      setTwitter(null);
      setFollowing(null);
      setRepositories(null);
      setEmail(null);
      setCompany(null);
      setWebsite(null);
      setLocation(null);
      setJoinedDate(null);
      setBio(null);
      setHireable(null);
      
     }
     else{
      

      setName(data.name);
      setLogin(data.login);
      setAvatar(data.avatar_url);
      setFollowers(data.followers);
      setTwitter(data.twitter_username);
      setFollowing(data.following);
      setRepositories(data.public_repos);
      setEmail(data.email);
      setCompany(data.company);
      setWebsite(data.blog);
      setLocation(data.location);
      setJoinedDate(data.created_at);
      setBio(data.bio);
      setHireable(data.hireable);
      setError(null);

     }
    
    });


  }


 
}



const hide = () => {

setLogin(null);

}

 

  return (


    <div className="App">

      <div className="heading">Github Profile</div>
      <div className="subHeading">Generate your Github Profile</div>
      <div className="label">Github Username</div>
    <div className="form">
    <input className="inputField" placeholder="    Name" name="name" onChange={handleSearch} />
    <button className="generateBtn" onClick={handleSubmit} >Generate</button>
    </div>
    
      
      {error ? <div className="heading">{error}</div> : null}

      {login ? (<>
      
      
        <div id="profile" className="card-wrapper">

<div className="topWrapper">

<div  className="goBack">  <img onClick={hide} alt=""/> </div>
<div className="hireMeWrapper">

{hireable === true ? <button id="hire" className="hireMe">Hire Me</button> :
 null}


</div>

</div>

<div className="image">
  <img width="120" height="120" src={avatar_url} alt="profile"/>
</div>



<div className="card">


<h1 className="username">{name}</h1>
<h2 className="twitterUsername">{twitter_username}</h2>

<div className="shortDetailWrapper">
 
 <div className="shortBox">
   <h1>{followers}</h1>
   <button>Followers</button>
 </div>

 <div className="shortBox">
   <h1>{following}</h1>
   <button>Following</button>
 </div>

 <div className="shortBox">
   <h1>{public_repos}</h1>
   <button>Repositories</button>
 </div>



</div>


<div className="largeBoxWrapper">

<div className="largeBox">

<div className="splitLargeBox">

  <div className="largeBoxElement">
      <p>Email</p>
      <p>{email}<span>E</span></p>
  </div>

  <div className="largeBoxElement">
      <p>Location</p>
      <p>{location}<span>E</span></p>
  </div>

  <div className="largeBoxElement">
      <p>Twitter</p>
      <p>{twitter_username}<span>E</span></p>
  </div>


</div>


<div className="splitLargeBox">

<div className="largeBoxElement">

      <p>Organization</p>
      <p>{company}<span>E</span></p>
  </div>

  <div className="largeBoxElement">
      <p>Joined Date</p>
      <p>{created_at}<span>E</span></p>
  </div>

  <div className="largeBoxElement">
      <p>Website</p>
      <p>{blog}<span>E</span></p>
  </div>


</div>



</div>

<div className = "largeBox">

  <h1>Bio</h1>
  <p>{bio}</p>

</div>


</div>






</div>




</div>




















      
      
      
      </>): null}


  



 


        </div>
   
  );
}

export default App;
