import React, { Children } from "react";
import "./App.css";
import Login from "./Components/First/Login";
import Signup from "./Components/First/Signup";
import RecoverPassword from "./Components/First/RecoverPassword";
import VerifyCode from "./Components/First/VerifyCode";
import SetNewPassword from "./Components/First/SetNewPassword";
import SideBar from "./Components/sideBar/SideBar";
import Dashboard from "./Components/dashboard/Dashboard";
import Aiworking from "./Components/Chatbot/Aiworking";
import Goals from "./Components/goals/Goals";
import MetabolicCommunity from "./Components/community/metabolicCommunity";

import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import SidebarData from "./Components/sidebardata/SidebarData";
import ProfileSetting from "./Components/profilesetting/profileSetting";
import SecuritySettings from "./Components/securitysetting/securitySettings";
import HealthCare from "./Components/healthcare/healthCare";
import Settinghomepage from "./Components/settingdata/settinghomepage";

import Setting from "./Components/setting/setting";
import Generalpref from "./Components/Generalprefrence/generalpref";
import Goalsprogress from "./Components/Goalsprogress/goalsprogress";
import Goalsdetails from "./Components/goalsDetails/goalsdetails";
import Goalsactivities from "./Components/goalsactivities/goalsactivities";
import ChatBot from "./Components/Chatbot/chatBot";
import Animationpage from "./Components/animation/animationpage";
import Finishcallanimation from "./Components/animation/finishcallanimation";
import Handpage from "./Components/animation/handpage";
import Animation3 from "./Components/animation/handpage";


const router = createBrowserRouter([
  {
    path: "/",

    element: <SidebarData />,
  
   children:[
    
      {
        path: "/dashboard",
        element: <Dashboard />,
       
      },
      {
        path:"/chatbot",
        element:<ChatBot />
      },
      {
        path: "/goals",
        element: <Goals />,
      },
      {
        path: "/community",
        element: <MetabolicCommunity />,
      },
      {
        path: "/settings",
        element: <Setting />,
       
      },
    ]
  },
  {
path:"/login",
element:<Login />
  },
  {
    path: "/signup",
    element: <Signup />,
  },{
    path: "/recoverpassword",
    element: <RecoverPassword />,
  },
  {
    path: "/verifycode",
    element: <VerifyCode />,
  },
  {
    path: "/setnewpassword",
    element: <SetNewPassword />,
  },
 
  
  {
    path:"/healthcare",
    element:<HealthCare />
  },
 {
  path:"/goalsprogress",
  element:<Goalsprogress />
 },
 {
path:"/goalsdeatails",
element:<Goalsdetails />,
 },

{
  path:"/generalpref",
  element:<Generalpref />
},
{
  path:"/aiworking",
  element:<Aiworking />
},
{
  path:"/goalsactivities",
  element:<Goalsactivities />
},
{
  path:"animation",
  element:<Animationpage />
},
{
  path:"/finishcallanimation",
  element:<Finishcallanimation />
},{
  path:"/handpage",  
  element:<Handpage />
},

]);


function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Signup /> */}
      {/* <RecoverPassword /> */}
      {/* <VerifyCode /> */}
      {/* <SetNewPassword /> */}
      {/* <SideBar /> */}
      {/* <Dashboard /> */}
      {/* < Aiworking /> */}
      {/* <Goals /> */}
      {/* <MetabolicCommunity />  */}
      {/* <Setting /> */}
      <RouterProvider router={router} />
   
      {/* < HealthCare /> */}
    </>
  );
}

export default App;
