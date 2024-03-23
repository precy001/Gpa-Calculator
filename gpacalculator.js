
const addCourseButton = document.querySelector('js-add-course')
let index = 4; 


  
function addCourse(){
index++
 const newCourse = document.createElement('div')
 const coursesContainer = document.querySelector('.courses-container')
newCourse.classList.add('courses')
newCourse.innerHTML = `<input type="text" class="code each" placeholder="Course code">
                    <input type="text" class="unit each js-unit-${index}" placeholder="Course unit">
                    <select name="" id="" class="grade each-select js-grade-${index}">
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                        <option value="E">E</option>
                        <option value="F">F</option>
                    </select>
                    ` 
if(coursesContainer.children.length>=11){
    alert("maximum number of courses reached")
    return;

}

coursesContainer.appendChild(newCourse)
}


let unit1 = null
let unit2 = null
let unit3 = null
let unit4 = null


let unit5 = null
let unit6 = null
let unit7 = null
let unit8 = null
let unit9 = null
let unit10 =null
let unit11= null



let grade1 = null; let gradePoint1 = null;
let grade2 = null; let gradePoint2 = null;
let grade3 = null; let gradePoint3 = null;
let grade4 = null; let gradePoint4 = null;


let grade5 = null; let gradePoint5 = null;
let grade6 = null; let gradePoint6 = null;
let grade7 = null; let gradePoint7 = null;
let grade8 = null; let gradePoint8 = null;
let grade9 = null; let gradePoint9 = null;
let grade10 = null; let gradePoint10 = null;
let grade11= null; let gradePoint11 = null;

let course1 = document.querySelector('.js-course-1')
let course2 = document.querySelector('.js-course-2')
let course3 = document.querySelector('.js-course-3')
let course4 = document.querySelector('.js-course-4')



