import React from "react";
import AppFrame from "./AppFrame";
import { BrowserRouter } from 'react-router-dom'; 
export default {
    title : "AppFrame render",
    component:AppFrame
}


export const AppFrameExample = () => (
    <BrowserRouter>
         <AppFrame> patan y momo patan y momopatan y momopatan y momopatan y momopatan y momopatan y momopatan y momopatan y momo</AppFrame>   
    </BrowserRouter>
)