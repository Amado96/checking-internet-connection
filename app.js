let title = document.querySelector('.title');
    let ul = document.querySelector('ul');
    let reload = document.querySelector('.reload');
     
        window.onload = function{
            if(window.navigator.onLine){
                online()
            }else{
                offline()
            }
        }
        window.addEventListener("online",function(){
            online();
        });
        window.addEventListener("offline",function{
            offline();
        });
        reload.onclick = function{
            
        }
    function online(){
        title.innerHTML = 'online now';
        title.style.color = 'green';
        ul.classList.add('hide');
        ul.classList.add('hide');
    } 
    
    function offline(){
         title.innerHTML = 'offline now';
         title.style.color = 'red';
         ul.classList.remove('hide');
         ul.classList.remove('hide');
    }