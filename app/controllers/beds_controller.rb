class BedsController < ApplicationController

    def create
    end

    def destroy
    end

    private

    def bed_params
        params.permit(
            :sq_ft,
            :crop,
            :planting_date,
            :harvest_date,
            :farm_id,
            :dtm
        )
    end
end
