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
            
            let day = dateToday.getDay();
            let month = dateToday.getMonth()+1;
            let hours = dateToday.getHours();
            let minutes = dateToday.getMinutes();

            dia_2.innerHTML = day;
            mes_2.innerHTML = month;
            horas_2.innerHTML = hours;
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