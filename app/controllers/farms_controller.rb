class FarmsController < ApplicationController
    def index
        farms = Farm.all
        render json: farms
    end

    def create
        farm = Farm.create!(farm_params)
        render json: farm, status: :created
    end

    def update
        farm = Farm.find_by(params[:id])
        farm = Farm.update!(farm_params)
        render json: farm, status: accepted
    end

    def destroy
        farm = Farm.find_by(params[:id])
        farm.destroy
        render json: farm, status: ok
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
