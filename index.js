line = [1,2]
var currNum = 0; 1 2
line = [1,2]

function takeANumber(line) {
  currNum += 1;
  line[line.length] = currNum;
  line.push(++currNum);
  return `You are number ${currNum} in line.`
}

function nowServing() {
  if (line.length === 0) {
    return "There is nobody waiting to be served!"
  }
  var curr = line.shift();
  return `Currently serving ${curr}.`;
}


function currentLine(line) {
  if (line.length === 0) {
    return "The line is currently empty."
  }
  var currLine = "The line is currently: ";
  var i;
  for(i = 1; i <= line.length; i++) {
    currLine += i + ". " + line[i - 1];
    if (i < line.length) {
      currLine += ", ";
    }
  }
  return currLine;
}
