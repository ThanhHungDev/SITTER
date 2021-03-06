<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Throwable;
use \Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Client\RequestException;

class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * @param  \Throwable  $exception
     * @return void
     *
     * @throws \Exception
     */
    public function report(Throwable $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Throwable  $exception
     * @return \Symfony\Component\HttpFoundation\Response
     *
     * @throws \Throwable
     */
    public function render($request, Throwable $exception)
    {
        // if ($exception instanceof ModelNotFoundException) {
        //     return response()->json(['error' => 'Entry for '.str_replace('App\\', '', $exception->getModel()).' not found'], 404);
        // } else if ($exception instanceof Exception) {
        //     return response()->json(['error' => 'External API call failed.' . $exception->getMessage() ], 500);
        // }
        if (  substr($request->path(), 0, 3) == 'api' ){
            $res = [
                'code'      => 400,
                'status'    => false,
                'data'      => [],
                'errors'    => [],
                'message'   => '認証されていないユーザー'
            ];
            return response()->json($res);
        }
        return parent::render($request, $exception);
    }
}
