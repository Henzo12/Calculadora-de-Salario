const INSS_FAIXA1 = 1320;
const INSS_FAIXA2 = 2571.29;
const INSS_FAIXA3 = 3856.94;
const INSS_FAIXA4 = 7507.49;

const IRRF_FAIXA1 = 2112;
const IRRF_FAIXA2 = 2826.65;
const IRRF_FAIXA3 = 3751.05;
const IRRF_FAIXA4 = 4664.68;

const VALOR_DEPENDENTE = 189.59;

function calcularInss(sb) {
    if (sb <= INSS_FAIXA1) {
        return INSS_FAIXA1 * 0.075;
    } else if (sb <= INSS_FAIXA2) {
        return (sb - INSS_FAIXA1 + 0.01) * 0.09 + calcularInss(INSS_FAIXA1);
    } else if (sb <= INSS_FAIXA3) {
        return (sb - INSS_FAIXA2 + 0.01) * 0.12 + calcularInss(INSS_FAIXA2);
    } else if (sb <= INSS_FAIXA4) {
        return (sb - INSS_FAIXA3 + 0.01) * 0.14 + calcularInss(INSS_FAIXA3);
    }
    return (INSS_FAIXA4 - INSS_FAIXA3 + 0.01) * 0.14 + calcularInss(INSS_FAIXA3);
}

function calcularIrrf(sd) {
    if (sd <= IRRF_FAIXA1) {
        return 0;
    } else if (sd <= IRRF_FAIXA2) {
        return (sd - IRRF_FAIXA1 + 0.01) * 0.075;
    } else if (sd <= IRRF_FAIXA3) {
        return (sd - IRRF_FAIXA2 + 0.01) * 0.15 + calcularIrrf(IRRF_FAIXA2);
    } else if (sd <= IRRF_FAIXA4) {
        return (sd - IRRF_FAIXA3 + 0.01) * 0.225 + calcularIrrf(IRRF_FAIXA3);
    }
    return (sd - IRRF_FAIXA4) * 0.275 + calcularIrrf(IRRF_FAIXA4);
   }
    
    
    function calcularFerias() {
    const salario = parseFloat(document.getElementById("salario").value); //function calcularFerias(salario) {
    
    
    const tercoSalarioBruto = salario / 3;
    const inss = calcularInss(salario);
    const irrf = calcularIrrf(salario);
    const calcularFerias = (salario + tercoSalarioBruto) - inss + irrf;
  
    const resultadoDiv = document.getElementById("resultado1");
    resultadoDiv.innerHTML = `Salário Férias: R$ ${calcularFerias.toFixed(2)}`;
  
    //return valorFerias;
  }