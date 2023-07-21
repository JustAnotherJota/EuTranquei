const entradaDeCasa = document.getElementById('checkbox_2')

const mes_2 = document.getElementById('Mes_2')
const dia_2 = document.getElementById('Dia_2')
const horas_2 = document.getElementById('Horas_2')
const minuto_2 = document.getElementById('Minutos_2')


function checkLocalStorage2(){

    const dia_2GetItemObject = JSON.parse(localStorage.getItem("Local_dia_2"));
    const mes_2GetItemObject = JSON.parse(localStorage.getItem("Local_mes_2"));
    const horas_2GetItemObject = JSON.parse(localStorage.getItem("Local_horas_2"));
    const minuto_2GetItemObject = JSON.parse(localStorage.getItem("Local_minutos_2"));

    if(localStorage.getItem("botao_2")){
        entradaDeCasa.checked = localStorage.getItem("botao_2");
    }

    if(dia_2GetItemObject < 10)
        dia_2.innerHTML = "11" + dia_2GetItemObject;
    else 
        dia_2.innerHTML = dia_2GetItemObject


    if(mes_2GetItemObject < 10)
        mes_2.innerHTML = "0" + mes_2GetItemObject
    else
    mes_2.innerHTML =mes_2GetItemObject

    if(horas_2GetItemObject < 10)
     horas_2.innerHTML = "0" + horas_2GetItemObject + ":";
    else
    horas_2.innerHTML = horas_2.innerHTML = horas_2GetItemObject + ":";

    if(minuto_2GetItemObject < 10)
        minuto_2.innerHTML = "0" + minuto_2GetItemObject
    else
        minuto_2.innerHTML = minuto_2GetItemObject

        
    if( minuto_2GetItemObject === null && mes_2GetItemObject === null && dia_2GetItemObject === null && horas_2GetItemObject === null ){
        dia_2.innerHTML = " ";
        mes_2.innerHTML = " ";
        horas_2.innerHTML = " ";
        minuto_2.innerHTML = " ";
    }
}

checkLocalStorage2();

entradaDeCasa.addEventListener('click', function (){

    exibirHora();

    function exibirHora(){

        const relogio = setTimeout(function tempo(){
        
            if(entradaDeCasa.checked){

            let dateToday = new Date ();
            
            let day = dateToday.getDate();
            let month = dateToday.getMonth()+1;
            let hr = dateToday.getHours();
            let minute = dateToday.getMinutes();
            
            if (day < 10)
            dia_2.innerHTML = "0" + day;
            else
            dia_2.innerHTML = day;

            if (month < 10)
            mes_2.innerHTML = "0" + month;
            else
            mes_2.innerHTML = month;

            if (hr < 10)
            horas_2.innerHTML = "0" + hr + ":";
            else
            horas_2.innerHTML = hr + ":";

            if (minute < 10)
            minuto_2.innerHTML = "0" + minute;
            else
            minuto_2.innerHTML = minute;

            localStorage.setItem("botao_2", entradaDeCasa.checked);
            localStorage.setItem("Local_dia_2", JSON.stringify(day));
            localStorage.setItem("Local_mes_2", JSON.stringify(month));
            localStorage.setItem("Local_horas_2", JSON.stringify(hr));
            localStorage.setItem("Local_minutos_2", JSON.stringify(minute));
        }
        else{
            dia_2.innerHTML =" ";
            mes_2.innerHTML =" ";
            horas_2.innerHTML =" ";
            minuto_2.innerHTML =" ";

            removeItemLocalStorage();
            function removeItemLocalStorage(){

                localStorage.removeItem("botao_2");
                localStorage.removeItem("Local_dia_2");
                localStorage.removeItem("Local_mes_2");
                localStorage.removeItem("Local_horas_2");
                localStorage.removeItem("Local_minutos_2");

            }
        }
    }
    )}
})