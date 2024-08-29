<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

# Front 
Route::get('/', function () {
    return Inertia::render('Front/Index');
});

Route::get('/about', function () {
    return Inertia::render('Front/About');
});
Route::get('/about', function () {
    return Inertia::render('Front/About');
});
Route::get('/service', function () {
    return Inertia::render('Front/Service');
});
Route::get('/contact', function () {
    return Inertia::render('Front/Contact');
});


# Admin
Route::get('/admin', function () {
    return Inertia::render('Admin/Index');
});
Route::get('/admin/users', function () {
    return Inertia::render('Admin/User/Index');
});
Route::get('/admin/users/create', function () {
    return Inertia::render('Admin/User/Create');
});
