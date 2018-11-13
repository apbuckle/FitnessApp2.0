class Api::ProfileController < ApplicationController
    def index
        @profiles = Profile.all
        render json: @profiles
    end

    def show
        @profile = Profile.find(params[:id])
        render json: @profile
    end

    def create
        @profile = Profile.create(profile_params)
        render json: @profile
    end

    def update
        @profile = Profile.update(params[:id])
        render json: @profile
    end

    def destroy
        @profile = Profile.find(params[:id]).delete
        render status: :ok
    end

    private 
    
    def profile_params
        params.require(:profilw).permit(:name, :age, :level, :activities, :bench, :squat, :deadlift)
    end
end
end
