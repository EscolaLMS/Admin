export default {
  // AUTH
  'EscolaLms\\Auth\\Events\\AccountBlocked': 'Konto zablokowane',
  'EscolaLms\\Auth\\Events\\AccountConfirmed': 'Konto potwierdzone',
  'EscolaLms\\Auth\\Events\\AccountDeleted': 'Konto usuniete',
  'EscolaLms\\Auth\\Events\\AccountMustBeEnableByAdmin':
    'Konto musi został aktywowane przez administratora',
  'EscolaLms\\Auth\\Events\\AccountRegistered': 'Konto zarejestrowane',
  'EscolaLms\\Auth\\Events\\ForgotPassword': 'Zapomniano hasła',
  'EscolaLms\\Auth\\Events\\Login': 'Poprawnie zalogowano',
  'EscolaLms\\Auth\\Events\\Logout': 'Wylogowano',
  'EscolaLms\\Auth\\Events\\PasswordChanged': 'Hasło zmienione',
  'EscolaLms\\Auth\\Events\\ResetPassword': 'Hasło zresetowane',
  'EscolaLms\\Auth\\Events\\UserAddedToGroup': 'Użytkownik dodany do grupy',
  'EscolaLms\\Auth\\Events\\UserRemovedFromGroup': 'Użytkownik usunięty z grupy',
  // SETTINGS
  'EscolaLms\\Settings\\Events\\SettingPackageConfigUpdated':
    'Pakiet ustawień został zaktualizowany',
  // CSV USER
  'EscolaLms\\CsvUsers\\Events\\EscolaLmsImportedNewUserTemplateEvent':
    'Zaimportowano nowy szablon użytkownika',
  // TOPIC
  'EscolaLms\\TopicTypes\\Events\\TopicTypeChanged': 'Temat zmieniony',
  // CONSULTATIONS
  'EscolaLms\\Consultations\\Events\\ApprovedTerm': 'Termin konsultacji zatwierdzony',
  'EscolaLms\\Consultations\\Events\\ApprovedTermWithTrainer':
    'Termin konsultacji z trenerem zatwierdzony',
  'EscolaLms\\Consultations\\Events\\ChangeTerm': 'Termin konsultacji zmieniony',
  'EscolaLms\\Consultations\\Events\\RejectTerm': 'Termin konsultacji odrzucony',
  'EscolaLms\\Consultations\\Events\\RejectTermWithTrainer':
    'Termin konsultacji dla trenera odrzucony',
  'EscolaLms\\Consultations\\Events\\ReminderAboutTerm': 'Przypomnienie o terminie konsultacji',
  'EscolaLms\\Consultations\\Events\\ReminderTrainerAboutTerm':
    'Przypomnienie o terminie konsultacji dla trenera',
  'EscolaLms\\Consultations\\Events\\ReportTerm': 'Zgłoszenie terminu konsultacji',
  // WEBINAR
  'EscolaLms\\Webinar\\Events\\ReminderAboutTerm': 'Przypomnienie o terminie webinaru',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned': 'Trener został przypisany do webinaru',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned': 'Trener został wypisany z webinaru',
  // PAYMENT
  'EscolaLms\\Payments\\Events\\PaymentCancelled': 'Płatność anulowana',
  'EscolaLms\\Payments\\Events\\PaymentFailed': 'Błąd płatności',
  'EscolaLms\\Payments\\Events\\PaymentRegistered': 'Płatność zarejestrowana',
  'EscolaLms\\Payments\\Events\\PaymentSuccess': 'Płatność zakończona sukcesem',
  // COURSE
  'EscolaLms\\Courses\\Events\\CourseAccessFinished': 'Dostęp do kursu zakończył się',
  'EscolaLms\\Courses\\Events\\CourseAccessStarted': 'Dostęp do kursu wystartował',
  'EscolaLms\\Courses\\Events\\CourseAssigned': 'Kurs przypisany',
  'EscolaLms\\Courses\\Events\\CourseDeadlineSoon': 'Wkrótce nastąpi zakończenie kursu',
  'EscolaLms\\Courses\\Events\\CoursedPublished': 'Kurs opublikowany',
  'EscolaLms\\Courses\\Events\\CourseFinished': 'Kurs zakończony',
  'EscolaLms\\Courses\\Events\\CourseStarted': 'Kurs wystartował',
  'EscolaLms\\Courses\\Events\\CourseStatusChanged': 'Status kursu zmieniony',
  'EscolaLms\\Courses\\Events\\CourseTutorAssigned': 'Trener kursu przypisany',
  'EscolaLms\\Courses\\Events\\CourseTutorUnassigned': 'Trener kursu odpięty',
  'EscolaLms\\Courses\\Events\\CourseUnassigned': 'Kurs odpięty',
  'EscolaLms\\Courses\\Events\\TopicFinished': 'Temat kursu zakończony',
  // STATIONARY EVENT
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAssigned':
    'Wydarzenie stacjonarne przypisane',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventUnassigned':
    'Wydarzenie stacjonarne odpięte',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorAssigned':
    'Autor wydarzenia stacjonarnego przypisany',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorUnassigned':
    'Autor wydarzenia stacjonarnego odpięty',
  // CART
  'EscolaLms\\Cart\\Events\\AbandonedCartEvent': 'Porzucony koszyk',
  'EscolaLms\\Cart\\Events\\OrderCancelled': 'Zamówienie anulowane',
  'EscolaLms\\Cart\\Events\\OrderCreated': 'Zamówienie utworzone',
  'EscolaLms\\Cart\\Events\\OrderPaid': 'Zamówienie zapłacone',
  'EscolaLms\\Cart\\Events\\ProductableAttached': 'Wszystkie typy produktów dołączone',
  'EscolaLms\\Cart\\Events\\ProductableDetached': 'Wszystkie typy produktów odłączone',
  'EscolaLms\\Cart\\Events\\ProductAddedToCart': 'Produkt dodany do koszyka',
  'EscolaLms\\Cart\\Events\\ProductAttached': 'Produkt dołączony',
  'EscolaLms\\Cart\\Events\\ProductBought': 'Produkt zakupiony',
  'EscolaLms\\Cart\\Events\\ProductDetached': 'Produkt odłączony',
  'EscolaLms\\Cart\\Events\\ProductRemovedFromCart': 'Produkt usunięty z koszyka',
  // TEMPLATES
  'EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent': 'Ręcznie wyemitowane wydarzenie',
  // ASSIGN WITHOUT ACCOUNT
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProductable':
    'Przypisz do wszystkich typów produktów',
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProduct': 'Przypisz do produktów',
  // Youtube
  'EscolaLms\\Youtube\\Events\\YtProblem': 'Błąd youtube',
  // COURSE ACCESS
  'EscolaLms\\CourseAccess\\Events\\CourseAccessEnquiryAdminCreatedEvent':
    'Wydarzenie utworzone przez administratora dotyczące dostępu do kursu',
  // TASKS
  'EscolaLms\\Tasks\\Events\\TaskAssignedEvent': 'Zadanie przypisane',
  'EscolaLms\\Tasks\\Events\\TaskCompleteUserConfirmationEvent':
    'Potwierdzenie ukończenia zadania przez użytkownika',
  'EscolaLms\\Tasks\\Events\\TaskCompleteRequestEvent': 'Żądanie wykonania zadania',
  'EscolaLms\\Tasks\\Events\\TaskOverdueEvent': 'Opóźnione zadanie',
  'EscolaLms\\Tasks\\Events\\TaskIncompleteEvent': 'Zadanie niekompletne',
  'EscolaLms\\Tasks\\Events\\TaskNoteCreatedEvent': 'Notatka do zadania stworzona',
  // CONSULTATION ACCESS
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryAdminCreatedEvent':
    'Zapytanie o dostęp do konsultacji utworzone przez administratora',
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryDisapprovedEvent':
    'Odrzucenie zapytania o dostęp do konsultacji',
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryApprovedEvent':
    'Zatwierdzono zapytanie o dostęp do konsultacji',
  // TOPIC TYPE PROJECT
  'EscolaLms\\TopicTypeProject\\Events\\ProjectSolutionCreatedEvent':
    'Utworzenie rozwiązania projektu',
};
