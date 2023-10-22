var question = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    }
    // {
    //     question: 'What is the correct HTML for adding a background color?',
    //     option1: '<body bg="yellow">',
    //     option2: '<background>yellow</background>',
    //     option3: '<body style="background-color:yellow;">',
    //     correctOption: '<body style="background-color:yellow;">'
    // },
    // {
    //     question: 'Choose the correct HTML element to define important text:',
    //     option1: '<strong>',
    //     option2: '<b>',
    //     option3: '<i>',
    //     correctOption: '<strong>'
    // },
    // {
    //     question: 'Choose the correct HTML element to define emphasized text:',
    //     option1: '<italic>',
    //     option2: '<i>',
    //     option3: '<em>',
    //     correctOption: "<em>"
    // },
    // {
    //     question: 'What is the correct HTML for creating a hyperlink?',
    //     option1: '<a>http://www.w3schools.com</a>',
    //     option2: '<a href="http://www.w3schools.com">W3Schools</a>',
    //     option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    //     correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    // },
    // {
    //     question: 'Which character is used to indicate an end tag?',
    //     option1: '*',
    //     option2: '/',
    //     option3: '<',
    //     correctOption: "/"
    // },
    // {
    //     question: 'How can you open a link in a new tab/browser window?',
    //     option1: '<a href="url" target="new">',
    //     option2: '<a href="url" new>',
    //     option3: '<a href="url" target="_blank">',
    //     correctOption: '<a href="url" target="_blank">'
    // },
    // {
    //     question: 'Which of these elements are all <table> elements?',
    //     option1: '<table> <tr> <td>',
    //     option2: '<table> <head> <tfoot>',
    //     option3: '<table> <tr> <tt>',
    //     correctOption: "<table> <tr> <td>"
    // },
    // {
    //     question: 'Inline elements are normally displayed without starting a new line.',
    //     option1: 'True',
    //     option2: 'False',
    //     correctOption: "True"
    // },
    // {
    //     question: "How can you make a numbered list?",
    //     option1: '<dl>',
    //     option2: '<ul>',
    //     option3: '<ol>',
    //     option4: '<list>',
    //     correctOption: "<ol>"
    // },
    // {
    //     question: 'How can you make a bulleted list?',
    //     option1: '<ol>',
    //     option2: '<list>',
    //     option3: '<ul>',
    //     option4: '<dl>',
    //     correctOption: "<ul>"
    // },
    // {
    //     question: 'What is the correct HTML for inserting an image?',
    //     option1: '<img alt="MyImage">image.gif</img>',
    //     option2: '<img href="image.gif" alt="MyImage">',
    //     option3: '<img src="image.gif" alt="MyImage">',
    //     option4: '<image src="image.gif" alt="MyImage">',
    //     correctOption: '<img src="image.gif" alt="MyImage">'
    // },
    // {
    //     question: 'What is the correct HTML for making a checkbox?',
    //     option1: '<iput type="check">',
    //     option2: '<check>',
    //     option3: '<checkbox>',
    //     option4: '<input type="checkbox">',
    //     correctOption: '<input type="checkbox">'
    // }
]

var q = document.getElementById('question')
var l1 = document.getElementById('label1')
var l2 = document.getElementById('label2')
var l3 = document.getElementById('label3')
var index = 1
var next = document.getElementById('next-btn')
var score = 0
var time = document.getElementById('time')
min = 9
sec = 59

var interval = setInterval(function(){
    time.innerHTML = `${min} : ${sec}`
    sec--
    if(sec == 0){
        min--
        sec = 59
    }
    
    
},1000)


    q.innerText = question[0].question
    l1.innerText = question[0].option1
    l2.innerText = question[0].option2
    l3.innerText = question[0].option3

function nextbtn(){
    var option = document.getElementsByName('option')
    for(var i = 0 ; i<option.length ; i++){
       if( option[i].checked){
            var svalue = option[i].value
            var sq = question[index -1]['question']
            var sa = question[index-1][`option${svalue}`]
            var correctOption = question[index-1]['correctOption']
            if(correctOption==sa){
                score++
            }
        }        
       option[i].checked = false
    }
    next.disabled = true
    

    
    if(index>question.length -1){
        
        location.href ='./end.html'
    }
    else{
    q.innerText = question[index].question
    l1.innerText = question[index].option1
    l2.innerText = question[index].option2
    l3.innerText = question[index].option3
    index++ 
    }   
}

function radio(){
    next.disabled = false
}








