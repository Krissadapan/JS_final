$('#post').click(function(){
    createNewPost();
});

$('#photo').change(function(){
    previewPhoto($('#photo').val());
});

function createNewPost(){

    var newpost = {
        // POINT 8. Use jQuery to get form data and create an object for new post

        create_date: moment()
    };

<<<<<<< HEAD
    var url = 'http://localhost:8080/api/posts';
    // POINT 9. Insert data to REST API with axios

=======
    console.log(newpost);

    var url = '/api/posts';
    axios.post(url, newpost)
      .then(function (response) {
        console.log(response);
        window.location.href = 'index.html';
      })
      .catch(function (error) {
        console.log(error);
      });
>>>>>>> 128767c772dba01c7635679d0b5df9309c12029c
}

function previewPhoto(src){
    $('#preview').attr('src', src);
}