var images=[
    "artem-beliaikin-sVhRMCyo1_Y-unsplash.jpg",
    "ben-dutton-FKrcPEZfoNU-unsplash.jpg",
    "christian-joudrey-mWRR1xj95hg-unsplash.jpg",
    "cristina-gottardi-wndpWTiDuT0-unsplash.jpg",
    "david-marcu-78A265wPiO4-unsplash.jpg",
    "jeff-hopper-L_b17zx5H-c-unsplash.jpg",
    "john-cobb-IE_sifhay7o-unsplash (1).jpg",
    "john-cobb-IE_sifhay7o-unsplash.jpg",
    "joshua-earle-EqztQX9btrE-unsplash.jpg",
    "mar-bustos-HsEz1XZ1TO8-unsplash.jpg",
    "marco-xu-zcvWUNrmPBQ-unsplash.jpg",
    "matteo-grassi-ehLLpwEg4zs-unsplash.jpg",
    "road-trip-with-raj-m7Uo3pnPGZI-unsplash.jpg",
    "tim-foster-o4mP43oPGHk-unsplash.jpg",
    "will-turner-9iYED74eL3M-unsplash.jpg"
]

var counter=0;

var current=document.getElementById("images");


Next=()=>{
    counter++;
    if (counter==images.length){
        counter=0;
        current.src=images[counter];
    }
    
      
        current.src=images[counter];


    
    return false;


}

Prev=()=>{
    counter--;
    if (counter< 0){
        counter=images.length-1;
        
    }
    
        
        current.src=images[counter];
       


    
    return false;


}