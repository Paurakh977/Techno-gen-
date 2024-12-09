// (function($) {
//     $(document).ready(function() {
//         $('#add-tag').click(function(e) {
//             e.preventDefault();
//             var tagName = prompt('Enter new tag name:');
//             if (tagName) {
//                 $.ajax({
//                     url: 'add-tag/',
//                     type: 'POST',
//                     data: {
//                         name: tagName,
//                         csrfmiddlewaretoken: $('[name="csrfmiddlewaretoken"]').val()
//                     },
//                     success: function(response) {
//                         // Add to the left box (available tags)
//                         var fromBox = document.getElementById('id_tags_from');
//                         var option = new Option(response.name, response.id);
//                         fromBox.options[fromBox.options.length] = option;
                        
//                         // Refresh SelectBox
//                         SelectBox.init('id_tags_from');
                        
//                         // Select the new option
//                         var index = fromBox.options.length - 1;
//                         fromBox.options[index].selected = true;
                        
//                         // Move to right box (chosen tags)
//                         SelectBox.move('id_tags_from', 'id_tags_to');
                        
//                         // Refresh both boxes
//                         SelectBox.init('id_tags_from');
//                         SelectBox.init('id_tags_to');
//                     },
//                     error: function(xhr, status, error) {
//                         alert('Error adding tag: ' + error);
//                     }
//                 });
//             }
//         });
//     });
// })(django.jQuery); 