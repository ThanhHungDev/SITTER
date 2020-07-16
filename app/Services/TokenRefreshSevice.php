<?php
namespace App\Services;

use App\Models\TokenRefeshModel;

class TokenRefreshSevice
{
    public function getTokenRefresh($tokenRefresh = '', $userId)
    {
        return TokenRefeshModel::where('user_id', $userId)->where('detect', $tokenRefresh)->first();
    }
}
