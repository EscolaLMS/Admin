export default {
  // AUTENTICAÇÃO
  'EscolaLms\\Auth\\Events\\AccountBlocked': 'Conta bloqueada',
  'EscolaLms\\Auth\\Events\\AccountConfirmed': 'Conta confirmada',
  'EscolaLms\\Auth\\Events\\AccountDeleted': 'Conta excluída',
  'EscolaLms\\Auth\\Events\\AccountMustBeEnableByAdmin': 'Conta deve ser ativada pelo administrador',
  'EscolaLms\\Auth\\Events\\AccountRegistered': 'Conta registrada',
  'EscolaLms\\Auth\\Events\\ForgotPassword': 'Esqueceu a senha',
  'EscolaLms\\Auth\\Events\\Login': 'Login',
  'EscolaLms\\Auth\\Events\\Logout': 'Logout',
  'EscolaLms\\Auth\\Events\\PasswordChanged': 'Senha alterada',
  'EscolaLms\\Auth\\Events\\ResetPassword': 'Redefinir senha',
  'EscolaLms\\Auth\\Events\\UserAddedToGroup': 'Usuário adicionado ao grupo',
  // CONFIGURAÇÕES
  'EscolaLms\\Settings\\Events\\SettingPackageConfigUpdated': 'Configuração do pacote atualizada',
  // CSV DO USUÁRIO
  'EscolaLms\\CsvUsers\\Events\\EscolaLmsImportedNewUserTemplateEvent':
    'Importado novo modelo de usuário',
  // TIPO DE TÓPICO
  'EscolaLms\\TopicTypes\\Events\\TopicTypeChanged': 'Tipo de tópico alterado',
  // CONSULTAS
  'EscolaLms\\Consultations\\Events\\ApprovedTerm': 'Termo de consulta aprovado',
  'EscolaLms\\Consultations\\Events\\ApprovedTermWithTrainer':
    'Termo de consulta aprovado com instrutor',
  'EscolaLms\\Consultations\\Events\\ChangeTerm': 'Alteração de termo de consulta',
  'EscolaLms\\Consultations\\Events\\RejectTerm': 'Rejeição de termo de consulta',
  'EscolaLms\\Consultations\\Events\\RejectTermWithTrainer':
    'Rejeição de termo de consulta com instrutor',
  'EscolaLms\\Consultations\\Events\\ReminderAboutTerm': 'Lembrete sobre termo de consulta',
  'EscolaLms\\Consultations\\Events\\ReminderTrainerAboutTerm':
    'Lembrete para instrutor sobre termo de consulta',
  'EscolaLms\\Consultations\\Events\\ReportTerm': 'Relatório de termo de consulta',
  // WEBINAR
  'EscolaLms\\Webinar\\Events\\ReminderAboutTerm': 'Lembrete sobre termo de webinar',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerAssigned': 'Instrutor de webinar designado',
  'EscolaLms\\Webinar\\Events\\WebinarTrainerUnassigned': 'Instrutor de webinar desativado',
  // PAGAMENTO
  'EscolaLms\\Payments\\Events\\PaymentCancelled': 'Pagamento cancelado',
  'EscolaLms\\Payments\\Events\\PaymentFailed': 'Pagamento falhou',
  'EscolaLms\\Payments\\Events\\PaymentRegistered': 'Pagamento registrado',
  'EscolaLms\\Payments\\Events\\PaymentSuccess': 'Pagamento bem-sucedido',
  // CURSO
  'EscolaLms\\Courses\\Events\\CourseAccessFinished': 'Acesso ao curso finalizado',
  'EscolaLms\\Courses\\Events\\CourseAccessStarted': 'Acesso ao curso iniciado',
  'EscolaLms\\Courses\\Events\\CourseAssigned': 'Curso atribuído',
  'EscolaLms\\Courses\\Events\\CourseDeadlineSoon': 'Prazo do curso em breve',
  'EscolaLms\\Courses\\Events\\CoursedPublished': 'Curso publicado',
  'EscolaLms\\Courses\\Events\\CourseFinished': 'Curso finalizado',
  'EscolaLms\\Courses\\Events\\CourseStarted': 'Curso iniciado',
  'EscolaLms\\Courses\\Events\\CourseStatusChanged': 'Status do curso alterado',
  'EscolaLms\\Courses\\Events\\CourseTutorAssigned': 'Instrutor do curso atribuído',
  'EscolaLms\\Courses\\Events\\CourseTutorUnassigned': 'Instrutor do curso desativado',
  'EscolaLms\\Courses\\Events\\CourseUnassigned': 'Curso desativado',
  'EscolaLms\\Courses\\Events\\TopicFinished': 'Tópico finalizado',
  // EVENTO ESTACIONÁRIO
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAssigned': 'Evento estacionário atribuído',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventUnassigned': 'Evento estacionário desativado',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorAssigned':
    'Autor do evento estacionário atribuído',
  'EscolaLms\\StationaryEvents\\Events\\StationaryEventAuthorUnassigned':
    'Autor do evento estacionário desativado',
  // CARRINHO
  'EscolaLms\\Cart\\Events\\AbandonedCartEvent': 'Evento de carrinho abandonado',
  'EscolaLms\\Cart\\Events\\OrderCancelled': 'Pedido do carrinho cancelado',
  'EscolaLms\\Cart\\Events\\OrderCreated': 'Pedido do carrinho criado',
  'EscolaLms\\Cart\\Events\\OrderPaid': 'Pedido do carrinho pago',
  'EscolaLms\\Cart\\Events\\ProductableAttached': 'Produto do carrinho anexado',
  'EscolaLms\\Cart\\Events\\ProductableDetached': 'Produto do carrinho desativado',
  'EscolaLms\\Cart\\Events\\ProductAddedToCart': 'Produto adicionado ao carrinho',
  'EscolaLms\\Cart\\Events\\ProductAttached': 'Produto do carrinho anexado',
  'EscolaLms\\Cart\\Events\\ProductBought': 'Produto do carrinho comprado',
  'EscolaLms\\Cart\\Events\\ProductDetached': 'Produto do carrinho desativado',
  'EscolaLms\\Cart\\Events\\ProductRemovedFromCart': 'Produto removido do carrinho',
  // MODELOS
  'EscolaLms\\Templates\\Events\\ManuallyTriggeredEvent': 'Evento acionado manualmente',
  // ATRIBUIR SEM CONTA
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProductable':
    'Atribuir a produto sem conta',
  'EscolaLms\\AssignWithoutAccount\\Events\\AssignToProduct': 'Atribuir a produto sem conta',
  // Youtube
  'EscolaLms\\Youtube\\Events\\YtProblem': 'Erro no YouTube',
  // ACESSO AO CURSO
  'EscolaLms\\CourseAccess\\Events\\CourseAccessEnquiryAdminCreatedEvent':
    'Consulta de acesso ao curso criada pelo administrador',
  // TAREFAS
  'EscolaLms\\Tasks\\Events\\TaskAssignedEvent': 'Evento de tarefa atribuída',
  'EscolaLms\\Tasks\\Events\\TaskCompleteUserConfirmationEvent':
    'Evento de confirmação de conclusão de tarefa pelo usuário',
  'EscolaLms\\Tasks\\Events\\TaskCompleteRequestEvent': 'Evento de solicitação de conclusão de tarefa',
  'EscolaLms\\Tasks\\Events\\TaskOverdueEvent': 'Evento de tarefa vencida',
  'EscolaLms\\Tasks\\Events\\TaskIncompleteEvent': 'Evento de tarefa incompleta',
  'EscolaLms\\Tasks\\Events\\TaskNoteCreatedEvent': 'Evento de criação de nota de tarefa',
  // ACESSO À CONSULTA
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryAdminCreatedEvent':
    'Consulta de acesso à consulta criada pelo administrador',
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryDisapprovedEvent':
    'Consulta de acesso à consulta desaprovada',
  'EscolaLms\\ConsultationAccess\\Events\\ConsultationAccessEnquiryApprovedEvent':
    'Consulta de acesso à consulta aprovada',
  // TIPO DE PROJETO DE TÓPICO
  'EscolaLms\\TopicTypeProject\\Events\\ProjectSolutionCreatedEvent':
    'Evento de criação de solução de projeto',
};
