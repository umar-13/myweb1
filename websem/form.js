function validateform(){
    alert('im in validateform function')
    let val=true;
    let = document.formName.nameName.value;
    let = document.formName.nameemail.value;
    let gender Selection =document.querySelector('input[name=gender]:checked')
    console.log('nameValue>>',nameValue)

    if(nameValue.length <5){
        alert('im in if condition')
        val=false;
    }
    let nameValue = document.formName.nameemail.value;
    console.log('nameValue>>'nameValue)
    if(nameValue.length <10){
        val=true
    }
    
    return val;
}
function resetform(){
    document.formName.nameName.value=""
}
