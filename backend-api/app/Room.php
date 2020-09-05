<?php


namespace App;


use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    /**
     * The products that belong to the shop.
     */
    public function features()
    {
        return $this->belongsToMany('App\Feature', 'room_features');
    }

    /**
     * Get the user that owns the board.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }


    /**
     * Get the images for the given room.
     */
    public function images()
    {
        return $this->hasMany('App\Image');
    }

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'description', 'user_id',
    ];
}
