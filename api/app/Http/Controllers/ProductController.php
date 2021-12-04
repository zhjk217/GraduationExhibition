<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function test(Request $Requests)
    {
        return response("版本號：0.0.1");
    }
    public function index(Request $Requests)
    {
        $data = $this->getData();
        return response($data);
    }
    public function getData(){
        return [
            [
            'title' => '測試商品1',
            'content' => '這是一個很棒的商品',
            'price' => 50
        ],
        [
            'title' => '測試商品2',
            'content' => '這是一個有點棒的商品',
            'price' => 30
        ]
        ];
    }
}
