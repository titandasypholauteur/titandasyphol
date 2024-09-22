var html =  '<!DOCTYPE html>'+
'html>'+
'<head>'+
'title>Mes écrits</title>'+
'h1><center>Mes Écrits</center></h1> <br />'+
'</head>'+
'<link rel="stylesheet" href="style.css">'+
'<body>'+
'   <main>'+
'       <h1>Contexte</h1> <br />'+
'       <p>Quoique ne sois pas encore un écrivain, l\'écriture est ma principale thérapie.</p>'+
'       <p>N\'arrivant pas à faire passer des messages plus que cruciaux, j\'ai tout essayé : vidéos (notamment sur tik-tok), blogs, des écrits et même ChatGPT, l\'aquaboxing (des arts martiaux en piscine).</p>'+
'       <p>J\'ai commencé en deux mille dix-huit, une des pires (mais aussi de rares meilleurs moments) de ma vie, à écrire sur différentes thématiques sans forcément publier.</p>'+
'       <p>Je me suis dit que si Paul El-Kharrat, Josef Schovanec et Daniel Tammet s\'en sont sortis, je peux y\'arriver. Soit, cela prendra certainement du temps. Mais plus vite tu me soutiendras, plus vite je pourrai pleinement vivre de mes écrits.</p>'+
'       <br />'+
'       <h1>Mes ouvrages</h1> <br />'+
'       <h2><i>Mon monde rouge et blanc</i></h2> <br />'+
'       <p> Après toutes ces années de travail, mon premier ouvrage a enfin été publié le mercredi vingt-six juin deux mille vingt-quatre. Le coeur du récit se trouve dans la seconde partie qui est une véritable extériorisation à la manière du j\'accuse : un exercice d\'improvisation.</p>'+
'      <p>Je tiens à te prévenir : la partie deux et la partie trois sont très costauds à lire. En extériorisant mes démons, tu auras potentiellement une moins bonne image d\'un certain nombre de personnes, peut-être de moi. Si tel est le cas, contente-toi du prologue, de la première partie et de l\'épilogue.</p> <br />'+
'      <a href="https://www.lysbleueditions.com/produit/mon-monde-rouge-et-blanc/">Mon monde rouge et blanc</a> <br />'+
'      <br />'+
'      <img src="kouverturemonmonderougetblanc.png"><br />'+
'      <p>D\'autres ouvrages sont prévus. Je sais, tu as hâte. Ma vie est bien remplie entre mon travail, le body balance, les MOOC (en partie grâce auxquels je code ce site), etc, etc, etc...</p>'+
'   <p>Sans compter que la maison d\'éditions impose de commander une quarantaine d\'ouvrages et de faire des photos chez un professionnel. Ce qui m\'a coûté sept cents euros (un loyer quoi). Donc plus vite tu me soutiendras, plus vite j\'aurai amorti cet investissement voire pourrai en vivre, plus vite je pourrai te partager la suite, tenant compte des frais de livraison cités précédemment.</p><br />'+
'   <ul><a href="index.html">Retour page d\'accueil</a>'+
'		'+
'   </ul>'+
''+
'   </main>'+
''+
'/body>'+
'br />'+
'footer>'+
'   <a href="https://www.linkedin.com/in/titan-dasyphol-470a53317/">LinkedIn</a>  <a href="https://github.com/titandasypholauteur">github</a> <a href="https://x.com/titandasyphol">X</a>   <a href="https://www.instagram.com/titan_dasyphol_auteur/">Instagram</a> <br /> '+
'    <h4><center>Remarques et suggestions</center></h4>'+
''+
'p>Salut!</p>'+
'p>Si tu as des questions, des remarques, des suggestions, merci de m\'envoyer un message via ce formulaire.</p>'+
''+
''+
'form id="inscription" class="formulaire" method="post" action="." onsubmit="document.getElementById(\'validator\').disabled=true;">'+
'	<fieldset class="">'+
'		<legend>Informations personnelles</legend>'+
'				<p class="champ">'+
'				<label for="prenom">Prénom</label>'+
'				<input id="prenom" name="prenom" value="" class="" />'+
'			</p>'+
'				<p class="champ">'+
'				<label for="nom">Nom</label>'+
'				<input id="nom" name="nom" value="" class="" />'+
'			</p>'+
'				<p class="champ">'+
'				<label for="email">courriel</label>'+
'				<input id="email" name="email" value="" class="" />'+
'			</p>'+
'				<p class="champ">'+
'				<label for="dtJr">Date de naissance</label>'+
'					<select name="dtJr" class="">'+
'					<option value=""></option>'+
'												<option value="1" >1</option>'+
'												<option value="2" >2</option>'+
'												<option value="3" >3</option>'+
'												<option value="4" >4</option>'+
'												<option value="5" >5</option>'+
'												<option value="6" >6</option>'+
'												<option value="7" >7</option>'+
'												<option value="8" >8</option>'+
'												<option value="9" >9</option>'+
'												<option value="10" >10</option>'+
'												<option value="11" >11</option>'+
'												<option value="12" >12</option>'+
'												<option value="13" >13</option>'+
'												<option value="14" >14</option>'+
'												<option value="15" >15</option>'+
'												<option value="16" >16</option>'+
'												<option value="17" >17</option>'+
'												<option value="18" >18</option>'+
'												<option value="19" >19</option>'+
'												<option value="20" >20</option>'+
'												<option value="21" >21</option>'+
'												<option value="22" >22</option>'+
'												<option value="23" >23</option>'+
'												<option value="24" >24</option>'+
'												<option value="25" >25</option>'+
'												<option value="26" >26</option>'+
'												<option value="27" >27</option>'+
'												<option value="28" >28</option>'+
'												<option value="29" >29</option>'+
'												<option value="30" >30</option>'+
'												<option value="31" >31</option>'+
'										</select>  /'+
'									<select name="dtMois" class="">'+
'					<option value=""></option>'+
'												<option value="1" >Janvier</option>'+
'												<option value="2" >Février</option>'+
'												<option value="3" >Mars</option>'+
'												<option value="4" >Avril</option>'+
'												<option value="5" >Mai</option>'+
'												<option value="6" >Juin</option>'+
'												<option value="7" >Juillet</option>'+
'												<option value="8" >Août</option>'+
'												<option value="9" >Septembre</option>'+
'												<option value="10" >Octobre</option>'+
'												<option value="11" >Novembre</option>'+
'												<option value="12" >Décembre</option>'+
'										</select>  /'+
'					<select name="dtAn" class="">'+
'					<option value=""></option>'+
'												<option value="2016" >2016</option>'+
'												<option value="2015" >2015</option>'+
'												<option value="2014" >2014</option>'+
'												<option value="2013" >2013</option>'+
'												<option value="2012" >2012</option>'+
'												<option value="2011" >2011</option>'+
'												<option value="2010" >2010</option>'+
'												<option value="2009" >2009</option>'+
'												<option value="2008" >2008</option>'+
'												<option value="2007" >2007</option>'+
'												<option value="2006" >2006</option>'+
'												<option value="2005" >2005</option>'+
'												<option value="2004" >2004</option>'+
'												<option value="2003" >2003</option>'+
'												<option value="2002" >2002</option>'+
'												<option value="2001" >2001</option>'+
'												<option value="2000" >2000</option>'+
'												<option value="1999" >1999</option>'+
'												<option value="1998" >1998</option>'+
'												<option value="1997" >1997</option>'+
'												<option value="1996" >1996</option>'+
'												<option value="1995" >1995</option>'+
'												<option value="1994" >1994</option>'+
'												<option value="1993" >1993</option>'+
'												<option value="1992" >1992</option>'+
'												<option value="1991" >1991</option>'+
'												<option value="1990" >1990</option>'+
'												<option value="1989" >1989</option>'+
'												<option value="1988" >1988</option>'+
'												<option value="1987" >1987</option>'+
'												<option value="1986" >1986</option>'+
'												<option value="1985" >1985</option>'+
'												<option value="1984" >1984</option>'+
'												<option value="1983" >1983</option>'+
'												<option value="1982" >1982</option>'+
'												<option value="1981" >1981</option>'+
'												<option value="1980" >1980</option>'+
'												<option value="1979" >1979</option>'+
'												<option value="1978" >1978</option>'+
'												<option value="1977" >1977</option>'+
'												<option value="1976" >1976</option>'+
'												<option value="1975" >1975</option>'+
'												<option value="1974" >1974</option>'+
'												<option value="1973" >1973</option>'+
'												<option value="1972" >1972</option>'+
'												<option value="1971" >1971</option>'+
'												<option value="1970" >1970</option>'+
'												<option value="1969" >1969</option>'+
'												<option value="1968" >1968</option>'+
'												<option value="1967" >1967</option>'+
'												<option value="1966" >1966</option>'+
'												<option value="1965" >1965</option>'+
'												<option value="1964" >1964</option>'+
'												<option value="1963" >1963</option>'+
'												<option value="1962" >1962</option>'+
'												<option value="1961" >1961</option>'+
'												<option value="1960" >1960</option>'+
'												<option value="1959" >1959</option>'+
'												<option value="1958" >1958</option>'+
'												<option value="1957" >1957</option>'+
'												<option value="1956" >1956</option>'+
'												<option value="1955" >1955</option>'+
'												<option value="1954" >1954</option>'+
'												<option value="1953" >1953</option>'+
'												<option value="1952" >1952</option>'+
'												<option value="1951" >1951</option>'+
'												<option value="1950" >1950</option>'+
'												<option value="1949" >1949</option>'+
'												<option value="1948" >1948</option>'+
'												<option value="1947" >1947</option>'+
'												<option value="1946" >1946</option>'+
'												<option value="1945" >1945</option>'+
'												<option value="1944" >1944</option>'+
'										</select>'+
'				</p>'+
'				<p class="champ">'+
'				<label for="sexe">Mode.s de communication de prédilection</label>'+
'					<span>'+
'					<select id="sexe" name="sexe" class="">'+
'					<option value="NULL"></option>'+
'					<option value="M" >'+
'						SMS'+
'					</option>'+
'					<option value="F" >'+
'						courriel'+
'					'+
'					<!-- <option value="S" >'+
'						Etre humain 3 -->'+
'						<!-- ça marche pas d\'erreur en modifiant les possibilités et en rajoutant -->'+
'					'+
'					<option value="=F">'+
'						Instagram'+
'					</option>'+
'					<option value="=F">'+
'						tik-tok'+
'					</option>'+
'					<option value="=F">'+
'						X'+
'					</option>'+
'					<option value="=F">'+
'						Youtube'+
'					</option>'+
'					</select>'+
'					</span>'+
'			</p>'+
'			'+
'				<!-- <p class="champ">'+
'				<label for="sexe">Sexe</label>'+
'					<span>'+
'					<select id="sexe" name="sexe" class="">'+
'					<option value="NULL"></option>'+
'					<option value="M" >'+
'						Homme'+
'					</option>'+
'					<option value="F" >'+
'						Femme'+
'					</option>'+
'					</select>'+
'					</span>'+
'			</p> -->'+
''+
'	'+
'						<p class="champ">'+
'		<label for="Info1">Téléphone</label>'+
'		<input id="Info1" name="Info1"	size="32" value="" class="" />'+
'	</p>'+
'	<p class="champ">'+
'		<label for="Info1">réseau.x social/sociaux</label>'+
'		<input id="Info1" name="Info1"	size="32" value="" class="" />'+
'	</p>'+
'	<p class="champ">'+
'		<label for="Info1">message</label>'+
'		<input id="Info1" name="Info1"	size="32" value="" class="" />'+
'	</p>	'+
'			</fieldset>'+
''+
''+
'<p class="submit">'+
'	<input type="submit" value="envoyer" name="validator" />'+
'</p>'+
'/form>'+
''+
'</footer>'+
'</html>';