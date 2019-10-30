// $('#addSkill').on('click',function(evt){
//     table.append();
// });



var userList = $('ul');
// var input = $('input').val()

// $("button").click(function() { 
//     $("skills-input").submit(); 
// }); 

$('#skillsInput button').click(function(e){
    e.preventDefault();
    var userInput = $('input').val()
    var div = `<div><button class="bg-danger text-white" id="${userInput}">X</button><span class="text-warning"> ${userInput}</span></div>`;
    userList.append(div);
    
});

$('button .bg-danger text-white').click(function(e){
    console.log("hi");

})


//on button click
//skill = val
//make the new skill
//reset the value to '' 