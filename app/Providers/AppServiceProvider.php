<?php

namespace App\Providers;

use App\FactoryModel\BaseModel;
use App\FactoryModel\FactoryModelInterface;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // $this->app->bind(RepositoryInterface::class, UserRepository::class);
        $this->app->bind(FactoryModelInterface::class, BaseModel::class);
        \Stripe\Stripe::setApiKey(config('app.STRIPE_API_KEY'));
    }
}
