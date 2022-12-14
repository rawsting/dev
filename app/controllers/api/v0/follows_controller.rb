module Api
  module V0
    class FollowsController < ApiController
      include Api::FollowsController

      before_action :authenticate_with_api_key_or_current_user!
    end
  end
end
