const list = document.getElementById("color-list");
// const addInput = document.getElementById("color-list");
const BtnAdd = document.querySelector('.submit');


BtnAdd.addEventListener("click", changeColor);

function uuidv4() {
    return 'xxx-xyx-yxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const rgbArray = []
let counter = 0
    function changeColor() {
        let newObj = {}

        const rColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        const gColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        const bColor = Math.floor(Math.random() * (255 - 0 + 1) + 0)
        let newColor = `rgb(${rColor},${gColor},${bColor})`
        newObj = {UID:uuidv4(), red:rColor, green:gColor,blue:bColor}
        rgbArray.push(newObj)

        bodyColor = document.querySelector(".submit")
        bodyColor.onclick = ()=>{
            document.body.style.backgroundColor = "white"
        }
        
        document.body.querySelector("#rgbColorInfo").innerHTML = `new color is rgb(${newObj.red},${newObj.green},${newObj.blue})`

        const newLi = document.createElement("li")
        const newApply = document.createElement("button")
        const newDelete = document.createElement("button")
        newLi.setAttribute("class",counter);
        newApply.setAttribute("class","apply");
        newApply.setAttribute("id",`${newObj.UID}`);
        newDelete.setAttribute("class",`${counter} delete`);
        
        
        
        document.getElementById("color-list").appendChild(newLi)
        const list = document.getElementById("color-list").getElementsByTagName('li')[counter]
        list.innerHTML = newColor
        list.style.backgroundColor = newColor
        
        list.appendChild(newApply)
        list.appendChild(newDelete)
        list.getElementsByTagName("button")[0].innerHTML = "\u2713"
        list.getElementsByTagName("button")[1].innerHTML = "\u00D7"


        
        counter += 1       
        // console.log(newObj)
        // console.log(rgbArray)
        // console.log(document.getElementsByClassName(newObj.UID))
        


        for(let ID of rgbArray){
            let target = document.getElementById(ID.UID)
            target.onclick = ()=>{
                
                document.body.style.backgroundColor = target.parentElement.style.backgroundColor
                
            }
            
        }

        let toDelete = document.getElementsByClassName("delete")
        for(let deleted of toDelete){
            
            deleted.onclick = ()=> {
                deleted.parentElement.style.display = "none"
            }
        }


    }


// for(let uClass of rgbArray){
//     const chosenApply = document.getElementsByClassName(uClass.UID).addEventListener("click",function(){
//         console.log("Clicked!!")
//     })
    
    
