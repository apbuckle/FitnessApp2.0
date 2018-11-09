class Api::WorkoutExercisesController < ApplicationController
    def index
        @workout = Workout.find(params[:workout_id])
        @exercises = @workout.exercises
        @workout_exercises = Workout.find(params[:workout_id]).workout_exercise
        @allInfo = {
          "workout" => @workout,
          "exercises" => @exercises,
          "workout_exercises" => @workout_exercises,
        }
        # @hydrated = @workout_exercises.collect{ |we| we[:test] = '7'}
        #map through workout_exercises to get all exercise info
        render json: @allInfo
      end
    
      def show
        @test = Exercise.find(params[:id])
        @exercise = Workout.find(params[:workout_id])
        render json: @test
      end
    
      def create
        @workout = Workout.find(params[:workout_id]).workout_exercises.create(workout_exercise_params)
        render json: @workout
      end
    
      def update
        @workout = Workout_exercise.find(params[:id])
        @workout.update(workout_exercise_params)
        render json: @workout
      end
    
      def destroy
        @workout = Workout_exercise.find(params[:id])
        @workout.destroy
        render json: 200
      end
    
      private
    
      def workout_exercise_params
        params.require(:Workout_exercise).permit(:duration, :sets)
      end
end
