name_of_the_student_array = [];

function submit() 
{
    var name_1 = document.getElementById("Name_Of_Student_1").value;
    var name_2 = document.getElementById("Name_Of_Student_2").value;
    var name_3 = document.getElementById("Name_Of_Student_3").value;
    var name_4 = document.getElementById("Name_Of_Student_4").value;
    var name_5 = document.getElementById("Name_Of_Student_5").value;

    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2);
    name_of_the_student_array.push(name_3);
    name_of_the_student_array.push(name_4);
    name_of_the_student_array.push(name_5);

    console.log(name_of_the_student_array);

    document.getElementById("display_name").innerHTML = name_of_the_student_array;
    document.getElementById("btnSubmit").style.display = "none";
    document.getElementById("btnSort").style.display = "inline-block";
}
function sorting() 
{
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML = name_of_the_student_array;
}