const calcy = () =>{
    let java = document.getElementById("java").value;
    let c = document.getElementById("c").value;
    let pyt= document.getElementById("pyt").value;
    let wd= document.getElementById("wd").value;
    //intially assing blank to grade
    let grade ="";
    
    // let grade;

    //calculating total
    const totalGrade = parseFloat(java) + parseFloat(c) + parseFloat(pyt) + parseFloat(wd);
    // alert(totalGrade);


    //calculating percentage
    const per = (totalGrade/400) * 100 ;
    // alert(per);

    //giving grade
    if(per <= 100 && per>=80){
        grade = "A";
    }
    else if(per <= 79 && per>= 60){
        grade = "B";
    }
    else if(per <= 59 && per>= 40){
        grade = "C";
    }
    else{
        grade = "F";
    }
    // console.log(grade);
     

    //giving pass or fail
    if(per >= 39){
    document.getElementById("data").innerHTML = `Your total marks out of 400 is <span>${totalGrade}</span> and percentage is <span>${per}%</span>.<br> Your grade is <span>${grade}</span>. You have <span>PASS</span> the exam.` 
      }
    else{
    document.getElementById("data").innerHTML = `Your total marks out of 400 is <span> ${totalGrade}</span> and percentage is <span> ${per}%</span>. <br> Your grade is <span>${grade}</span>. You are <span>FAIL</span>.` 
      }



    
}
// document.getElementById("result").addEventListener("click",calcy);
// function calcy(){
//     let java = document.getElementById("java").value;
//     let c = document.getElementById("c").value;
//     let pyt= document.getElementById("pyt").value;
//     let wd= document.getElementById("wd").value;
//     console.log(pyt);
//     console.log(wd);
//     console.log(java);
//     console.log(c);
// }