@if (!empty($warning))
    <div class="alert alert-warning alert-dismissible fade show mt-18" id="alert_message" role="alert">
        <a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>{{ $warning }}</strong>
    </div>
@endif