document.addEventListener('DOMContentLoaded', () => {
    const editors = document.querySelectorAll('.django-ckeditor-5');
    
    editors.forEach(editor => {
        ClassicEditor
            .create(editor, {
                extraPlugins: [ImageUrlPlugin],
                toolbar: {
                    items: [
                        'heading', '|',
                        'bold', 'italic', 'link',
                        'bulletedList', 'numberedList',
                        'blockQuote', '|',
                        'imageUrl',
                        'imageStyle:alignLeft',
                        'imageStyle:alignCenter',
                        'imageStyle:alignRight'
                    ]
                },
                image: {
                    toolbar: [
                        'imageStyle:alignLeft',
                        'imageStyle:alignCenter',
                        'imageStyle:alignRight'
                    ],
                    styles: [
                        'alignLeft',
                        'alignCenter',
                        'alignRight'
                    ]
                }
            })
            .catch(error => {
                console.error(error);
            });
    });
}); 