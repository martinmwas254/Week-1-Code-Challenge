function netSalaryCalculator() {
  let basicSalary = document.querySelector("#basicSalary").value;
  let resultSalary = document.querySelector("#resultSalary");
  let nssf1 = document.querySelector("#nssf");
  let nhif2 = document.querySelector("#nhif");
  let netSalary1 = document.querySelector("#netSalary");
  let PAYE;
  let nssf;
  let netSalary;

  if (basicSalary >= 0 && basicSalary <= 24000) {
    PAYE = basicSalary * 0.1;
    resultSalary.innerHTML = `PAYE ${PAYE}`;
  } else if (basicSalary >= 24001 && basicSalary <= 32333) {
    PAYE = basicSalary * 0.25;
    resultSalary.innerHTML = `PAYE ${PAYE}`;
  } else if (basicSalary >= 32334) {
    PAYE = basicSalary * 0.3;
    resultSalary.innerHTML = `PAYE ${PAYE}`;
  }
  nssf = basicSalary * 0.06;
  nssf1.innerHTML = `NSSF DEDUCTION: ${nssf}`;

  switch (true) {
    case basicSalary <= 5999:
      nhif = 150;
      break;
    case basicSalary <= 7999:
      nhif = 300;
      break;

    case basicSalary <= 11999:
      nhif = 400;
      break;

    case basicSalary <= 14999:
      nhif = 500;
      break;

    case basicSalary <= 19999:
      nhif = 600;
      break;

    case basicSalary <= 24999:
      nhif = 750;
      break;

    case basicSalary <= 29999:
      nhif = 850;
      break;

    case basicSalary <= 34999:
      nhif = 900;
      break;

    case basicSalary <= 39999:
      nhif = 950;
      break;

    case basicSalary <= 44999:
      nhif = 1000;
      break;

    case basicSalary <= 49999:
      nhif = 1100;
      break;

    case basicSalary <= 59999:
      nhif = 1200;
      break;

    case basicSalary <= 69999:
      nhif = 1300;
      break;

    case basicSalary <= 79999:
      nhif = 1400;
      break;

    case basicSalary <= 89999:
      nhif = 1500;
      break;

    case basicSalary <= 99999:
      nhif = 1600;
      break;

    case basicSalary > 100000:
      nhif = 1700;
      break;

    default:
      nhif = 0;
  }
  nhif2.innerHTML = `NHIF DEDUCTION: ${nhif}`;
  netSalary = basicSalary - (PAYE + nhif + nssf);
  netSalary1.innerHTML = `NET SALARY: ${netSalary}`;
}
