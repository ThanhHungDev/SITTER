<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmployerRegister extends Mailable
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
            'verify_token'   => $this->mailData['token_verify'],
            'name'           => $this->mailData['name'],
        );
        
        return $this->view('emails.employer_register')
                    ->subject('【家政婦さん・ベビーシッタードットコム】会員登録ありがとうございます')
                    ->with([
                        'dataSendMail' => $dataSendMail,
                    ]);
    }
}
