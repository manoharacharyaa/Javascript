//V:36
//Functions Calling other functions 

function cutFruitsPices(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePices = cutFruitsPices(apples);
    const orangePices = cutFruitsPices(oranges);
    console.log(apples, oranges);
    const juice = `Juice with ${applePices} apples and ${orangePices} oranges.`;
    return juice; 
}

console.log(fruitProcessor(2, 3));
