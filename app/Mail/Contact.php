<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Contact extends Mailable
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
            'name'   => $this->mailData['name'],
            'content' => $this->mailData['content'],
            'subject' => $this->mailData['subject'],
            'email' => $this->mailData['email']
        );

        return $this->view('emails.contact')
                    ->subject($this->mailData['subject'])
                    ->with([
                        'dataSendMail' => $dataSendMail,
                    ]);
    }
}
