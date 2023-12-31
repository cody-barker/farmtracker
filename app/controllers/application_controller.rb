class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_resp
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_resp

  def render_unprocessable_entity_resp(e)
    render json: {errors: e.record.errors.full_messages}, status: :unprocessable_entity
  end

  def render_record_not_found_resp
    render json: {errors: ["Record not found."]}, status: :not_found
  end
  
end
