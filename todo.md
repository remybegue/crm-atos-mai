- TP page clients

- Créer un enum state-client ACTIVE et INACTIVE


- Créer le model client et l'interface client -i (voir db.json)
- Créer le service clients
- Page clients
  - template-b
  - pipe total
  - directive state-directive
  - scss table-light et table-dark (.state-active $color-success) (.state-inactive $color-error)

  -page list ordders ajouter icon edit
  -click sur cet icon = edit(item)
  -sur page list order ts, redirection vers route orders/edit en passant l'item.id dans l'url avec router.navigate
  - orders routing module on créé la route edit (particularité: elle prend un paramètre id)
  - créer le component edit order orders/pages/edit-order
  - sur cette page utiliser un template(a ou b)
  - sur cette page utiliser form-add-order en bindant l'input item avec l'item qui correspond à l'id récupéré dans l'url
     - dans le ts de edit-order component récupérer l'id dans l'url
     - dans le ts de edit-order component utiliser la méthode getItemById du service Orders
     - quand l'utiliseur valide le formulaire, update
