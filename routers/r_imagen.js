const router = require('express').Router();
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'public/images' });
const sequelize = require('sequelize');

const { table1 } = require('../db');

router.get('/all', async (req, res) => {
    const resul = await table1.findAll();
    res.json(resul);
})

router.get('/InfoImages', async (req, res) => {
    const mayor = await table1.max('size');
    const menor = await table1.min('size');
    const tipos = await table1.findAll({
        attributes: ['type',
        [sequelize.fn('COUNT', sequelize.col('type')), 'Total']],
        group: 'type'

    });

    res.json({'Imagen mayor tamaño: ':  mayor,
            'Imagen menor tamaño: ': menor,
            'Tipos imagen: ': tipos
    });
})

router.post('/ExtractMetadata,', upload.single('imagen'), (req, res) => {
    fs.renameSync(req.file.path, req.file.path + '.' + req.file.mimetype.split('/')[1]);

    const resul = table1.create({
            filename: req.file.filename,         
            type: req.file.mimetype.split('/')[1],
            size: req.file.size
    });
    res.json(req.file);
});

router.get('/GetMetadata/:filename', async (req, res) => {
    const resul= await table1.findOne({where: { filename: req.params.filename }});
    res.json(resul);
});

module.exports = router;