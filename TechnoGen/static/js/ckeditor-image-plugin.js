class ImageUrlPlugin {
  static get pluginName() {
    return "ImageUrl";
  }

  static get requires() {
    return ["Image", "ImageStyle"];
  }

  init() {
    const editor = this.editor;

    // Register the imageUrl button
    editor.ui.componentFactory.add("imageUrl", () => {
      const button = new editor.ui.ButtonView();

      button.set({
        label: "Insert Image URL",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M6.91 10.54c.26-.23.64-.21.88.03l3.36 3.14 2.23-2.06a.64.64 0 0 1 .87 0l2.52 2.97V4.5H3.2v10.12l3.71-4.08zm10.27-7.51c.6 0 1.09.47 1.09 1.05v11.84c0 .59-.49 1.06-1.09 1.06H2.79c-.6 0-1.09-.47-1.09-1.06V4.08c0-.58.49-1.05 1.1-1.05h14.38zm-5.22 5.56a1.96 1.96 0 1 1 3.4-1.96 1.96 1.96 0 0 1-3.4 1.96z"/></svg>',
        tooltip: true,
      });

      // Execute command when the button is clicked
      button.on("execute", () => {
        const url = prompt("Enter image URL:");

        if (url) {
          const img = new Image();

          img.onload = () => {
            editor.model.change((writer) => {
              const imageElement = writer.createElement("imageBlock", {
                src: url,
              });
              editor.model.insertContent(imageElement);
            });
          };

          img.onerror = () => {
            alert("Failed to load image. Please check the URL.");
          };

          img.src = url;
        }
      });

      return button;
    });
  }
}

// Register the plugin
if (typeof ClassicEditor !== "undefined") {
  ClassicEditor.builtinPlugins.push(ImageUrlPlugin);
}
