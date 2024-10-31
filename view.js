updateView();
function updateView()
    {
    model.app.appShort.innerHTML = /*HTML*/` 
        ${showKids()}       
        <input placeholder="Child Name Here..." onchange = "model.input.nameInput=this.value" value="${model.input.nameInput=this.value??""}"> 
        <input placeholder="Child Age Here..." onchange = "model.input.numInput=this.value" value="${model.input.numInput=this.value??""}">
        <br/>
        <button onclick="addChild()">Add Child To List! c:</button> 
        <br/>
        <div> These children are starting school soon:</div>
        <div>${startingSchool()}</div>
     `
    }
//I need to make the array of objects be visualy represented as text on the screen.
//Thank you W3 schools
function showKids(){
    let html = ""
    for(let i = 0; i < model.data.barn.length; i++)
    {
        html += `${model.data.barn[i].name + " " + model.data.barn[i].age} <br>`
    }
    return html;
}

function startingSchool()
{   
    let html = ""
    let newName;
    let newAge;

    for(let i = 0; i< model.data.barn.length; i++)
    {   
        newName = model.data.barn[i].name;
        newAge = model.data.barn[i].age;

        if(model.data.barn[i].age >= 6) {
            
            html += ` ${newName + " "+ newAge} <br> `
            
        }
    }

    return html;
}












