var katzDeliLine = [];

function takeANumber(katzDeliLine , personsName) {
       katzDeliLine.push(`Welcome, ${personsName}. You are number ${katzDeliLine.length} in line.`);
}

function nowServing(katzDeliLine){
  for (var i = 0; i <katzDeliLine.length; i++)
  {
    if(i===0)
    {
    return katzDeliLine[0];
    }
    else{
    katzDeliLine.shift();
    katzDeliLine[i] = katzDeliLine[i-1];
    }
}}