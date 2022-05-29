var database = require("../database/config");

function buscarHeroisDiferentes() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT heroiFav AS 'Heroi mais escolhido' FROM usuario  group by heroiFav;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT heroiFav AS 'Heroi mais escolhido' FROM usuario  group by heroiFav;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarHeroisDiferentes
}