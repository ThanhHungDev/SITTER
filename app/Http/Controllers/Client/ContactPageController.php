<?php

namespace App\Http\Controllers\Client;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Services\SitterService;
use App\Http\Controllers\Controller;
use App\Models\SitterReviewModel;
use App\FactoryModel\FactoryModelInterface;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Config;
use App\Http\Requests\CLIENT\VALIDATE_CONTACT;
use App\Mail\Contact;
use Illuminate\Support\Facades\Mail;

class ContactPageController extends Controller
{
    //Phong:08092020: return contact page
    public function contact(){
        return view('client.contact.contact');
    }

    public function sendEmail(VALIDATE_CONTACT $request){
        $params = $request->all();
        $dataSendMail['name'] = $params['first_name_furigana'].'　'.$params['last_name_furigana'];
        $dataSendMail['subject'] = $params['subject'];
        $dataSendMail['content'] = $params['content'];
        $dataSendMail['email'] = $params['email'];
        Mail::to( config('constant.MAIL_SUPPORT'))->send(new Contact($dataSendMail));
        return redirect()->route('CONTACT_SUCCESS',['お問い合わせ' ,'ご連絡ありがとうございます。']);
    }
    public function contactSuccess($title = null, $message = null){
        $data = [
            'title' => $title,
            'message' => $message,
        ];
        return view('client.contact.contact_success', $data);
    }

}
