array_student_name=[];
function submit(){
    var name_1 = document.getElementById("name1").value;
    var name_2 = document.getElementById("name2").value;
    var name_3 = document.getElementById("name3").value;
    var name_4 = document.getElementById("name4").value;
    array_student_name.push(name_1);
    array_student_name.push(name_2);
    array_student_name.push(name_3);
    array_student_name.push(name_4);
    console.log (array_student_name);
    var array_length=array_student_name.length;
console.log (array_length);
document.getElementById("display_name").innerHTML=array_student_name;
document.getElementById("submit_button").style.display="none";
document.getElementById("sort_button").style.display="inline-block";
}
function sort(){
array_student_name.sort();
console.log (array_student_name);
document.getElementById("display_name").innerHTML=array_student_name;
}