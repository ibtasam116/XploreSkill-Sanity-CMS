const bestCourses = {
    name: 'bestCourses',
    title: 'bestCourses',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            Option: {
                hotspot: true,
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                },
            ],
        },
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
    ],
}
export default bestCourses