// @desc   Get all bootcamps
// @route  GET /api/v1/bootcamps
// @access Public

exports.getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Show all boot camps', hello: req.hello });
}

// @desc   Get single bootcamp  
// @route  GET /api/v1/bootcamp
// @access Public

exports.getBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Show bootcamp ${req.params.id}` });
}

// @desc   Create single bootcamp
// @route  POST /api/v1/bootcamp
// @access Privates

exports.createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create a boot camps' });
}

// @desc   Update single bootcamp
// @route  POST /api/v1/bootcamp
// @access Private

exports.updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update a bootcamp ${req.params.id}` });
}

// @desc   Delete single bootcamp
// @route  DELETE /api/v1/bootcamp
// @access Public

exports.deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete a bootcamp ${req.params.id}` });
}

