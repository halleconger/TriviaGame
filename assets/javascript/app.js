$(document).ready(function () {

    // CREATE AN ARRARY WITH OBJECTS INSIDE 
    // (QUESTIONS, ANSWER CHOICES, AND CORRECT ANSWER) 
    var questionArray = [
        {
            question: "When is National Ice Cream Day?",
            choiceList: ["Third Thursday in September", "Third Sunday in July", "Second Tuesday in October", "Second Friday in March"],
            correctAnswer: "1"
        },
        {
            question: "How many pounds of milk go into one gallon of ice cream?",
            choiceList: ["30 pounds", "5 pounds", "10 pounds", "12 pounds"],
            correctAnswer: "3"
        },
        {
            question: "Which of the following is not a popular ice cream franchise?",
            choiceList: ["Dairy Queen", "Cold Stone", "Taco Bell", "Ben & Jerry's"],
            correctAnswer: "2"
        },
        {
            question: "What is the most popular ice cream flavor?",
            choiceList: ["Vanilla", "Strawberry", "Cookies & Cream", "Chocolate"],
            correctAnswer: "0"
        },
        {
            question: "On average, how many licks does it take to finish a scoop of ice cream?",
            choiceList: ["about 40", "about 70", "about 50", "about 60"],
            correctAnswer: "2"
        },
        {
            question: "What is the most popular ice cream topping?",
            choiceList: ["Cherry", "Whipped Cream", "Chocolate Syrup", "Sprinkles"],
            correctAnswer: "2"
        },
        {
            question: "What flavor of ice cream does not make up neapolitan ice cream?",
            choiceList: ["Strawberry", "Raspberry", "Chocolate", "Vanilla"],
            correctAnswer: "1"
        }

    ];

    // DEFINE VARIABLES
    var correctAnswerCount = 0;
    var incorrectAnswerCount = 0;
    var incompleteAnswerCount = 0;

    var timeCount;
    var intervalId;

    var clickToStart = $("#click-to-start");
    var clickToSubmit = $("#click-to-submit")

    clickToSubmit.hide();
    $("#results").hide();
    $("#timer").hide();
    $("#gameArea").hide();

    // CLICK BUTTON TO START
    // HIDE START BUTTON
    // SHOW GAME AREA
    clickToStart.on("click", function () {
        $(this).hide();
        clickToSubmit.show();
        displayQuestion();
        $("#timer").show();
        $("#gameArea").show()

    });

    // ONCE YOU CLICK THE SUBMIT 
    // HIDE SUBMIT BUTTON
    // HIDE GAME AREA
    // SHOW RESULTS DIV
    clickToSubmit.on("click", function() {
        $(this).hide();
        $("#gameArea").hide();
        $("#timer").hide();
        $("#results").show();
       
        // IN THIS RESULTS DIV AFTER YOU CLICK SUBMIT
            // CHECK EACH QUESTION AND EACH ANSWER
            // COMPARE USER ANSWER TO CORRECT ANSWER
            // IF USER ANSWER IS CORRECT
            // CORRECT ANSWER ++
            // IF USER ANSWER IS INCORRECT
            // INCORRECT ANSWER ++
        for (var i = 0; i < questionArray.length; i++) {
            var userAnswer = ($("input:radio[name=question"+ i +"]:checked").val())
            var correctAnswer = questionArray[i].correctAnswer;
            if (userAnswer === correctAnswer) {
                correctAnswerCount++;
            } else if (userAnswer === undefined) {
                incompleteAnswerCount++;
            } else {
                incorrectAnswerCount++;
            }
        }   
        console.log(correctAnswerCount, incompleteAnswerCount, incorrectAnswerCount);
        $("#correctAnswer").append(correctAnswerCount);
        $("#incorrectAnswer").append(incorrectAnswerCount);
        $("#incompleteAnswer").append(incompleteAnswerCount);
    
    });

    // CREATE A COUNTDOWN TIMER 
    // THAT DECREMENTS BY ONE SECOND
    
    function startTimer () {
        timeCount = 30;
        intervalId = setInterval(decrementTimer, 1000);
    }

    function decrementTimer () {
        $("#timer").html(timeCount);
        timeCount--;
        if (timeCount < 0) {
            clearInterval(intervalId);
        }
    }

    startTimer();

    // CREATE A FUNCTION THAT DISPLAYS 
    // THE QUESTIONS AND THEIR CHOICE LIST
    function displayQuestion() {
        for (var i = 0; i < questionArray.length; i++) {
            var div = $("<div>");
            div.text(questionArray[i].question);
            for (var j = 0; j < questionArray[i].choiceList.length; j++) {
                var choiceDiv = $("<div>");
                var label = $("<label>");
                var input = $("<input>");
                label.text(questionArray[i].choiceList[j] + " ");
                input.attr("type", "radio");
                input.attr("name", "question"+i);
                input.attr("value", j);
                label.append(input);
                div.append(choiceDiv);
                choiceDiv.append(label);
            }

            $("#gameArea").append(div);

        }
    };

});