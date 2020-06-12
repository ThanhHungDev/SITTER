<?php

namespace App\Http\Controllers\Client;

use App\FactoryModel\FactoryModelInterface;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private $model = null;

    // Ở đây Service Container sẽ "tiêm" instance của Model tương ứng vào
    /// thông qua việc bind trong provider
    public function __construct(FactoryModelInterface $_model) 
    {
        $this->model = $_model;
    }

    public function xxx(){

        // để get list user ta cần tạo 1 thể hiện của UserModel thông qua model interface đã có
        $userModel = $this->model->createUserModel();
        $users = $userModel->getUserByName("hungtt")
        ->select('first_name', 'email as user_email')
        ->get();
        var_dump($users);
    }
}