var textInputTags = document.querySelectorAll('input[type="text"]');
const gpaContainer = document.querySelector('.js-gpa')
const sentence = document.querySelector('.gpa')

 function calculateGpa(){
    unit1 = Number(document.querySelector('.js-unit-1').value)
    unit2 = Number(document.querySelector('.js-unit-2').value)
    unit3 = Number(document.querySelector('.js-unit-3').value)
    unit4 = Number(document.querySelector('.js-unit-4').value)

    grade1 = document.querySelector('.js-grade-1').value
    grade2 = document.querySelector('.js-grade-2').value
    grade3 = document.querySelector('.js-grade-3').value
    grade4 = document.querySelector('.js-grade-4').value

    if(grade1 === 'A'){
        gradePoint1 = 5
    }else if(grade1 === 'B'){
        gradePoint1 = 4
    }else if(grade1 === 'C'){
        gradePoint1 = 3
    }else if(grade1 === 'D'){
        gradePoint1 = 2
    }else if(grade1 === 'E'){
        gradePoint1 = 1
    }else if(grade1 === 'F'){
        gradePoint1 = 0
    }


    if(grade2 === 'A'){
        gradePoint2 = 5
    }else if(grade2 === 'B'){
        gradePoint2 = 4
    }else if(grade2 === 'C'){
        gradePoint2 = 3
    }else if(grade2 === 'D'){
        gradePoint2 = 2
    }else if(grade2 === 'E'){
        gradePoint2 = 1
    }else if(grade2 === 'F'){
        gradePoint2 = 0
    }

    if(grade3 === 'A'){
        gradePoint3 = 5
    }else if(grade3 === 'B'){
        gradePoint3 = 4
    }else if(grade3 === 'C'){
        gradePoint3 = 3
    }else if(grade3 === 'D'){
        gradePoint3 = 2
    }else if(grade3 === 'E'){
        gradePoint3 = 1
    }else if(grade3 === 'F'){
        gradePoint3 = 0
    }

    if(grade4 === 'A'){
        gradePoint4 = 5
    }else if(grade4 === 'B'){
        gradePoint4 = 4
    }else if(grade4 === 'C'){
        gradePoint4 = 3
    }else if(grade4 === 'D'){
        gradePoint4 = 2
    }else if(grade4 === 'E'){
        gradePoint4 = 1
    }else if(grade4 === 'F'){
        gradePoint4 = 0
    }

    if(index<5){
        unit5 = 0
    }else{
        unit5 = Number(document.querySelector('.js-unit-5').value)
        grade5 = document.querySelector('.js-grade-5').value
        if(grade5 === 'A'){
            gradePoint5 = 5
        }else if(grade5 === 'B'){
            gradePoint5 = 4
        }else if(grade5 === 'C'){
            gradePoint5 = 3
        }else if(grade5 === 'D'){
            gradePoint5 = 2
        }else if(grade5 === 'E'){
            gradePoint5 = 1
        }else if(grade5 === 'F'){
            gradePoint5 = 0
        }
    }

    
    if(index<6){
        unit6 = 0
    }else{
        unit6 = Number(document.querySelector('.js-unit-6').value)
        grade6 = document.querySelector('.js-grade-6').value
        if(grade6 === 'A'){
            gradePoint6 = 5
        }else if(grade6 === 'B'){
            gradePoint6 = 4
        }else if(grade6 === 'C'){
            gradePoint6 = 3
        }else if(grade6 === 'D'){
            gradePoint6 = 2
        }else if(grade6 === 'E'){
            gradePoint6 = 1
        }else if(grade6 === 'F'){
            gradePoint6 = 0
        }
    }

    if(index<7){
        unit7 = 0
    }else{
        unit7 = Number(document.querySelector('.js-unit-7').value)
        grade7 = document.querySelector('.js-grade-7').value
        if(grade7 === 'A'){
            gradePoint7 = 5
        }else if(grade7 === 'B'){
            gradePoint7 = 4
        }else if(grade7 === 'C'){
            gradePoint7 = 3
        }else if(grade7 === 'D'){
            gradePoint7 = 2
        }else if(grade7 === 'E'){
            gradePoint7 = 1
        }else if(grade7 === 'F'){
            gradePoint7 = 0
        }
    }

    if(index<8){
        unit8 = 0
    }else{
        unit8 = Number(document.querySelector('.js-unit-8').value)
        grade8 = document.querySelector('.js-grade-8').value
        if(grade8 === 'A'){
            gradePoint8 = 5
        }else if(grade8 === 'B'){
            gradePoint8 = 4
        }else if(grade8 === 'C'){
            gradePoint8 = 3
        }else if(grade8 === 'D'){
            gradePoint8 = 2
        }else if(grade8 === 'E'){
            gradePoint8 = 1
        }else if(grade8 === 'F'){
            gradePoint8 = 0
        }
    }

    if(index<9){
        unit9 = 0
    }else{
        unit9 = Number(document.querySelector('.js-unit-9').value)
        grade9 = document.querySelector('.js-grade-9').value
        if(grade9 === 'A'){
            gradePoint9 = 5
        }else if(grade9 === 'B'){
            gradePoint9 = 4
        }else if(grade9 === 'C'){
            gradePoint9 = 3
        }else if(grade9 === 'D'){
            gradePoint9 = 2
        }else if(grade9 === 'E'){
            gradePoint9 = 1
        }else if(grade9 === 'F'){
            gradePoint9 = 0
        }
    }
    
    if(index<10){
        unit10 = 0
    }else{
        unit10 = Number(document.querySelector('.js-unit-10').value)
        grade10 = document.querySelector('.js-grade-10').value
        if(grade10 === 'A'){
            gradePoint10 = 5
        }else if(grade10 === 'B'){
            gradePoint10 = 4
        }else if(grade10 === 'C'){
            gradePoint10 = 3
        }else if(grade10 == 'D'){
            gradePoint10 = 2
        }else if(grade10 === 'E'){
            gradePoint10 = 1
        }else if(grade10 === 'F'){
            gradePoint10= 0
        }
    }
    
    if(index<11){
        unit11= 0
     }else{
        unit11 = Number(document.querySelector('.js-unit-11').value)
        grade11 = document.querySelector('.js-grade-11').value
        if(grade11 === 'A'){
            gradePoint11 = 5
        }else if(grade11 === 'B'){
            gradePoint11 = 4
        }else if(grade11 === 'C'){
            gradePoint11 = 3
        }else if(grade11 == 'D'){
            gradePoint11 = 2
        }else if(grade11 === 'E'){
            gradePoint11 = 1
        }else if(grade11=== 'F'){
            gradePoint11 = 0
        }
     }

     const totalUnits = (unit1 + unit2 + unit3 + unit4 + unit5 +unit6 +unit7 +unit8 +unit9 +unit10 +unit11)
     const totalPoints = ((unit1*gradePoint1) +(unit2*gradePoint2) + (unit3*gradePoint3) +(unit4*gradePoint4) +(unit5*gradePoint5) + (unit6*gradePoint6) + (unit7*gradePoint7) +(unit8*gradePoint8) + (unit9*gradePoint9) +(unit10*gradePoint10) +(unit11*gradePoint11))

     const GPA = (totalPoints/totalUnits)
     const approxGPA = parseFloat(GPA.toFixed(2));
     gpaContainer.innerHTML = approxGPA
     sentence.classList.add('show-gpa')

     console.log(approxGPA)

     if(approxGPA === NaN){
        alert("fill out the empty spaces")
     }
 }
 
