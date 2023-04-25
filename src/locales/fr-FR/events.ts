export default {
  // AUTH
  'EscolaLms\\Auth\\Events\\AccountBlocked': 'Compte bloqué',
  'EscolaLms\\Auth\\Events\\AccountConfirmed': 'Compte confirmé',
  'EscolaLms\\Auth\\Events\\AccountDeleted': 'Compte supprimé',
  'EscolaLms\\Auth\\Events\\AccountMustBeEnableByAdmin':
    "Le compte doit être activé par l'administrateur",
  'EscolaLms\\Auth\\Events\\AccountRegistered': 'Compte enregistré',
  'EscolaLms\\Auth\\Events\\ForgotPassword': 'Mot de passe oublié',
  'EscolaLms\\Auth\\Events\\Login': 'Connexion',
  'EscolaLms\\Auth\\Events\\Logout': 'Déconnexion',
  'EscolaLms\\Auth\\Events\\PasswordChanged': 'Mot de passe modifié',
  'EscolaLms\\Auth\\Events\\ResetPassword': 'Réinitialiser le mot de passe',
  'EscolaLms\\Auth\\Events\\UserAddedToGroup': 'Utilisateur ajouté au groupe',
  'EscolaLms\\Auth\\Events\\UserRemovedFromGroup': 'Utilisateur supprimé du groupe',
  // SETTINGS
  'EscolaLms\\Settings\\Events\\SettingPackageConfigUpdated':
    'Configuration du package de configuration mise à jour',
  // CSV USER
  'EscolaLms\\CsvUsers\\Events\\EscolaLmsImportedNewUserTemplateEvent':
    "Importation d'un nouvel événement de modèle d'utilisateur",
  // TOPIC
  'EscolaLms\\TopicTypes\\Events\\TopicTypeChanged': 'Type de sujet modifié',
  // CONSULTATIONS
  'EscolaLms\\Consultations\\Events\\ApprovedTerm': 'Durée approuvée de la consultation',
  'EscolaLms\\Consultations\\Events\\ApprovedTermWithTrainer':
    'Consultation terme approuvé avec le formateur',
  'EscolaLms\\Consultations\\Events\\ChangeTerm': 'Consultation changement terme',
  'EscolaLms\\Consultations\\Events\\RejectTerm': 'Condition de rejet de la consultation',
  'EscolaLms\\Consultations\\Events\\RejectTermWithTrainer':
    'La consultation a rejeté le terme avec le formateur',
  'EscolaLms\\Consultations\\Events\\ReminderAboutTerm': 'Rappel de consultation sur le terme',
  'EscolaLms\\Consultations\\Events\\ReminderTrainerAboutTerm':
    'Consultation rappel formateur sur terme',
  'EscolaLms\\Consultations\\Events\\ReportTerm': 'Durée du rapport de consultation',
  // WEBINAR
  'EscolaLms\\Webinar\\Events\\ReminderAboutTerm': 'Rappel du webinaire sur le terme',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned': 'Formateur Webinart affecté',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned': 'Formateur de webinaire non attribué',
  // PAYMENT
  'EscolaLms\\Payments\\Events\\PaymentCancelled': 'Paiement annulé',
  'EscolaLms\\Payments\\Events\\PaymentFailed': 'Paiement échoué',
  'EscolaLms\\Payments\\Events\\PaymentRegistered': 'Paiement enregistré',
  'EscolaLms\\Payments\\Events\\PaymentSuccess': 'Paiement réussi',
  // COURSE
  'EscolaLms\\Courses\\Events\\CourseAccessFinished': 'Accès au cours terminé',
  'EscolaLms\\Courses\\Events\\CourseAccessStarted': "L'accès au cours a commencé",
  'EscolaLms\\Courses\\Events\\CourseAssigned': 'Cours attribué',
  'EscolaLms\\Courses\\Events\\CourseDeadlineSoon': 'Date limite du cours bientôt',
  'EscolaLms\\Courses\\Events\\CoursedPublished': 'Cours publié',
  'EscolaLms\\Courses\\Events\\CourseFinished': 'Cours terminé',
  'EscolaLms\\Courses\\Events\\CourseStarted': 'Cours commencé',
  'EscolaLms\\Courses\\Events\\CourseStatusChanged': 'Le statut du cours a changé',
  'EscolaLms\\Courses\\Events\\CourseTutorAssigned': 'Tuteur de cours assigné',
  'EscolaLms\\Courses\\Events\\CourseTutorUnassigned': 'Tuteur de cours non affecté',
  'EscolaLms\\Courses\\Events\\CourseUnassigned': 'Cours non attribué',
  'EscolaLms\\Courses\\Events\\TopicFinished': 'Sujet terminé',
  // STATIONARY EVENT
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAssigned': 'Evénement stationnaire affecté',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventUnassigned':
    'Événement stationnaire non affecté',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorAssigned':
    "Auteur d'événement stationnaire attribué",
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorUnassigned':
    "Auteur d'événement stationnaire non attribué",
  // CART
  'EscolaLms\\Cart\\Events\\AbandonedCartEvent': 'Événement de panier abandonné',
  'EscolaLms\\Cart\\Events\\OrderCancelled': 'Commande de panier annulée',
  'EscolaLms\\Cart\\Events\\OrderCreated': 'Commande de panier créée',
  'EscolaLms\\Cart\\Events\\OrderPaid': 'Commande du panier payée',
  'EscolaLms\\Cart\\Events\\ProductableAttached': 'Produit produit attaché au panier',
  'EscolaLms\\Cart\\Events\\ProductableDetached': 'Panier productible détaché',
  'EscolaLms\\Cart\\Events\\ProductAddedToCart': 'Produit ajouté au panier',
  'EscolaLms\\Cart\\Events\\ProductAttached': 'Produit du panier joint',
  'EscolaLms\\Cart\\Events\\ProductBought': 'Produit du panier acheté',
  'EscolaLms\\Cart\\Events\\ProductDetached': 'Produit du panier détaché',
  'EscolaLms\\Cart\\Events\\ProductRemovedFromCart': 'Produit supprimé du panier',
  // TEMPLATES
  'EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent':
    "Modèle d'événement déclenché manuellement",
  // ASSIGN WITHOUT ACCOUNT
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProductable':
    'Assign to productable without account',
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProduct': 'Attribuer au produit sans compte',
  // Youtube
  'EscolaLms\\Youtube\\Events\\YtProblem': 'Erreur YouTube',
  // COURSE ACCESS
  'EscolaLms\\CourseAccess\\Events\\CourseAccessEnquiryAdminCreatedEvent':
    "Événement créé par l'administrateur de la demande d'accès au cours",
  // TASKS
  'EscolaLms\\Tasks\\Events\\TaskAssignedEvent': 'Événement affecté à la tâche',
  'EscolaLms\\Tasks\\Events\\TaskCompleteUserConfirmationEvent':
    "Événement de confirmation de l'utilisateur de la tâche terminée",
  'EscolaLms\\Tasks\\Events\\TaskCompleteRequestEvent': 'Événement de demande de tâche terminée',
  'EscolaLms\\Tasks\\Events\\TaskOverdueEvent': 'Événement de tâche en retard',
  'EscolaLms\\Tasks\\Events\\TaskIncompleteEvent': 'Événement de tâche incomplète',
  'EscolaLms\\Tasks\\Events\\TaskNoteCreatedEvent': 'Événement de création de note de tâche',
  // CONSULTATION ACCESS
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryAdminCreatedEvent':
    "Événement créé par l'administrateur de la demande d'accès à la consultation",
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryDisapprovedEvent':
    "Événement de demande d'accès à la consultation refusé",
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryApprovedEvent':
    "Événement approuvé de demande d'accès à la consultation",
  // TOPIC TYPE PROJECT
  'EscolaLms\\TopicTypeProject\\Events\\ProjectSolutionCreatedEvent':
    'Événement créé par la solution de projet',
};
