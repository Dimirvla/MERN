const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			useFindAndModify: false
		});

		console.log('Database Connected');
	} catch (error) {
		console.log('error:', error.message);
		procces.exit(1);
	}
};

module.exports = connectDB;
