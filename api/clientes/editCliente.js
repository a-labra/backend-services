function editCliente(req, res) {
    const id = req.params.id;
    res.send('Estoy respondiendo a un put'+id);
  }
  
  module.exports = editCliente;