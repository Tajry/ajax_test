
let html , data 

$(document).ready(function() {

   $('#get_type').change(function() {
    if ($('#get_type').val() == '') {
        render()
    }else {
        show_type();
    }
        
   }) 
   if ($('#get_type').val() == '') {
    render()
}else {
    show_type();
}
   
})


function render() {
    $.ajax({
        url:'./api/select_data.php',
        type:'POST',
        dataType:'JSON',
        data:{},
        success:function(res) {
            // console.log('good' ,res)
            data = res;
            html = '';
            for(let i = 0;i<data.length ;i++) {
            html += `
                <tr>
                    <td>${i +1}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].type}</td>
                    <td>
                        <button id="btn_edit" onclick="open_edit_modal(${i},${data[i].id})">edit</button>
                        <button id="btn_del"onclick="get_delete(${data[i].id})">delete</button>
                    </td>
                </tr>
                `
            $('#show').html(html);

            }

        },error:function(err) {
            console.log("error" , err)
        }

    })
}


function get_creat() {
    $.ajax({
        url:'./api/insert_data.php',
        type:'POST',
        dataType:'JSON',
        data:{
            name:$('#name').val(),
            type:$('#type').val()
        },
        success:function(res) {
            // console.log("success" , res)
            if (res[0].code == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Insert successfully',
                    text: 'Insert success'
                })
                render();
                close_modal();
            }
        },error:function(err) {
            console.log("err" , err)
        }

    })
}

function show_type() {
    $.ajax({
        url:'./api/select_type.php',
        type:"POST",
        dataType:"JSON",
        data:{
            type:$('#get_type').val()
        },
        success:function(res) {
            console.log( "good", res)
            data = res;
            html ="";
            type = ['programer', 'seller' , 'counter'];
            for(let i =0; i<data.length ; i++) {
                html += `
                    <tr>
                        <td>${i +1}</td>
                        <td>${data[i].name}</td>
                        <td>${data[i].type}</td>
                        <td>
                            <button id="btn_edit" onclick="open_edit_modal(${i},${data[i].id})">edit</button>
                            <button id="btn_del"onclick="get_delete(${data[i].id})">delete</button>
                        </td>
                    </tr>
                    `
                $('#show').html(html);
    
                
            }

        },error:function (err) {
            console.log(err)
        }
    })
}


function get_edit(id) {
    $.ajax({
        url:'./api/edit_data.php',
        type:'POST',
        dataType:'JSON',
        data:{
            id:$('#edit_id').val(),
            name:$('#edit_txt').val(),
            type:$('#edit_op').val()
        },
        success:function(res) {
            // console.log("success" , res)
            if (res[0].code == 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Insert successfully',
                    text: 'Insert success'
                })
                
            }
            render()
            close_modal();

        },error:function(err) {
            console.log("err" , err)
        }

    })
}
 
 
 
 
 
 function show_modal_insert()  {
     document.querySelector('#modal_creat').style.display = "flex";
  }
  function close_modal() {
     document.querySelector('.modal').style.display = "none";
     document.querySelector('#modal-edit').style.display = "none";
      
  }
  function open_edit_modal(index , id) {
    
    document.querySelector('#modal-edit').style.display = "flex";
    $('#edit_id').val(id)
    $('#edit_txt').val(data[index].name)
    $('#edit_op').val(data[index].type)
  }
  
  function get_delete(id) {

    $.ajax({
        url:'./api/delete.php',
        type:"POST",
        dataType:"JSON" ,
        data:{
            id:id
        },
        success:function(res) {
           if (res[0].code == 200) {
            Swal.fire({
                icon: 'success',
                title: 'Delete successfully',
                text: 'Something went wrong!'
                
            })
            render();
           }


        },error:function(err) {
            console.log(err)
        }
        
    })
    
  }
 
 