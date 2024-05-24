function dataAtual() {
    const options = {
        timeZone: 'America/Sao_Paulo',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    };

    const formatter = new Intl.DateTimeFormat('pt-BR', options);
    const formattedDate = formatter.format(new Date());

    return formattedDate;
}

module.exports = dataAtual;

