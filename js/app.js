function shuffle(array){
    var currentIndex  = array.lenght,
    randomIndex;

    while(0 !== currentIndex){
        randomIndex = Math.floor(Math.random()* currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[currentIndex],
            array[currentIndex],
        ];
    }
    return array;
}

function spin(){
    wheel.play();

    
    const box = document.getElementById("box");
    const element = document.getElementById("mainbox");
    let SelectedItem = "";

    let AC = shuffle([1890, 2250, 2610]);
    let Camera = shuffle([1850, 2210, 2570]);
    let Zonk = shuffle([1770, 2130, 2490]);
    let PS = shuffle([1810, 2170, 2530]);
    let Headset = shuffle ([1750, 2110, 2470]);
    let Drone = shuffle ([1630, 1990, 2350]);
    let ROG = shuffle ([1570, 1930, 2290]);


    let results = shuffle ([
        AC[0],
        camera[0],
        Zonk[0],
        PS[0],
        Headset[0],
        Drone[0],
        ROG[0],
    ]);

    if(AC.includes(results[0])) SelectedItem = "150 Rs Discount";
    if(Camera.includes(results[0])) SelectedItem = "150 Rs Discount";
    if(Zonk.includes(results[0])) SelectedItem = "150 Rs Discount";
    if(PS.includes(results[0])) SelectedItem = "150 Rs Discount";
    if(Headset.includes(results[0])) SelectedItem = "150 Rs Discount";
    if(Drone.includes(results[0])) SelectedItem = "150 Rs Discount";
    if(ROG.includes(results[0])) SelectedItem = "150 Rs Discount";


    box.style.setProperty("transition", "all ease 5s");
    box.style.transform = "rotate("+ results[0] +"deg)";
    element.classList.remove("animate");
    setTimeout(function(){
        element.classList.add("animate");
    }, 5000);

    setTimeout(function(){
        applause.play();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
            }
          })
    });

    setTimeout(function(){
        box.style.setProperty("transition", "initial");
        box.style.transform = "rotate(90deg)";
    }, 6000);
    
}