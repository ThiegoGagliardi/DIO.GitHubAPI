import Styled from "styled-components";
import {Tabs, TabList, Tab, TabPanel} from "react-tabs";

export const WrapperTabs = Styled(Tabs) `
  font-size: 12px
  width: 50%;
  margin-top: 16px;
`;


export const WrapperTabList = Styled(TabList) `
  list-style-type: none;
  padding: 4px;
  display: flex;
  margin: 0px;
`;

WrapperTabList.tabsRole = 'TabList';

export const WrapperTab = Styled(Tab) `
   border-radius: 16px;
   border: 1px solid #ccc;
   padding: 16px;
   user-selecte: none;
   cursor: pointer;
   z-index: 99999;
   back-ground-color: '#fff';
   margin: 8px;

   &:focus {
       outline: none; 
       box-shadow: 2px 2px 8px blue opacity: 0.5;         
    }

   &.is-selected {
       border-bottom: 2px solid blue;
       border-top-rigth-radius: 20px;
       border-top-left-radius: 20px;       
       border-bottom-rigth-radius: 0px;
       border-bottom-left-radius: 0px;

   }
`;

WrapperTab.tabsRole = 'Tab';

export const WrapperTabPanel = Styled(TabPanel) `
  display: none;
  min-height: 40vh;
  border: 2px solid blue;
  padding: 16px;
  margin-top: -5;

  box-shadow: 0 0 2em blue opacity: 0.5;  

  &.is-selected {
    display: block;
}  
`;

WrapperTabPanel.tabsRole = 'TabPanel';

export const WrapperList = Styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
