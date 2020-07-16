//upload image
$('.em-avatar img').click(function () {
    $('input[name="avatar"]').trigger('click');
})

//delete image
$('.delete_avatar').click(function () {
    let status = $(this).attr('data-status');
    if(status == 'active'){
        let img_df = $('input[name="link_image_df"]').val();
        let action = $('.form-delete-avatar').attr('action');
        let alt    = $('img[type="avatar"]').attr('alt');
        let typeUploadFild = $('input[name="type_upload_file"]').val();
        $('img[type="avatar"]').attr('src', img_df);
        if(alt != ''){
            deleteImageByType(typeUploadFild, alt, action);
        }else{
            alert('waiting..');
        }
        
    }
})

function deleteImageByType(type, img_name, action) {
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        type    : 'post',
        dataType: 'json',
        data    : {
            type: type,
            fileName: img_name
        },
        success: function( data ){
            $('.delete_avatar').attr('data-status', '');
            $('img[type="avatar"]').attr('alt', '');
        }
    });
}

function uploadAvatar(input) {
    let dataFile = input.files[0];
    var reader   = new FileReader();
    reader.readAsDataURL(dataFile); 
    reader.onload = function(e) {
        var base64 = e.target.result;
        $('img[type="avatar"]').attr('src', base64);
    }
    let form = new FormData();
    form.append('file', dataFile);
    let action    = $('.form-upload-avatar').attr('action');
    let linkImage = $('input[name="link_image"]').val();

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    $.ajax({
        url     : action,
        type    : 'post',
        enctype : 'multipart/form-data',
        data    : form,
        cache: false,
        contentType: false,
        processData: false,
        success: function( data ){
            data = JSON.parse(data);
            let urlAvatar = linkImage + data.path;
            $('img[type="avatar"]').attr('src', urlAvatar);
            $('img[type="avatar"]').attr('alt', data.name);
            $('.delete_avatar').attr('data-status', 'active');
        }
    });
}