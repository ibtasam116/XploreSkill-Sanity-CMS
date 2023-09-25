const aboutUsContent = {
    name: 'aboutUsContent',
    title: 'aboutUsContent',
    type: 'document',
    fields: [
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
        {
            name: 'btnText',
            title: 'Btn Text',
            type: 'string'
        },
        {
            name: 'btnHref',
            title: 'Btn Href',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            Option: {
                hotspot: true
            },
            fields: [
                {
                    name: 'alt',
                    title: 'Alt Text',
                    type: 'string'
                },
            ],
        },
    ],
}
export default aboutUsContent