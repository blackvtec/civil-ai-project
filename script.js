let questions = [];
let current = 0;
let score = 0;

// تسجيل الدخول
function login(){
let u = document.getElementById("username").value;
let p = document.getElementById("password").value;

if(u === "admin" && p === "1234"){
document.getElementById("login").style.display="none";
document.getElementById("dashboard").style.display="block";
}else{
alert("خطأ في البيانات");
}
}

// إضافة أسئلة
function importQuestions(){
let text = document.getElementById("bulkInput").value.split("\n");

for(let i=0;i<text.length;i+=5){
if(text[i]){
questions.push({
q:text[i],
a:[text[i+1],text[i+2],text[i+3]],
correct:parseInt(text[i+4])
});
}
}

alert("تمت الإضافة");
}

// بدء الاختبار
function startQuiz(){
current = 0;
score = 0;
showQuestion();
}

// عرض السؤال
function showQuestion(){
if(current >= questions.length){
document.getElementById("quiz").innerHTML="";
document.getElementById("result").innerHTML =
"<h2>نتيجتك: " + score + "/" + questions.length + "</h2>";
return;
}

let q = questions[current];

let html = "<h3>" + q.q + "</h3>";

for(let i=0;i<q.a.length;i++){
html += "<button onclick='answer(" + i + ")'>" + q.a[i] + "</button>";
}

document.getElementById("quiz").innerHTML = html;
}

// التحقق
function answer(i){
if(i === questions[current].correct){
score++;
}
current++;
showQuestion();
}
