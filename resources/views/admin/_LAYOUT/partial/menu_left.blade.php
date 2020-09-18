<div class="menu-left-container">
    <ul>
        <li class="{{ Route::is("ADMIN_SITTER") ? 'active' : '' }}">
            <a href="{{ route('ADMIN_SITTER') }}">
                <div class="icon-div">
                    <img class="icon-img sitters">
                </div>
                <span class="nav-text">シッター一覧</span>
            </a>
        </li>
        <li class="{{ Route::is("ADMIN_EMPLOYERS") ? 'active' : '' }}">
            <a href="{{ route('ADMIN_EMPLOYERS') }}">
                <div class="icon-div">
                    <img class="icon-img baby">
                </div>
                <span class="nav-text">利用者一覧</span>
            </a>
        </li> 
        <li class="{{ Route::is("ADMIN_LIST_BOOKING") ? 'active' : '' }}">
            <a href="{{ route('ADMIN_LIST_BOOKING') }}">
                <div class="icon-div">
                    <img class="icon-img booking">
                </div>
                <span class="nav-text">予約一覧</span>
            </a>
        </li>
        <li class="{{ Route::is("ADMIN_CHAT","ADMIN_READ_MESSAGE") ? 'active' : '' }}">
            <a href="{{ route('ADMIN_CHAT') }}">
                <div class="icon-div">
                    <img class="icon-img chat">
                </div>
                <span class="nav-text">チャット一覧<span class="notice" id="msg-user-unread">0</span></span>
            </a>
        </li>
        <li class="{{ Route::is("ADMIN_SUPPORT") ? 'active' : null}}">
            <a href="{{ route('ADMIN_SUPPORT') }}">
                <div class="icon-div">
                    <img class="icon-img chat">
                </div>
                <span class="nav-text">チャット一覧 <br/> サポート<span class="notice" id="msg-admin-unread">0</span></span>
            </a>
        </li>
        <li class="">
            <a href="{{ route('ADMIN_LOGOUT') }}">
                <div class="icon-div">  
                    <img class="icon-img lock">
                </div>
                <span class="nav-text">ログアウト</span>
            </a>
        </li>
    </ul>
</div>