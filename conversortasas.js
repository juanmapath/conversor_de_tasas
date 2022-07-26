
function calcularTasa(tasa,tipoTasa1,tipoTasa2){
    tasa=parseFloat(tasa)
    if (tipoTasa1 === "Nominal Mensual"){
        if (tipoTasa2==="Nominal Mensual"){
            return tasa; 
        } else if (tipoTasa2==="Nominal Anual"){
            return tasa*12;
        } else if (tipoTasa2==="Efectiva Mensual"){
            return  (((((tasa/100)+1)**12)-1)*100/12); 
        } else if (tipoTasa2==="Efectiva Anual"){
            return ((((tasa/100)+1)**12)-1)*100;
        }
    
    } else if (tipoTasa1==="Nominal Anual"){
        if  (tipoTasa2==="Nominal Mensual"){
            return tasa/12;
        } else if (tipoTasa2==="Nominal Anual") {
            return tasa;
        } else if (tipoTasa2==="Efectiva Mensual"){
            return (((((tasa/(100*12))+1)**12)-1)*100/12);
        } else if (tipoTasa2==="Efectiva Anual"){
            return ((((tasa/(100*12))+1)**12)-1)*100;
        }

    } else if (tipoTasa1==="Efectiva Mensual"){
        if  (tipoTasa2==="Nominal Mensual"){
            return (((tasa/100+1)**(1/12)-1)*100);
        } else if (tipoTasa2==="Nominal Anual") {
            return (((tasa/100+1)**(1/12)-1)*100)*12;
        } else if (tipoTasa2==="Efectiva Mensual"){
            return tasa;
        } else if (tipoTasa2==="Efectiva Anual"){
            return tasa*12;
        }

    } else if (tipoTasa1=="Efectiva Anual"){
        if  (tipoTasa2==="Nominal Mensual"){
            return (((tasa/100+1)**(1/12)-1)*100/12);
        } else if (tipoTasa2==="Nominal Anual") {
            return (((tasa/100+1)**(1/12)-1)*100/12)*12;
        } else if (tipoTasa2==="Efectiva Mensual"){
            return tasa/12;
        } else if (tipoTasa2==="Efectiva Anual"){
            return tasa;
        }
    }
}

function updateInicialOutput(){
    
    tasainicial=tasa.value
    tasafinal=(calcularTasa(tasa.value,tipoTasaInicial.value,tipoTasaFinal.value)).toFixed(2);
    
    res1.textContent = `Tasa de ${tasainicial}% ${tipoTasaInicial.value} equivale:`;
    res2.textContent = `${tasafinal}% ${tipoTasaFinal.value}`;
    
}

var tasa = document.getElementById("input-tasa")
var tipoTasaInicial = document.getElementById("input-tipotasa");
var tipoTasaFinal = document.getElementById("input-tipotasa_conv");
var res1 = document.querySelector("#res1");
var res2 = document.querySelector("#res2");

updateInicialOutput()


tasa.addEventListener('change', function(){
    let tasafinal=calcularTasa(this.value,tipoTasaInicial.value,tipoTasaFinal.value).toFixed(2)
    res1.textContent=`Tasa de ${this.value}% ${tipoTasaInicial.value} equivale a:`
    res2.textContent=`${tasafinal}% ${tipoTasaFinal.value}`
});

tipoTasaInicial.addEventListener('change', function(){
    let tasafinal=calcularTasa(tasa.value,this.value,tipoTasaFinal.value).toFixed(2)
    res1.textContent=`Tasa de ${tasa.value}% ${this.value} equivale a:`
    res2.textContent=`${tasafinal}% ${tipoTasaFinal.value}`
});

tipoTasaFinal.addEventListener('change', function(){
    let tasafinal=calcularTasa(tasa.value,tipoTasaInicial.value,this.value).toFixed(2)
    res1.textContent=`Tasa de ${tasa.value}% ${tipoTasaInicial.value} equivale a:`
    res2.textContent=`${tasafinal}% ${this.value}`
});

