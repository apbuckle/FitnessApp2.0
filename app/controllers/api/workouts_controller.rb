class Api::WorkoutsController < ApplicationController
    def index
        @workouts = Workout.all
        render json: @workouts
    end

    def show
        @workout = Workout.find(params[:id])
        render json: @workout
    end

    def create
        @workout = Workout.create(workout_params)
        render json: @workout
    end

    def update
        @workout = Workout.update(params[:id])
        render json: @workout
    end

    def destroy
        @workout = Workout.find(params[:id]).delete
        render status: :ok
    end

    private 
    
    def workout_params
        params.require(:workout).permit(:title, :day)
    end
end
