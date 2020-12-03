const fs = require('fs');
const heroes = JSON.parse(fs.readFileSync('./data/heroes.json', 'utf-8'));

module.exports = {

    getAll: (req, res) => {
        res.send(heroes);
    },
    getDetallesId: (req, res) => {
        let id = req.params.id
        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });
        let heroeSelecionado = heroe[0]

        if (heroeSelecionado == undefined) {
            return res.send('este heroe no fue encontrado, pruebe con otro numero id')
        } else {
            return res.send(`hola mi nombre es ${heroeSelecionado.nombre}\n y soy ${heroeSelecionado.profesion}`)
        }
    },
    getBioId: (req, res) => {
        let id = req.params.id
        let ok = req.params.ok
        let heroe = heroes.filter((heroe) => {
            return heroe.id == id
        });
        let heroeSelecionado = heroe[0]
        if (heroeSelecionado == undefined) {
            return res.send('este heroe no fue encontrado, pruebe con otro numero id')
        }
        if (ok == 'ok') {
            return res.send(`${heroeSelecionado.nombre}: ${heroeSelecionado.resenia}`)
        } else {
            return res.send(`${heroeSelecionado.nombre} lamento q no hayas querido saber mas de mi`)
        }

    }
}