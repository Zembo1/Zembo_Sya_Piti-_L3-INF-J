  <script>
    function verifierFormulaire() {
      let nom = document.getElementById('nom').value.trim();
      let prenom = document.getElementById('prenom').value.trim();
      let email = document.getElementById('email').value.trim();
      let telephone = document.getElementById('telephone').value.trim();
      let dateVisite = document.getElementById('dateVisite').value.trim();

      if (!nom || !prenom || !email || !telephone || !dateVisite) {
        document.getElementById('erreur').style.display = 'block';
        return false;
      } else {
 ChatGPT: document.getElementById('erreur').style.display = 'none';
        alert("Inscription réussie ! Nous avons hâte de vous accueillir au jardin.");
        return true;
      }
    }
  </script>

    function validateForm() {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        if (username === "" || password === "") {
            alert("Veuillez remplir tous les champs.");
            return false; // Empêche la soumission du formulaire
        }

        // Si tout est rempli, le formulaire peut être soumis
        return true; 
    }
