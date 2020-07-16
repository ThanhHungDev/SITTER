<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class EmployerForgotPass extends Mailable
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
        
        return $this->view('emails.employer_forgot_pass')
                    ->with([
                        'dataSendMail' => $dataSendMail,
                    ]);
    }
}
