<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SitterRegister extends Mailable
{
    use Queueable, SerializesModels;

    protected $mailData;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($mailData)
    {
        $this->mailData = $mailData;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        // $dataSendMail = array(
        //     'token_verify'   => $this->mailData['token_verify'],
        //     'name'           => $this->mailData['name'],
        // );
        
        return $this->view('emails.sitter_register')
                    ->subject("【家政婦さん・ベビーシッタードットコム】会員登録ありがとうございます")
                    ->with([
                        'dataSendMail' => $this->mailData,
                        'url'          => route('SITTER_REGISTER_NEXT_STEP').'?token_verify='.$this->mailData['token_verify']
                    ]);
    }
}
