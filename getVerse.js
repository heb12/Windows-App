function getVerse(string) {
var data = string.split(" ");
var book = "";
var i = 0;
for(i=0; data[i].split(":").length > 1; i++) {
book+=data[i]+" ";
}
var chapter = Number(data[i].split(":")[0]);
var verse = Number(data[i].split(":")[1]);
var obj = new Object();
obj.verse = bible[book][chapter][verse];
}
