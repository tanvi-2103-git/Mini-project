$(document).ready(function() {
    
    const selectedArtist = localStorage.getItem('selectedArtist');
    if (selectedArtist) {
        if (selectedArtist === 'Pritam') {
            $('#artistTitle img').attr('src', './Media/artist/pritam.jfif');
            $('#artistTitle h1').text('Pritam');
            
        }
        else if (selectedArtist === 'rahman') {
            $('#artistTitle img').attr('src', './Media/artist/arrahman.jfif');
            $('#artistTitle h1').text('A R Rahman');
        }
        else if (selectedArtist === 'sachin-jigar') {
            $('#artistTitle img').attr('src', './Media/artist/sachin-jigar.jfif');
            $('#artistTitle h1').text('Sachin-Jigar');
        }
        else if (selectedArtist === 'anirudh') {
            $('#artistTitle img').attr('src', './Media/artist/anirudh.jfif');
            $('#artistTitle h1').text('Anirudh');
        }
        else if (selectedArtist === 'vishal') {
            $('#artistTitle img').attr('src', './Media/artist/vishalMishra.jfif');
            $('#artistTitle h1').text('Vishal Mishra');
        }
        else if (selectedArtist === 'atif-aslam') {
            $('#artistTitle img').attr('src', './Media/artist/atifAslam.jfif');
            $('#artistTitle h1').text('Atif Aslam');
        }
    }
});