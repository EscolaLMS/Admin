export default {
  // AUTH
  'EscolaLms\\Auth\\Events\\AccountBlocked': 'Account blocked',
  'EscolaLms\\Auth\\Events\\AccountConfirmed': 'Account confirmed',
  'EscolaLms\\Auth\\Events\\AccountDeleted': 'Account deleted',
  'EscolaLms\\Auth\\Events\\AccountMustBeEnableByAdmin': 'Account must be enable by admin',
  'EscolaLms\\Auth\\Events\\AccountRegistered': 'Account registered',
  'EscolaLms\\Auth\\Events\\ForgotPassword': 'Forgot password',
  'EscolaLms\\Auth\\Events\\Login': 'Login',
  'EscolaLms\\Auth\\Events\\Logout': 'Logout',
  'EscolaLms\\Auth\\Events\\PasswordChanged': 'Password changed',
  'EscolaLms\\Auth\\Events\\ResetPassword': 'Reset password',
  'EscolaLms\\Auth\\Events\\UserAddedToGroup': 'User added to group',
  'EscolaLms\\Auth\\Events\\UserRemovedFromGroup': 'User removed from group',
  // SETTINGS
  'EscolaLms\\Settings\\Events\\SettingPackageConfigUpdated': 'Setting package config updated',
  // CSV USER
  'EscolaLms\\CsvUsers\\Events\\EscolaLmsImportedNewUserTemplateEvent':
    'Imported new user template event',
  // TOPIC
  'EscolaLms\\TopicTypes\\Events\\TopicTypeChanged': 'Topic type changed',
  // CONSULTATIONS
  'EscolaLms\\Consultations\\Events\\ApprovedTerm': 'Consultation approved term',
  'EscolaLms\\Consultations\\Events\\ApprovedTermWithTrainer':
    'Consultation approved term with trainer',
  'EscolaLms\\Consultations\\Events\\ChangeTerm': 'Consultation change term',
  'EscolaLms\\Consultations\\Events\\RejectTerm': 'Consultation reject term',
  'EscolaLms\\Consultations\\Events\\RejectTermWithTrainer':
    'Consultation reject term with trainer',
  'EscolaLms\\Consultations\\Events\\ReminderAboutTerm': 'Consultation reminder about term',
  'EscolaLms\\Consultations\\Events\\ReminderTrainerAboutTerm':
    'Consultation reminder trainer about term',
  'EscolaLms\\Consultations\\Events\\ReportTerm': 'Consultation report term',
  // WEBINAR
  'EscolaLms\\Webinar\\Events\\ReminderAboutTerm': 'Webinar reminder about term',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned': 'Webinart trainer assigned',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned': 'Webinar trainer unassigned',
  // PAYMENT
  'EscolaLms\\Payments\\Events\\PaymentCancelled': 'Payment cancelled',
  'EscolaLms\\Payments\\Events\\PaymentFailed': 'Payment failed',
  'EscolaLms\\Payments\\Events\\PaymentRegistered': 'Payment registered',
  'EscolaLms\\Payments\\Events\\PaymentSuccess': 'Payment success',
  // COURSE
  'EscolaLms\\Courses\\Events\\CourseAccessFinished': 'Course access finished',
  'EscolaLms\\Courses\\Events\\CourseAccessStarted': 'Course access started',
  'EscolaLms\\Courses\\Events\\CourseAssigned': 'Course assigned',
  'EscolaLms\\Courses\\Events\\CourseDeadlineSoon': 'Course deadline soon',
  'EscolaLms\\Courses\\Events\\CoursedPublished': 'Coursed published',
  'EscolaLms\\Courses\\Events\\CourseFinished': 'Course finished',
  'EscolaLms\\Courses\\Events\\CourseStarted': 'Course started',
  'EscolaLms\\Courses\\Events\\CourseStatusChanged': 'Course status changed',
  'EscolaLms\\Courses\\Events\\CourseTutorAssigned': 'Course tutor assigned',
  'EscolaLms\\Courses\\Events\\CourseTutorUnassigned': 'Course tutor unassigned',
  'EscolaLms\\Courses\\Events\\CourseUnassigned': 'Course unassigned',
  'EscolaLms\\Courses\\Events\\TopicFinished': 'Topic finished',
  // STATIONARY EVENT
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAssigned': 'Stationary event assigned',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventUnassigned': 'Stationary event unassigned',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorAssigned':
    'Stationary event author assigned',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorUnassigned':
    'Stationary event author unassigned',
  // CART
  'EscolaLms\\Cart\\Events\\AbandonedCartEvent': 'Abandoned cart event',
  'EscolaLms\\Cart\\Events\\OrderCancelled': 'Cart order cancelled',
  'EscolaLms\\Cart\\Events\\OrderCreated': 'Cart order created',
  'EscolaLms\\Cart\\Events\\OrderPaid': 'Cart order paid',
  'EscolaLms\\Cart\\Events\\ProductableAttached': 'Cart productable attached',
  'EscolaLms\\Cart\\Events\\ProductableDetached': 'Cart productable detached',
  'EscolaLms\\Cart\\Events\\ProductAddedToCart': 'Product added to cart',
  'EscolaLms\\Cart\\Events\\ProductAttached': 'Cart product attached',
  'EscolaLms\\Cart\\Events\\ProductBought': 'Cart product bought',
  'EscolaLms\\Cart\\Events\\ProductDetached': 'Cart product detached',
  'EscolaLms\\Cart\\Events\\ProductRemovedFromCart': 'Product removed from cart',
  // TEMPLATES
  'EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent': 'Template manually triggered event',
  // ASSIGN WITHOUT ACCOUNT
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProductable':
    'Assign to productable without account',
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProduct': 'Assign to product without account',
  // Youtube
  'EscolaLms\\Youtube\\Events\\YtProblem': 'YouTube error',
  // COURSE ACCESS
  'EscolaLms\\CourseAccess\\Events\\CourseAccessEnquiryAdminCreatedEvent':
    'Course access enquiry admin created event',
  // TASKS
  'EscolaLms\\Tasks\\Events\\TaskAssignedEvent': 'Task assigned event',
  'EscolaLms\\Tasks\\Events\\TaskCompleteUserConfirmationEvent':
    'Task complete user confirmation event',
  'EscolaLms\\Tasks\\Events\\TaskCompleteRequestEvent': 'Task complete request event',
  'EscolaLms\\Tasks\\Events\\TaskOverdueEvent': 'Task overdue event',
  'EscolaLms\\Tasks\\Events\\TaskIncompleteEvent': 'Task incomplete event',
  'EscolaLms\\Tasks\\Events\\TaskNoteCreatedEvent': 'Task note created event',
  // CONSULTATION ACCESS
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryAdminCreatedEvent':
    'Consultation access enquiry admin created event',
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryDisapprovedEvent':
    'Consultation access enquiry disapproved event',
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryApprovedEvent':
    'Consultation access enquiry approved event',
  // TOPIC TYPE PROJECT
  'EscolaLms\\TopicTypeProject\\Events\\ProjectSolutionCreatedEvent':
    'Project solution created event',
};
