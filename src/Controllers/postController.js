exports.create = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Portfolio Created' });
};

exports.read = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Reading Portfolio' });
};

exports.delete = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Portfolio Deleted' });
};

exports.update = async (req, res) => {
    res.status(200).json({ status: 'success', data: 'Portfolio Updated' });
};