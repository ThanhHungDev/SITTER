<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SitterForgotPass extends Mailable
{
    use Queueable, SerializesModels;

    protected $mailData = null;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($_mailData)
    {
        $this->mailData = $_mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $dataSendMail = array(
            'verify_token' => $this->mailData['verify_code'],
            'name'     => $this->mailData['name'],
            'exp_date'     => $this->mailData['exp_date']
        );
        
        return $this->view('emails.sitter_forgot_pass')
                    ->subject('【家政婦さん・ベビーシッタードットコム】パスワード再発行のお知らせ')
                    ->with([
                        'dataSendMail' => $dataSendMail,
                        'url'          => route('SITTER_RENEW_PASSWORD').'?code='.$dataSendMail['verify_token']
                    ]);
    }
}
