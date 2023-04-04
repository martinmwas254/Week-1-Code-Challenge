function gradeGenerator() {
  let grading = prompt("ENTER GRADE FROM 0 -100");
  let resultGrade = document.querySelector("#resultGrade");

  if (grading >= 80 && grading <= 100) {
    //A student with a score between 80 and 100 will get an 'A'
    resultGrade.innerHTML = "GRADE: A";
  } else if (grading >= 60 && grading <= 79) {
    //A student with a score between 60 and 79 will get an 'B'
    resultGrade.innerHTML = "GRADE: B";
  } else if (grading >= 50 && grading <= 59) {
    //A student with a score between 50 and 59 will get an 'C'
    resultGrade.innerHTML = "GRADE: C";
  } else if (grading >= 40 && grading <= 49) {
    //A student with a score between 40 and 49 will get an 'D'
    resultGrade.innerHTML = "GRADE: D";
  } else if (grading >= 0 && grading <= 39) {
    //A student with a score between 0 and 39 will get an 'E'
    resultGrade.innerHTML = "GRADE: E";
  }
}
