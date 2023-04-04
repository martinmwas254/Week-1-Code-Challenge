function speedDetector() {
    let speed = document.querySelector("#speed").value;
    let resultSpeed = document.querySelector("#resultSpeed");
    //let speedometer=speed.value;
    if (speed > 0 && speed <= 70) {
      //If the speed is between 0 and 70km the driver is ok.
      resultSpeed.innerHTML = "Ok";
    }
    //The speed being between 76 and 80 earns the driver 1 demerit point
    else if (speed >= 76 && speed <= 80) {
      resultSpeed.innerHTML = "Demerit +1";
    }
    //The speed being between 81 and 85 earns the driver 2 demerit points
    else if (speed >= 81 && speed <= 85) {
      resultSpeed.innerHTML = "Demerit +2";
    }
    //The speed being between 86 and 90 earns the driver 3 demerit points
    else if (speed >= 86 && speed <= 90) {
      resultSpeed.innerHTML = "Demerit +3";
    }
    //The speed being between 91 and 95 earns the driver 4 demerit ponts
    else if (speed >= 91 && speed <= 95) {
      resultSpeed.innerHTML = "Demerit +4";
    }
    //The speed being between 96 and 100 earns the driver 5 demerit ponts
    else if (speed >= 96 && speed <= 100) {
      resultSpeed.innerHTML = "Demerit +5";
    }
    //The speed being between 101 and 105 earns the driver 6 demerit ponts
    else if (speed >= 101 && speed <= 105) {
      resultSpeed.innerHTML = "Demerit +6";
    }
    //The speed being between 106 and 110 earns the driver 7 demerit ponts
    else if (speed >= 106 && speed <= 110) {
      resultSpeed.innerHTML = "Demerit +7";
    }
    //The speed being between 111 and 115 earns the driver 8 demerit ponts
    else if (speed >= 111 && speed <= 115) {
      resultSpeed.innerHTML = "Demerit +8";
    }
    //The speed being between 116 and 120 earns the driver 9 demerit ponts
    else if (speed >= 116 && speed <= 120) {
      resultSpeed.innerHTML = "Demerit +9";
    }
    //The speed being between 121 and 125 earns the driver 10 demerit ponts
    else if (speed >= 121 && speed <= 125) {
      resultSpeed.innerHTML = "Demerit +10";
    }
    //The speed being between 126 and 130 earns the driver 11 demerit ponts
    else if (speed >= 126 && speed <= 130) {
      resultSpeed.innerHTML = "Demerit +11";
    }
    //The speed being between 111 and 115 earns the driver 12 demerit ponts
    else if (speed >= 130) {
      resultSpeed.innerHTML = "LICENSE SUSPENDED";
    }
  }