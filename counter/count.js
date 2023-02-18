let count=0;
const value=document.querySelector('.value');
const btns=document.querySelectorAll('.btn');
btns.forEach(function(bt){
    bt.addEventListener('click',function(e){
        const st=e.currentTarget.classList;
        console.log(st);
        if(st.contains('decrease')){
            count--;
            
        }else if(st.contains('reset')){
            count=0;
            
        }else {
            count++;            
        }
        value.textContent=count;
        if(count>0){
            value.style.color='green';
        }
        if(count<0){
            value.style.color='red';
        }
        if(count===0){
            value.style.color='white';
        }
    });
});
