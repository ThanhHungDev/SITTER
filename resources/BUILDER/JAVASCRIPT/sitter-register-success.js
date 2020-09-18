$(document).ready(function () {
    var fileNameStorage = ['input_file_front', 'input_file_back', 'input_file_back'];

    fileNameStorage.forEach(function(name){
        localStorage.removeItem(name);
    });
});
