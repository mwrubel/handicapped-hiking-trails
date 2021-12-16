class HikersController < ApplicationController

    #index route
    def index
        hikers = Hiker.all   
        render json: hikers
    end

    #show route
    def show
        hiker = Hiker.find_by(id: session[:id])
        if hiker
            render json: hiker#, include: trails
        else
            render json: {error: "unauthorized"}
        end
    end

    #create (signup)
    def create
        # hiker = Hiker.new(hiker_params)
        # if hiker.save
        #     render json: hiker
        # else
        #     render json: { errors: hiker.errors.full_messages}, status: unprocessable_entities
        # end
        #create user
        hiker = Hiker.create(hiker_params)
        #byebug
        if hiker.valid?
        #login user
            session[:user_id] = hiker.id
            render json: hiker
        else
            render json: { errors: hiker.errors.full_messages}, status: :unprocessable_entitiy
        end
    end

    private
    
    def hiker_params
        
        params.permit(:username, :password, :password_confirmation, :zipcode)
        #params.require(:hiker).permit(:name)
    end

end
