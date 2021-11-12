const musicas = require('../models/musicaModel.json')
let id = 2


const getAll = (req, res) => { // R
    res.status(200).json(musicas)
}

const createMusic = (req, res) => { // C
    const artista = req.body.artista
    const album = req.body.album
    const ano = req.body.ano
    const titulo = req.body.titulo
   
    if (!artista || !album || !ano || !titulo) {
        return res.status(400).json({
            message: "A requisção possui algum campo invalido."
        })
    }

    id++

    const musica = {
        artista,
        album,
        ano,
        titulo,
        id
    }

    musicas.push(musica)

    return res.status(201).json(musica)
}

const updateMusic = (req,res) => { // U
   // encontror que vai ser modificado // ok
   // validar os dados da modificação // ok
   // alterar alterar esses dados 
  const id = req.params.id
   const musicaEncontrada = musicas
        .find(musica => musica.id== id)

    if (!musicaEncontrada) {
        return res.status(400).json({
            message: "A requisção possui algum campo invalido."
        })
    }

    musicaEncontrada.artista = req.body.artista || musicaEncontrada.artista
    musicaEncontrada.ano = req.body.ano || musicaEncontrada.ano
    musicaEncontrada.album = req.body.album || musicaEncontrada.album
    musicaEncontrada.titulo = req.body.titulo || musicaEncontrada.titulo

    res.status(200).json({
        message: "alterado com sucesso",
        musica: musicaEncontrada
    })

}


const deleteMusic = (req, res) => {
    // encontrar
 // encontrar novamente e deletar

 const id = req.params.id
 const musicaIdEncontrado = musicas
      .findIndex(musica => musica.id== id) // indexOf

  if (!musicaIdEncontrado) {
      return res.status(400).json({
          message: "A requisção possui algum campo invalido."
      })
  }


  musicas.splice(musicaIdEncontrado, 1)
  res.status(200).json(musicas)

}



module.exports = {
    getAll,
    createMusic,
    updateMusic,
    deleteMusic
}