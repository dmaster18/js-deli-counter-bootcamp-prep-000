var katzDeliLine = [];

function takeANumber(katzDeliLine , personsName) {
       katzDeliLine.push(`Welcome, ${personsName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
    if(katzDeliLine===0) {
      return "There is nobody waiting to be served!";
    }
    else{
      return `Currently serving ${katzDeliLine.shift()}`;
    }
    
