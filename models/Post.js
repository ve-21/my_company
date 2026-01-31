import mongoose from 'mongoose';

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this post.'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Please provide a slug for this post.'],
        unique: true,
    },
    coverImage: {
        type: String,
        required: false,
    },
    excerpt: {
        type: String,
        required: [true, 'Please provide an excerpt for this post.'],
        maxlength: [200, 'Excerpt cannot be more than 200 characters'],
    },
    content: {
        type: String,
        required: [true, 'Please provide content for this post.'],
    },
    category: {
        type: String,
        required: [true, 'Please provide a category for this post.'],
    },
    author: {
        type: String,
        default: 'Admin',
    },
    date: {
        type: Date,
        default: Date.now,
    },
});

export default mongoose.models.Post || mongoose.model('Post', PostSchema);
