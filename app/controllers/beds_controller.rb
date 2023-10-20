class BedsController < ApplicationController

    def create
        bed = Bed.create!(bed_params)
        render json: bed, status: :created
    end

    def destroy
        bed = Bed.find_by(id: params[:id])
        bed.destroy
        render json: bed, status: :ok
    end

    private

    def bed_params
        params.permit(
            :id,
            :sq_ft,
            :crop,
            :planting_date,
            :harvest_date,
            :farm_id,
            :dtm
        )
    end
end
