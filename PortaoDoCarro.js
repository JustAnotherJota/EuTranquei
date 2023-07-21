const dia_3 = document.getElementById('Dia_3')
const mes_3 = document.getElementById('Mes_3')
const horas_3 = document.getElementById('Horas_3')
const minutos_3 = document.getElementById('Minutos_3')

const portaDoCarro = document.getElementById('checkbox_3')


function checkLocalStorage3 () {

    const dia_3GetItemObject = JSON.parse(localStorage.getItem("Local_dia_3"));
    const mes_3GetItemObject = JSON.parse(localStorage.getItem("Local_mes_3"));
    const horas_3GetItemObject = JSON.parse(localStorage.getItem("Local_horas_3"));
    const minutos_3GetItemObject = JSON.parse (localStorage.getItem("Local_minutos_3"))

    if(localStorage.getItem("botao_3")){
        const botao_3GetItemObject = localStorage.getItem("botao_3");
        portaDoCarro.checked = botao_3GetItemObject;
    }

    if(dia_3GetItemObject < 10)
        dia_3.innerHTML = "0"+ dia_3GetItemObject;
    else
        dia_3.innerHTML = dia_3GetItemObject;
    
    if(mes_3GetItemObject < 10 )
        mes_3.innerHTML = "0" + mes_3GetItemObject;
    else
        mes_3.innerHTML = mes_3GetItemObject;

    if (horas_3GetItemObject < 10) 
        horas_3.innerHTML = "0" + horas_3GetItemObject + ":";
    else
        horas_3.innerHTML =  horas_3GetItemObject + ":";

    if(minutos_3GetItemObject < 10)
        minutos_3.innerHTML = "0" + minutos_3GetItemObject;
    else
        minutos_3.innerHTML = minutos_3GetItemObject;
        

    if ( dia_3GetItemObject === null && mes_3GetItemObject === null && horas_3GetItemObject === null && minutos_3GetItemObject === null) {
        dia_3.innerHTML = " ";
        mes_3.innerHTML = " ";
        horas_3.innerHTML = " ";
        minutos_3.innerHTML = " ";
    }
}
checkLocalStorage3();

portaDoCarro.addEventListener('click', function(){

    exibirHora(); 

    function exibirHora(){

    const relogio = setTimeout(function time(){

        if(portaDoCarro.checked) {

        let dateToday = new Date();
    
        let day = dateToday.getDate();
        let month = dateToday.getMonth()+1;
        let hr = dateToday.getHours();
        let minute = dateToday.getMinutes();
        

        if(day < 10)
        dia_3.textContent = "0" + day;
        else
        dia_3.textContent = day;
        
        if(month < 10)
        mes_3.textContent = "0" + month;
        else
        mes_3.textContent = month;
        
        if (horas_3 < 10)
        horas_3.textContent = "0" + hr + ":";
        else
        horas_3.textContent = hr + ":";

        if(minute >= 10)
        minutos_3.textContent = minute;
        else
        minutos_3.textContent = "0" + minute;
        
        
        localStorage.setItem("botao_3", (portaDoCarro.checked));
        localStorage.setItem("Local_dia_3", JSON.stringify(day));
        localStorage.setItem("Local_mes_3", JSON.stringify(month));
        localStorage.setItem("Local_horas_3", JSON.stringify(hr));
        localStorage.setItem("Local_minutos_3", JSON.stringify(minute));
        }

        else {

            dia_3.innerHTML = " ";
            mes_3.innerHTML = " ";
            horas_3.innerHTML = " ";
            minutos_3.innerHTML = " ";

            removeItemLocalStorage();
            function removeItemLocalStorage(){

            localStorage.removeItem("botao_3")
            localStorage.removeItem("Local_dia_3")
            localStorage.removeItem("Local_mes_3")
            localStorage.removeItem("Local_horas_3")
            localStorage.removeItem("Local_minutos_3")
        }   }
    })
}
})