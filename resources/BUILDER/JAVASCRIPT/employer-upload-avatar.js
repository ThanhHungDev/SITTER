//upload image
$('.em-avatar img').click(function () {
    $('input[name="avatar"]').trigger('click');
})

//delete image
$('.delete_avatar').click(function () {
    let status = $(this).attr('data-status');
    if(status == 'active'){
        let img_df = $('input[name="link_image_df"]').val();
        let action = $('.form-delete-img').attr('action');
        let alt    = $('img[type="avatar"]').attr('alt');
        let typeUploadField = $('input[name="type_upload_avatar"]').val();
        let memo = $('input[name="gender_hidden"]').val();
        $('img[type="avatar"]').attr('src', img_df);
        if(alt != ''){
            deleteImageByType(typeUploadField, alt, action, memo);
            $(this).attr('data-status', '');
            $('img[type="avatar"]').attr('alt', '');
        }
        
    }
})

function deleteImageByType(type, img_name, action, memo) {
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
            fileName: img_name,
            memo: memo
        },
        success: function( data ){
            
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
            // console.log(data);
            // data = JSON.parse(data);
            let urlAvatar = linkImage + data.path;
            $('img[type="avatar"]').attr('src', urlAvatar);
            $('img[type="avatar"]').attr('alt', data.name);
            $('.delete_avatar').attr('data-status', 'active');
        }
    });
}

//upload gallaries
$('.boder-img img').click(function () {
    $(this).parent().find('.input_file').trigger('click');
})

function uploadGalleries(elementFile) {

    //get info galleries
    let dataFile = elementFile.files[0]
    let dataType = $(elementFile).attr('data-type')
    let dataName = $(elementFile).attr('data-name')
    let form     = new FormData()
    form.append('file', dataFile)
    form.append('data-type', dataType)

    var reader   = new FileReader()
    reader.readAsDataURL(dataFile)
    reader.onload = function(e) {
        var base64 = e.target.result
        $('img[name="'+dataName+'"]').attr('src', base64)
    }
    let action    = $('.form-upload-gallaries').attr('action')
    let baseURL = $('input[name="link_image"]').val()

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })
    $.ajax({
        url     : action,
        type    : 'post',
        enctype : 'multipart/form-data',
        data    : form,
        cache: false,
        contentType: false,
        processData: false,
        success: function( data ){
            console.log(data)
            // data = JSON.parse(data);
            let urlAvatar = baseURL + data.path
            $('img[name="'+dataName+'"]').attr('src', urlAvatar)
            $('img[name="'+dataName+'"]').attr('data-alt', data.name)
            $('.delete_galaries').attr('data-status', 'active')
        }
    });
}

$('.delete_galaries').click(function () {
    let status = $(this).attr('data-status')
    if(status == 'active'){
        let action = $('.form-delete-img').attr('action')
        let typeUploadField = $('input[name="type_upload_employer"]').val()
        let elementData = $(this).parent()
        let imageType = elementData.find('img.imageThumbnail').attr('name')
        let imageName = $('img[name="'+imageType+'"]').attr('data-alt')
        console.log(imageName);
        $('img[name="'+imageType+'"]').attr('src', '')
        if(imageName != ''){
            deleteImageByType(typeUploadField, imageName, action, '')
            $(this).attr('data-status', '')
            $('img[name="'+imageType+'"]').attr('data-alt', '')
        }
    }
})