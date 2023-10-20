class FarmsController < ApplicationController
    def index
        farms = Farm.all
        render json: farms
    end

    def create
    end

    def update
    end

    def destroy
    end

end
