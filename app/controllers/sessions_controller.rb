class SessionsController < ApplicationController
    #login (create session)
    def create
        hiker = Hiker.find_by(username: params[:username])
        if hiker && hiker.authenticate(params[:password])
            session[:user_id] = hiker.id
            render json: hiker
        else
            render json: {error: "Invalid username/ password"}, status: :unauthorized
        end
    end

    #logout (destroy session)
    def destroy
        session.clear
    end
end
