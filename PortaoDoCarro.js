const dia_3 = document.getElementById('Dia_3')
const mes_3 = document.getElementById('Mes_3')
const horas_3 = document.getElementById('Horas_3')
const minutos_3 = document.getElementById('Minutos_3')

const portaDoCarro = document.getElementById('checkbox_3')

portaDoCarro.addEventListener('click', function(){

    exibirHora(); 

    function exibirHora(){

    const relogio = setTimeout(function time(){

        if(portaDoCarro.checked) {

        let dateToday = new Date();
    
        let day = dateToday.getDay();
        let month = dateToday.getMonth()+1;
        let hr = dateToday.getHours();
        let minute = dateToday.getMinutes();

        dia_3.textContent = "0" + day;
        mes_3.textContent = "0" + month;
        horas_3.textContent = hr + ":";
        minutos_3.textContent = minute;
         //criar uma variavel ou algo que seja capaz de armazena o minutos.textContent e então guardar no localStorage
        }
        else {
            dia_3.innerHTML =" ";
            mes_3.innerHTML =" ";
            horas_3.innerHTML =" ";
            minutos_3.innerHTML =" ";
        }   
    })
}
})
/*
const mes = data.getMonth() + 1;
const hora = data.getHours();
const minuto = data.getMinutes();
const dia = data.getDate();


function DataHoraMin(){
    console.log("dia",dia,"do mês",mes,"no horário:",hora,":",minuto)
    
}

DataHoraMin();

function teste(){
console.log (Horario)
}
*/
