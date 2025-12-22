
///////////////////// books : une liste de dictionnaires //////////////




booksData = [

      {
   picture: "imgs/johnGLake.png",
   title: "The Collected Work of John G. Lake",
   publish_ref: "John Bawn Digital",
   pages: 823,
   sum_up: "Un condense des sermons du prophète John G. Lake, grand pentécostique et guerisseur.",
   langue: "Anglais",
   file_path:"books/chretiens/johnGLake.pdf",
   
   },

   { 
   picture: "imgs/foi.png",
   title: "La Foi Est l'Assurance",
   publish_ref: "William Marrion Brahnam",
   pages: 32,
   sum_up: "predication de William Marrion Braham du 12 Avril 1947",
   langue: "Français",
   file_path: "books/chretiens/faith.pdf"
   },

   { 
   picture: "imgs/bible21.png",
   title: "La Bible Second 21",
   publish_ref: "Importantia Publishing",
   pages: 3533,
   sum_up: "la bible chretienne", 
   langue: "Francais",
   file_path: "books/chretiens/Bible21.pdf"
   },

   {
   picture: "imgs/meditation.png",
   title: "Comment etudier la bible ?",
   publish_ref: "Vie, Espoir et Vérité",
   pages: 24,
   sum_up: "livre conçu pour apprendre à comprendre la parole de Dieu. Il contient des evaluations après chaque chapitre.",
   file_path: "books/chretiens/meditation.pdf"

   },

       {
      picture: "imgs/onething.png",
      title: "The One Things_ The Surprisingly truth behind extraodinary results",
      publish_ref: "Gary Keller & Jay Papasan,  Bard Press",
      pages: 295, 
      sum_up: "Envie de connaitre un des secrets des hommes d'affaires, les auteurs vous revèlent\n l 'ultime règle à suivre pour realiser vos rêves les plus ambitieux ou relevés \n le defi qui se dresse sur votre route.\n Quel est donc cette règle ? Gray et Papasan y repond par l'acceptation  d'une seule chose à faire, ce qui parrait a étonnant pour des ambitions \n qui nécessitent d'enormes taches à accomplir avant de dessiner leur silhouette\n  dans la réalité !\n Decouvrez ensemble avec Gary & Papasan, cette fameuse **chose** à faire. ",
      language: "Anglais",
      file_path: "books/selfs/CarryKiller&JayPapasan/oneThing.pdf"
     

   },

    {
   picture: "imgs/deepwork.png",
   title: "Deep Work",
   publish_ref: "Cal NewPort, Grand Central Publishing",
   pages: 220,
   sum_up: "livre qui developpe la concentration chez le lecteur, et favorise le travail.",
   langue: "Anglais",
   file_path: "books/selfs/CarlNewport/DeepWork.pdf"
   }, 

    {
   picture: "imgs/zerotoone.png",
   title: "Zero to One ",
   publish_ref: "Peter Thiel & Blake Masters, Crown Business",
   pages: 186,
   sum_up: "Fruit de long recherche sur le succès des GAFAM, Zero to One de Peter Thiel et son étudiant Blake Masters, reste une voie simple pour comprendre le fonctionnement de firme à succès.",
   langue:'Anglais',
   file_path: "books/selfs/PeterThiel&BlakeMasters/ZerotoOnebook.pdf"

   },

   {
   picture: "imgs/student.png",
   title: "How to Become a straight-A student",
   publish_ref: "Cal Newport, BroadWay Book",
   pages: 286,
   sum_up: "Comment exceller à l'univertisé ? Ou comment surmonter le stress et arriver en tête de liste là ou cela semble impossible ? Pas de panique, Newport à une recette pour vous : ce livre ! ",
   langue:"Anglais",
   file_path: "books/selfs/CarlNewport/student.pdf"

   },


   {
   picture: "imgs/algebre.png",
   title: "Cours Algèbre 2, ECUE 1",
   publish_ref: "Vincen Kouassi KouaKou",
   pages: 46,
   sum_up: "Cours d'algèbre de licence 1",
   langue:"Français",
   file_path: "books/educations/algèbre/algèbre.pdf"

   },

   {
   picture: "imgs/electrostatique.png",
   title: "Cours & Travaux dirigés de Physique (Electrostatique & Electricite)",
   publish_ref: "Keiita Mélalie",
   pages: 102,
   sum_up: "Cours d'électrostatique de licence 1",
   langue:"Français",
   file_path: "books/educations/electrostatique/ele.pdf"

},

   {
   picture: "imgs/sta.png",
   title: "cours de statistique",
   publish_ref: "Docteur Akon KPATA",
   pages: 103,
   sum_up: "Cours de statistique de licence 1", 
   langue: "Français",
   file_path: "books/educations/statistique/sta.pdf"

   },


      {
   picture: "imgs/analyse.png",
   title: "Analyse Mathematiques, licence 1",
   publish_ref: "Modeste Essoh",
   pages: 220,
   sum_up: "Cours d'Analyse de licence 1",
   langue:"Français", 
   file_path: "books/educations/analyse/analyse-1.pdf"

   },


   
	{

   picture: "imgs/languageC.png",
   title: "La programmation en C moderne",
   publish_ref: "Mehdidou99, zeste de Savoir",
   pages: 618,
   sum_up: "Cours sur le language C.",
   langue: "Français",
   file_path: "books/programmations/c/c.pdf"

	},


{
   picture: "imgs/latex.png",
   title: "Initiation à Latex",
   publish_ref: "Adrien Bouzigues",
   pages: 281,
   sum_up: "Petit manuel pratique pour connaitre les commandes de bases en latex et des notions pour debuter.",
   langue: "Français",
   file_path: "books/programmations/latex/guide-latex-fr.pdf"

	},

   {
   picture: "imgs/tkinter.png",
   title: "Python and Tkinter Programming",
   publish_ref: "John E. Grayson, Manning Greenwich",
   pages: 684,
   sum_up: "Cours sur le module Tkinter (ecrit en language C et utilisé en language Python).",
   langue: "Français",
   file_path: "books/programmations/frontend/tkinter/tkinter.pdf"

	},

	{
   	picture: "imgs/kivy.png",
   	title: "Kivy Blue Print",
   	publish_ref: "Mark Vasilkov, Packt Publishing",
   	pages: 282,
   	sum_up: "Module fréquemment utilisé pour la création des interfaces en python, Kivy reste le choix idéal si vous entamer la conception de Gui.",
   	langue: "Anglais",
        file_path: "books/programmations/python/frontend/kivy/KivyBluePrint.pdf"

	},
]



