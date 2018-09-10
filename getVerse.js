function getVerse(string) {
var data = string.split(" ");
var book = "";
var i = 0;
while(data[i].split(":").length <= 1) {
book+=data[i];
  i++;
}
var chapter = Number(data[i].split(":")[0]);
var verse = Number(data[i].split(":")[1]);
var obj = new Object();
obj.verse = bible[book][chapter-1][verse-1];
  var cc = "";
  for(var a=0; a<bible[book][chapter-1].length; a++) {
  cc+=a+1+") "+bible[book][chapter-1][a]+" ";
  }
  obj.chapter = cc;
  return obj;
}
