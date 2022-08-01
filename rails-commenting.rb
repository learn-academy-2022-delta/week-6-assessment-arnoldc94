# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1) The BlogPost controller is being inherited from the ApplicationController
# the index method is being defined which will be used to display the data from the model
class BlogPostsController < ApplicationController
  def index
    # ---2) all of the instances of the BlogPost model is being stored in the posts instance variable
    @posts = BlogPost.all
  end

  # ---3) The show method is defined to show the id of the data that is past in from the url and routes
  # the id will be stored in the post instance variable
  # using the find method you store the id paramater that is being accessed
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) the new method is used with forms, creating a new instance of the model 
  # Is stored in the post instance variable 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) 
    # The the post instance variable holds the new model instance and passes in the blog_post_params method
    # the conditional statement checks if the there are any errors using valid?
    # if there are no errors redirect to the new post else redirect to the form
    
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to new_blog_post_path
    end
  end

  def edit
    # ---6) post instance variable holds the correct instance that is being edited by passing in the id param
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7) The instance variable holding an instance of the BlogPost model which updates the columns using strong params
    # Checks for errors to decide where to redirect the page
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    else
      redirect_to edit_blog_post_path
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      redirect_to blog_posts_path
    else
      # ---8) redirects to the post path that you are trying to delete because there was an error
      redirect_to blog_post_path(@post)
    end
  end

  # ---9) A helper method that can only be called inside the class
  private
  def blog_post_params
    # ---10)defines which columns user has access to 
    params.require(:blog_post).permit(:title, :content)
  end
end
