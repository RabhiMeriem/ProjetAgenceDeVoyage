import { Injectable } from '@angular/core';
import { Voyage } from '../Classes/voyage';

@Injectable({
  providedIn: 'root'
})
export class VoyageService {
  ListeV:Voyage[]=[
    new Voyage(7,"Tunisie","tunis",["../../assets/tunis.jpg","../../assets/tunis2.jpg","../../assets/tunis3.jpg","../../assets/tunis4.jpg"],"Venez découvrir la capitale tunisienne fondée par les Berbères. Une ville chargée d’histoire, contrôlée successivement par les Phéniciens, les Romains, les Arabes, les Ottomans, les Espagnols, les Français et les Alllemands ! Mélange de cultures anciennes et modernes garanti ! La Médina est incontournable avec ses charmantes mosquées, palaces et bien sûr les souks où vous pourrez marchander tout autant des babioles que des objets de valeur. Découvrez une vie nocturne animée dans le quartier magnifique de Sidi Bou Saïdfor.",2500,0,new Date("09/25/2021"),new Date("05/11/2021")),
    new Voyage(2,"France","Toulouse",["../../assets/toulouse.jpg","../../assets/toulouse2.jpg","../../assets/toulouse3.jpg","../../assets/toulouse4.jpg"],"Toulouse, dans le sud-ouest de la France, est une ville de contrastes.Visitez l'Académie des Jeux Floraux, la société littéraire la plus ancienne du monde occidental, ainsi que la Galerie du Château d'eau, le premier musée de photographie au monde. Promenez-vous le long de la Garonne avant de découvrir le plus bel orgue de France à la basilique Saint-Sernin. Malgré son architecture médiévale, Toulouse reste une ville moderne, berceau de l'industrie aérospatiale européenne, et les bars et restaurants animent la place du Capitole.",2500,25,new Date(2021,11,5),new Date(2021,11,9)),
    new Voyage(1,"France","Paris",["../../assets/paris.jpg","../../assets/paris2.jpg","../../assets/paris3.jpg","../../assets/paris4.jpg"],"Aucun autre endroit au monde ne fait autant rêver que Paris. La ville séduit par son art, son architecture, sa culture et sa cuisine, mais il y a aussi des merveilles plus discrètes qui n’attendent qu’à être explorées : les ruelles pavées pittoresques, les pâtisseries au coin de la rue et les petits bistrots douillets qui vous invitent à boire un verre de beaujolais. Préparez-vous à vous approprier Paris.",2500,15,new Date("09/05/2021"),new Date("05/11/2021")),
    new Voyage(4,"Allemagne","Berlin",["../../assets/berlin.jpg","../../assets/berlin2.jpg","../../assets/berlin3.jpg","../../assets/berlin4.jpg"],"De sa mode jusqu'à son architecture en passant par sa riche histoire politique, Berlin a toujours été une ville d'avant-garde. Le mur de Berlin est un triste rappel de l'atmosphère pesante qui planait sur la ville après la guerre. Malgré tout, les graffitis qui recouvrent désormais ce qu'il en reste sont devenus le symbole du progrès social. Partez découvrir le Weltzeituhr, horloge universelle surmontée d'une reproduction du système solaire, puis remontez le temps à l'occasion d'un dîner au Zur Letzten Instanz, restaurant dont l'origine remonte au XVIe siècle et qui a compté Napoléon et Beethoven parmi ses clients.",2500,60,new Date("05/09/2021"),new Date("05/11/2021")),
    new Voyage(5,"Espagne","Madrid",["../../assets/madrid.jpg","../../assets/madrid2.jpg","../../assets/madrid3.jpg","../../assets/madrid4.jpg"],"Si Madrid ressemble à un conte de fées, c'est parce qu'elle abrite de nombreux édifices dont l'architecture rappelle de magnifiques châteaux. Même l'Hôtel de Ville, orné de pinacles blancs et d'éléments au style néogothique, vous surprendra. Si vous souhaitez découvrir l'architecture madrilène par vous-même, la grande statue de l'Ours et de l'arbousier sur la place de la Puerta del Sol dans le centre-ville est un bon point de départ. Faites un tour dans le quartier du Palais royal avant de vous laisser imprégner par la beauté naturelle du parc du Retiro, puis enchaînez avec la visite d'un des nombreux musées que compte la ville. L'art s'invite aussi à votre table, alors ne manquez pas de terminer la journée en dégustant un bel assortiment de tapas avec un verre de vin de la Rioja.",2500,0,new Date("09/19/2021"),new Date("05/11/2021")),
    new Voyage(6,"America","New York",["../../assets/newYork.jpg","../../assets/newYork2.jpg","../../assets/newYork3.jpg","../../assets/newYork4.jpg"],"Les plus hauts buildings, les plus grands musées et la meilleure pizza : New York City est la ville des superlatifs, auxquels elle fait largement honneur. Avec l'incroyable scène de Broadway, les splendides galeries du MoMA, les boutiques de SoHo et la multitude de restaurants proposant des plats de tous les coins du monde, vous découvrirez une nouvelle ville à chacune de vos visites. Mais au-delà de ces lieux emblématiques, on trouve un New York moins connu. Même lors d'une courte promenade, vous découvrirez sans aucun doute des boutiques vintage et des cafés fréquentés seulement par les locaux. Et lorsque la foule et le bruit vous fatiguent, levez les yeux : ces gratte-ciel uniques vous rappelleront pourquoi vous souhaitiez tant venir.",2500,50,new Date("09/13/2021"),new Date("05/11/2021"))
  ];
  listeVtrie:Voyage[]=this.ListeV;
  constructor() {}
  getVoyages()
  {return this.ListeV;}
  getVoyageById(id:number)
  {return this.ListeV.find(v=>v.id==id);}
  VoyagesByPays(pays:string)
  {
    this.listeVtrie=this.listeVtrie.filter(v=>v.pays==pays);
    return this.listeVtrie;
    }
  VoyagesByDate(Dep:Date,Arr:Date)
  {this.listeVtrie=this.listeVtrie.filter(v=>v.date_dep==Dep &&v.date_arr==Arr);
  return this.listeVtrie;}
  }
