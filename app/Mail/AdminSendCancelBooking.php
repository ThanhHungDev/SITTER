<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminSendCancelBooking extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    protected $mailData = null;

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
            'full_name'     => $this->mailData['full_name'],
            'message'     => $this->mailData['message'],
        );
        
        return $this->view('emails.admin_send_cancel_booking')
                ->subject('【Canceled booking】')
                ->with([
                    'dataSendMail' => $dataSendMail,
                ]);
    }
}
