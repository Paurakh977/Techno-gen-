ClassicEditor.builtinPlugins.push(class ImageUrlPlugin {
    static get pluginName() {
        return 'ImageUrl';
    }

    init() {
        const editor = this.editor;

        editor.ui.componentFactory.add('imageUrl', locale => {
            const button = new ButtonView(locale);

            button.set({
                label: 'Insert Image URL',
                icon: ImageIcon,
                tooltip: true
            });

            button.on('execute', () => {
                const url = prompt('Enter image URL:');
                if (url) {
                    // Create preview
                    const img = new Image();
                    img.onload = () => {
                        editor.model.change(writer => {
                            const imageElement = writer.createElement('image', {
                                src: url
                            });
                            editor.model.insertContent(imageElement);
                        });
                    };
                    img.onerror = () => {
                        alert('Invalid image URL');
                    };
                    img.src = url;
                }
            });

            return button;
        });
    }
});