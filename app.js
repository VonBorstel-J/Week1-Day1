const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 




imageIndexes.forEach((i)  => {
    const image = document.createElement('img');
    image.src = `images/Gallery-${i}.jpg`;
    image.alt = `this is the gallery image ${i} for the assignment`;
    image.classList.add('galleryImg');


        //popupstuff
    image.addEventListener('click', () => {
       
        popup.style.transform = `translateY(0)`;
            selectedImage.src = `images/Gallery-${i}.jpg`;
            selectedImage.alt = `this is the gallery image ${i} for the assignment`;
    })

    gallery.appendChild(image);
});

popup.addEventListener('click', () => {
    popup.style.transform = `translateY(-100%)`; 
    selectedImage.src = '';
    selectedImage.alt = '';
});

/* <script>
    //Creating a script for the partners images to be pulled from 
    var images = new Array ("images/Gallery1.jpg", "images/Gallery2.jpg", "images/Gallery3.jpg","images/Gallery4.jpg","images/Gallery5.jpg", "images/Gallery6.jpg", "images/Gallery7.jpg", "images/Gallery8.jpg", "images/Gallery9.jpg", "images/Gallery10.jpg")
    var image_count = 0;
    var descText = []
    function rollover (image_id, millisecs) {
        var image = document.getElementById(image_id);
        image.src = images[image_count];
        image_count++;
        if (image_count >= images.length) {
        image_count = 0;
    }
    setTimeout("rollover('" + image_id + "'," + millisecs + ");",millisecs);
    }

    rollover("img1",3300);



 
     </script> */

     