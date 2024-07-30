$(document).ready(function() {
    
    const selectedAlbum = localStorage.getItem('selectedAlbum');
    if (selectedAlbum) {
        if (selectedAlbum === 'EkThaRaja') {
            $('#albumTitle img').attr('src', './Media/album/ekThaRaja.jfif');
            $('#albumTitle h1').text('Ek Tha Raja');
            
        }
        else if (selectedAlbum === 'rockstar') {
            $('#albumTitle img').attr('src', './Media/album/rockstar.jfif');
            $('#albumTitle h1').text('Rockstar');
        }
        else if (selectedAlbum === 'animal') {
            $('#albumTitle img').attr('src', './Media/album/animal.jpg');
            $('#albumTitle h1').text('Animal');
        }
        else if (selectedAlbum === 'lover') {
            $('#albumTitle img').attr('src', './Media/album/lover.jfif');
            $('#albumTitle h1').text('Lover');
        }
        else if (selectedAlbum === 'moosetape') {
            $('#albumTitle img').attr('src', './Media/album/moosetap.jfif');
            $('#albumTitle h1').text('Moosetape');
        }
        else if (selectedAlbum === 'sajni') {
            $('#albumTitle img').attr('src', './Media/album/sajni.jfif');
            $('#albumTitle h1').text('Sajni');
        }
        else if (selectedAlbum === 'divide') {
            $('#albumTitle img').attr('src', './Media/album/divide.jfif');
            $('#albumTitle h1').text('Divide');
        }
    }
});