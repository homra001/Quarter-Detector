
let bc = ["#eb0b0b","#000088","#008800","#3b0ba8","#0c5757","#800c7a","#8de42a"];

cBoard = document.getElementById('board');
sBar = document.getElementById('searchbar');
function search_quarter() {
    let input = sBar.value;
    input=input.toLowerCase();
    let l =  input.length;
    if(l%2 == 0){
        let rl = 128;
        let cl = 128;
        let rs = 1;
        let cs = 1;
        let hFactor = 0;
        let col = (l/2)-1;
        let rw = true;
        cBoard.innerHTML = "";
        for (let i = l-2; i >=0; i-=2) {            
            
            if(input[i] == 'n' && input[i+1] == 'w'){
                rl = rl / 2;
                cl = cl / 2;
            }else if(input[i] == 'n' && input[i+1] == 'e'){
                rl = rl / 2;
                cl = cl / 2;
                rs += rl; 
            }else if(input[i] == 's' && input[i+1] == 'w'){
                rl = rl / 2;
                cl = cl / 2;
                cs += cl; 
            }else if(input[i] == 's' && input[i+1] == 'e'){
                rl = rl / 2;
                cl = cl / 2;
                rs += rl; 
                cs += cl; 
            }else if(input[i] == 'n' && input[i+1] == 'h'){
                cl = cl / 2;                 
            }else if(input[i] == 'w' && input[i+1] == 'h'){
                rl = rl / 2;                 
            }else if(input[i] == 's' && input[i+1] == 'h'){
                cl = cl / 2;
                cs += cl; 
            }else if(input[i] == 'e' && input[i+1] == 'h'){
                rl = rl / 2;
                rs += rl;
            }else{
                swal("Oops!", "Something went wrong, you should choose again!", "error");
                sBar.value = input.substring(0, l - 2);                
                rw = false;  
            }
            
            if(rw){
                for (let k = cs; k <= (cs + cl); k++) {
                    for (let j = rs; j <= (rs + rl); j++) {
                        drawCell(k, j, col);                             
                    }
                }    
                col--;
            }
        }       

    }   
    
}

function sqbybtn(elem) {
    // alert(elem.id);
    for(let i = 1; i <=10; i++){               
        temp = document.getElementById(""+i);
        if(elem.id == i){
            let str1 = sBar.value;
            if(i <= 8){
                
                let str2 = temp.value;            
                str1 = str1 + str2;
                sBar.value = str1;
            }
            if(i == 9){
                str1 = str1.substring(0, str1.length-2);
                sBar.value = str1;
            }
            if(i == 10){
                sBar.value = "";
            }
                        
            search_quarter();
        }
    }
}

function drawCell(x, y, c){
    qElement = document.createElement('div');
    qElement.style.gridRowStart = x;
    qElement.style.gridColumnStart = y;
    qElement.style.background = bc[c];    
    board.appendChild(qElement);
}




