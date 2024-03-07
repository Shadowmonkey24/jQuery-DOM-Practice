$(document).ready(function() {
    $('#movie-form').submit(function(event) {
        event.preventDefault();
        
        var title = $('#title').val();
        var rating = $('#rating').val();
        
        if (title.length < 2) {
            alert("Title must be at least 2 characters long.");
            return;
        }
        
        if (rating < 0 || rating > 10) {
            alert("Rating must be between 0 and 10.");
            return;
        }
        
        var listItem = $('<li>').text(title + ' - Rating: ' + rating);
        var removeButton = $('<button>').text('Remove');
        
        removeButton.click(function() {
            listItem.remove();
        });
        
        listItem.append(removeButton);
        $('#movie-list').append(listItem);
        
        // Clear form inputs
        $('#title').val('');
        $('#rating').val('');
    });
    
    $('#sort-title').click(function() {
        var list = $('#movie-list');
        var items = list.children('li').get();
        items.sort(function(a, b) {
            var titleA = $(a).text().toUpperCase();
            var titleB = $(b).text().toUpperCase();
            return (titleA < titleB) ? -1 : (titleA > titleB) ? 1 : 0;
        });
        $.each(items, function(index, item) {
            list.append(item);
        });
    });
    
    $('#sort-rating').click(function() {
        var list = $('#movie-list');
        var items = list.children('li').get();
        items.sort(function(a, b) {
            var ratingA = parseInt($(a).text().match(/\d+/)[0]);
            var ratingB = parseInt($(b).text().match(/\d+/)[0]);
            return ratingA - ratingB;
        });
        $.each(items, function(index, item) {
            list.append(item);
        });
    });
});