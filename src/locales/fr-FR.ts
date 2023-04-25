import component from './fr-FR/component';
import globalHeader from './fr-FR/globalHeader';
import menu from './fr-FR/menu';
import pwa from './fr-FR/pwa';
import settingDrawer from './fr-FR/settingDrawer';
import settings from './fr-FR/settings';
import pages from './fr-FR/pages';
import notifications from './fr-FR/notifications';
import templates from './fr-FR/templates';
import consultations from './fr-FR/consultations';
import fabric from './fr-FR/fabric';
import vouchers from './fr-FR/vouchers';
import courses from './fr-FR/courses';

export default {
  parent: 'Parent',
  parent_lesson: 'Leçon parente',
  courseAccessEnquiries: "Demandes d'accès au cours",
  'menu.Other activities.Tasks': 'Tâches',

  file_resources: 'Ressources de fichiers',
  select_user_role: "Sélectionnez le rôle de l'utilisateur",
  select_user_group: "Sélectionnez le groupe d'utilisateurs",
  groups: 'Groupes',
  'navBar.lang': 'Langues',
  'layout.user.link.help': 'Aide',
  'layout.user.link.privacy': 'Confidentialité',
  'layout.user.link.terms': 'Conditions',
  'app.preview.down.block': 'Téléchargez cette page pour votre projet local',
  'app.welcome.link.fetch-blocks': 'Obtenez tous les blocs',
  'app.welcome.link.block-list':
    'Construisez rapidement des pages standards basées sur le développement de blocs',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
  ...notifications,
  ...templates,
  ...consultations,
  ...fabric,
  ...vouchers,
  ...courses,
  branding: 'Image de marque',
  product_details: 'Détails du produit',
  title: 'Titre',
  options: 'Options',
  base_price: 'Prix de base [¢]',
  base_price_tooltip: 'Prix de base [¢]. Utilisez 0 pour un cours gratuit',
  duration: 'Durée',
  duration_tooltip: 'Durée, exemple "1 heure"',
  categories: 'Catégories',
  tags: 'Mots-clés',
  H5Ps: 'H5Ps',
  new: 'nouveau',
  library: 'Bibliothèque',
  access: 'Accès',
  answers: 'Réponses',
  'menu.Courses': 'Cours',
  'menu.Courses.List': 'Liste',
  'menu.Courses.Form': 'Formulaire',
  'menu.Sales': 'Ventes',
  'menu.Users': 'Utilisateurs',
  'menu.Users.List': 'Liste',
  'menu.Users.User': 'Utilisateur',
  'menu.Users.User Form': 'Utilisateurs',
  'menu.Welcome': 'Bienvenue',
  'menu.Courses.Course Form': 'Formulaire de cours',
  'menu.Users.Form': 'Formulaire',
  'menu.Courses.H5Ps': 'H5Ps',
  'menu.Courses.Categories': 'Catégories',
  'menu.Configuration': 'Configuration',
  'menu.Configuration.Files': 'Fichiers',
  'menu.Configuration.Translations': 'Traductions',
  'menu.Other activities.Pages': 'Pages',
  'menu.Sales.Payments': 'Paiements',
  'menu.Sales.Orders': 'Commandes',
  'menu.Sales.Products': 'Produits',
  'menu.Courses.SCORMs': 'SCORMs',
  'menu.Configuration.settings': 'Paramètres',
  'menu.Analytics.reports': 'Rapports',
  'menu.Courses.Webinars': 'Webinaires',
  'menu.Users.User Groups': "Groupes d'utilisateurs",
  'menu.Other activities.Questionnaire': 'Questionnaires',
  'menu.Other activities.Questionnaire Form': 'Formulaire de questionnaire',
  'menu.Other activities': 'Autres activités',
  'menu.Other activities.Consultations': 'Consultations',
  'menu.Other activities.StationaryEvents': 'Événements fixes',
  'menu.Analytics.Logs': 'Journaux',
  'menu.Sales.Vouchers': 'Bons de réduction',
  'stationary_event.edit': 'Modifier un événement fixe',
  stationary_event: 'Événement fixe',
  finished_at: 'Date de fin',
  finished_at_tooltip: 'Date de fin',
  started_at: 'Date de début',
  started_at_tooltip: 'Date de début',
  max_participants: 'Nombre maximum de participants',
  max_participants_tooltip: 'Nombre maximum de participants',
  StationaryEvents: 'Événements fixes',
  'menu.reset': 'réinitialiser',
  'menu.settings': 'Paramètres',
  'menu.Settings': 'Paramètres',
  id: 'id',
  place: 'Lieu',
  place_tooltip: 'Lieu',
  user_groups: "Groupes d'utilisateurs",
  new_user_group: "Nouveau groupe d'utilisateurs",
  edit_user_group: "Modifier le groupe d'utilisateurs",
  add_person_to_group: 'Ajouter une personne au groupe',
  user_settings: 'Paramètres utilisateur',
  global_settings: 'Paramètres globaux',
  'user.settings': 'Paramètres utilisateur',
  'user.settings.overwrite': 'Tout écraser',
  Active: 'Actif',
  address: 'Adresse',
  Inactive: 'Inactif',
  active: 'Actif',
  inactive: 'Inactif',
  draft: 'Brouillon',
  published: 'Publié',
  archived: 'Archivé',
  slug: 'Slug',
  name: 'Nom',
  ID: 'ID',
  newCategory: 'Créer une nouvelle catégorie',
  editCategory: 'Modifier la catégorie',
  parent_category: 'Catégorie parente',
  is_active: 'Actif ?',
  parent_id: 'Catégorie parente',
  parent_id_tooltip: 'La catégorie parente à laquelle la nouvelle catégorie sera assignée',
  parent_id_group: 'Groupe parent',
  parent_id_group_tooltip: 'Rechercher par ID',
  registerable: 'Enregistrable',
  edit: 'Modifier',
  delete: 'Supprimer',
  deleteQuestion: 'Êtes-vous sûr de vouloir supprimer cet enregistrement ?',
  payments: 'Paiements',
  order: 'Commande',
  orders: 'Commandes',
  amount: 'Montant',
  status: 'Statut',
  users: 'Utilisateurs',
  user: 'Utilisateur',
  first_name: 'Prénom',
  last_name: 'Nom de famille',
  email: 'Email',
  email_tooltip: 'Email',
  email_resend: 'Email renvoyé',
  event: 'Événement',
  general: 'Général',
  password: 'Mot de passe',
  current_password: 'Mot de passe actuel',
  new_password: 'Nouveau mot de passe',
  new_confirm_password: 'Confirmer le nouveau mot de passe',
  notifications: 'Notifications',
  change_password: 'Changer le mot de passe',
  search: 'Rechercher',
  search_tooltip_1: 'Recherchera dans le prénom, nom de famille et email',
  search_tooltip_user_groups: 'Recherchera dans le nom',
  roles: 'Rôles',
  rodo: 'Politique de confidentialité',
  regulations: "Conditions d'utilisation",
  permissions: 'Autorisations',
  verified: 'Vérifié',
  not_verified: 'Non vérifié',
  is_email_verified: 'Email vérifié ?',
  email_verified: 'Email vérifié',
  dateRange: 'Période',
  created_at: 'Créé le',
  create_new: 'Créer',
  updated_at: 'Mis à jour le',
  unsaved_changes: 'Les modifications que vous avez apportées pourraient ne pas être enregistrées.',
  currency: 'Devise',
  subtotal: 'Sous-total',
  tax: 'Taxe',
  total: 'Total',
  items: 'Articles',
  author: 'Auteur',
  course: 'Cours',
  select: 'Sélectionner',
  select_tags: 'Sélectionner des tags',
  to: 'à',
  select_person: 'Sélectionner une personne',
  select_course: 'Sélectionner un cours',
  select_templates: 'Sélectionner un modèle',
  select_type_topic: 'Sélectionner le type de sujet pour continuer',
  select_scorm_package: 'Sélectionner un package SCORM',
  select_certificate_package: 'Sélectionner un modèle de certificat',
  billable: 'Facturable à',
  payable: 'Payable à',
  newH5P: 'Nouveau fichier H5P',
  H5P_scorm_preview: 'Aperçu du contenu H5P. SCORM',
  H5P_uploaded: 'Nouveau fichier H5P téléchargé avec succès',
  H5P_preview_title: 'Aperçu du contenu H5P. HTML',
  H5P_new_content_title: 'H5p. Nouveau',
  H5P_edit_content_title: 'H5p. Modifier',

  H5P_select_content: 'Sélectionner du contenu pour H5P',
  upload_click_here: 'Cliquez ici pour ajouter un fichier',
  upload: 'Ajouter un fichier',
  preview: 'Aperçu',
  export: 'Exporter',
  able_to_preview: 'Capable de prévisualiser',
  loading_content: 'Chargement du contenu...',
  preview_content: 'Prévisualiser le contenu',
  version: 'Version',
  SCOS: 'Objets de contenu partageable (SCOS)',
  assign: 'Assigner',
  newScorm: 'Nouveau SCORM',
  scorm_uploaded: 'Nouveau SCORM téléchargé',
  yes: 'Oui',
  no: 'Non',
  cantDelete: "Vous ne pouvez pas supprimer cette catégorie car elle est parente d'autres",
  group: 'Groupe',
  key: 'Clé',
  type: 'Type',
  enumerable: 'Énumérable',
  note: 'Note',
  public: 'Public',
  value: 'Valeur',
  editSetting: 'Modifier',
  newSetting: 'Créer',
  success: 'Succès',
  error: 'Erreur',
  loading: 'Chargement',
  subtitle: 'Sous-titre',
  hour: 'Heure',
  language: 'Langue',
  level: 'Niveau',
  active_from: 'Actif depuis',
  active_to: "Actif jusqu'à",
  hours_to_complete: 'Heures pour terminer',
  purchasable: 'Achetable',
  findable: 'Trouvable',
  target_group: 'Groupe cible',
  author_tutor: 'Auteur / Tuteur',
  summary: 'Résumé',
  summary_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  short_description: 'Short description',
  description: 'Description',
  description_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  attributes: 'Attributes',
  new_course: 'New course',
  new_questionnaire: 'New Questionnaire',
  questionnaires: 'Questionnaires',
  questionnaire: 'Questionnaire',
  'questionnaire.submit': 'Submit',
  'questionnaire.raports.filter': 'Filter by assigned models',
  questions: 'Questions',
  question_list: 'Questions list',
  question_add: 'Add question',
  question_edit: 'Edit question',
  media: 'Media',
  image: 'Image',
  poster: 'Poster',
  video: 'Video',
  audio: 'Audio',
  categories_tags: 'Categories & Tags',
  program: 'Program',
  program_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown',
  position: 'Position',
  scorm: 'SCORM',
  add_new_lesson: 'Ajouter une nouvelle leçon',
  lesson: 'Leçon',
  topic: 'Sujet',
  topics: 'Sujets',
  topic_list: 'Liste des sujets',
  topic_types: 'Types de sujets',
  tutor: 'Tuteur',
  tutors: 'Tuteurs',
  add_new_topic: 'Ajouter un nouveau sujet',
  no_topics: "Il n'y a pas encore de sujets dans cette leçon",
  no_data: 'Aucune donnée',
  create: 'Créer',
  save: 'Enregistrer',
  relase_drop: 'Relâcher pour déposer',
  drag_here: 'Faites glisser une boîte ici',
  sort_element_up: 'Trier cet élément vers le haut',
  sort_element_down: 'Trier cet élément vers le bas',
  copy_lesson: 'Copier la leçon',
  copy_topic: 'Copier le sujet',
  'h5p.description.header': 'Informations H5P',
  'h5p.description.first':
    "Pour assigner un élément HTML5 interactif à un sujet de leçon, vous devez d'abord le ",
  'h5p.description.second': 'créer',
  'h5p.description.third': ' ou en utiliser un ',
  'h5p.description.fourth': 'de la liste',
  'h5p.description.fifth': " s'il est déjà créé. Appuyez sur le bouton",
  'h5p.description.sixth':
    'pour voir à quoi ressemble le contenu et voir la liste des événements `XAPI`.',
  my_profile: 'Mon profil',
  logout: 'Déconnexion',
  bio: 'Bio',
  bio_tooltip:
    "L'éditeur est WYSIWYG et inclut des outils de mise en forme tout en conservant la possibilité d'écrire des raccourcis Markdown en ligne et de générer du Markdown brut.",
  avatar: 'avatar',
  avatar_placeholder: 'Ajouter un avatar pour voir un aperçu',
  wysiwyg_placeholder:
    "Tapez ici pour voir les fonctionnalités de l'éditeur de texte enrichi. Commencez par '/' pour ouvrir les options de formatage ou cliquez sur le bouton '+'",
  edit_user: "Modifier l'utilisateur",
  new_user: 'Nouvel utilisateur',
  send: 'Envoyer',
  resend: 'Renvoyer',
  back: 'Retour',
  back_home: "Retour à la page d'accueil",
  '403_subtitle': "Désolé, vous n'êtes pas autorisé à accéder à cette page.",
  '404_subtitle': "Désolé, la page que vous avez visitée n'existe pas.",
  user_id: 'ID utilisateur: ',
  order_id: 'ID de la commande : ',
  course_id: 'ID du cours : ',
  consultation_id: 'ID de consultation : ',
  webinar_id: 'ID du webinar : ',
  stationary_event_id: "ID d'événement stationnaire : ",
  count_h5p: "Nombre d'H5P",
  library_id: 'ID de la bibliothèque',
  new_payment: 'nouveau',
  paid: 'payé',
  cancelled: 'annulé',
  cancel: 'Annuler',
  failed: 'échoué',
  clear_selection: 'Effacer la sélection',
  form: 'Formulaire',
  none: 'Aucun',
  too_many_chars: 'Trop de caractères',
  CoursesMoneySpentMetric: 'Métrique de dépenses en argent pour les cours',
  CoursesPopularityMetric: 'Métrique de popularité des cours',
  CoursesSecondsSpentMetric: 'Métrique de dépenses de temps en secondes pour les cours',
  TutorsPopularityMetric: 'Métrique de popularité des tuteurs',
  AverageTimePerTopic: 'Temps moyen par sujet',
  MoneyEarned: 'Argent gagné',
  CertificateTemplates: 'Modèles de certificats',
  AverageTime: 'Temps total',
  People: 'Personnes',
  PeopleBought: 'Personnes ayant acheté ce cours',
  PeopleFinished: 'Personnes ayant terminé ce cours',
  PeopleStarted: 'Personnes ayant commencé ce cours',
  reuse_existing: "Réutiliser l'existant",
  open_new_content_editor: 'Ouvrir un nouvel éditeur de contenu',
  content: 'Contenu',
  contact: 'Contact',
  country: 'Pays',
  slug_tooltip: "SLUG fait partie de l'URL des pages",
  sum_rate: 'Classement',
  count_answers: 'Nombre de réponses',
  content_tooltip:
    "L'éditeur est WYSIWYG et comprend des outils de mise en forme tout en conservant la possibilité d'écrire des raccourcis markdown en ligne et de produire du Markdown brut.",
  pages: 'Pages',
  import_users: 'Importer des utilisateurs',
  import_file: 'Importer un fichier',
  new_page: 'Nouvelle page statique',
  edit_page: 'Modifier une page statique',
  example_json: 'Exemple JSON',
  can_skip: 'Peut être omis',
  statistics: 'Statistiques',
  certificates: 'Certificats',
  query: 'Requête',
  reset: 'Réinitialiser',
  reset_password: 'Réinitialiser le mot de passe',
  search_file: 'Rechercher un fichier',
  open_editor: "Ouvrir l'éditeur",
  json: 'Métadonnées JSON',
  additional: 'Supplémentaire',
  json_tooltip: 'Métadonnées supplémentaires pour le rendu du cours',
  introduction: 'Introduction',
  introduction_tooltip:
    "L'éditeur est WYSIWYG et inclut des outils de mise en forme tout en conservant la possibilité d'écrire des raccourcis markdown en ligne et de produire du Markdown brut.",
  Push: 'Push',
  templates: 'Modèles',
  SMS: 'SMS',
  PDF: 'PDF',
  'menu.Analytics': 'Analytics',
  'menu.Analytics.Notifications': 'Notifications',
  'menu.Users.Roles': 'Rôles',
  'menu.Configuration.Templates': 'Templates',
  'menu.Users.Permissions': 'Permissions',
  new_template: 'Nouveau modèle',
  template: 'Modèle',
  contentHtml: 'Contenu HTML',
  contentMjml: 'Contenu Mjml',
  html_tooltip: 'Contenu HTML',
  product: 'Produit',
  'product.edit': 'Modifier le produit',
  'menu.Other activities.Products': 'Produits',
  'menu.Other activities.Form': 'Formulaire',
  H5P: 'H5P',
  'webinar.edit': 'Modifier le webinar',
  role: 'Rôle',
  'course.validate_edit.header':
    'Ce cours est déjà en cours ! Êtes-vous sûr de vouloir le modifier ?',
  'course.validate_edit.content':
    'Vous ne devriez pas modifier ce cours car il est déjà en cours. En cliquant sur OK, vous pourrez modifier, mais vous le faites à vos propres risques.',
  Course: 'Cours',
  Consultation: 'Consultation',
  limit_total: 'Limite totale',
  limit_total_tooltip: 'Nombre maximum de produits pouvant être achetés',
  limit_per_user: 'Limite par utilisateur',
  limit_per_user_tooltip:
    "Limite d'achat par personne. Par exemple, une valeur de 1 permettra à l'utilisateur d'acheter un produit",
  extra_fees: 'Frais supplémentaires',
  extra_fees_tooltip: "Frais supplémentaires qui seront facturés lors de l'achat du produit",
  price_old: 'Prix ancien',
  price_old_tooltip: 'Ancien prix qui sera affiché barré à côté du prix actuel',
  tax_value: 'Valeur de la taxe',
  tax_value_tooltip: 'Valeur de la taxe, calculée automatiquement',
  price_brutto: 'Prix brut',
  price_brutto_tooltip: 'Prix brut du produit, calculé automatiquement',
  tax_rate: 'Taux de taxe',
  tax_rate_tooltip: 'Taux de taxe spécifié en pourcentage',
  price: 'Prix',
  price_tooltip: 'Prix du produit',
  teaser_url: 'URL de teaser',
  teaser_url_tooltip: 'URL de teaser',
  select_product: 'Sélectionner le produit',
  productables: 'Objet assigné au produit',
  productables_tooltip: 'Objet assigné au produit',
  bundle: 'Pack',
  single: 'Unité',
  StationaryEvent: 'Événement fixe',
  default: 'Valeur par défaut',
  text: 'texte',
  varchar: 'varchar',
  number: 'nombre',
  boolean: 'booléen',
  editModelField: 'Modifier le champ de modèle',
  ModelFields: 'Champs de modèle',
  list: 'Liste',
  newModelField: 'Nouveau champ de modèle',
  notPowerOfTwo: "Ce n'est pas une puissance de 2",
  rules: 'Règles',
  visibility: 'Visibilité',
  name_tooltip: 'Nom',
  type_tooltip: 'type de champ',
  rules_tooltip:
    'une liste de règles de chaînes JSON utilisées lors de la création/mise à jour du modèle',
  extra_tooltip: 'une description supplémentaire en JSON',
  default_tooltip: "valeur par défaut, si le modèle n'a pas de valeur, celle-ci sera utilisée",
  purchasable_tooltip:
    "L'utilisateur peut-il acheter ce produit ou est-il disponible uniquement par attribution manuelle ?",
  visibility_tooltip:
    "visibilité du champ. Doit être une puissance de 2. Utilisez 1 pour l'accès public, 2 pour les utilisateurs autorisés, 4 pour les administrateurs et le reste est à votre discrétion.",
  'available-validation-rules': 'règles de validation disponibles',
  Products: 'Produits',
  free: 'gratuit',
  free_capi: 'Gratuit',
  prices: 'Prix',
  additional_fields: 'Champs supplémentaires',
  user_to_add: 'Attacher un utilisateur au produit',
  user_submission: 'Utilisateurs attachés sans compte',
  email_to_add: 'Ajouter un utilisateur par adresse e-mail',
  Webinar: 'Webinaire',
  productable: 'Entité',
  all: 'Tous',
  categories_and_tags: 'Catégories et étiquettes',
  course_edit_warning_message:
    'Cet enregistrement est déjà en cours, si vous souhaitez modifier, cliquez sur Confirmer. Vous modifiez à vos propres risques',
  user_logs: "Journaux d'utilisateurs",
  http_method: 'Méthode HTTP',
  path: 'Chemin',
  generated_pdfs: 'PDF générés',
  download_all: 'Tout télécharger',
  download_pdf: 'Télécharger le PDF',
  select_content: 'Sélectionner le contenu',
  exclude_promotions: "Peut-il être combiné avec d'autres promotions",
  generate: 'Générer',
  generate_pdf: 'Générer des PDF',
  generate_pdf_tooltip: 'Générer des PDF',
  generate_pdf_users_tooltip:
    'Cliquez sur ce bouton pour générer un PDF pour ce modèle pour tous les utilisateurs de la liste',
  generate_pdf_products_tooltip:
    'Cliquez sur ce bouton pour générer un PDF pour ce modèle pour tous les utilisateurs qui ont acheté le produit sélectionné',
  generate_pdf_for_products_tooltip:
    'Cliquez sur ce bouton pour générer un PDF pour le modèle sélectionné pour tous les utilisateurs qui ont acheté ce produit',
  select_template: 'Sélectionner le modèle',
  product_categories_and_tags: 'Catégories et étiquettes de produits',
  cart_media: 'Médias du panier',
  agenda: 'Agenda',
  users_attached: 'Utilisateurs attachés',
  generate_token: 'Générer un jeton YouTube',
  browse: 'Parcourir les fichiers',
  related_products: 'Produits connexes',
  selected_products: 'Objets sélectionnés',
  quantity: 'Quantité',
  gt_last_login_day: '>= Dernière connexion il y a n jours',
  lt_last_login_day: '<= Dernière connexion il y a n jours',
  json_editor: "Ouvrir l'éditeur JSON",
  created_before: 'Créé avant',
  created_after: 'Créé après',
  redirect: 'Redirection',
  logotype: 'Logotype',
  published_unactivated: 'Publié non activé',
  active_from_extra: 'Sélectionnez une date de début de vente',
  active_to_extra: 'Sélectionnez une date de fin de vente',
  duration_extra: 'Spécifiez la durée en minutes',
  course_success_modal_title: 'Félicitations !',
  course_success_modal_content:
    'Vous avez créé un cours. Vous pouvez maintenant créer des leçons pour votre cours.',
  course_success_modal_button_ok: 'Créer des modules',
  course_success_modal_button_cancel: 'Aller à la page du cours',
  program_form_empty_list_message:
    "Vous n'avez pas encore de contenu à afficher. Créez votre première leçon pour commencer.",
  program_form_not_selected_list_message: 'Sélectionnez une leçon ou un sujet à modifier.',
  clone: 'Cloner',
  drag_topic_tooltip: 'Cliquez pour modifier ou glissez-déposez pour réorganiser le sujet.',
  invalidDate: 'Date invalide',
  badPassword: 'min. 8 caractères, 1 lettre majuscule, 1 caractère spécial (!@#$%^&*))',
  product_widget_title: 'Attributs du produit',
  product_widget_tooltip: 'Tous les attributs ci-dessous sont uniquement liés au produit',
  course_guide_title: 'Pas sûr de savoir comment créer un cours ?',
  course_guide_text: 'Consultez notre guide et apprenez comment le faire.',
  global_settings_alert_title: 'Ajouter des paramètres globaux',
  global_settings_alert_description:
    'Les paramètres globaux sont utilisés pour partager des données dans tout le LMS. Vous pouvez ajouter des paramètres globaux en cliquant sur le bouton ci-dessous.',
  go_to_platform: 'Aller à votre plateforme',
  manage_course: 'Gérer le cours',
  tutorial: 'Tutoriel',
  tutorial_card_left_title: 'Vous êtes prêt à partager vos connaissances.',
  tutorial_card_left_description:
    'Utilisez nos meilleures pratiques et recommandations pour planifier, produire et publier un cours substantiel et de haute qualité.',
  tutorial_card_right_title: 'Pas sûr de savoir comment créer un cours ?',
  tutorial_card_right_description: 'Consultez notre guide et apprenez comment le faire.',
  learn_more: 'En savoir plus',
  your_courses: 'Vos cours',
  ratings: 'Évaluations',
  ratings_description: 'Mesurez la note donnée à vos cours',
  unverified: 'Non vérifié',
  download: 'Télécharger',
  newTranslation: 'Nouvelle traduction',
  documentation: 'Documentation',
  hall_of_fame: 'Galerie de la renommée',
  current_user_status: "Statut de l'utilisateur actuel",
  public_course: 'Public',
  no_pricing: 'Sans prix/accès',
  public_label: 'Est public',
  public_tooltip: 'Le cours est accessible à tout le monde sans avoir de compte',
  changesToBeApproved: 'Modifications à approuver',
  orderHasBeenChanged: "L'ordre a été modifié",
  or: 'ou',
  no_base_url: "La valeur de 'return_url' n'est pas définie. Allez à : ",
  max_attempts: 'Nombre de tentatives maximal',
  max_execution_time: "Temps d'exécution maximal",
  status_consultation_tooltip: 'Statut',
  tutor_consultation_tooltip: 'Tuteur',
  proposed_terms_tooltip: 'Termes proposés',
  field_required: 'Champ requis',
  user_projects: 'Projets utilisateur',
  project_solutions: 'Solutions de projet utilisateur',
  'Course cloning started. This may take a while.': 'Cela peut prendre un peu de temps',
  'Course deleted successfully': 'Cours supprimé avec succès',
  'Course imported successfully': 'Cours importé avec succès',
  'Course updated successfully': 'Cours mis à jour avec succès',
  'Export created': 'Fichier exporté avec succès',
};
