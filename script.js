// Funções JavaScript

function toggleElement(id) {
    const element = document.getElementById(id);
    element.classList.toggle('hidden');
}

function gerarRelatorio() {
    const relatorio = {
        site: document.getElementById('site').value.toUpperCase(),
        ami: document.getElementById('ami').value.toUpperCase(),
        tecnico: document.getElementById('tecnico').value.toUpperCase(),
        supervisor: document.getElementById('supervisor').value.toUpperCase(),
        coordenador: document.getElementById('coordenador').value.toUpperCase(),
        dataAcionamento: document.getElementById('dataAcionamento').value,
        dataDeslocamento: document.getElementById('dataDeslocamento').value,
        dataEntradaSite: document.getElementById('dataEntradaSite').value,
        dataSaidaSite: document.getElementById('dataSaidaSite').value,
        quemAcionou: document.getElementById('quemAcionou').value.toUpperCase(),
        cadeado: document.getElementById('cadeado').value.toUpperCase(),
        modeloCadeado: document.getElementById('modeloCadeado').value.toUpperCase(),
        vandalizado: document.getElementById('vandalizado').value.toUpperCase(),
        gabinete1: document.getElementById('gabinete1').value.toUpperCase(),
        retificadores1: document.getElementById('retificadores1').value,
        baterias1: document.getElementById('baterias1').value,
        siteBateria: document.getElementById('siteBateria').value.toUpperCase(),
        semAutonomia: document.getElementById('semAutonomia').checked ? 'SIM' : 'NÃO',
        infoBateria: document.getElementById('infoBateria').value.toUpperCase(),
        quantidadeBancos: document.getElementById('quantidadeBancos').value,
        capacidade: document.getElementById('capacidade').value.toUpperCase(),
        volts: document.getElementById('volts').value.toUpperCase(),
        elemento: document.getElementById('elemento').value.toUpperCase(),
        consumoFonte: document.getElementById('consumoFonte').value.toUpperCase(),
        siteGPON: document.getElementById('siteGPON').value.toUpperCase(),
        zeladoria: document.getElementById('zeladoria').value.toUpperCase(),
        estadoPortas: document.getElementById('estadoPortas').value.toUpperCase(),
        portaGabinete: document.getElementById('portaGabinete').value.toUpperCase(),
        posteInterno: document.getElementById('posteInterno').value.toUpperCase(),
        iluminacao: document.getElementById('iluminacao').value.toUpperCase(),
        falhaAtividade: document.getElementById('falhaAtividade').value.toUpperCase(),
        causaEncontrada: document.getElementById('causaEncontrada').value.toUpperCase(),
        acaoRealizada: document.getElementById('acaoRealizada').value.toUpperCase(),
        pendencias: document.getElementById('pendencias').value.toUpperCase(),
        amiPendencia: document.getElementById('amiPendencia').value.toUpperCase(),
        testadoCom: document.getElementById('testadoCom').value.toUpperCase(),
        obs: document.getElementById('obs').value.toUpperCase()
    };

    const resultado = `
*SITE:* ${relatorio.site}
*AMI:* ${relatorio.ami}
*NOME DO TÉCNICO:* ${relatorio.tecnico}
*NOME DO SUPERVISOR:* ${relatorio.supervisor}
*COORDENADOR:* ${relatorio.coordenador}
*DATA ACIONAMENTO:* ${relatorio.dataAcionamento}
*DATA HORA DESLOCAMENTO:* ${relatorio.dataDeslocamento}
*DATA HORA ENTRADA SITE:* ${relatorio.dataEntradaSite}
*DATA HORA SAÍDA SITE:* ${relatorio.dataSaidaSite}
*QUEM ACIONOU:* ${relatorio.quemAcionou}
*SITE POSSUI CADEADO:* ${relatorio.cadeado}
*MODELO DO CADEADO:* ${relatorio.modeloCadeado}
*SITE VANDALIZADO:* ${relatorio.vandalizado}
*INFORMAR GABINETE 1:* ${relatorio.gabinete1}
*QUANTIDADE DE RETIFICADORES POR GABINETE-FCC:* ${relatorio.retificadores1}
*QUANTIDADE DE BATERIAS POR GABINETE-FCC:* ${relatorio.baterias1}
*SITE COM BATERIA:* ${relatorio.siteBateria}
*SEM AUTONOMIA:* ${relatorio.semAutonomia}
*INFORMAÇÕES DA BATERIA:* ${relatorio.infoBateria}
*QUANTIDADE DE BANCOS:* ${relatorio.quantidadeBancos}
*CAPACIDADE:* ${relatorio.capacidade}
*VOLTS:* ${relatorio.volts}
*ELEMENTO:* ${relatorio.elemento}
*CONSUMO FONTE:* ${relatorio.consumoFonte}
*SITE POSSUI REDE GPON:* ${relatorio.siteGPON}
*NECESSÁRIO ZELADORIA:* ${relatorio.zeladoria}
*ESTADO DAS PORTAS DOS GABINETES:* ${relatorio.estadoPortas}
*INFORMAR A PORTA DE QUAL GABINETE:* ${relatorio.portaGabinete}
*EXISTÊNCIA POSTE INTERNO:* ${relatorio.posteInterno}
*EXISTÊNCIA ILUMINAÇÃO INTERNA-EXTERNA:* ${relatorio.iluminacao}
*FALHA DA ATIVIDADE:* ${relatorio.falhaAtividade}
*CAUSA ENCONTRADA:* ${relatorio.causaEncontrada}
*AÇÃO REALIZADA:* ${relatorio.acaoRealizada}
*PENDÊNCIAS:* ${relatorio.pendencias}
*AMI DA PENDENCIA:* ${relatorio.amiPendencia}
*TESTADO COM:* ${relatorio.testadoCom}
*OBS:* ${relatorio.obs}`;

    document.getElementById('resultado').textContent = resultado;
}

function copiarRelatorio() {
    const resultado = document.getElementById('resultado').textContent;
    navigator.clipboard.writeText(resultado).then(() => {
        alert('Relatório copiado para a área de transferência.');
    });
}

function enviarRelatorio() {
    const resultado = document.getElementById('resultado').textContent;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(resultado)}`;
    window.open(whatsappUrl, '_blank');
}

document.getElementById('cadeado').addEventListener('change', function() {
    if (this.value === 'SIM') {
        document.getElementById('modeloCadeado').parentElement.classList.remove('hidden');
    } else {
        document.getElementById('modeloCadeado').parentElement.classList.add('hidden');
    }
});

document.getElementById('vandalizado').addEventListener('change', function() {
    if (this.value === 'SIM') {
        document.getElementById('vandalizadoDetails').classList.remove('hidden');
    } else {
        document.getElementById('vandalizadoDetails').classList.add('hidden');
    }
});
