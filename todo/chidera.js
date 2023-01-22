var prompt =require("prompt-sync")({sigint:true});

console.log("********** AVALIABLE OPTIONS ******** \n")
console.log('1. Add Tasks')
console.log('2. Update Tasks')
console.log('3. Delete Tasks')
console.log('4. Display Tasks\n')

var user = prompt(" Enter from 1-4: ")
const todo = []

var AddTask = ()=>{
    var title = prompt(" Enter the title: ")
    var decription = prompt(" Enter the description: ")
    var time = prompt(" Enter from time: ")

    var Tasks = {
        'title':title,
        'description':decription,
        'time':time
    }

    todo.push(Tasks)

    console.log(todo)


}
if (user == 1){
    AddTask()
}
else if(user == 2){
    console.log("you are updating task")
}
else if(user == 3){
    console.log("you are deleting task")
}
else if(user == 4){
    console.log("you are displaying task")
}
else{
    console.log("Invalid input")
}

