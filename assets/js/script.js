const today=new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Month is 0-indexed, so add 1
const day = String(today.getDate()).padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;
const BASE_URL =
  `https://api.frankfurter.dev/v1/${formattedDate}?base=`;

let dropdowns=document.querySelectorAll(".box select");
let exchange=document.querySelector(".exchange");
let from=document.querySelector(".from select");
let to=document.querySelector(".to select");
let swap=document.querySelector(".swap");
let input=document.querySelector(".from-amount input");
let output=document.querySelector(".to-amount input");
let inputCode=document.querySelector(".from select");
let outputCode=document.querySelector(".to select");

for(let select of dropdowns)
{
    for(currCode in countryList)
    {
        let newOption=document.createElement("option");
        newOption.innerText=currCode;
        newOption.value=currCode;
        if(select.name==="from" && currCode==="USD")
        {
            newOption.selected="selected";
        }
        else if(select.name==="to" && currCode==="INR")
        {
            newOption.selected="selected";
        }
        select.append(newOption);
    }
    select.addEventListener("change", (evt)=>{
        upDateFlag(evt.target);
    });
}

const upDateFlag=(element)=>
{
    let currCode=element.value;
    let flag=countryList[currCode];
    let link=`https://flagsapi.com/${flag}/flat/64.png`;
    let image=element.parentElement.querySelector("img");
    image.src=link;
}

exchange.addEventListener("click",async (e)=>{
    e.preventDefault();
    let val=input.value;
    if(val==="" && val<0)
    {
        val=1;
    }
    const URL=`${BASE_URL}${from.value}&symbols=${to.value}`;
    let response=await fetch(URL);
    let data= await response.json();
    let rate=data.rates[to.value];
    output.value=val*rate;
});

swap.addEventListener("click",(e)=>{
    e.preventDefault();
    let temp=from.value;
    from.value=to.value;
    to.value=temp;
    upDateFlag(from);
    upDateFlag(to);
});

let toggle = document.querySelector("#toggle");

document.addEventListener("DOMContentLoaded", (e)=>{
    let darkMode = localStorage.getItem("darkMode");
    if (darkMode === "enabled") {
        document.body.classList.add("dark-mode");
    }

    // ✅ Toggle Dark Mode
    if (toggle) {
        toggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            if (document.body.classList.contains("dark-mode")) {
                localStorage.setItem("darkMode", "enabled");
            } else {
                localStorage.setItem("darkMode", "disabled");
            }
        });
    }
})