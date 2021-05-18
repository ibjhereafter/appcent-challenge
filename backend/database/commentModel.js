const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: [true, 'Please, provide the user who wants to comment on this movie.'],
        ref: 'user'
    },
    name: {
        type: String,
        required: [true, 'Please, provide the name of the member who wants to comment on this movie.']
    },
    comment: {
        type: String,
        required: [true, 'Please, provide a comment for this movie']
    },

    movieId: {
        type: String,
        required: [true, 'Please, provide the id of the movie on which you want to comment']
    }
}, {
    timestamps: true
});

const Comment = mongoose.model('comment', commentSchema);

module.exports = Comment;