class FarmsController < ApplicationController
    def index
        farms = Farm.all
        render json: farms
    end

    def create
        farm = Farm.create!(farm_params)
        render json: farm
    end

    def update
    end

    def destroy
    end

    private

    def farm_params
        params.permit(
            :name,
            :city,
            :state
        )
    end

    

end
