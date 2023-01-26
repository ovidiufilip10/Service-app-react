function MainMenuButtons({label, handleOnClick}){
    return (
        <button 
            onClick={handleOnClick}
            className={[  
            "bg-orange-500 p-1 rounded drop-shadow",
            "hover:bg-orange-400 hover:text-white",
            "active:bg-orange-600 active:text-white",
            ].join(" ")}>
            
            {label}
        </button>
    )
}

export default MainMenuButtons;