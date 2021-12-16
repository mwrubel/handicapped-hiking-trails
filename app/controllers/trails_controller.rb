class TrailsController < ApplicationController
    before_action :authorize 

    def index
        trails = current_user.trails
        render json: trails
    end

    def create
        trail = current_user.trails.create(trail_params)
        if trail.valid?
            render json: trail
        else 
            render json: { errors: trail.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        trail = current_user.trails.find_by(id: params[:id]) 
        if trail
            render json: trail
        else
            render json: { error: "NOT FOUND" }, status: :unauthorized
        end
    end

    def destroy
        trail = current_user.trails.find_by(id: params[:id]) 
        if trail
            trail.destroy
            head :no_content
        else
            render json: { error: "COULDNT FIND TRAIL TO DELETE" }
        end
    end

    def update
        trail = current_user.trails.find_by(id: params[:id]) 
        if trail
            trail.update(trail_params)
        else
            render json: { error: "COULDN'T UPDATE" }, status: :unauthorized
        end
        #trail.update(trail_name: params[:trail_name], city: params[:city], address: params[:address], zip: params[:zip], difficulty: params[:difficulty], picture: params[:picture])
    end

    private

    def current_user
        Hiker.find_by(id: session[:user_id])
    end

    def trail_params
        params.permit(:trail_name, :city, :address, :zip, :difficulty, :picture)
    end

    def authorize
        return render json: {error: "NOT AUTHORIZED"}, status: :unauthorized unless session.include? :user_id
    end

end
