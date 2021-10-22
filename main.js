VANTA.DOTS({
    el: "#dif",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x200090,
    color2: 0x6e40ca,
    backgroundColor: 0x0
  })

let sum ='0'
let input= document.createElement('input')
let All = document.getElementById('all')
let section = document.querySelector('.calc')
input.classList.add('input')
input.value= sum
input.disabled = true
All.append(input)
let flex = document.createElement('div')
flex.className='flex'
All.append(flex)

let arr =['C', 'AC', '(', ')', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '/', '*', '+', '-', '=', '.']
arr.forEach((el, index)=>{
    let btn = document.createElement('input')
    btn.className = 'input1'
    btn.type = 'button'
    btn.value = el
    btn.setAttribute('onclick', 'getNum(event)')
    const div = document.createElement('div')
    if(index % 2 == 0){
         div.className = 'divforbtn'
          
        document.body.appendChild(document.createElement('br'))
    }
   
   div.append(btn)
    flex.append(div)

})



const getNum =(e)=>{
    let num =e.target.value
    if(num == 'C'){
        sum ='0'
    }else if(num =='AC'){
        sum = sum.substr(0, sum.length-1)
    }else if(num == '='){
        sum = eval(sum)
    }
    else{
        if(sum == '0'){
            sum = ''
        }
        sum+=num
    }
    input.value=sum
}

