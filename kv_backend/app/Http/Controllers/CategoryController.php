<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Image;
use Illuminate\Support\Facades\File;


class CategoryController extends Controller
{
    public function index()
    {
        $categories = \App\Models\Category::all();
        return response()->json($categories,200);
    }

    public function store(Request $request)
    {
        $category = new \App\Models\Category;
        $category->name = $request->name;

        $image = $request->file('picture');
        $imageName = md5(rand(0, 999) . time() . rand(0, 999)) . '.' . $image->getClientOriginalExtension();
        $originalImagePath = public_path(env("PICTURE_PATH"));
        if(!File::isDirectory($originalImagePath)){
            File::makeDirectory($originalImagePath, 0777, true, true);
        }

        $imgFile = Image::make($image->getRealPath());

        $imgFile->orientate();
        $imgFile->save($originalImagePath . '/' . $imageName);
        $image->move($originalImagePath, $imageName);
        $category->picture = $imageName;

        $category->save();
        return response()->json([
            "message" => "Category created"
        ], 202);
    }

    public function delete($id)
    {
        $category = \App\Models\Category::find($id);
        if($category){
            $category->delete();
            return response()->json([
                "message" => "Category deleted"
            ], 202);
        }
        return response()->json([
            "message" => "Category not found"
        ], 404);
    }
}
