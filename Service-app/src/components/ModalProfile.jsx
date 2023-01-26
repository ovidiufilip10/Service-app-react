function ModalProfile(){

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
                <h3>Brand</h3>
                <h3>Model</h3>
                <h3>First registration</h3>
                <h3>Plate Nrumber</h3>
                <h3>Revizion Date</h3>
                <h3>Odometer</h3>
                <h3>Was the air filter changed?</h3>
            </div>
        </div>
            
        </div>
    )
}