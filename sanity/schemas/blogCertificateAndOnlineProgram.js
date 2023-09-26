const blogCertificateAndOnlineProgram = {
    name: 'blogCertificateAndOnlineProgram',
    title: 'blogCertificateAndOnlineProgram',
    type: 'document',
    fields: [
        {
            name: 'heading',
            title: 'Heading',
            type: 'string'
        },
        {
            name: 'date',
            title: 'Date',
            type: 'string'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            option: {
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
export default blogCertificateAndOnlineProgram