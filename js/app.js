let physic;
let chem;
let bio;

function sumGrade() {
    physic = +document.getElementById("physicInput").value;
    chem = +document.getElementById("chemInput").value;
    bio = +document.getElementById("bioInput").value;
    let sum = physic + chem + bio;
    document.getElementById("resultSum").innerHTML = "Tổng điểm của bạn là: " + sum;
}

function averageGrade() {
    physic = +document.getElementById("physicInput").value;
    chem = +document.getElementById("chemInput").value;
    bio = +document.getElementById("bioInput").value;
    let average = (physic + chem + bio) / 3;
    document.getElementById("resultAverage").innerHTML = "Điểm trung bình của bạn là: " + average;
}