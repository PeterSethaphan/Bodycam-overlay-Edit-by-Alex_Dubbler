// * * *  DO NOT edit below if you know what you are doing!

// Variables

let link = document.querySelector("link[rel~='icon']");
let deptLogo = document.getElementById('deptLogo');

// Checking something for changing the page logo
if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    document.getElementsByTagName('head')[0].appendChild(link);
}

// just changing some stuff
link.href = logo_source; // changing page logo
document.title= `${bodycam_name}™ Overlay`; // changing page name to <bodycam name><trademark> overlay
document.getElementById("Blink").style.animationDuration = blinker_speed; // changing red blinker blinking speed

// chaging some colors
background_opacity = background_opacity.trim(background_opacity);
var boofer = background_opacity.split('');
background_color = background_color.trim(background_color);
background_color = background_color.split('');
background_color.splice(3,0,"a");
background_color.pop();
background_color.push(",");
background_color = background_color.concat(boofer);
background_color.push(")");
background_color = background_color.join('');

document.getElementById('main_container').style.backgroundColor = background_color;
document.getElementById('info_container').style.color = text_color;
document.getElementById('Blink').style.color = blinker_color;

// Changing logo proportions (height, width)
deptLogo.style.height = logoHeight;
deptLogo.style.width = logoWidth;


// Department logo, time changing, and other stuff 
deptLogo.src=logo_source;   
var d,h,m,s,animate;
const monthNames = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

function init(){
    d=new Date();
    h=d.getHours();
    m=d.getMinutes();
    s=d.getSeconds();
    t=d.toLocaleString('en', {timeZoneName:'short'}).split(' ').pop();
    clock();
    day=d.getDate();
    month=d.getMonth();
    year=d.getFullYear() + " |";
};

function clock(){
    s++;
    if(s==60){
        s=0;
        m++;
        if(m==60){
            m=0;
            h++;
            if(h==24){
                h=0;
            }
        }
    }
    $('sec', `${s} |`);
    $('min', m);
    $('hr', h);
    $('tz', t);
    $('day', day);
    $('year', year);
    $('month', `${monthNames[month]} |`);
    $('player', player);
    $('agency', agency);
    $('callsign', `| ${callsign}`);
    $('rank', ` | ${rank}`);
    $('bodycamName', bodycam_name);
    animate=setTimeout(clock,1000);
};

function $(id,val){
    if(val<10){
        val='0'+val;
    }
    document.getElementById(id).innerHTML=val;
};

window.onload=init;