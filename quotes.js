//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {'author': 'Unknown',
     'quote': " "
    },
    {'author': 'Steve Jobs', 
     'quote': "Stay hungry, Stay foolish"
    },
    {'author': 'Drake', 
     'quote': "Distractions will do you in, in the truest sense."
    },
    {'author': 'Unknown', 
     'quote': "Short term thinking leads to long term disaster"
    },
    {'author': 'Unknown', 
     'quote': "You either have your own plan or you\'re apart of someone else\'s."
    },
    {'author': 'Unknown', 
     'quote': "Trying to grow in an enviroment you\'ve out grown is hard, but you gotta keep going"
    },
    {'author': 'Unknown',
     'quote': "The reason most people fail is because they give up what they want most, for what they want now."
    },
    {'author': 'Russ',
     'quote': "I get my inspiration from my own potential."
    },
    {'author': 'Unknown',
     'quote': "Never be the one to say no to yourself, let someone else say no to you"
    },
];

function generateQuote(){
    const random = Number.parseInt(Math.random()*arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;
    
}

function fn1()
    {
        var str = document.getElementById("text").value;
        alert("value inside the text box is: " +str);
    }


