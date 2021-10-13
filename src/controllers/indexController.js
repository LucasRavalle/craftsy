const productos = require('../data/productos.json')
const tutoriales = require('../data/tutoriales.json')

module.exports = {
    index: (req, res) => {
        res.render('index', {
          productos,
          tutoriales: tutoriales
        });
      }
}