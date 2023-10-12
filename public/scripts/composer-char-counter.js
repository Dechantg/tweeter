$(document).ready(function() {
  $('#tweet-text').on('input', function() {
    
    // Count the number of characters in the textarea
    var characterCount = $(this).val().length;

    // Find the counter relative to the textarea
    var $counter = $(this).closest('form').find('.counter');

    // Calculate the remaining character count
    var remaining = 140 - characterCount;

    // Update the counter
    $counter.text(remaining);

    // Check if remaining characters are negative and apply the 'negative' class
    if (remaining < 0) {
      $counter.addClass('negative');
      // Show an alert
      // alert('Character limit exceeded!');
    } else {
      $counter.removeClass('negative'); // Remove the 'negative' class
    }
  });
});


