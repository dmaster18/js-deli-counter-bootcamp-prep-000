var katzDeliLine = [];

function takeANumber(katzDeliLine , personsName) {
       katzDeliLine.push(`Welcome, ${personsName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
    if(katzDeliLine.length===0) {
      return "There is nobody waiting to be served!";
    }
    else{
      return `Currently serving ${katzDeliLine.shift()}`;
    }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length===0)
  {
    return "The line is currently empty";
  }
  else{
    var lineOut = "The line is currently: ";
    for (var i=0; i < katzDeliLine.length; i++){
    lineOut+=String(i+1) + ". " +katzDeliLine[i]+" , ";
    }
    