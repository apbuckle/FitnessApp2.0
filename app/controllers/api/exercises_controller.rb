class Api::ExercisesController < ApplicationController
    def index
        @exercises = Exercise.all
        render json: @exercises
    end

    def show
        @exercise = Exercise.find(params[:id])
        render json: @exercise
    end

    def create
        @exercise = Exercise.create(exercise_params)
        render json: @exercise
    end

    def update
        @exercise = Exercise.update(params[:id])
        render json: @exercise
    end

    def destroy
        @exercise = Exercise.find(params[:id]).delete
        render status: :ok
    end

    private 
    
    def exercise_params
        params.require(:exercise).permit(:name, :muscles)
    end
end
