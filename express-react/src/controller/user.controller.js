exports.list = (req, res) => {
    const result = {'name': 'aname', 'role': 'arole'};
    res.status(200).send(result);
};
