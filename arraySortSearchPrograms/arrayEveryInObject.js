
const survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "No"}
  ];

  function checkAnswer(element,index,array){
    if (index == 0){
        return true;
    }
    else{
        return element.answer == array[index-1].answer;
    }
  };

const checkSameAnswer = survey.every(checkAnswer);

console.log("Check same answer:",checkSameAnswer);
