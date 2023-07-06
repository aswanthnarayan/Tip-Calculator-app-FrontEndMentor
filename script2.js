let billValue=document.querySelector('#total-bill');
let customTip=document.querySelector('#Custom-tip');
let noOfpeople=document.querySelector('#no-people');
let tipButtons=document.querySelectorAll('.tip-btn');
let tipAmount=document.querySelector('#tip-amount');
let totalBill=document.querySelector('#total-amount');
let resetButton=document.querySelector('#reset');
let errors =document.querySelector('.errors')



//Reset all values

resetButton.addEventListener('click',(e)=>{
    billValue.value=''
    customTip.value=''
    noOfpeople.value=''
    tipAmount.innerText="0.00"
    totalBill.innerText="0.00"
    //reset tip% to 15%
    tipButtons.forEach(tipBtn=>{
        tipBtn.classList.remove('active')
    })
    tipButtons[2].classList.add('active')
})

//tip buttons onclick
tipButtons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        tipButtons.forEach(tipBtn=>{
            tipBtn.classList.remove('active')
        })
        e.target.classList.add('active')
        customTip.value=0
        calculateTip()
    })
   
})

//

const calculateTip=()=>{
    const bill=parseFloat(billValue.value);
    const peopleNum=parseFloat(noOfpeople.value);
    const customTipActive=document.querySelector('#Custom-tip .active')
    let tipPercent=parseInt(document.querySelector('.tip-btn.active').value)
    if(customTipActive){
   // tipPercent= parseInt(document.querySelector('#Custom-tip').dataset.custom)
    tipPercent= parseInt(document.querySelector('#Custom-tip').dataset.val)
}
const totalAmnt=parseFloat((tipPercent/100)*bill).toFixed(2);
const tipAmnt=parseFloat((totalAmnt/peopleNum)).toFixed(2);
const actualTotal=parseFloat((bill+parseFloat(totalAmnt))/peopleNum).toFixed(2)


tipAmount.innerHTML=`$${tipAmnt}`
totalBill.innerHTML=`$${actualTotal}`
}

billValue.addEventListener('change',(e)=>{
    calculateTip();
    
})

customTip.addEventListener('change',(e)=>{
   
        calculateTip();
    
    
})

noOfpeople.addEventListener('change',(e)=>{
    if(noOfpeople.value=0){
        errors.classList.add('errors')
    }
    calculateTip();
    
})



