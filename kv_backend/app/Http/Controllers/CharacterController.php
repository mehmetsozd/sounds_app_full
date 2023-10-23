<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Image;
use Illuminate\Support\Facades\File;

class CharacterController extends Controller
{
    public function index($id)
    {
        $characters = \App\Models\Character::where('category_id',$id)->get();
        return response()->json($characters,200);
    }

    public function store(Request $request)
    {
        $character = new \App\Models\Character;
        $character->name = $request->name;
        $character->description = $request->description;
        $character->category_id = $request->category_id;

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
        $character->picture = $imageName;

        $character->save();
        return response()->json([
            "message" => "Character created"
        ], 200);
    }

    public function delete($id)
    {
        $character = \App\Models\Character::find($id);
        if($character){
            $character->delete();
            return response()->json([
                "message" => "Character deleted"
            ], 202);
        }
        return response()->json([
            "message" => "Character not found"
        ], 404);
    }
}
