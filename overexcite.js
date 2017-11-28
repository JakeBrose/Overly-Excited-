// Create an array that contains the words in the sentence
var sentence = [
    'The', 
    ' walrus', 
    ' danced', 
    ' through', 
    ' the', 
    ' trees', 
    ' in', 
    ' the', 
    ' light', 
    ' of', 
    ' the', 
    ' moon'
];

// The addExcitement function should accept the array as the sole argument
function addExcitement (theWordArray) {
    var stringPrint = ''
    var exclam = 1
    for (var i = 0; i < sentence.length; i = i + 1){
        stringPrint += sentence[i]
        if ((i + 1) % 3 === 0) {
            stringPrint += '!'.repeat(exclam);
            exclam++    
        }
        console.log(stringPrint);
    };
};

// Invoke the function and pass in the array
addExcitement(sentence)