const generateRecipe = async (ingredients) => {
    const response = await fetch("https://api-inference.huggingface.co/models/gpt2", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        inputs: `Generate a recipe with these ingredients: ${ingredients.join(", ")}`
      })
    });
  
    const data = await response.json();
    console.log(data);
  };
  