function InsertImagePlugin(editor) {
    editor.ui.componentFactory.add('insertImage', locale => {
        const button = new editor.ui.ButtonView(locale);

        button.set({
            label: 'Insert Image URL',
            icon: editor.ui.icons.image,
            tooltip: true
        });

        button.on('execute', () => {
            const url = prompt('Enter image URL:');
            if (url) {
                // Create image element with default center alignment
                editor.model.change(writer => {
                    const imageElement = writer.createElement('image', {
                        src: url,
                        class: 'image-style-align-center'
                    });
                    editor.model.insertContent(imageElement);
                });
            }
        });

        return button;
    });
}

ClassicEditor.builtinPlugins.push(InsertImagePlugin); 