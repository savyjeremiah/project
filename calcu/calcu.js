let school= document.querySelector(".school")
function sec(jk){
    if(school.value ==0){
        school.value ==''
    }
    school.value = school.value +jk
    
}
function cl (c)
{
    school.value = c;
}
function  delec()
{
    school.value = school.value.substring(0,school.value.length - 1);
}



function calucu(){
  try {
    school.value = (eval(school.value))
  } catch (error) {
    school.value = "error"
  }
}
function per(){
    school.value = (school.value/100)
}