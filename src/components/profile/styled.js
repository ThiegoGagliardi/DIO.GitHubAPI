import Styled from  "styled-components";

export const Wrapper = Styled.div `
   display: flex;
   align-items: flex-start;
   `;

   export const WrapperStatusCount = Styled.div `
     display: flex;
     align-items: flex-start;
     div{       
        margin: 8px;
        text-items: center;
      }     
   `; 
   
   export const WrapperUserName = Styled.div `
     display: flex;
     align-items: center;
     margin-top: 8px;
     a{
        color: blue;
        font-weght: bold;
        font-size:18px;
     }

      h3{       
         margin-right: 8px;
      }
   `; 

   export const WrapperUserGeneric = Styled.div `
     display: flex;
     align-items: center;
     margin-top: 8px;
     a{
        color: blue;
        font-weght: bold;
        font-size:18px;
     }

      h3{       
         margin-right: 8px;
      }
   `;   

   export const WrapperInforUser = Styled.div `
     display: flex;
     align-items: flex-start;
     flex-direction: column;
     justify-content: space-between;
     margin-left: 8px;
     height: 200px;

     h1{
         font-size: 32px;
         font-weight: bold;
        }

      h3{
        font-size: 18px;
        font-weight: bold; 
      } 
      
      h4{
        font-size: 14px;
        font-weight: bold; 
      }       
   `;

   export const WrapperImg = Styled.img `
     width: 200px; 
     margin: 8px;  
     border-radius : 50%;
   `;   
     