
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import MainScreenScreen from './Screen/mainScreen';
import Registration from './Screen/Registration';
import LoginScreen from './Screen/LoginScreen';
import MenuScreen from './Screen/MenuScreen';
import LocationScreen from './Screen/Location';

import DrowpDown from './Screen/MeanuDrowpdown';
import Recipis from './01-08-24/recipeciesdrup';
import AboutScreen from './Screen/about-screen';
import Screen from '../component/Hoc  5-8-24/Home';
const Navigation=()=>{
    return(
       <BrowserRouter>
       <Routes>
       <Route path="/" element={<MainScreenScreen/>}/>
       <Route path="Registration" element={<Registration/>}/>
       <Route path="Login" element={<LoginScreen/>}/>
       <Route path="Menu" element={<MenuScreen/>}/>
       <Route path="Location" element={<LocationScreen/>}/>
       <Route path="Recipes" element={<Recipis/>}/>
       <Route path="DrowpDown" element={<DrowpDown/>}/>

       <Route path="About" element={<AboutScreen/>}/>
       <Route path="Screen" element={<Screen/>}/>
       
       </Routes>
       </BrowserRouter>
    )

}
export default Navigation;




//_______________________________________________________________________________________________________________________
// import AboutScreen from "./Screen/about-screen"
// import AdminScreen from "./Screen/admitscreen"
// import BlogScreen from "./Screen/blog-screen"
// import HomeScreen from "./Screen/home-sereen"
// import InvalidScreen from "./Screen/invalidscreen"
// import SettingScreen from "./Screen/setting-screen"
// import UserScreen from "./Screen/UserScreen"

// const Navigation = () =>{
//     return(
//         <BrowserRouter>
//         <Routes>
//             {/* static routers */}
//             <Route path="/" element={<HomeScreen/>}/>
//             <Route path="about" element={<AboutScreen/>}/>
//             <Route path="Blog" element={<BlogScreen/>}/>
//             <Route path="setting" element={<SettingScreen/>}/>
//             <Route path="User"element={<UserScreen/>}/>
//             <Route path="Admit" element={<AdminScreen/>}/>
//             <Route path="*" element={<InvalidScreen/>}/>
//             {/* dynamic router */}

//        <Route path="users/:userId" element={<UserScreen/>}/>     

//              </Routes>
//         </BrowserRouter>
//     )
// }
// export default Navigation;