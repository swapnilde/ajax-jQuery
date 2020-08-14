var button = $("#button");
var dataDiv = $("#data")
button.click(function getData() {

    $.ajax({
        type: 'GET',
        url: 'https://jsonplaceholder.typicode.com/posts',
        async: true,
        dataType: 'json',
        success: function (result, status, xhr) {

            var output = "";

            for (var i in result) {
                output +=
                    '<p>'+'ID: '+result[i].id+'</p>'+
                    '<p>'+'Title: '+result[i].title+'</p>'+
                    '<p>'+'Content: '+result[i].body+'</p>'
            }

            dataDiv.html(output);

        }

    });

})


