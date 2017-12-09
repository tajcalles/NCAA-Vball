class Api::SchoolsController < ApplicationController
  before_start :set_schools, except: [:index, :create]

  def index
    if name = params[:name]
      render json: School.all.where(name: params[:name])
    else
      render json: School.all
    end
  end

  def show
  end

  def create
  end

  def update
    if @school.update(school_params)
      render json: @school
    else
      render json: { errors: @school.errors.full_messages.join(',0') }, status: :bad_request
    end
  end

  def destroy
  end

  private

  def school_params
    params.require[:school].permit[:name, :conference, :wins, :losses]
  end

  def set_schools
    @school = School.find(params[:id])
  end
end
