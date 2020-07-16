// function advanceSearch(_page = 1, _min_range = -1, _max_range = -1, _sort_type = 'sort_room', _sort_by = 'ASC'){
//     // For City filter
//     var _city = $("#city").find('option:selected').val();
//     // For District filter
//     var _dist = $("#distByCity").find('option:selected').val();
//     // For Ward filter
//     var _ward = $("input[name='ward_selected']").val();
//     // For Building Type filter
//     var _building_type = [];
//     $("input:checkbox[name=building_type]:checked").each(function(){
//         _building_type.push($(this).val());
//     });
//     _building_types= JSON.stringify(_building_type);
//     // For Price Range filter
//     if(_min_range == -1){
//         _min_range =  $("#minimum_range").val();
//     }
//     if(_max_range == -1){
//         _max_range =  $("#maximum_range").val();
//     }
//     // For Building Filter
//     var _building_filter = $('#all_building_filter').val();
//     // For Other Filter
//     var _other_filter = $('#all_condition_filter').val();
//     // For Building Size Filter
//     var _size_type = $("input[name='size_type']:checked").val();
//     var _size_area = $("#size_area").find('option:selected').val();

//     // For Sort By Type filter
//     var sort_type_val = $("#sort_type").val();
//     if(sort_type_val != ""){
//         _sort_type = sort_type_val;
//     }
//     // For Sort ASC or DESC filter
//     var _sort_by =  $("#sort_by").attr("name");

//     // For Search String
//     var _search_string = $("#search_string").val();
//     // For Search Station lon and lat
//     var _long_station = $("#long_station").val();
//     var _lat_station = $("#lat_station").val();

//     // Ajax process
//     $.ajax({
//         method: "GET",
//         url: "/advance-search",
//         data: {
//             page: _page,
//             city: _city,
//             ward: _ward,
//             dist: _dist,
//             building_type: _building_types,
//             min_range: _min_range,
//             max_range: _max_range,
//             building_filter: _building_filter,
//             other_filter: _other_filter,
//             size_type: _size_type,
//             size_area: _size_area,
//             sort_type: _sort_type,
//             sort_by: _sort_by,
//             q: _search_string,
//             lon: _long_station,
//             lat: _lat_station
//         },
//         beforeSend: function(xhr, settings) {
//             xhr.startTime = new Date().getTime();
//             $("#loader").show();
//         },
//         complete: function(xhr) {
//             var elapsed = new Date().getTime() - xhr.startTime;
//             if (elapsed < 500) {
//                 $('#loader').delay(500 - elapsed).hide(1);
//             } else {
//                 $('#loader').hide();
//             }
//             //$("#loader").hide();
//         }
//     })
//     .done(function( odata ) {
//         // Render data
//         $('#show_result').html(odata);
//         $(".owl-carousel").carousel('next');
//         //renderProperty(odata);
//     });
// }


$(document).on('click', '.pagination a', function(event){
    event.preventDefault();
    var _page = $(this).attr('href').split('page=')[1];
    loadItems(_page);
});
function loadItems(_page = 1){
    // Ajax process
    $.ajax({
        method: "GET",
        url: "/ajax-load-items",
        data: {
            page: _page
        }
    })
    .done(function( odata ) {
        $('#load_sitters').html(odata);
    });
}
$( document ).ready(function() {
    loadItems();
});
