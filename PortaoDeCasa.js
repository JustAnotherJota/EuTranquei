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

            if(minute >=10)
            minutos.innerHTML = minute;
            else
            minutos.innerHTML = "0" + minute;


            localStorage.setItem("teste", JSON.stringify(portaCasa));
            localStorage.setItem("dia", JSON.stringify(day.valueOf(Number)));
            localStorage.setItem("mes", JSON.stringify(month));
            localStorage.setItem("horas", JSON.stringify(hr));
            localStorage.setItem("minutos", JSON.stringify(minute));

            function checkLocalStorage() {
                localMinute = localStorage.getItem("minutos");
                minutos.innerHTML = localMinute;
    
            }
            }

        else {
            dia.innerHTML = " ";
            mes.innerHTML =" ";
            horas.innerHTML =" ";
            minutos.innerHTML =" ";
        }


        checkLocalStorage();
    })
}
})
