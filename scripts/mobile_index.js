/** les informations sur les differents livres sont stocké via localstorage **/

//title, auteur-edict, pages

/**
todo : 
1. recuperer l'identifiant stocké dans books[i].src - ok 
2. recuperer les données associé à l'identifiant - ok

3. creer un div qui contiendra un h2, un ul avec deux li et un button-ok
   - un li : pour auteur-edict 
   - un li : pour pages 
   - un h2 : pour le titre du livre 
   - un button : pour ouvrir le livre 

4. ajouter la nouvelle div sur la page web ! -ok

5. retirer le conteneur de description. 
**/


function CreateRouteDiv(args){
/* args est un object contenant title, pages, ref et url */
        
        /* creation des elements */
	container = document.createElement('div')
        h2 = document.createElement('h2')
        ul = document.createElement('ul')
        li_one = document.createElement('li')
        li_two = document.createElement('li')
        open_button = document.createElement('button')

	/* ajout des données */ 
        h2.textContent = args.title
        li_one.textContent = args.pages
        li_two.textContent = args.ref
        open_button.textContent = "Ouvrir"

       /* style des élements : optionnels */
       li_one.style.setProperty('font-weight', 'bold')

       /* ajout des enfants du conteneurs */
       container.appendChild(h2)
       ul.appendChild(li_one)
       ul.appendChild(li_two)
       container.appendChild(ul)
       container.appendChild(open_button)
	
    //4
    return container
           
}




books = document.querySelectorAll("img")

for(let book of books){
 
  if (!book && window.innerWidth >= 300){
    //1 
    key = book.getAttribute('src').split('/')[1].replace('.png', '')
    

   //2
   title = localStorage.getItem(key+"_title")
   pages = localStorage.getItem(key+"_pages")
   ref   = localStorage.getItem(key+"_publish_ref")
   url   = book.getAttribute('src')
   
   //3
   div = CreateRouteDiv({"title":title, "pages":pages, "ref":ref, "url":url})
   div.style.setProperty("display", "none")
   

   //4
   book.after(div)
 
  }

}

// 5 

if (window.innerWidth <= 400){
document.querySelector('.hide').remove()
}