const entradaDeCasa = document.getElementById('checkbox_2')

const mes_2 = document.getElementById('Mes_2')
const dia_2 = document.getElementById('Dia_2')
const horas_2 = document.getElementById('Horas_2')
const minuto_2 = document.getElementById('Minutos_2')

entradaDeCasa.addEventListener('click', function (){

    exibirHora();

    function exibirHora(){

        const relogio = setTimeout(function tempo(){
        
            if(entradaDeCasa.checked){

            let dateToday = new Date ();
            
            let day = dateToday.getDate();
            let month = dateToday.getMonth()+1;
            let hours = dateToday.getHours();
            let minutes = dateToday.getMinutes();
            
            if (day < 10)
            dia_2.innerHTML = "0" + day;
            else
            dia_2.innerHTML = day;

            if (month < 10)
            mes_2.innerHTML = "0" + month;
            else
            mes_2.innerHTML = month;

            if (hours < 10)
            horas_2.innerHTML = "0" + hours + ":";
            else
            horas_2.innerHTML = hours + ":";

            if (minutes < 10)
            minuto_2.innerHTML = "0" + minutes;
            else
            minuto_2.innerHTML = minutes;
        }
        else{
            dia_2.innerHTML =" ";
            mes_2.innerHTML =" ";
            horas_2.innerHTML =" ";
            minuto_2.innerHTML =" ";
        }
    }
    )}
})