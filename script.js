
// document.getElementById('list').addEventListener('click',add);
// let input= document.getElementById('insert');

// function add(){
//    if(input.value.length == 0){
//     alert("Please Enter a task");
//     console.log('hi');

//    } else
   
//    { 
//       document.querySelector(".tasks").innerHTML +=`<div class="td-cont"><span class="td-text">
//       ${document.querySelector("input").value}
//       </span><button class="delete">X</button>
//       </div>`;

//       let currenT = document.getElementsByClassName('delete');
      
//       for ( let i = 0; i < currenT.length; i++) {
//         currenT[i].onclick = function(){
//             this.parentNode.remove();
//         }
//       };
      
//       let newTask = document.getElementsByClassName('td-text');

//       for (let i = 0; i < newTask.length; i++) {
//         newTask[i].onclick = function(){
//             this.classList.toggle("completed");
//         }
//       };
//     };
//   }

$(document).ready(function(){
  $('#list').click(function(){
    let gg = $('#input').val();
    if (gg.length == 0 ){
      alert("Please Enter a task");
      console.log('hi');
    }

    else {
    // let x = $('.tasks').html();
    // let y = `<div class="td-cont"><span class="td-text">`
    // + gg +`</span><button class="delete">X</button></div>` ;

    // $('.tasks').html( x + y );
        
    
    
      $('.tasks').append(`<div class="td-cont"><input class="td-text" value="`+ gg +`">
      </input><button class="delete">X</button><button class="edit">Edit</button><button class="save">Save</button></div>`);

      $('.save').hide();


      $('.td-text').addClass("sele");

    
     $('.td-text').prop('readonly', true);
     $('.td-text').prop("selected", true);

      
      $('#input').val('');
  
      $('.delete').each(function(){
        $(this).click(function(){
          $(this).parent().remove();
        });
      });

          
      // $('.td-text').each(function(){
      //           $('.td-text').click(function(){
      //             $(this).toggleClass("completed");
      //           });
      //     });
    }


    $('.edit').each(function(){
      $(this).click(function(){
        $('.td-text').prop('readonly', false);
        $('.td-text').prop("selected", false);
        $(this).siblings().show();
       $(this).hide();
       $('.td-text').removeClass("sele");
    });
    });

    $('.save').each(function(){
      $(this).click(function(){
        $('.td-text').prop('readonly', true); 
        $('.td-text').prop("selected", true);
        $(this).siblings().show();
        $(this).hide();
      });
    });
    
  });

  
  // $('.edit').click(function(){
    
  //   $('.td-text').remove();
  // });

});
