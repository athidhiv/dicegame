var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
if(randomNumber1>randomNumber2)
    {
        document.getElementsByTagName("h1")[0].textContent="player 1 is the winner";
    }
else if(randomNumber2>randomNumber1)
    {
        document.getElementsByTagName("h1")[0].textContent="player 2 is the winner";
    }
else{
    document.getElementsByTagName("h1")[0].textContent="draw";
}
if(randomNumber1===1)
    {
        document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice1.png");
    }
if(randomNumber1===2)
        {
            document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice2.png");
        }
if(randomNumber1===3)
            {
                document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice3.png");
            }
if(randomNumber1===4)
                {
                    document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice4.png");
                }
if(randomNumber1===5)
                    {
                        document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice5.png");
                    }
if(randomNumber1===6)
                        {
                            document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice6.png");
                        }

                        if(randomNumber2===1)
                            {
                                document.getElementsByClassName("img1")[0].setAttribute("src","./images/dice1.png");
                            }
                        if(randomNumber2===2)
                                {
                                    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice2.png");
                                }
                        if(randomNumber2===3)
                                    {
                                        document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice3.png");
                                    }
                        if(randomNumber2===4)
                                        {
                                            document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice4.png");
                                        }
                        if(randomNumber2===5)
                                            {
                                                document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice5.png");
                                            }
                        if(randomNumber2===6)
                                                {
                                                    document.getElementsByClassName("img2")[0].setAttribute("src","./images/dice6.png");
                                                }
                        
                        