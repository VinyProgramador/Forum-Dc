var dashModel = require("../models/dashModel2");

function buscarHeroisDiferentes(req, res) {

    const limite_linhas = 7;


    console.log(`Recuperando as ultimas ${limite_linhas} medidas`);

    dashModel.buscarHeroisDiferentes().then(function(resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function(erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarHeroisDiferentes
}