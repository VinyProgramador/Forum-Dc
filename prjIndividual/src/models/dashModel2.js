var database = require("../database/config");

function buscarHeroisDiferentes() {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `SELECT COUNT(heroiFav) AS 'max_heroi', heroiFav AS 'HeroiMaisEscolhido' FROM usuario  group by heroiFav;`;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `SELECT COUNT(heroiFav) AS 'max_heroi', heroiFav AS 'HeroiMaisEscolhido' FROM usuario  group by heroiFav;`;
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