const studentData = [];

// Generate student data for registration numbers 1 to 155
for (let i = 2205297001; i <= 2205297155; i++) {
    studentData.push({ registrationNumber: 2205297001, marksheet: "👇👇👇", photoURL: "img/s1.png" });
}

{
    studentData.push({ registrationNumber: 2205297002, marksheet: "👇👇👇", photoURL: "img/s2.png" });
}
{
    studentData.push({ registrationNumber: 2205297003, marksheet: "👇👇👇", photoURL: "img/s3.png" });
}
{
    studentData.push({ registrationNumber: 2205297004, marksheet: "👇👇👇", photoURL: "img/s4.png" });
}
{
    studentData.push({ registrationNumber: 2205297005, marksheet: "👇👇👇", photoURL: "img/s5.png" });
}


const resultContainer = document.querySelector(".result-container");
const registrationInput = document.getElementById("registrationInput");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", () => {
    const registrationNumber = parseInt(registrationInput.value);

    // Find the student result based on registration number
    const student = studentData.find((student) => student.registrationNumber === registrationNumber);

    if (student) {
        resultContainer.innerHTML = `
            <div class="alert alert-success" role="alert">
                Registration Number: ${student.registrationNumber}<br>
                Marksheet: ${student.marksheet}<br>
                <a href="${student.photoURL}" target="_parent">View Marksheet Photo</a>
            </div>
        `;
    } else {
        resultContainer.innerHTML = `
            <div class="alert alert-danger" role="alert">
                Student not found 😡😟😡.
            </div>
        `;
    }
});
