$(document).ready(function() {
    //arist
      $('#arjit').click(function(){
          localStorage.setItem('selectedArtist', 'arjit');
          window.location.href = 'artist.html';
      });
      $('#pritam').click(function(){
          localStorage.setItem('selectedArtist', 'Pritam');
           window.location.href = 'artist.html';
      });
      $('#rahman').click(function(){
          localStorage.setItem('selectedArtist', 'rahman');
             window.location.href = 'artist.html';
      });
      $('#sachin-jigar').click(function(){
           localStorage.setItem('selectedArtist', 'sachin-jigar');
             window.location.href = 'artist.html';
      });
      $('#anirudh').click(function(){
          localStorage.setItem('selectedArtist', 'anirudh');
           window.location.href = 'artist.html';
      });
      $('#vishal').click(function(){
           localStorage.setItem('selectedArtist', 'vishal');
            window.location.href = 'artist.html';
      });
      $('#atif-aslam').click(function(){
           localStorage.setItem('selectedArtist', 'atif-aslam');
            window.location.href = 'artist.html';
      });

      //album
      $('#EkThaRaja').click(function(){
          localStorage.setItem('selectedAlbum', 'EkThaRaja');
          window.location.href = 'album.html';
      });
      
      $('#animal').click(function(){
          localStorage.setItem('selectedAlbum', 'animal');
          window.location.href = 'album.html';
      });
      $('#lover').click(function(){
          localStorage.setItem('selectedAlbum', 'lover');
          window.location.href = 'album.html';
      });
      $('#moosetape').click(function(){
          localStorage.setItem('selectedAlbum', 'moosetape');
          window.location.href = 'album.html';
      });
      $('#sajni').click(function(){
          localStorage.setItem('selectedAlbum', 'sajni');
          window.location.href = 'album.html';
      });
      $('#rockstar').click(function(){
          localStorage.setItem('selectedAlbum', 'rockstar');
          window.location.href = 'album.html';
      });
      $('#divide').click(function(){
          localStorage.setItem('selectedAlbum', 'divide');
          window.location.href = 'album.html';
      });

  });