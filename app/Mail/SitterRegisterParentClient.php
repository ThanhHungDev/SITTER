<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SitterRegisterParentClient extends Mailable
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
        return $this->view('emails.sitter_register_parent')
                    ->subject("【家政婦さん・ベビーシッタードットコム】仮登録が完了いたしました")
                    ->with([
                        'data'    => $this->mailData
                    ]);
    }
}
