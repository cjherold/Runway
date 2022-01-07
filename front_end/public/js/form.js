const formdata = {
    name: 'Chris'
};
$('#sample-form')
    .on('submit', function (e) {
    e.preventDefault();
    $.ajax({
        method: 'POST',
        url: './form',
        data: {
            formdata,
        },
        success: function (response) {
            console.log('response', response);
        },
        error: function (err) {
            console.error('Error: ', err);
        }
    });
    return false;
});
