let cars = [
    { name: "Carro vermelho", Image:"redcar.jpg" , rentedImage:"alugueldecarro.png"},
    { name:"Carro amarelo", Image:"yellowcar.jpg" ,rentedImage:"alugueldecarro.png"},
    { name:"Carro roxo", Image:"peoplecar.jpg", rentedImage:"alugueldecarro.png"},
           
];  

let carsDiv = document.getElementById("cars");

cars.forEach(function(car){
    let carDiv = document.createElement("div");
    carDiv.className = "car";

    let carName = document.createElement("h2");
    carName.textContent = car.name;
    carDiv.appendChild(carName);

    let carImage = document.createElement("img");
    carImage.src = car.Image;
    carDiv.appendChild(carImage);

    let rentButton = document.createElement("button")
    rentButton.textContent = "Alugar";
    rentButton.onclick = function(){
        this.parentNode.removeChild(this);
        carImage.src = car.rentedImage;
    }
    carDiv.appendChild(rentButton);
    carsDiv.appendChild(carDiv);
}
)