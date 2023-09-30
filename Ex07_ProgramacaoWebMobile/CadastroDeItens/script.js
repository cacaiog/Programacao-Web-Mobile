

Parse.initialize("khg0u7ul6UTQHKG38rPe1IYgVJhwdl6ODgIRtXpi", "rMaXxuyYNZ8a0b7wM0oKJodPtL1blYlr2tkfAe2N");
Parse.serverURL = "https://parseapi.back4app.com/";

// Create a new produtos
async function createParseProdutos() {
   
  let produtos = new Parse.Object("Produtos"); // Use "Produto" ou o nome correto da sua classe Parse

  produtos.set("nome", document.getElementById("nome").value);
  produtos.set("Qtd", parseInt(document.getElementById("Qtd").value)); // Converter para número usando parseInt
  
  try {
    
    produtos = await produtos.save();
    if (produtos !== null) {
      
      alert(
        `New object created with success! ObjectId: ${
          produtos.id
        }, ${produtos.get("nome")}`
      );

      document.getElementById("nome").value = "";
      document.getElementById("Qtd").value = "";
    }
  } catch (error) {
    alert(`Error: ${error.message}`);
  }
}
  
  
  document.getElementById("addButton").addEventListener("click", async function () {
    createParseProdutos();
  });


