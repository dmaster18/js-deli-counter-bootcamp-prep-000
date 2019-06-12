var katzDeliLine = [];

function takeANumber(katzDeliLine , personsName) {
  for (var i = 0; i < katzDeliLine.length; i++){
     katzDeliLine.push(`Welcome, ${personsName}. You are number ${i+1} in line.`);
  }
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
    
   {
}