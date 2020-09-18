<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class BookingResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id'              => $this->id,
            'employer_id'     => $this->employer_id ,
            'sitter_id'       => $this->sitter_id ,
            'status'          => $this->status ,
            'sitter_accept'   => $this->sitter_accept ,
            'employer_accept' => $this->employer_accept ,
            'work_date'       => $this->work_date,
            'start'           => $this->start,
            'finish'          => $this->finish,
            'type'            => $this->type,
            'salary'          => $this->salary,
        ];
    }
}
