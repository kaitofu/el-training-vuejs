class Api::TasksController < ApplicationController
  protect_from_forgery :except => [:create, :update, :destroy]
  helper_method :sort_column, :sort_direction
  before_action :authenticate

  def index
    @tasks = current_user.tasks.order(sort_column + ' ' + sort_direction).search_by_name(params[:name]).search('status', params[:status]).search('priority', params[:priority]).page(params[:page]).includes(:user)
  end

  def show
    @task = current_user.tasks.find(params[:id])
  end

  def new
    @task = Task.new
  end

  def edit
    @task = current_user.tasks.find(params[:id])
  end

  def create
    # @task = current_user.tasks.new(task_params)
    @task = Task.new(task_params)

    if @task.save
      # redirect_to tasks_path, notice: "タスク「#{@task.name}」を登録しました。"
      render :show, status: :created
    else
      # render :new
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def update
    # @task = current_user.tasks.find(params[:id])
    @task = Task.find(params[:id])
    
    if @task.update(task_params)
      # redirect_to tasks_path, notice: "タスク「#{@task.name}」を更新しました。"
      render :show, status: :ok
    else
      # render :edit
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    # task = current_user.tasks.find(params[:id])
    task = Task.find(params[:id])
    if task.destroy
      render :index, status: :ok
    else
      render json: task.errors, status: :unprocessable_entity
    end
  end

private
    def task_params
      # params.require(:task).permit(:name, :description, :priority, :status, :deadline)
      params.fetch(:task, {}).permit(
        :name, :description, :priority, :status, :deadline, :user_id
      )
    end

    def sort_direction
      %w[asc desc].include?(params[:direction]) ? params[:direction] : "desc"
    end

    def sort_column
      Task.column_names.include?(params[:sort]) ? params[:sort] : "created_at"
    end

    def authenticate
      authenticate_or_request_with_http_token do |token,options|
        auth_user = User.find_by(token: token)
        auth_user != nil ? true : false
      end
    end
end
