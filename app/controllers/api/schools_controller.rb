class Api::SchoolsController < ApplicationController
  before_action :set_schools, except: [:index, :create]

  def index
    if schooltype = params[:schooltype]
      render json: School.all.where(schooltype: params[:schooltype])
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
      render json: { errors: @school.errors.full_messages.join(',') }, status: :bad_request
    end
  end

  def destroy
  end

  private

  def school_params
    params.require[:school].permit[:schooltype, :name, :conference, :wins, :losses]
  end

  def set_schools
    @school = School.find(params[:id])
  end
end
