class Api::ApplicationsController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create 
    @application = Application.new(application_params)
    if @application.save
      render :show
    else 
      render json: @application.errors.full_messages, status: 422
    end 
  end 

  
  def show 
    @application = Application.find_by_id(params[:id])
    render :show
  end 

  def by_user_id
    @application = Application.find_by_user_id(params[:user_id])
    render :show
  end 

  def update
    @application = Application.find_by_id(params[:id])
    @application.update(application_params)
    if @application.save 
      render :show
    else 
      render json: @application.errors.full_messages, status: 422
    end 
  end 

  def index 
    @applications = Application.all 
    render :index
  end 

  private 
  def application_params
    params.require(:application).permit(:id, :first_name, :last_name, :email, :zip, :user_id, :approved)
  end
end
