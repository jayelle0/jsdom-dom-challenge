document.addEventListener("DOMContentLoaded", function() {
    let timer = document.querySelector('#counter')
    let time = timer.innerText
    let time_number = parseInt(time)
    let likes = document.querySelector('.likes')
    let likeCount = 0
    let minusButton = document.querySelector("button#minus")
    let plusButton = document.querySelector("#plus")
    let likeButton = document.querySelector("#heart")
    let pauseButton = document.querySelector("#pause")
    let commentForm = document.querySelector('#comment-form')
    let commentSection = document.querySelector('div#list.comments')

    

    
    let intervalClock = 0
    
    function myStartFunction(){
        intervalClock = setInterval(myTimer, 1000);
        function myTimer (){
            time_number++
            timer.innerText = time_number
        }
    }
    
    function myStopFunction(){
        clearInterval(intervalClock)
    }

    myStartFunction()

        
    minusButton.addEventListener("click", function(){
        timer.innerText -- 
    })

    plusButton.addEventListener("click", function(){
        timer.innerText ++
    })

    likeButton.addEventListener("click", function(){
        let newLike = document.createElement('li')
        if (likes)
        likeCount++
        newLike.innerText = `Time: ${time_number} Likes: ${likeCount}` 
        likes.append(newLike)

    })


    pauseButton.addEventListener("click", function(){
        if (pauseButton.innerText=== "pause"){
            myStopFunction()
            minusButton.disabled = true
            plusButton.disabled = true
            likeButton.disabled = true
            pauseButton.innerText = "resume"
        } else if (pauseButton.innerText==="resume") {
            myStartFunction()
            minusButton.disabled = false
            plusButton.disabled = false
            likeButton.disabled = false
            pauseButton.innerText = "pause"
        }
    })

    commentForm.addEventListener("submit", function(event){
        let input = document.querySelector('input[name=comment]')
        let inputValue = document.querySelector('input[name=comment]').value
        let comment = document.createElement('li')
        comment.textContent = inputValue
        commentSection.append(comment)
        event.preventDefault()
        input.reset();
    })

    
  });