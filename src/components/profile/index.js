import React from "react";
import useGithub from "../../hooks/github-hooks";
import * as S from "./styled";

const Profile = () => {

   const { githubState }  = useGithub();

    return (      
        <S.Wrapper>
           
          <S.WrapperImg  src={githubState.user.avatar}  alt="Avatar of user"/>
                                  
           <S.WrapperInforUser>
             <div>
               <h1>{githubState.user.name}</h1>
               <S.WrapperUserName>
                 <h3>Username: </h3>
                 <a  href={githubState.user.html_url} target="_blank" rel="noreferrer">{githubState.user.login}</a>                                 
               </S.WrapperUserName>
               <S.WrapperUserGeneric>
                 <h3>Company:</h3>
                 <span>{githubState.user.company}</span>
               </S.WrapperUserGeneric>
               <S.WrapperUserGeneric>
                 <h3>Location:</h3>
                 <span>{githubState.user.location}</span>
               </S.WrapperUserGeneric>
               <S.WrapperUserGeneric>
                 <h3>Blog:</h3>
                 <a href={githubState.user.blog} target="_blank" rel="noreferrer"> {githubState.user.blog} </a>
               </S.WrapperUserGeneric>               
             </div>     

              <S.WrapperStatusCount>
               <div>
                  <h4>Followers</h4>
                  <span>{githubState.user.followers}</span>
               </div>
               <div>
                  <h4>Gistis</h4>
                  <span>{githubState.user.public_gists}</span>
               </div>
               <div>
                  <h4>Followings</h4>
                  <span>{githubState.user.following}</span>
               </div> 

               <div>
                  <h4>Repos</h4>
                  <span>{githubState.user.public_repos}</span>
               </div>                                             
              </S.WrapperStatusCount>             
          </S.WrapperInforUser> 
        </S.Wrapper>
        
    );
}

export default Profile;