const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUsers = async (req, res) => {
    try {
        const users = await User.find({}, '-password').sort({ createdAt: -1 });
        res.json({users});
    } catch (error) {
        res.status(500).json({message: error.message}); 
    }
};

const createUser = async (req, res) => {
    try {
        if(!req.body.password) {
            return res.status(400).json({message: 'Password is required'});
        }

        const type = req.body.type || req.body.role || 'Viewer';
        const isActive = req.body.isActive ?? req.body.status !== 'Inactive';
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = await User.create({
            ...req.body,
            type,
            isActive,
            password: hashedPassword,
        });
        const safeUser = user.toObject();
        delete safeUser.password;

        res.status(201).json(safeUser);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const updateUser = async (req, res) => {
    try{

    const updates = { ...req.body };
    if (updates.role && !updates.type) updates.type = updates.role;
    if (updates.status) updates.isActive = updates.status !== 'Inactive';

    if(updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
    } else {
        delete updates.password;
    }
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true}).select('-password');
    res.json(user);
} catch (error) {
    res.status(400).json({message: error.message});
}
};

const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.json({message: 'User deleted successfully'});
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.isActive) {
            return res.status(403).json({ message: 'Your account is inactive. Please contact support.' });
        }

        if (user.type === 'Viewer') {
            return res.status(403).json({ message: 'Viewers are not allowed to log in.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign(
            { id: user._id, email: user.email, type: user.type },
            process.env.JWT_SECRET || 'garcia-dev-secret',
            { expiresIn: '1h' }
        );

        res.json({ message: 'Login successful', token, type: user.type, firstName: user.firstName });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {getUsers, createUser, updateUser, deleteUser, loginUser};
