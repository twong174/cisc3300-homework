$(document).ready(function () {
  const recipeList = $('#recipe-list');

  // Function to load recipes from the server
  function loadRecipes() {
    $.ajax({
      url: 'http://localhost:3000/recipes',
      method: 'GET',
      success: function (recipes) {
        recipeList.empty();
        recipes.forEach(recipe => {
          recipeList.append(`
            <div class="recipe">
              <h3>${recipe.title}</h3>
              <p>${recipe.description}</p>
            </div>
          `);
        });
      }
    });
  }

  // Initial load of recipes
  loadRecipes();

  // Function to add a new recipe
  $('#recipe-form').on('submit', function (e) {
    e.preventDefault();

    const newRecipe = {
      title: $('#title').val(),
      description: $('#description').val()
    };

    $.ajax({
      url: 'http://localhost:3000/recipes',
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify(newRecipe),
      success: function () {
        loadRecipes(); // Reload the recipes after adding
        $('#recipe-form')[0].reset(); // Clear the form
      }
    });
  });
});
