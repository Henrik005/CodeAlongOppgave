//Gotta find out what i wanna write in the addChildFunction to make it recieve the things i put in input and push them
//Two sepperate functions won't work the way i want it to, gotta do it on one


function addChild()
{
    let name = model.input.nameInput;
    let age = model.input.numInput;
    let array = model.data.barn;
    array.push({name: name, age: age});
    updateView();
}


















