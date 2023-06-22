function calculateMatch() {
    var person1 = document.getElementById("person1").value;
    var person2 = document.getElementById("person2").value;
  
    if (person1 == "" || person2 == "") {
      alert("Please first enter both names in order to continue.");
      return;
    }
  
    var loveMeter = Math.floor(Math.random() * 101);
    var loveMeterDiv = document.getElementById("love-meter");
    loveMeterDiv.innerHTML = loveMeter + "%";
  
    var sentencesDiv = document.getElementById("sentences");
    sentencesDiv.innerHTML = "";
  
    if (loveMeter < 50) {
      var sentences = [
        person1 + " and " + person2 + " Sorry, but if its low then go for his mommy's toe!",
        "Sorry, " + person1 + " and " + person2 + " are not meant to be together.",
        "The judges say that " + person1 + " and " + person2 + " should stay just friends.",
        "Sorry but there is no love between " + person1 + " and " + person2 + "."
      ];
  
      var sentenceIndex = Math.floor(Math.random() * sentences.length);
      var sentence = document.createElement("p");
      sentence.innerHTML = sentences[sentenceIndex];
      sentencesDiv.appendChild(sentence);
    } else {
      var sentences = [
        person1 + " and " + person2 + " are a perfect match!",
        "This love between " + person1 + " and " + person2 + " is possible!",
        "The judges say that " + person1 + " and " + person2 + " are meant to be together!",
        "Love is of the top for " + person1 + " and " + person2 + "!"
      ];
  
      var sentenceIndex = Math.floor(Math.random() * sentences.length);
      var sentence = document.createElement("p");
      sentence.innerHTML = sentences[sentenceIndex];
      sentencesDiv.appendChild(sentence);
    }
  
    var resultBox = document.getElementById("result-box");
    resultBox.classList.remove("hidden");
  }