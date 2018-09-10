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
  return obj;
}
