const virtualTour = {
    name: 'virtualTour',
    title: 'virtualTour',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
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
    ],
}
export default virtualTour