<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Product as ProductResource;
use App\Http\Resources\Category as CategoryResource;
use App\Product;
use App\Category;

class ProductsController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return ProductResource::collection($products);
    }

    public function show($id)
    {
        $product = Product::findOrFail($id);

        return new ProductResource($product);
    }

    public function category()
    {
        $categories = Category::all();
        return CategoryResource::collection($categories);
        // $product = Product::where('category', $category);
    }

    public function showCategory($id)
    {
        $category = Category::findOrFail($id);

        return new CategoryResource($category);
    }
}
