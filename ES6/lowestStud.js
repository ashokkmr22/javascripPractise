var studString = [
  [22, "Data Structures", 45],
  [23, "English", 52],
  [22, "English", 51],
  [26, "Data Structures", 72],
  [23, "Data Structures", 61],
  [21, "English", 81]
];
var studJson = studString;
var resArray = {};
var resArrayWithId = [];

function getLowestStud(){

  studString.map(studEntry => {
      var studId = studEntry[0];
      var subject = studEntry[1];
      var mark = studEntry[2];
      var tempJson = {
        "id": studId,
        "subject": subject,
        "mark": mark
      }

      if(resArrayWithId.hasOwnProperty(subject)){

        if(resArrayWithId[subject].id > studId){
          resArrayWithId[subject] = tempJson;
          resArray[subject] = mark;
        }

      }else{

        resArrayWithId[subject] = tempJson;
        resArray[subject] = mark;
      }

  });
}
getLowestStud();
