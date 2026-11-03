const getTareas = (req, res) => {
    // req es request y res es response
    res.status(200).json({mesg: 'getTareas'})
}

const createTareas = (req, res) => {
    // req es request y res es response
    res.status(200).json({mesg: 'createTareas'})
}

const updateTarea = (req, res) => {
    // req es request y res es response para update
    res.status(200).json({mesg: `updateTarea ${req.params.id}`})
}

const deleteTarea = (req, res) => {
    // req es request y res es response
    res.status(200).json({mesg: `deleteTarea ${req.params.id}`})
}

module.exports = {
    getTareas,
    createTareas,
    updateTarea,
    deleteTarea
}
