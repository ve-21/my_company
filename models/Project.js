import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this project.'],
        maxlength: [60, 'Title cannot be more than 60 characters'],
    },
    slug: {
        type: String,
        required: [true, 'Please provide a slug for this project.'],
        unique: true,
    },
    image: {
        type: String,
        required: [true, 'Please provide an image URL for this project.'],
    },
    category: {
        type: String,
        required: [true, 'Please provide a category for this project.'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a short description.'],
    },
    content: {
        type: String,
        required: false,
    },
    client: {
        type: String,
        required: false,
    },
    completionDate: {
        type: String,
        required: false,
    },
    challenge: {
        type: String,
        required: false,
    },
    solution: {
        type: String,
        required: false,
    },
    result: {
        type: String,
        required: false,
    },
    link: {
        type: String,
        required: false,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    }
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema);
