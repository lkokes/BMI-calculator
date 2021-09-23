function calculate() {

    var result = document.getElementById("result");

    var weight = parseInt(document.getElementById("weight").value);
    document.getElementById("weight-val").textContent = weight + " kg";

    var height = parseInt(document.getElementById("height").value);
    document.getElementById("height-val").textContent = height + " cm";

    var BMI = (weight / Math.pow((height/100),2)).toFixed(1);
    result.textContent = BMI;

    if(BMI < 18.5){
        category = "Underweight";
        result.style.color = "#a9e801";
    } else if(BMI >= 18.5 && BMI <= 24.9){
        category = "Normal weight";
        result.style.color = "#19b919";
    } else if(BMI >= 25 && BMI <= 29.9){
        category = "Overweight";
        result.style.color = "#f97e1c";
    } else {
        category = "Obese";
        result.style.color = "#d42222";
    }
    document.getElementById("category").textContent = category;

}