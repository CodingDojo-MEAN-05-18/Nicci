function kenny() {
    console.log("Today's weather is beautiful... ");
    var volcano = (Math.floor(Math.random() * 100));
    var tsunami = (Math.floor(Math.random() * 100));
    var earthquake = (Math.floor(Math.random() * 100));
    var blizzard = (Math.floor(Math.random() * 100));
    var meteror = (Math.floor(Math.random() * 100));
    if (volcano < 11) {
        console.log("except for the VOLCANO!");
    }
    if (tsunami < 16) {
        console.log("except for the TSUNAMI!");
    }
    if (earthquake < 21) {
        console.log("except for the EARTHQUAKE!");
    }
    if (blizzard < 26) {
        console.log("except for the BLIZZARD!");
    }
    if (meteror < 31) {
        console.log("except for the METEROR!");
    }

}
kenny();
