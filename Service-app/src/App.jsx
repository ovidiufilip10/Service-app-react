import { useState } from "react";
import ModalProfile from "./components/ModalProfile";
function App(){
const [showModalProfile, setShowModalProfile] = useState(false);
function handleButtonClick(){
    setShowModalProfile(!showModalProfile);
}


return(
    <div>
        <h1>Auto Database</h1>
        <h4>by Meteor</h4>
        <div>
            <mainMenuButtons 
            lable={"Add New Entry"}
            handleOnClick={handleButtonClick}
            />
            <mainMenuButtons lable={"Show Full History"}/>
        </div>
        {showModalProfile && <ModalProfile/>}
    </div>
)
}

export default App