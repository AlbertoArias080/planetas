var tierra = false;
var saturno = false;
var jupiter = false;
var marte = false;

function tamanotierra() {
    if (tierra == false) {
        $("#imgtierra").width(1000 + "px")
        $("#imgjupiter").hide();
        $("#imgmarte").hide();
        $("#imgsaturno").hide();
        tierra = true;

    } else {
        $("#astro").animate({marginTop:"10px"},1);
        $("#astro").animate({marginLeft:"10px"},1);
        $("#imgtierra").width(200 + "px")
        $("#imgjupiter").show();
        $("#imgmarte").show();
        $("#imgsaturno").show();
        tierra = false;
    }

}

function tamanomarte() {
    if (marte == false) {
        $("#imgmarte").width(800 + "px")
        $("#imgjupiter").hide();
        $("#imgtierra").hide();
        $("#imgsaturno").hide();
        marte = true;

    } else {
        $("#astro").animate({marginTop:"10px"},1);
        $("#astro").animate({marginLeft:"10px"},1);
        $("#imgmarte").width(200 + "px")
        $("#imgjupiter").show();
        $("#imgtierra").show();
        $("#imgsaturno").show();
        marte = false;
    }

}

function tamanosaturno() {
    if (saturno == false) {
        $("#imgsaturno").width(1000 + "px")
        $("#imgjupiter").hide();
        $("#imgtierra").hide();
        $("#imgmarte").hide();
        saturno = true;

    } else {
        $("#astro").animate({marginTop:"10px"},1);
        $("#astro").animate({marginLeft:"10px"},1);
        $("#imgsaturno").width(200 + "px")
        $("#imgjupiter").show();
        $("#imgtierra").show();
        $("#imgmarte").show();
        saturno = false;
    }

}

function tamanojupiter() {
    if (jupiter == false) {
        $("#imgjupiter").width(800 + "px")
        $("#imgsaturno").hide();
        $("#imgtierra").hide();
        $("#imgmarte").hide();
        jupiter = true;

    } else {
        $("#astro").animate({marginTop:"10px"},1);
        $("#astro").animate({marginLeft:"10px"},1);
        $("#imgjupiter").width(200 + "px")
        $("#imgsaturno").show();
        $("#imgtierra").show();
        $("#imgmarte").show();
        jupiter = false;
    }

}

function gravedad() {  
    var vel=0;
    if (jupiter == true) {
        vel=790;        ;       
    } else if (tierra == true) {   
        vel=2000;
    } else if (marte == true) {
        vel=5283;        ;
    } else if (saturno == true) {
        vel=1877;        ;
    }
        $("#astro").animate({marginLeft:"+=1300px", marginTop :"+=300"},vel);

}
