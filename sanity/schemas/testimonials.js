const testimonials = {
    name: 'testimonials',
    title: 'testimonials',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            option: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                }
            ]
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string',
        },
    ],
}
export default testimonials
