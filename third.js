var students=[
    {
        1:{
            names:'kamal',
            subject:{
                bangla:80,
                english:70,
                math:80,
                religious_study : 75,
                science: 100
            }
        }
    }
]

// added second student
var another={
    names:'utpal',
    subject:{
        bangla:80,
        english:70,
        math:80,
        religious_study : 75,
        science: 100,
    }
}
var element={};
element[2]=another;
students.push(element);

var another={
    names:'Raju',
    subject:{
        bangla:80,
        english:50,
        math:40,
        religious_study : 50,
        science: 80,
    }
}
var element={};
element[3]=another;
students.push(element);

var another={
    names:'sushanto',
    subject:{
        bangla:70,
        english:70,
        math:70,
        religious_study : 75,
        science: 100,
    }
}
var element={};
element[4]=another;
students.push(element);

var another={
    names:'chinmoy',
    subject:{
        bangla:50,
        english:60,
        math:40,
        religious_study : 60,
        science: 70,
    }
}
var element={};
element[5]=another;
students.push(element);

var another={
    names:'shanto',
    subject:{
        bangla:8,
        english:7,
        math:30,
        religious_study : 35,
        science: 30,
    }
}
var element={};
element[6]=another;
students.push(element);

var another={
    names:'sagor',
    subject:{
        bangla:60,
        english:50,
        math:50,
        religious_study : 75,
        science: 60,
    }
}
var element={};
element[7]=another;
students.push(element);

var another={
    names:'jamal',
    subject:{
        bangla:80,
        english:70,
        math:80,
        religious_study : 75,
        science: 100,
    }
}
var element={};
element[8]=another;
students.push(element);

var another={
    names:'hero alom',
    subject:{
        bangla:80,
        english:70,
        math:80,
        religious_study : 75,
        science: 100,
    }
}
var element={};
element[9]=another;
students.push(element);

var another={
    names:'rakib',
    subject:{
        bangla:8,
        english:7,
        math:8,
        religious_study : 7,
        science: 8,
    }
}
var element={};
element[10]=another;
students.push(element);
console.log(students);

var fail = []
var grade_a_plus = []
var grade_a = []
var grade_b = []
var others = []

// console.log(students[0][1].names);
// console.log(students[0][1].subject);

st_name = students[0][1].names
//console.log(st_name);
 total = students[0][1].subject.bangla + students[0][1].subject.english + students[0][1].subject.math +students[0][1].subject.religious_study + students[0][1].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}



// checking 2
// console.log(students[1][2].names)
// console.log(students[1][2].subject)

st_name = students[1][2].names

total = students[1][2].subject.bangla + students[1][2].subject.english + students[1][2].subject.math +students[1][2].subject.religious_study + students[1][2].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}


// // checking 3
 //console.log(students[2][3].names)
 //console.log(students[2][3].subject)

st_name = students[2][3].names

total = students[2][3].subject.bangla + students[2][3].subject.english + students[2][3].subject.math +students[2][3].subject.religious_study + students[2][3].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}



// checking 4
// console.log(students[3][4].names)
// console.log(students[3][4].subject)

st_name = students[3][4].names

total = students[3][4].subject.bangla + students[3][4].subject.english + students[3][4].subject.math +students[3][4].subject.religious_study + students[3][4].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}


// checking 5
// console.log(students[4][5].names)
// console.log(students[4][5].subject)

st_name = students[4][5].names

total = students[4][5].subject.bangla + students[4][5].subject.english + students[4][5].subject.math +students[4][5].subject.religious_study + students[4][5].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}

// checking 6
// console.log(students[5][6].names)
// console.log(students[5][6].subject)

st_name = students[5][6].names

total = students[5][6].subject.bangla + students[5][6].subject.english + students[5][6].subject.math +students[5][6].subject.religious_study + students[5][6].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}

// checking 7
// console.log(students[6][7].names)
// console.log(students[6][7].subject)

st_name = students[6][7].names

total = students[6][7].subject.bangla + students[6][7].subject.english + students[6][7].subject.math +students[6][7].subject.religious_study + students[6][7].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}

// checking 8
// console.log(students[7][8].names)
// console.log(students[7][8].subject)

st_name = students[7][8].names

total = students[7][8].subject.bangla + students[7][8].subject.english + students[7][8].subject.math +students[7][8].subject.religious_study + students[7][8].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}


// checking 9
// console.log(students[8][9].names)
// console.log(students[8][9].subject)

st_name = students[8][9].names

total = students[8][9].subject.bangla + students[8][9].subject.english + students[8][9].subject.math +students[8][9].subject.religious_study + students[8][9].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}


// checking 10
// console.log(students[9][10].names)
// console.log(students[9][10].subject)

st_name = students[9][10].names

total = students[9][10].subject.bangla + students[9][10].subject.english + students[9][10].subject.math +students[9][10].subject.religious_study + students[9][10].subject.science

average = total / 5

if(average >= 80){
    grade_a_plus.push(st_name)
}
else if(average >=70 && average < 80 ){
    grade_a.push(st_name)
}
else if(average >=60 && average < 70 ){
    grade_b.push(st_name)
}
else if(average >=33 && average < 60 ){
    others.push(st_name)
}
else if(average < 33){
    fail.push(st_name)
}


console.log(`${fail[0]} deleted`);
console.log(`A+ = ${grade_a_plus[0]} , ${grade_a_plus[1]} , ${grade_a_plus[2]}`);
console.log(`A = ${grade_a[0]} , ${grade_a[1]} , ${grade_a[2]}`);
console.log(`B =${grade_b[0]} `);
console.log(`Others = ${others[0]} , ${others[1]}`)