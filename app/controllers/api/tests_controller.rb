class Api::TestsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create 
    @test = Test.new(test_params)
    if @test.save 
      render :show
    else 
      render json: @application.errors.full_messages, status: 422
    end 
  end 

  def show 
    @test = Test.find_by_id(params[:id])
    render :show
  end 

  private 
  def test_params
    params.require(:test).permit(:text, :application_id)
  end 

end
