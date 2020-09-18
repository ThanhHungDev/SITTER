<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminSendLinkCreateStripe extends Mailable
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
            'full_name'     => $this->mailData['full_name'],
            'token' => $this->mailData['token']
        );
        if($this->mailData['typeUser'] == config('constant.ROLE.EMPLOYER')){
            $dataSendMail['route'] = route('EMPLOYER_COLLECT_CARD').'?token='.$dataSendMail['token'];
        }
        if($this->mailData['typeUser'] == config('constant.ROLE.SITTER')){
            $dataSendMail['route'] = '';
        }
        return $this->view('emails.admin_send_create_stripe')
                ->subject('【〇〇〇〇〇〇〇〇〇〇】')
                ->with([
                    'dataSendMail' => $dataSendMail,
                ]);
        
    }
}
