const portaCasa = document.getElementById('checkbox_1')

const dia = document.getElementById('Dia_1')
const mes = document.getElementById('Mes_1')
const horas = document.getElementById('Horas_1')
const minutos = document.getElementById('Minutos_1')

portaCasa.addEventListener('click', function (){

    exibirHora();

    function exibirHora(){
    
        const relogio1 = setTimeout(function tempo(){
    
            if (portaCasa.checked) {

            let dateToday = new Date ();

            let day = dateToday.getDay();
            let month = dateToday. getMonth()+1;
            let hr = dateToday.getHours();
            let minute = dateToday.getMinutes();

            dia.innerHTML = day; 
            mes.innerHTML = month;
            horas.innerHTML = hr;
            minutos.innerHTML = minute;

        }
        else {
            dia.innerHTML = " ";
            mes.innerHTML =" ";
            horas.innerHTML =" ";
            minutos.innerHTML =" ";
        }
    })
}
})
