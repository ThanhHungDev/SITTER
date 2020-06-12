

## About Laravel Doctor
php artisan make:migration create_users_table



## create controller, request, middleware
 php artisan make:controller Client/IndexController
 php artisan make:controller Admin/IndexController
 php artisan make:controller Admin/LoginController
 php artisan make:controller Admin/AdminController
 php artisan make:request ADMIN/VALIDATE_LOGIN
 php artisan make:request CLIENT/VALIDATE_DOCTOR_LOGIN
 php artisan make:request CLIENT/VALIDATE_CANDIDATE_LOGIN
 php artisan make:request CLIENT/VALIDATE_EMPLOYER_LOGIN 
 php artisan make:controller Client/CandidateController  
 php artisan make:controller Client/EmployerController 
 php artisan make:controller Client/UserController    
 php artisan make:middleware CANDIDATE_LOGGED
 php artisan make:middleware EMPLOYER_LOGGED 



 php artisan migrate

 php artisan db:seed

 composer require jenssegers/mongodb

 Laravel
In case your Laravel version does NOT autoload the packages, add the service provider to config/app.php:

Jenssegers\Mongodb\MongodbServiceProvider::class,