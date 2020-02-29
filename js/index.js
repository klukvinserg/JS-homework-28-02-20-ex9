let qOne = +prompt('Question #1:\n2+2=\n1) "10"\n2) "5"\n3) "4"\n(Enter 1, 2 or 3)');
let result = 0;

while ( (qOne < 1 || qOne > 3) || isNaN(qOne))  {
    alert('Please select the correct answer');
    qOne = +prompt('Question #1:\n2+2=\n1) "10"\n2) "5"\n3) "4"\n(Enter 1, 2 or 3)');  
}

if (qOne === 3) {
    result = result + 2;
}

let qTwo = +prompt('Question #2:\n2*2=\n1) "100"\n2) "4"\n3) "1"\n(Enter 1, 2 or 3)');

while ( (qTwo < 1 || qTwo > 3) || isNaN(qTwo))  {
    alert('Please select the correct answer');
    qTwo = +prompt('Question #2:\n2*2=\n1) "100"\n2) "4"\n3) "1"\n(Enter 1, 2 or 3)');  
}

if (qTwo === 2) {
    result = result + 2;
}

let qThree = +prompt('Question #3:\n2/2=\n1) "1"\n2) "200"\n3) "-1"\n(Enter 1, 2 or 3)');

while ( (qThree < 1 || qThree > 3) || isNaN(qTwo))  {
    alert('Please select the correct answer');
    qThree = +prompt('Question #3:\n2/2=\n1) "1"\n2) "200"\n3) "-1"\n(Enter 1, 2 or 3)');  
}

if (qThree === 1) {
    result = result + 2;
}

alert('Your result: '+result);
