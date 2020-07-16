@if ($message = session('success'))
    <div class="alert alert-success alert-dismissible fade show mt-18" id="alert_message" role="alert">
        <a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>
        <strong>{{ $message }}</strong>
    </div>
@endif
