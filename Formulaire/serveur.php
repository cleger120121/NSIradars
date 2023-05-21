<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Confirmation</title>
    <link rel="stylesheet" href="../assets/stylePrincipale.css">
    <link rel="stylesheet" href="./stylePhp.css">
</head>
<body>
    <div id="reponse--Div">
        <h1 id="reponse--H1">Nous vous avons envoyé un e-mail !</h1>
        <p>Voici vos coordonnées :</p>
        </ul>
            <?php
                //On recupere les donnees des variables
                $prenom = $_POST['prenom'];
                $nom = $_POST['nom'];
                $region = $_POST['region'];
                $email = $_POST['email'];

                //On les renvoie
                echo "<li> - Prénom : " . $prenom . "</li>";
                echo "<li> - Nom : " . $nom . "</li>";
                echo "<li> - Région : " . $region . "</li>";
                echo "<li> - Email : " . $email . "</li>";
            ?>
        </ul>
    </div>
    <script>
        setTimeout(() => {
            window.location.href = "../Page d'Accueil/index.html"
        }, 5000);
    </script>
</body>
</html>