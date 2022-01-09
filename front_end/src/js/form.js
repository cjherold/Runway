

const formdata = {
    name: 'Chris'
};

$('#sample-form')
    .on('submit', function () {
        const formdata = $(this).serializeArray().reduce((obj, member) => {
            obj[member.name] = member.value;
            return obj;
        }, {});

        $.ajax({
            method: 'POST',
            url: './form',
            data: {
                formdata,
            },
            success: function (response) {
                console.log('Response message: ', response.message);
                console.log('Data received: ', response.data);
                alert('Success!');
            },
            error: function () {
                console.error('Error: failed to submit form');
                alert('Error');
            }
        });
        return false;
    });
