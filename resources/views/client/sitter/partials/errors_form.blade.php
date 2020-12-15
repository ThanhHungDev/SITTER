@if (count($errors) > 0)
    <div class="alert alert-danger alert-dismissible fade show mt-18" id="alert_message" role="alert">
        <strong>入力に問題がありました。</strong><br>
        <ul>
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
        <a href="javascript:void(0)" class="close" data-dismiss="alert" aria-label="close">&times;</a>
    </div>
@endif