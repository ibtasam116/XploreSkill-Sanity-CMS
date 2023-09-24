const services = {
    name: 'services',
    title: 'services',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'title',
            description: 'description',
            // media: 'image',
        },
    },
}

export default services