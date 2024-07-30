$(document).ready(function() {
    const songs =[]
    $('#songForm').on('submit', function(event) {
        event.preventDefault(); 

        // Get form values
        const title = $('#title').val();
        const audioFile = $('#audio')[0].files[0];
        const imageFile = $('#image')[0].files[0];
        const artist = $('#artist').val();
        const album = $('#album').val();

        const song=[title,audioFile,imageFile,artist,album]

        songs.push(song)
       
        console.log(songs);
        
        setTimeout(function() {
            window.location.href = 'index.html';
        }, 100); 
    });
});



