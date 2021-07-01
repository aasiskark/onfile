var radioModel = require('../models/radioModul.js');


/**
 * articleController.js
 *
 * @description :: Server-side logic for managing articles.
 */
module.exports = {

    /**
     * articleController.list()
     */
    list: function (req, res) {
        radioModel.find(function (err, onradio) {
            if (err) {
                return res.status(500).json({
                    message: 'Error found list.',
                    error: err
                });
            }

            return res.json(onradio);
        });
    },

    /**
     * articleController.show()
     */
    show: function (req, res) {
        var id = req.params.id;

        radioModel.findOne({ _id: id }, function (err, onradio) {
            if (err) {
                return res.status(500).json({
                    message: 'Not Found data.',
                    error: err
                });
            }

            if (!onradio) {
                return res.status(404).json({
                    message: 'No such article'
                });
            }

            return res.json(onradio);
        });
    },

    /**
  //   * articleController.create()
  //   */
  //  create: function (req, res) {
  //      var onradio = new radioapiModuls({
  //                  radioname: req.body.radioname,
  //                  radiowebsite: req.body.radiowebsite,
  //                  radiostream: req.body.radiostream,
  //                  radioemail: req.body.radioemail,
  //                  radiolocation: req.body.radiolocation,
  //                  radiophone: req.body.radiophone
  //                  });        
//
  //                  onradio.save(function (err, onradio) {
  //                  if (err) {
  //                  return res.status(500).json({
  //                  message: 'Error when creating article',
  //                  error: err
  //                  });
  //                  }
  //                  
  //              return res.status(201).json({onradio: onradio });
  //      });
  //  },
//
  //  /**
  //   * articleController.update()
  //   */
  //  update: function (req, res) {
  //      var id = req.params.id;
//
  //      radioapiModuls.findOne({ _id: id }, function (err, onradio) {
  //          if (err) {
  //              return res.status(500).json({
  //                  message: 'Error when getting article',
  //                  error: err
  //              });
  //          }
//
  //          if (!onradio) {
  //              return res.status(404).json({
  //                  message: 'No such article'
  //              });
  //          }
//
  //              onradio.radioname= req.body.radioname ? req.body.radioname : onradio.radioname;
  //              onradio.radiowebsite= req.body.radiowebsite ? req.body.radiowebsite : onradio.radiowebsite;
  //              onradio.radiostream= req.body.radiostream ? req.body.radiostream : onradio.radiostream;
  //              onradio.radioemail= req.body.radioemail ? req.body.radioemail :  onradio.radioemail ;
  //              onradio.radiolocation= req.body.radiolocation ? req.body.radiolocation : onradio.radiolocation;
  //              onradio.radiophone= req.body.radiophone ? req.body.radiophone : onradio.radiophone ;
//
  //          onradio.save(function (err, onradio) {
  //              if (err) {
  //                  return res.status(500).json({
  //                      message: 'Error when updating article.',
  //                      error: err
  //                  });
  //              }
//
  //              return res.json(radio);
  //          });
  //      });
  //  },
//
  //  /**
  //   * articleController.remove()
  //   */
  //  remove: function (req, res) {
  //      var id = req.params.id;
//
  //      radioapiModuls.findByIdAndRemove(id, function (err, onradio) {
  //          if (err) {
  //              return res.status(500).json({
  //                  message: 'Error when deleting the article.',
  //                  error: err
  //              });
  //          }
//
  //          return res.status(204).json();
  //      });
  //  },
//
//
    
};