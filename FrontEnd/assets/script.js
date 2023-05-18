const gallery = document.getElementById('gallery');
const filterContainer = document.getElementById('filter-container');
//  l'appel à l'API 
fetch('http://localhost:5678/api/works')
    .then(response => response.json())
    .then(data => {
        parcourirTableau(data);
})

    function parcourirTableau(data) {
        // Parcours du tableau récupéré
        data.forEach(works => {
        // Création de l'élément figure
        const figureElement = document.createElement('figure');

        // Création de l'élément img
        const imgElement = document.createElement('img');
        imgElement.src = works.imageUrl;
        imgElement.alt = works.title;

        // Création de l'élément figcaption
        const figcaptionElement = document.createElement('figcaption');
        figcaptionElement.textContent = works.title;

        // Ajout des éléments img et figcaption à l'élément figure
        figureElement.appendChild(imgElement);
        figureElement.appendChild(figcaptionElement);

        // Ajout de l'élément figure à la galerie
        gallery.appendChild(figureElement);
    });
}

//  l'appel à l'API
fetch('http://localhost:5678/api/categories')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        FilterOptions(data);
});

function FilterOptions(categories) {
    // Création du button "Tous"
    const optionTous = document.createElement('button');
    optionTous.value = 'tous';
    optionTous.textContent = 'Tous';
    filterContainer.appendChild(optionTous);

    // Création des autres catégories
    categories.forEach(category => {
        const optionElement = document.createElement('button');
        optionElement.value = category.id;
        optionElement.textContent = category.name;
        filterContainer.appendChild(optionElement);
    });
}