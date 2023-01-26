import { useState } from "react";

function ModalForm(){
    const [cars,setCars]=useState([]);
    const [brand,setBrand]=useState("");
    const [model,setModel]=useState("");
    const [firstReg,setFirstReg]=useState();
    const [plateNumber,setPlateNumber]=useState("");
    const [revDate,setRevDate]=useState();
    const [odometer,setOdometer]=useState();
    const [oilType,setOilType]=useState("");
    const [airFilter,setAirFilter]=useState(false);
    
    function handleChangeBrand(e){
        setBrand(e.target.value);
    }
    function handleChangeModel(e){
        setModel(e.target.value);
    }
    function handleChangeFirstReg(e){
        setFirstReg(e.target.value);
    }
    function handleChangePlateNumber(e){
        setPlateNumber(e.target.value);
    }
    function handleChangeRevDate(e){
        setRevDate(e.target.value);
    }
    function handleChangeOdometer(e){
        setOdometer(e.target.value);
    }
    function handleChangeOilType(e){
        setOilType(e.target.value);
    }
    function handleChangeAirFilter(e){
        setAirFilter(e.target.value);
    }
    function handleOnClearClick(){
        setBrand("");
        setModel("");
        setFirstReg("");
        setPlateNumber("");
        setRevDate("");
        setOdometer("");
        setOilType("");
        setAirFilter(false);
    }

    function handleOnAddClick(){
        const newCar = {
            brand: brand,
            model: model,
            firstReg: firstReg,
            plateNumber: plateNumber,
            revDate: revDate,
            odometer: odometer,
            oilType: oilType,
            airFilter: airFilter,
        }
        setCars([...cars, newCar])
        handleOnClearClick();
    }
    return (
        <div
        className="bg-black bg-opacity-80 w-screen h-screen -absolute z-10 inset-0"
        >
        <div 
        className="bg-white roudned drop-shadow-lg"
        >
            <div
             className="bg-red roudned-t"
            >
                <h1>Profil Automobil</h1>
            </div>
            <div>
                <div className="flex row">
                    <h3>Brand:</h3>
                    <input value={brand} onChange={handleChangeBrand}/>
                </div>
                <div className="flex row">
                    <h3>Model:</h3>
                    <input value={model} onChange={handleChangeModel}/>
                </div>
                <div className="flex row">
                    <h3>First registration:</h3>
                    <input value={firstReg} onChange={handleChangeFirstReg}/>
                </div>
               <div className="flex row">
                    <h3>Plate Nrumber:</h3>
                    <input value={plateNumber} onChange={handleChangePlateNumber}/>
               </div>
               <div className="flex row">
                    <h3>Revizion Date:</h3>
                    <input value={revDate} onChange={handleChangeRevDate}/>
               </div>
               <div className="flex row">
                    <h3>Odometer:</h3>
                    <input value={odometer} onChange={handleChangeOdometer}/>
               </div>
               <div className="flex row">
                    <h3>Oil Type:</h3>
                    <input value={oilType} onChange={handleChangeOilType}/>
               </div>
               <div className="flex row">
                    <h3>Was the air filter changed?</h3>
                    <input value={airFilter} onChange={handleChangeAirFilter}/>
               </div>
            </div>
            <button  className={[  
            "bg-orange-300 p-2 rounded drop-shadow",
            "hover:bg-orange-200 hover:text-white",
            "active:bg-orange-600 active:text-white",
            ].join(" ")} onClick={handleOnAddClick}>Add</button>
            <button className={[  
            "bg-orange-300 p-2 rounded drop-shadow",
            "hover:bg-orange-200 hover:text-white",
            "active:bg-orange-600 active:text-white",
            ].join(" ")} onClick={handleOnClearClick}>Clear</button>
        </div>
            
        </div>
    )
}

export default ModalForm;