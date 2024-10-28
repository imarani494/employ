const User = require('../models/User');


exports.getAllUsers = async (req, res) => {
    const { page = 1, limit = 10, search = '', sortBy = 'createdAt', order = 'asc' } = req.query;

    try {
        const query = search ? { username: new RegExp(search, 'i') } : {};
        const users = await User.find(query)
            .sort({ [sortBy]: order === 'asc' ? 1 : -1 })
            .skip((page - 1) * limit)
            .limit(Number(limit));
        
        const totalUsers = await User.countDocuments(query);
        res.json({ users, totalUsers });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


