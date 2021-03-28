'use strict';

class ErrHandle extends Error {
    constructor(message) {
      super(message);
    }
  
    toString() {
      return `${this.name} ${this.message}`;
    }
  }
  
  
  class TimeAP {
    hour = 0;
    minute = 0;
    second = 0;
  
    constructor(...args) {
      if (args.length == 1) {
        this.hour = args[0].getHours();
        this.minute = args[0].getMinutes();
        this.second = args[0].getSeconds();
      } else if (args.length == 3) {
        const [hour, minute, second] = args;
        hour >= 0 && hour <= 23 ? (this.hour = hour) : 0;
        minute >= 0 && minute <= 59 ? (this.minute = minute) : 0;
        second >= 0 && second <= 59 ? (this.second = second) : 0;
      }
    }
  
    clock() {
      var ampm = this.hour >= 12 ? "PM" : "AM";
      let clockHour = this.hour % 12;
      clockHour = this.hour ? clockHour : 12;
      let clockMinute = this.minute < 10 ? "0" + this.minute : this.minute;
      let clockSecond = this.second < 10 ? "0" + this.second : this.second;
  
      var strTime = `${clockHour}:${clockMinute}:${clockSecond} ${ampm}`;
  
      console.log(strTime);
    }
  

    sumTime(...args) {
      try {
        if (args.length == 3) {
          let totalSeconds =
            this.hour * 3600 +
            args[0] * 3600 +
            this.minute * 60 +
            +args[1] * 60 +
            this.second +
            args[2];
  
          let newHour = Math.floor(totalSeconds / 3600);
          totalSeconds %= 3600;
          let newMinute = Math.floor(totalSeconds / 60);
          let newSeconds = totalSeconds % 60;
  
          if (newHour >= 24) {
            console.log(new TimeAP(newHour - 24, newMinute, newSeconds));
          } else console.log(new TimeAP(newHour, newMinute, newSeconds));
        } else throw new ErrHandle("Values don't fit the conditions of method");
      } catch (e) {
        console.log(e.message);
      }
    }
  
    diffTime(...args) {
      try {
        if (args.length == 3) {
          let totalSeconds =
            this.hour * 3600 +
            this.minute * 60 +
            this.second -
            (args[0] * 3600 + args[1] * 60 + args[2]);
  
          let newHour = Math.floor(totalSeconds / 3600);
          totalSeconds %= 3600;
          let newMinute = Math.floor(totalSeconds / 60);
          let newSeconds = totalSeconds % 60;
  
          if (newHour < 0 && newMinute < 0 && newSeconds < 0) {
            console.log(
              new TimeAP(newHour + 24, newMinute + 60, newSeconds + 60)
            );
          } else if (newHour < 0 && newMinute < 0) {
            console.log(new TimeAP(newHour + 24, newMinute + 60, newSeconds));
          } else if (newHour < 0) {
            console.log(new TimeAP(newHour + 24, newMinute, newSeconds));
          } else console.log(new TimeAP(newHour, newMinute, newSeconds));
        } else throw new ErrHandle("Values don't fit the conditions of method");
      } catch (e) {
        console.log(e.message);
      }
    }
  }
  
  const sumTwoObj = (...args) => {
    try {
      if (args.length == 6) {
        let totalSeconds =
          args[0] * 3600 +
          args[3] * 3600 +
          args[1] * 60 +
          args[4] * 60 +
          args[2] +
          args[5];
  
        let newHour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let newMinute = Math.floor(totalSeconds / 60);
        let newSeconds = totalSeconds % 60;
  
        if (newHour >= 24) {
          console.log(new TimeAP(newHour - 24, newMinute, newSeconds));
        } else console.log(new TimeAP(newHour, newMinute, newSeconds));
      } else throw new ErrHandle("Values don't fit the conditions of method");
    } catch (e) {
      console.log(e.message);
    }
  };
  
  const diffTwoObj = (...args) => {
    try {
      if (args.length == 6) {
        let totalSeconds =
          args[0] * 3600 +
          args[1] * 60 +
          args[2] -
          (args[3] * 3600 + args[4] * 60 + args[5]);
  
        let newHour = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let newMinute = Math.floor(totalSeconds / 60);
        let newSeconds = totalSeconds % 60;
  
        if (newHour < 0 && newMinute < 0 && newSeconds < 0) {
          console.log(new TimeAP(newHour + 24, newMinute + 60, newSeconds + 60));
        } else if (newHour < 0 && newMinute < 0) {
          console.log(new TimeAP(newHour + 24, newMinute + 60, newSeconds));
        } else if (newHour < 0) {
          console.log(new TimeAP(newHour + 24, newMinute, newSeconds));
        } else console.log(new TimeAP(newHour, newMinute, newSeconds));
      } else throw new ErrHandle("Values don't fit the conditions of method");
    } catch (e) {
      console.log(e.message);
    }
  };
  
  // 8. EXAMPLES
  
  console.log();
  console.log(
    "8. EXAMPLES"
  );
  console.log();
  
  // 5.a.
  let defaultTime = new TimeAP();
  console.log("5.a. Default values initialization");
  console.log(defaultTime);
  console.log();
  
  // 5.b. 
  let setTime = new TimeAP(19, 23, 9);
  console.log("5.b. Set of values initialization");
  console.log(setTime);
  console.log();
  
  //5.c.
  let dateTime = new TimeAP(new Date("December 17, 1995 03:24:00"));
  console.log("5.c. Date type initialization");
  console.log(dateTime);
  console.log();
  
  // 9. USE OF METHODS
  
  console.log();
  console.log(
    "9. USE OF METHODS"
  );
  console.log();
  
  //6.a.
  console.log("6.a. String with 12-hour format");
  setTime.clock();
  console.log();
  
  //6.b. 
  console.log(`6.b. Sum of 19:23:9 (5.b obj) and 6:14:55`);
  setTime.sumTime(6, 14, 55);
  console.log();
  
  // 6.c. 
  console.log(`6.c. Difference of 19:23:9 (5.b obj) and 19:23:10`);
  setTime.diffTime(19, 23, 10);
  console.log();
  
  // * 6.errorHandle.
  console.log(` * 6.errorHandle. Difference of 19:23:9 (5.b obj) and 19:10`);
  setTime.diffTime(19, 10);
  console.log();
  
  // 7.a. 
  console.log(
    "7.a. Method to return addittion of 2 objects (14:20:03 & 15:23:15)"
  );
  sumTwoObj(14, 20, 3, 15, 23, 15);
  console.log();
  
  // 7.b.
  console.log(
    "7.b. Method to return subtracion of 2 objects (14:20:03 & 15:23:15)"
  );
  diffTwoObj(14, 20, 3, 15, 23, 15);
  console.log();
  
  // * 7.errorHandle.
  console.log(
    " * 7.errorHandle. Method to return subtracion of 2 objects (14:20:03 & 15:23)"
  );
  diffTwoObj(14, 20, 3, 15, 23);
  console.log();