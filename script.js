let totalBill=document.querySelector('#total-bill')
let customTipBtn=document.querySelector('#Custom-tip')
let totalPeople=document.querySelector('#no-people')
let tipAmount=document.querySelector('#tip-amount')
let totalAmount=document.querySelector('#total-amount')
let resetBtn=document.querySelector('#reset')
let tipButtons=document.querySelectorAll('.tip-btn');
let tipPercent=parseInt(document.querySelector('.tip-btn.active').value)
let error1=document.querySelector('.infotext .errors')

resetBtn.addEventListener('click',()=>{
    totalBill.value='';
    customTipBtn.value='';
    totalPeople.value=''
    tipAmount.innerText='$0.00'
    totalAmount.innerText='$0.00'
    tipButtons.forEach(
        tipBtn=>{
            tipBtn.classList.remove('active')
        })
        tipButtons[2].classList.add('active')
    //    console.log(error1);
    //    error1.style.display='block'
    //    totalPeople.style.border = "1px solid red"
    }
    )



//////////////////////////////////////////
tipButtons.forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        tipButtons.forEach(tipBtn=>{
            tipBtn.classList.remove('active')
        })
        e.target.classList.add('active')
        if (totalPeople.value===''||'0') {
            //totalPeople.value='1'
            //error1.style.display="block"
            calculateTip()
        }
        calculateTip()
    })
   
})


//////////////////----Calculation of Result-----/////////////////
const calculateTip=()=>{
    let tipPercent=parseInt(document.querySelector('.tip-btn.active').value)
     const tipAmountPerPerson=((Number(totalBill.value)*tipPercent)/100)
     const totalAmountPerPerson=((Number(totalBill.value)/totalPeople.value+tipAmountPerPerson))
     tipAmount.innerHTML=`$${tipAmountPerPerson}`
     totalAmount.innerHTML=`$${totalAmountPerPerson}`
}


totalBill.addEventListener('change',(e)=>{
    if (totalPeople.value==='') {
        totalPeople.value='1'
        calculateTip()
    }
    
})
customTipBtn.addEventListener('click',(e)=>{
    tipAmount.innerText='$0'
    totalAmount.innerText='$0'
    if (customTipBtn.value!=='') {
        calculateTip()
    }   
})

customTipBtn.addEventListener('change',(e)=>{
    tipAmount.innerText='$0'
    totalAmount.innerText='$0'
    if (customTipBtn.value!=='') {
        calculateTip()
    }           
 })

 totalPeople.addEventListener('change',(e)=>{

    calculateTip();
     
     
 })