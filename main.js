
const bSection = document.querySelector("#error-btns");
const buttons = bSection.querySelectorAll("button");
// (console.log, console.error, console.table, console.dir, console.dirxml, 
//     console.group (includes related functions to use properly), console.time / 
//     console.timeEnd,  and console.trace.). 
 function cLog() {
    console.log("#Console Log Clicked");
  }
 function cError() {
    console.error("#You made a mistake");
  }
 function cCount() {
    console.count();
  }  
  function cWarn() {
    console.warn("Warned");
  }
  function cAssert() {
    console.assert(8===0, "Wrong Assertion");
  }
  function cClear() {
    console.clear();
  }
  function cDir() {
    console.dir(this)
  }
  function cdirxml() {
    console.dirxml(this);
  }
  function cStart() {
    console.group();
    console.log("I");
    console.log("love");
    console.log("America");
  }
  function cEnd() {
    console.groupEnd();
  }
  function cTable() {
    console.table(["Javascript", "CSS", "HTML"]);
  }
  function cTimerS() {
    console.time();
  }
  function cTimerE() {
    console.timeEnd();
  }
  function cTrace() {
    console.trace();
  }
  function cTrigger() {
    console.error("Global Error");
  }
  function cDont() {
    console.log("Button 15 is good");
  }

  // Add event listeners for each button
  // Log Button
  buttons[0].addEventListener("click", cLog, false);
  buttons[1].addEventListener("click", cError, false);
  buttons[2].addEventListener("click", cCount, false);
  buttons[3].addEventListener("click", cWarn, false);
  buttons[4].addEventListener("click", cAssert, false);
  buttons[5].addEventListener("click", cClear, false);
  buttons[6].addEventListener("click", cDir, false);
  buttons[7].addEventListener("click", cdirxml, false);
  buttons[8].addEventListener("click", cStart, false);
  buttons[9].addEventListener("click", cEnd, false);
  buttons[10].addEventListener("click", cTable, false);
  buttons[11].addEventListener("click", cTimerS, false);
  buttons[12].addEventListener("click", cTimerE, false);
  buttons[13].addEventListener("click", cTrace, false);
  buttons[14].addEventListener("click", cTrigger, false);

  try {

    buttons[15].click()
   
   } catch (err) {
   
     console.log("Error");
   
   }
   class ValidationError extends Error {
    constructor(message) {
      super(message); // (1)
      this.name = "ValidationError"; // (2)
    }
  }
  
  function test() {
    buttons[12].click();
    buttons[11].click();
    throw(err);
  }
  
  try {
    test();
  } catch(err) {
    console.log("You already reset your timer");
    console.log("I can finally turn in an assignment with errors and get an A"); // Whoops!
  }

if(window.onerror) {
    console.log("I understand");
    TrackJS.track('Testing TrackJS!');
}