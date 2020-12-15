<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class InfoInquiry extends Mailable
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
        // $dataSendMail = array(
        //     'name'   => $this->mailData['name'],
        //     'content' => $this->mailData['content'],
        //     'subject' => $this->mailData['subject'],
        //     'email' => $this->mailData['email']
        // );
        $dataSendMail = $this->mailData;
        return $this->view('emails.info_inquiry')
                    ->subject('INFO INQUIRY')
                    ->with([
                        'dataSendMail' => $dataSendMail,
                    ]);
    }
}