///////////////////// les fonctions ///////////////////////////////////

function Author(){

	let description = "Gnabrosky - octobre 2025 \n email: ambroiseisrael95@gmail.com"
	console.log(description)
}

function Storage(){
/* stock certains données via localStorage dans le navigateur, 
   pour permettre le partage de certains proprietés de booksData
   via les autres fichiers js. 
    		- idée originale, Gnabro Israel
*/


for(let book of booksData){
	key = book.picture.substring(book.picture.indexOf('/'), book.picture.length-4).split('/')[1]
        localStorage.setItem(key + "_title", book.title)
        localStorage.setItem(key + "_publish_ref", book.publish_ref)
        localStorage.setItem(key + "_pages", book.pages)


}

}


function getBook(i){
	return [booksData[i], booksData[i+1], booksData[i+2], booksData[i+3]]
}


function show_popup(file_path){
   
   let popup_window = document.querySelector('#book-description')

  
   popup_window.classList.remove('hide')
   popup_window.classList.add('visible')

   // connexion des fonctions de fermeture du popup 
   // et ouverture de document aux boutons correspondant
   let close_button = document.querySelector('#book-description h1 button')
   let open_button = document.querySelector('#description button')

  
   close_button.addEventListener('click', (button) => { 
		remove_popup()

                // retirer l'evenement déjà existant si possible...
		open_button.removeEventListener('click', open_file)
	})

   open_button.addEventListener('click', open_file, {once: true} )

   function remove_popup(){
	 popup_window.classList.remove('visible')
         popup_window.classList.add('hide')
}
   function open_file(){
	window.open(file_path)
        remove_popup()
}


}

function PopupHandler(img){

   //donnée a extraire du param_tre img
    //index, dom, info, picture

   if ( document.querySelector('#book-description') !== null ) {
   let popup_window = document.querySelector('#book-description')

   let popup_data = [document.querySelector('#description h2'), 
                     document.querySelector('#description h3'),
                     document.querySelector('#description h5'),
                     document.querySelector('#description p')]

    src = img.src.substring(img.src.indexOf('imgs'), img.src.length) // prendre lê nom unique de l'image a partir de imgs/...
    
for (let data of booksData){
      
      if (src == data.picture){
         popup_window.children[1].setAttribute('src', data.picture)
         
         popup_data[0].textContent = data.title
         popup_data[1].textContent = data.publish_ref
         popup_data[2].textContent = data.pages + " pages"
         popup_data[3].textContent = data.sum_up
         
         
         show_popup(data.file_path)
      }// fin de l'ajout des information et de l'apparition du popup
   }

   }

  
   
   
   
	
	
}



function TriggerCallback(book, post){
   let imgs = document.querySelectorAll('img')
   
   imgs.forEach(img => img.addEventListener('click', (img) => { PopupHandler(img.target) }))

}
   


function AddPictures(book, section, index){
 	
   book.children[2].children[index].setAttribute('src', getBook(section)[index].picture)
   book.children[2].children[index].setAttribute('post', getBook(section)[index].post)

        
}

 		 
function Connect(){
   let books = document.querySelectorAll("#first-topic, #second-topic, #third-topic, #fourth-topic")
   let idx = 0 // la position de la categorie
   
   for(let book of books){

      ///// ajouter les images /////

      // l'index des livres, remi a zero.
      let i = 0
      while (i <= 3 ){

         AddPictures(book, idx, i)
         i++;  

         }
      // changer la section de la page
      idx += 4;
      }

}

function removeDockInfo(){
/* supprime les informations sur le livre masqué pour les 
  smartphones 

*/

if (dockInfo){

 	for (dock of dockInfo){
 	
        dock.style.setProperty('display', 'none')
	}

   }
}


////////////////////////////////script principal ////////////////////////////////////////
Author()
Connect()
TriggerCallback()
Storage()
removeDockInfo()
