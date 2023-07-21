const portaCasa = document.getElementById('checkbox_1')

const dia = document.getElementById('Dia_1')
const mes = document.getElementById('Mes_1')
const horas = document.getElementById('Horas_1')
const minutos = document.getElementById('Minutos_1')


function checkLocalStorage() {

const diaGetItemObject = JSON.parse(localStorage.getItem ("Local_dia"));
const mesGetItemObject = JSON.parse(localStorage.getItem ("Local_mes"));
const horasGetItemObject = JSON.parse(localStorage.getItem ("Local_horas"));
const minutosGetItemObject = JSON.parse(localStorage.getItem ("Local_minutos"));

    if(localStorage.getItem('botao')){
        const botaoGetItemObject = localStorage.getItem("botao");
        portaCasa.checked = botaoGetItemObject;
    }

    if (diaGetItemObject < 10)
    dia.innerHTML = "0" + diaGetItemObject;
    else
    dia.innerHTML = diaGetItemObject;

    if (mesGetItemObject < 10)
    mes.innerHTML = "0" + mesGetItemObject;
    else
    mes.innerHTML = mesGetItemObject;


    if (horasGetItemObject < 10 )
    horas.innerHTML = "0" + horasGetItemObject + ":";
    else
    horas.innerHTML = horasGetItemObject + ":";
    
    if (minutosGetItemObject < 10)
    minutos.innerHTML = "0" + minutosGetItemObject;
    else
    minutos.innerHTML = minutosGetItemObject;
    

    if( diaGetItemObject === null || mesGetItemObject === null || horasGetItemObject === null || minutosGetItemObject === null ){
        dia.innerHTML = " ";
        mes.innerHTML =" ";
        horas.innerHTML =" ";
        minutos.innerHTML =" ";
} 
}

checkLocalStorage();

portaCasa.addEventListener('click', function (){
    

    exibirHora();

            
    function exibirHora(){
    
 
        const relogio1 = setTimeout(function tempo(){


            if (portaCasa.checked) {


            let dateToday = new Date ();

            let day = dateToday.getDate();
            let month = dateToday. getMonth()+1;
            let hr = dateToday.getHours();
            let minute = dateToday.getMinutes();

            if (day < 10)
            dia.innerHTML = "0" + day; 
            else
            dia.innerHTML = day; 

            if (month < 10)
            mes.innerHTML = "0" + month;
            else
            mes.innerHTML = month;

            if (hr < 10)
            horas.innerHTML = "0" + hr + ":";
            else
            horas.innerHTML = hr + ":";

            if (minute < 10)
            minutos.innerHTML = "0" + minute;
            else
            minutos.innerHTML = minute;


            localStorage.setItem("botao", portaCasa.checked);
            localStorage.setItem("Local_dia", JSON.stringify(day));
            localStorage.setItem("Local_mes", JSON.stringify(month));
            localStorage.setItem("Local_horas", JSON.stringify(hr));
            localStorage.setItem("Local_minutos", JSON.stringify(minute));
        }

        else {

            dia.innerHTML = " ";
            mes.innerHTML =" ";
            horas.innerHTML =" ";
            minutos.innerHTML =" ";

            removeItemLocalStorage();

            function removeItemLocalStorage(){
                localStorage.removeItem("botao");
                localStorage.removeItem("Local_dia");
                localStorage.removeItem("Local_mes");
                localStorage.removeItem("Local_horas");
                localStorage.removeItem("Local_minutos");

            }

            
        }


    })
}
})
