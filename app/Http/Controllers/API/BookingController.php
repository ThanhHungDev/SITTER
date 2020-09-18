<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\BookingResource;
use App\Models\BookingModel;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return Product[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        $bookings = BookingModel::all();
        return BookingResource::collection($bookings);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Product|\Illuminate\Database\Eloquent\Model
     */
    public function store(Request $request)
    {
        $booking = BookingModel::create($request->all());
        return new BookingResource($booking);
    }
    

    /**
     * Display the specified resource.
     *
     * @param Product $product
     * @return Product
     */
    public function show($id)
    {
        $booking = BookingModel::findOrFail($id);
        return new BookingResource($booking);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $booking = BookingModel::where('id',$id)->update($request->all());
        return new BookingResource($booking);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return BookingModel::where('id',$id)->delete();
    }


    public function userBooking( $id = 0 ){

        $bookings = BookingModel::join('date_bookings', 'bookings.id', '=', 'date_bookings.booking_id')
        ->where(function ($query) use ($id) {
            $query->where('sitter_id', '=', $id)
                ->orWhere('employer_id', '=', $id);
        })
        ->select([
            'bookings.id',
            'bookings.employer_id',
            'bookings.sitter_id',
            'bookings.status',
            'bookings.sitter_accept',
            'bookings.employer_accept',
            'date_bookings.work_date',
            'date_bookings.start',
            'date_bookings.finish',
            'date_bookings.type',
            'date_bookings.salary'
        ])
        ->get();
        return BookingResource::collection($bookings);
    }
}
