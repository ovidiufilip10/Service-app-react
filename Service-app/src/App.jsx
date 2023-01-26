import { useState } from "react";
import ModalForm from "./components/ModalForm";
import MainMenuButtons from "./components/MainMenuButtons";
import './App.css';
function App(){
const [showModalForm, setShowModalForm] = useState(false);
const [showFullList, setShowFullList]=useState(false);

return(
    <div>
        <h1>Auto Database</h1>
        <h4>by Meteor</h4>
        <div className="flex gap-2">
            <MainMenuButtons 
             label={"Add New Entry"}
             handleOnClick={() => setShowModalForm(true)}
            />
            <MainMenuButtons 
             label={"Show Full History"}
             handleOnClick={() => setShowFullList(true)}
            />
        </div>
        {showModalForm && (
        <ModalForm
            handleOnClose={() => setShowModalForm(false)}
        />
        )}
    
    </div>
)
}

export default App