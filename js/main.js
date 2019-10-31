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
    var userInput = $('input').val();
    console.log(userInput.length);
    var div = `<div><button class="bg-danger text-white" id="removeButton">X</button><span class="text-warning"> ${userInput}</span></div>`;
    if (userInput.length !== 0){
        userList.append(div);
    }
    if (userInput.length === 0) {
        alert("What, no skills?");
    }
});

$(document).on("click","#removeButton",function(){
    $(this).closest("div").remove();
});

