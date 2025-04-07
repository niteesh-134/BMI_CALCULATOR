function calculateBMI() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight == "" || height == "") {
        alert("Please enter both weight and height.");
        return;
    }

    height = height / 100; // Convert height from cm to meters
    let bmi = weight / (height * height);
    let bmiResult = document.getElementById('bmiResult');
    let healthSuggestions = document.getElementById('healthSuggestions');

    bmiResult.innerHTML = `Your BMI: ${bmi.toFixed(2)}`;

    if (bmi < 18.5) {
        bmiResult.style.color = "orange";
        healthSuggestions.innerHTML = `<p>Your BMI is below normal weight. Consider the following bulking suggestions:</p>
        <ul>
            <li>Increase your calorie intake with protein-rich foods.</li>
            <li>Include strength training in your exercise routine.</li>
            <li>Eat more nutrient-dense foods like nuts, avocados, and whole grains.</li>
        </ul>`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiResult.style.color = "green";
        healthSuggestions.innerHTML = "<p>Your BMI is normal. Keep maintaining a balanced lifestyle!</p>";
    } else if (bmi >= 25) {
        bmiResult.style.color = "red";
        healthSuggestions.innerHTML = `<p>Your BMI is overweight. Here are some health suggestions:</p>
        <ul>
            <li>Consider a balanced diet with a calorie deficit.</li>
            <li>Increase your physical activity, aiming for at least 30 minutes of exercise daily.</li>
            <li>Focus on healthy, whole foods like vegetables, lean meats, and whole grains.</li>
        </ul>`;
    }
}
