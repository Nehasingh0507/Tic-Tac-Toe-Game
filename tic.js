 let boxes = document.querySelectorAll('.box');
 console.log(boxes);
 let hide = document.querySelector('.hide');
 let msg = document.querySelector('.msg');
 let msgcontainer = document.querySelector('.msg-container');
 let reset_btn = document.getElementById('reset-btn');
 let new_game = document.getElementById('new-game');


let turn = true;
let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

//   console.log()



  boxes.forEach(function(box){
    box.addEventListener('click',function(){
        console.log(box);
        box.innerHTML = "ABC"
        if(turn)
        {
            box.innerHTML = "o";
            turn=false;
        }
        else{
            box.innerHTML = "x";
            turn=true;
            
        }
        box.disabled=true;
        checkWinner()
    })
  })

  function disableAll()
  {
    boxes.forEach(function(box){
        box.disabled=true;
    })
  }

  const checkWinner = ()=>{
    for(patterns of winPatterns){
        // console.log(patterns);
        // console.log(boxes[patterns[0]]);
        // console.log(boxes[patterns[1]]);
        // console.log(boxes[patterns[2]]);
        let pos1 = (boxes[patterns[0]]).innerText;
        let pos2 = (boxes[patterns[1]]).innerText;
        let pos3 = (boxes[patterns[2]]).innerText;
        if(pos1!=="" && pos2!=="" && pos3!=="")
        {
            if(pos1 === pos2 && pos1 === pos3)
            {
                showWinner(pos1)
                disableAll()
            }
        }
        

    }
  }

  function showWinner(pos1){
      // console.log(`Winner is   ${pos1}`);
      msg.innerHTML = `Congratulation! winner is  ${pos1}`
      hide.style.display = "block"
      msgcontainer.classList.remove('hide')

  }

  const resetGame = () =>{
    boxes.forEach(function(box){
      box.innerHTML =""
      msgcontainer.classList.add("hide")
      box.disabled=false
    })
  }

  

  new_game.addEventListener('click', resetGame)
  reset_btn.addEventListener('click', resetGame)

