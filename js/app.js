for (let i = 1; i < 101; i++){ //creo il loop
    if (i % 5 == 0 && i % 3 == 0){  //prima controllo se soddisfa entrambe le condizioni
        console.log("FizzBuzz")
    } else if (i % 3 == 0){ //successivamente controllo una ad una
        console.log("Fizz")
    } else if (i % 5 == 0){ // leggi riga4
        console.log("Buzz")
    }else{ //se non soddisfa nessuna condizione printo il numero
    console.log(i)
    }
}