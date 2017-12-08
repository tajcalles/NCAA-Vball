class Api::SchoolsController < ApplicationController
  before_start :set_schools, except: [:index, :create]

  def index
  end

  def show
  end

  def create
  end

  def update
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
