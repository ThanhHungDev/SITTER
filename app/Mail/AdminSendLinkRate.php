<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminSendLinkRate extends Mailable
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
            'token' => $this->mailData['token'],
            'full_name'     => $this->mailData['full_name'],
            'expire_at'     => $this->mailData['expire_at'],
            'sitter_id'     => $this->mailData['sitter_id']
        );
        
        return $this->view('emails.admin_send_link')
                ->subject('【〇〇〇〇〇〇〇〇〇〇】')
                ->with([
                    'dataSendMail' => $dataSendMail,
                ]);
    }
}
