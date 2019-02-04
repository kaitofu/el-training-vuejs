class SessionsController < ApplicationController
    # skip_before_action :login_required
    protect_from_forgery :except => [:create]


    def new
    end

    # POST /login
    def create
        user = User.find_by(email: session_params[:email])

        if user&.authenticate(session_params[:password])
            render json: user, status: :created
        else
            render plain: '403 Forbidden', status: 403
        end
    end

    def delete
        reset_session
        redirect_to root_path, notice: 'ログアウトしました。'
    end

    private

    def session_params
        params.require(:session).permit(:email, :password)
    end
end
