let add = document.getElementById("add")
let filter_list = document.getElementById("filter")
let display_items = document.getElementById("ol")
let input = document.querySelectorAll("input")
let sel_val = document.querySelector("select")

let obj = [
    {id:1,name:"john",age:"18",profession:"developer"},
    {id:2, name:"jack",age:"20", profession:"developer"},
    {id:3, name:"karen", age:"19",profession:"admin"}
]
let display_items_innerhtml

obj.forEach((ele) => {
    addElementsToList(ele.id, ele.name, ele.profession, ele.age)
})

function addElementsToList(id, name, prof, age){
    let div = document.createElement("div")
    div.className = "items"
    let span1 = document.createElement("span")
    let span2 = document.createElement("span")
    let span3 = document.createElement("span")
    let span4 = document.createElement("span")

    span1.innerText = id + "."
    span2.innerText = "Name: " + name
    span3.innerText = "Profession: " + prof
    span4.innerText = "Age: " + age

    div.appendChild(span1)
    div.appendChild(span2)
    div.appendChild(span3)
    div.appendChild(span4)

    display_items.appendChild(div)
}

function emptyAllInput(){
    input.forEach((ele) => {
        ele.value = ""
    })
}

function displayAddedItem(){
    let name = input[0].value.trim()
    let prof = input[1].value.trim()
    let age = input[2].value

    if(name.length != 0 && prof.length != 0 && age.length != 0)
    {
        let temp = {
            "id" : obj.length + 1,
            "name": name,
            "profession": prof,
            "age": age
        }
        obj.push(temp)
        display_items.innerHTML= ""

        obj.forEach((ele, ind) => {
            addElementsToList(ele.id, ele.name, ele.profession, ele.age)
        })
        emptyAllInput()
        sel_val.value = ""
    }
    else{
        alert("Enter all the details")
    }
    display_items_innerhtml = display_items.innerHTML
}
add.addEventListener("click", displayAddedItem)


 
function selectProfession(value){
    let profession_val = obj.filter((ele) => {
        return (ele.profession.toLowerCase() == value)
    })
    display_items.innerHTML= ""
    profession_val.forEach((ele, ind) => {
        addElementsToList(ind + 1, ele.name, ele.profession, ele.age, ind + 1)
    })
}

function filter_arr(){
    if(sel_val.value == ""){
        alert("Select a profession before clicking the button")
    }
    else{
    let value = sel_val.value.toLowerCase()
        if(value == "developer" || value == "admin"){
            selectProfession(value)
        }
    }
}
filter_list.addEventListener("click", filter_arr)